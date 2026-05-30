const fs = require('fs');
const { app, BrowserWindow, dialog, ipcMain, screen } = require('electron');
const path = require('path');
const mongoose = require('mongoose');
const Percepteur = require('../models/Percepteur');
const Recolte    = require('../models/Recolte');
const {
  loadPersistedSession,
  loginWithDiscord,
  logoutDiscord,
  getDiscordSession,
  getDiscordUser,
} = require('./discord-auth');

function loadEnvironment() {
  const candidates = [
    path.resolve(process.cwd(), '.env'),
    path.join(path.dirname(process.execPath), '.env'),
    path.resolve(__dirname, '..', '.env'),
  ];

  for (const envPath of candidates) {
    if (fs.existsSync(envPath)) {
      require('dotenv').config({ path: envPath });
      return envPath;
    }
  }

  require('dotenv').config();
  return null;
}

loadEnvironment();

const APP_ICON_PNG_PATH = path.join(__dirname, '..', 'renderer', 'assets', 'icons', 'Logo.png');
const APP_ICON_ICO_PATH = path.join(__dirname, '..', 'renderer', 'assets', 'icons', 'Logo.ico');

function getAppIconPath() {
  if (process.platform === 'win32' && fs.existsSync(APP_ICON_ICO_PATH)) {
    return APP_ICON_ICO_PATH;
  }

  if (fs.existsSync(APP_ICON_PNG_PATH)) {
    return APP_ICON_PNG_PATH;
  }

  return undefined;
}

// --- Fenêtre principale ---
let mainWindow;
let widgetWindow;
let widgetBounds = null;

function getCurrentDiscordUser() {
  return getDiscordUser();
}

function requireDiscordUser() {
  const user = getCurrentDiscordUser();
  if (!user) {
    throw new Error('Connexion Discord requise.');
  }
  return user;
}

async function claimLegacyDataForUser(user) {
  await Promise.all([
    Percepteur.updateMany(
      {
        $or: [
          { ownerDiscordId: { $exists: false } },
          { ownerDiscordId: '' },
          { ownerDiscordId: null },
        ],
      },
      {
        $set: {
          ownerDiscordId: user.id,
          ownerDiscordName: user.displayName || user.username || 'Discord',
        },
      }
    ),
    Recolte.updateMany(
      {
        $or: [
          { ownerDiscordId: { $exists: false } },
          { ownerDiscordId: '' },
          { ownerDiscordId: null },
        ],
      },
      {
        $set: {
          ownerDiscordId: user.id,
          ownerDiscordName: user.displayName || user.username || 'Discord',
        },
      }
    ),
  ]);
}

function broadcastAuthState() {
  const session = getDiscordSession();
  BrowserWindow.getAllWindows().forEach(window => {
    if (!window.isDestroyed()) {
      window.webContents.send('auth:session-changed', session ? { user: session.user } : null);
    }
  });
}

function getWidgetState() {
  return {
    isOpen: Boolean(widgetWindow) && !widgetWindow.isDestroyed() && widgetWindow.isVisible(),
  };
}

function broadcastWidgetState() {
  const state = getWidgetState();
  BrowserWindow.getAllWindows().forEach(window => {
    if (!window.isDestroyed()) {
      window.webContents.send('widget:state-changed', state);
    }
  });
}

function broadcastDataChanged(kind) {
  const payload = {
    kind,
    timestamp: Date.now(),
  };

  BrowserWindow.getAllWindows().forEach(window => {
    if (!window.isDestroyed()) {
      window.webContents.send('data:changed', payload);
    }
  });
}

function getDefaultWidgetBounds() {
  const { workArea } = screen.getPrimaryDisplay();
  const width = 360;
  const height = 720;
  return {
    width,
    height,
    x: workArea.x + workArea.width - width - 24,
    y: workArea.y + 24,
  };
}

function createWidgetWindow() {
  if (widgetWindow && !widgetWindow.isDestroyed()) {
    widgetWindow.show();
    widgetWindow.focus();
    broadcastWidgetState();
    return widgetWindow;
  }

  const bounds = widgetBounds || getDefaultWidgetBounds();

  widgetWindow = new BrowserWindow({
    ...bounds,
    minWidth: 320,
    minHeight: 420,
    maxWidth: 520,
    frame: false,
    resizable: true,
    maximizable: false,
    fullscreenable: false,
    skipTaskbar: true,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    backgroundColor: '#101522',
    title: 'Widget Perco',
    icon: getAppIconPath(),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    show: false,
  });

  widgetWindow.setAlwaysOnTop(true, 'screen-saver');
  widgetWindow.loadFile(path.join(__dirname, '..', 'renderer', 'widget.html'));

  widgetWindow.once('ready-to-show', () => {
    if (!widgetWindow || widgetWindow.isDestroyed()) return;
    widgetWindow.show();
    broadcastWidgetState();
  });

  widgetWindow.on('move', () => {
    if (!widgetWindow || widgetWindow.isDestroyed()) return;
    widgetBounds = widgetWindow.getBounds();
  });

  widgetWindow.on('resize', () => {
    if (!widgetWindow || widgetWindow.isDestroyed()) return;
    widgetBounds = widgetWindow.getBounds();
  });

  widgetWindow.on('closed', () => {
    widgetWindow = null;
    broadcastWidgetState();
  });

  return widgetWindow;
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    titleBarStyle: 'hidden',
    icon: getAppIconPath(),
    titleBarOverlay: {
      color: '#12121f',
      symbolColor: '#e8b84b',
      height: 36,
    },
    backgroundColor: '#12121f',
    show: false,
  });

  mainWindow.loadFile(path.join(__dirname, '..', 'renderer', 'index.html'));

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  if (process.argv.includes('--dev')) {
    mainWindow.webContents.openDevTools();
  }
}

