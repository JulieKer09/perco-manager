const crypto = require('crypto');
const fs = require('fs/promises');
const http = require('http');
const path = require('path');
const { app, shell } = require('electron');

const SESSION_FILE_NAME = 'discord-session.json';
const DEFAULT_REDIRECT_URI = 'http://127.0.0.1:43871/callback';

let currentSession = null;
let loginPromise = null;

function getSessionFilePath() {
  return path.join(app.getPath('userData'), SESSION_FILE_NAME);
}

function normalizeUser(user) {
  return {
    id: String(user.id),
    username: user.username || '',
    globalName: user.global_name || '',
    displayName: user.global_name || user.username || 'Discord',
    avatar: user.avatar || '',
    discriminator: user.discriminator || '0',
  };
}

async function readSessionFile() {
  try {
    const raw = await fs.readFile(getSessionFilePath(), 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function writeSessionFile(session) {
  const filePath = getSessionFilePath();
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(session, null, 2), 'utf8');
}

async function clearSessionFile() {
  try {
    await fs.unlink(getSessionFilePath());
  } catch {
    // Rien à faire si le fichier n'existe pas.
  }
}

async function fetchDiscordUser(accessToken) {
  const response = await fetch('https://discord.com/api/users/@me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Discord /users/@me a répondu ${response.status} : ${message}`);
  }

  return response.json();
}

async function refreshDiscordToken(refreshToken, clientId) {
  const body = new URLSearchParams({
    client_id: clientId,
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  });

  const response = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Impossible de rafraîchir la session Discord : ${response.status} ${message}`);
  }

  return response.json();
}

async function exchangeCodeForToken({ clientId, code, codeVerifier, redirectUri }) {
  const body = new URLSearchParams({
    client_id: clientId,
    grant_type: 'authorization_code',
    code,
    code_verifier: codeVerifier,
    redirect_uri: redirectUri,
  });

  const response = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Impossible d'échanger le code Discord : ${response.status} ${message}`);
  }

  return response.json();
}

async function persistSessionFromToken(tokenData, clientId) {
  const discordUser = normalizeUser(await fetchDiscordUser(tokenData.access_token));
  const session = {
    accessToken: tokenData.access_token,
    refreshToken: tokenData.refresh_token || '',
    scope: tokenData.scope || 'identify',
    tokenType: tokenData.token_type || 'Bearer',
    expiresAt: tokenData.expires_in ? Date.now() + tokenData.expires_in * 1000 : null,
    clientId,
    user: discordUser,
  };

  currentSession = session;
  await writeSessionFile(session);
  return session;
}

async function loadPersistedSession({ verify = true } = {}) {
  const stored = await readSessionFile();
  if (!stored?.accessToken || !stored?.user?.id) {
    currentSession = null;
    return null;
  }

  if (!verify) {
    currentSession = stored;
    return stored;
  }

  try {
    const discordUser = normalizeUser(await fetchDiscordUser(stored.accessToken));
    const session = {
      ...stored,
      user: discordUser,
    };
    currentSession = session;
    await writeSessionFile(session);
    return session;
  } catch (error) {
    if (stored.refreshToken && stored.clientId) {
      try {
        const refreshed = await refreshDiscordToken(stored.refreshToken, stored.clientId);
        return persistSessionFromToken(refreshed, stored.clientId);
      } catch {
        await clearSessionFile();
        currentSession = null;
        return null;
      }
    }

    await clearSessionFile();
    currentSession = null;
    return null;
  }
}

async function loginWithDiscord({ clientId }) {
  if (loginPromise) return loginPromise;

  loginPromise = (async () => {
    if (!clientId) {
      throw new Error('CLIENT_ID manquant dans le fichier .env.');
    }

    const redirectUri = process.env.DISCORD_REDIRECT_URI || DEFAULT_REDIRECT_URI;
    const redirectUrl = new URL(redirectUri);
    if (redirectUrl.hostname !== '127.0.0.1' || redirectUrl.protocol !== 'http:' || redirectUrl.pathname !== '/callback') {
      throw new Error('DISCORD_REDIRECT_URI doit être une URL locale du type http://127.0.0.1:43871/callback.');
    }

    const codeVerifier = crypto.randomBytes(32).toString('base64url');
    const codeChallenge = crypto
      .createHash('sha256')
      .update(codeVerifier)
      .digest('base64url');

    const redirectPath = '/callback';
    const server = http.createServer();

    const redirectPort = Number(redirectUrl.port || '43871');
    if (!Number.isInteger(redirectPort) || redirectPort <= 0) {
      throw new Error('DISCORD_REDIRECT_URI contient un port invalide.');
    }

    await new Promise((resolve, reject) => {
      server.once('error', reject);
      server.listen(redirectPort, '127.0.0.1', () => {
        resolve();
      });
    });

    const authUrl = new URL('https://discord.com/oauth2/authorize');
    authUrl.searchParams.set('client_id', clientId);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('redirect_uri', redirectUri);
    authUrl.searchParams.set('scope', 'identify');
    authUrl.searchParams.set('code_challenge', codeChallenge);
    authUrl.searchParams.set('code_challenge_method', 'S256');
    authUrl.searchParams.set('prompt', 'consent');

    const code = await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        server.close();
        reject(new Error('La connexion Discord a expiré.'));
      }, 2 * 60 * 1000);

      server.on('request', (request, response) => {
        const requestUrl = new URL(request.url || '/', redirectUri);
        if (requestUrl.pathname !== redirectPath) {
          response.statusCode = 404;
          response.end('Not found');
          return;
        }

        const error = requestUrl.searchParams.get('error');
        if (error) {
          clearTimeout(timeout);
          response.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
          response.end('<h1>Connexion Discord annulée</h1><p>Tu peux fermer cette page.</p>');
          server.close();
          reject(new Error(`Connexion Discord refusée: ${error}`));
          return;
        }

        const receivedCode = requestUrl.searchParams.get('code');
        if (!receivedCode) {
          response.statusCode = 400;
          response.end('Code manquant');
          return;
        }

        clearTimeout(timeout);
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end('<h1>Connexion réussie</h1><p>Tu peux fermer cette page et revenir à l’application.</p>');
        server.close();
        resolve(receivedCode);
      });

      shell.openExternal(authUrl.toString()).catch(error => {
        clearTimeout(timeout);
        server.close();
        reject(error);
      });
    });

    const tokenData = await exchangeCodeForToken({
      clientId,
      code,
      codeVerifier,
      redirectUri,
    });

    return persistSessionFromToken(tokenData, clientId);
  })().finally(() => {
    loginPromise = null;
  });

  return loginPromise;
}

async function logoutDiscord() {
  currentSession = null;
  await clearSessionFile();
}

function getDiscordSession() {
  return currentSession;
}

function getDiscordUser() {
  return currentSession?.user || null;
}

module.exports = {
  loadPersistedSession,
  loginWithDiscord,
  logoutDiscord,
  getDiscordSession,
  getDiscordUser,
};