// --- Connexion MongoDB ---
async function connectDB() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error('MONGODB_URI est manquant. Créez un fichier .env à côté de l\'application.');
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('✅ MongoDB connecté');
  } catch (err) {
    throw new Error(`Impossible de se connecter à MongoDB : ${err.message}`);
  }
}

// --- IPC Handlers ---

// Récupérer tous les percepteurs
ipcMain.handle('perco:getAll', async (_event, filtre = 'tous') => {
  const user = requireDiscordUser();
  const query = {
    ownerDiscordId: user.id,
    ...(filtre === 'tous' ? {} : { statut: filtre }),
  };
  const docs = await Percepteur.find(query).sort({ dateAjout: -1 }).lean();
  return docs.map(d => ({ ...d, _id: d._id.toString() }));
});

// Ajouter un percepteur
ipcMain.handle('perco:add', async (_event, data) => {
  const user = requireDiscordUser();
  const perco = new Percepteur(data);
  perco.ownerDiscordId = user.id;
  perco.ownerDiscordName = user.displayName || user.username || 'Discord';
  await perco.save();
  const obj = perco.toObject();
  broadcastDataChanged('perco:add');
  return { ...obj, _id: obj._id.toString() };
});

// Mettre à jour un percepteur
ipcMain.handle('perco:update', async (_event, { id, data }) => {
  const user = requireDiscordUser();
  const perco = await Percepteur.findOneAndUpdate(
    { _id: id, ownerDiscordId: user.id },
    { ...data, dateMaj: new Date() },
    { new: true }
  ).lean();
  broadcastDataChanged('perco:update');
  return perco ? { ...perco, _id: perco._id.toString() } : null;
});

// Supprimer un percepteur
ipcMain.handle('perco:delete', async (_event, id) => {
  const user = requireDiscordUser();
  await Percepteur.findOneAndDelete({ _id: id, ownerDiscordId: user.id });
  broadcastDataChanged('perco:delete');
  return { success: true };
});

// Enregistrer une récolte
ipcMain.handle('recolte:log', async (_event, data) => {
  const user = requireDiscordUser();
  const r = new Recolte(data);
  r.ownerDiscordId = user.id;
  r.ownerDiscordName = user.displayName || user.username || 'Discord';
  await r.save();
  const obj = r.toObject();
  broadcastDataChanged('recolte:log');
  return { ...obj, _id: obj._id.toString() };
});

// Récupérer l'historique des récoltes
ipcMain.handle('recolte:getAll', async () => {
  const user = requireDiscordUser();
  const docs = await Recolte.find({ ownerDiscordId: user.id }).sort({ date: -1 }).lean();
  return docs.map(d => ({ ...d, _id: d._id.toString(), percoId: d.percoId?.toString() }));
});

// Supprimer une ligne d'historique
ipcMain.handle('recolte:delete', async (_event, id) => {
  const user = requireDiscordUser();
  await Recolte.findOneAndDelete({ _id: id, ownerDiscordId: user.id });
  broadcastDataChanged('recolte:delete');
  return { success: true };
});

ipcMain.handle('auth:getSession', async () => {
  const session = getDiscordSession();
  return session ? { user: session.user } : null;
});

ipcMain.handle('auth:login', async () => {
  const session = await loginWithDiscord({ clientId: process.env.CLIENT_ID });
  await claimLegacyDataForUser(session.user);
  broadcastAuthState();
  broadcastDataChanged('auth:login');
  return { user: session.user };
});

ipcMain.handle('auth:logout', async () => {
  await logoutDiscord();
  broadcastAuthState();
  broadcastDataChanged('auth:logout');
  return { success: true };
});

ipcMain.handle('widget:getState', () => getWidgetState());

ipcMain.handle('widget:open', () => {
  createWidgetWindow();
  broadcastWidgetState();
  return getWidgetState();
});

ipcMain.handle('widget:close', () => {
  if (widgetWindow && !widgetWindow.isDestroyed()) {
    widgetWindow.close();
  }
  broadcastWidgetState();
  return getWidgetState();
});

ipcMain.handle('widget:toggle', () => {
  if (widgetWindow && !widgetWindow.isDestroyed() && widgetWindow.isVisible()) {
    widgetWindow.close();
  } else {
    createWidgetWindow();
  }
  broadcastWidgetState();
  return getWidgetState();
});

ipcMain.handle('widget:minimize', event => {
  const currentWindow = BrowserWindow.fromWebContents(event.sender);
  currentWindow?.minimize();
  return { success: true };
});

ipcMain.handle('widget:closeSelf', event => {
  const currentWindow = BrowserWindow.fromWebContents(event.sender);
  currentWindow?.close();
  return { success: true };
});

// --- Init ---
app.whenReady().then(async () => {
  try {
    await connectDB();
    const session = await loadPersistedSession();
    if (session?.user) {
      await claimLegacyDataForUser(session.user);
    }
    createWindow();
    broadcastAuthState();
  } catch (err) {
    console.error('❌ Erreur de démarrage :', err.message);
    dialog.showErrorBox('Perco Dofus', err.message);
    app.quit();
    return;
  }

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
