const WIDGET_SERVER_STORAGE_KEY = 'percoWidgetServer';
const WIDGET_TAG_STORAGE_KEY = 'percoWidgetTagFilterByServer';
const TAGS_STORAGE_KEY = 'customZoneTagsV2';
const ZONE_TAGS_STORAGE_KEY = 'zoneTagIdsByZone';
const FAVORITES_STORAGE_KEY = 'percoFavorites';
const WIDGET_ZONE_DISPLAY_ALIASES = {
  'tour de la clepsydre': 'Comte Harebourg',
};

const widgetState = {
  server: localStorage.getItem(WIDGET_SERVER_STORAGE_KEY) || 'Mikhal',
  tagIdByServer: readJSON(WIDGET_TAG_STORAGE_KEY, {}),
  selectedTagId: '',
  tags: [],
  zoneTagMap: {},
  percos: [],
  valueModalResolve: null,
};

const authState = {
  session: null,
};

document.addEventListener('DOMContentLoaded', async () => {
  setupDiscordAuthControls();

  const session = await syncDiscordSessionState();
  if (!session) {
    return;
  }

  widgetState.selectedTagId = widgetState.tagIdByServer[widgetState.server] || '';
  setupWindowControls();
  setupToolbar();
  setupListActions();
  setupValueModal();
  setupDataSync();
  await refreshWidget();
  setInterval(refreshWidget, 60_000);
});

function getDiscordDisplayName(session) {
  return session?.user?.displayName || session?.user?.username || 'Discord';
}

function updateDiscordAuthUI(session) {
  authState.session = session || null;

  const badge = document.getElementById('widget-discord-badge');
  if (badge) {
    badge.textContent = session ? `Discord: ${getDiscordDisplayName(session)}` : 'Discord: hors ligne';
  }

  const authButton = document.getElementById('widget-discord-auth-button');
  if (authButton) {
    authButton.textContent = session ? 'Déconnexion' : 'Connexion';
  }

  const veil = document.getElementById('widget-auth-veil');
  if (veil) {
    veil.classList.toggle('hidden', Boolean(session));
  }

  const status = document.getElementById('widget-auth-status');
  if (status) {
    status.textContent = session
      ? `Connecté en tant que ${getDiscordDisplayName(session)}.`
      : 'Aucune session détectée.';
  }

  document.body.classList.toggle('auth-locked', !session);
}

async function syncDiscordSessionState() {
  if (!window.authAPI?.getSession) {
    updateDiscordAuthUI(null);
    return null;
  }

  try {
    const session = await window.authAPI.getSession();
    updateDiscordAuthUI(session);
    return session;
  } catch (error) {
    console.error('auth session error:', error);
    updateDiscordAuthUI(null);
    return null;
  }
}

function setupDiscordAuthControls() {
  const authButton = document.getElementById('widget-discord-auth-button');
  const loginButton = document.getElementById('widget-discord-login-button');

  const login = async () => {
    const status = document.getElementById('widget-auth-status');
    if (status) {
      status.textContent = 'Ouverture de Discord...';
    }

    try {
      await window.authAPI.login();
      window.location.reload();
    } catch (error) {
      console.error('auth login error:', error);
      if (status) {
        status.textContent = error?.message || 'Connexion Discord impossible.';
      }
    }
  };

  const logout = async () => {
    try {
      await window.authAPI.logout();
      window.location.reload();
    } catch (error) {
      console.error('auth logout error:', error);
    }
  };

  authButton?.addEventListener('click', async () => {
    if (authState.session) {
      await logout();
      return;
    }

    await login();
  });

  loginButton?.addEventListener('click', login);
}

function setupDataSync() {
  if (!window.syncAPI?.onDataChanged) return;

  let refreshTimer = null;
  window.syncAPI.onDataChanged(() => {
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(() => {
      refreshWidget();
    }, 120);
  });
}

function setupValueModal() {
  const modal = document.getElementById('widget-value-modal');
  const input = document.getElementById('widget-value-input');
  const cancelBtn = document.getElementById('widget-value-cancel');
  const confirmBtn = document.getElementById('widget-value-confirm');

  if (!modal || !input || !cancelBtn || !confirmBtn) return;

  cancelBtn.addEventListener('click', () => closeValueModal(null));
  confirmBtn.addEventListener('click', () => {
    const parsed = Math.max(0, parseInt(input.value, 10) || 0);
    closeValueModal(parsed);
  });

  input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const parsed = Math.max(0, parseInt(input.value, 10) || 0);
      closeValueModal(parsed);
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      closeValueModal(null);
    }
  });

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      closeValueModal(null);
    }
  });
}

function askRecolteValue(defaultValue = 0) {
  const modal = document.getElementById('widget-value-modal');
  const input = document.getElementById('widget-value-input');

  if (!modal || !input) {
    const promptValue = window.prompt('Valeur recoltee (kamas)', String(defaultValue));
    if (promptValue === null) return Promise.resolve(null);
    return Promise.resolve(Math.max(0, parseInt(promptValue, 10) || 0));
  }

  modal.classList.remove('hidden');
  input.value = String(Math.max(0, parseInt(String(defaultValue), 10) || 0));

  setTimeout(() => {
    input.focus();
    input.select();
  }, 0);

  return new Promise(resolve => {
    widgetState.valueModalResolve = resolve;
  });
}

function closeValueModal(value) {
  const modal = document.getElementById('widget-value-modal');
  if (modal) {
    modal.classList.add('hidden');
  }

  if (typeof widgetState.valueModalResolve === 'function') {
    const resolve = widgetState.valueModalResolve;
    widgetState.valueModalResolve = null;
    resolve(value);
  }

  setFeedback(buildFilterLabel(getFilteredZoneStates().length));
}

function setupWindowControls() {
  document.getElementById('widget-minimize')?.addEventListener('click', () => {
    window.widgetAPI?.minimize();
  });

  document.getElementById('widget-close')?.addEventListener('click', () => {
    window.widgetAPI?.closeSelf();
  });
}

function setupToolbar() {
  const serverSelect = document.getElementById('widget-server');
  const tagSelect = document.getElementById('widget-tag');
  const refreshButton = document.getElementById('widget-refresh');

  if (!serverSelect || !tagSelect || !refreshButton) {
    return;
  }

  serverSelect.value = widgetState.server;
  serverSelect.addEventListener('change', async event => {
    widgetState.server = event.target.value;
    localStorage.setItem(WIDGET_SERVER_STORAGE_KEY, widgetState.server);
    widgetState.selectedTagId = widgetState.tagIdByServer[widgetState.server] || '';
    await refreshWidget();
  });

  tagSelect.addEventListener('change', event => {
    widgetState.selectedTagId = event.target.value;
    widgetState.tagIdByServer[widgetState.server] = widgetState.selectedTagId;
    localStorage.setItem(WIDGET_TAG_STORAGE_KEY, JSON.stringify(widgetState.tagIdByServer));
    renderPercos();
    setFeedback(buildFilterLabel(getFilteredZoneStates().length));
  });

  refreshButton.addEventListener('click', () => {
    refreshWidget();
  });
}

function setupListActions() {
  const list = document.getElementById('widget-list');
  if (!list) return;

  list.addEventListener('click', async event => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;

    event.preventDefault();
    event.stopPropagation();

    const action = button.dataset.action;
    const zoneName = String(button.dataset.zone || '').trim();
    const percoId = button.dataset.id;
    const perco = percoId
      ? widgetState.percos.find(p => String(p._id) === String(percoId))
      : null;

    button.disabled = true;
    try {
      if (action === 'toggle-favorite') {
        toggleFavoriteForZone(zoneName || perco?.map || '');
        renderPercos();
      } else if (action === 'poser') {
        await runPoseAction(zoneName);
      } else if (action === 'toggle-icon') {
        if (!perco) return;
        await togglePercoIcon(perco, button.dataset.type);
      } else if (action === 'recolte-repose') {
        if (!perco) return;
        await runRecolteAction(perco, true);
      } else if (action === 'recolte-only') {
        if (!perco) return;
        await runRecolteAction(perco, false);
      } else if (action === 'mort-repose') {
        if (!perco) return;
        await runMortAction(perco, true);
      } else if (action === 'mort-only') {
        if (!perco) return;
        await runMortAction(perco, false);
      }
    } catch (error) {
      console.error('Erreur action widget:', error);
      setFeedback('Action impossible. Verifiez la connexion et reessayez.');
    } finally {
      button.disabled = false;
    }

    setFeedback(buildFilterLabel(getFilteredZoneStates().length));
  });
}

async function refreshWidget() {
  setFeedback('Chargement...');
  reloadTagData();
  renderTagSelect();

  try {
    const all = await window.percoAPI.getAll('tous');
    widgetState.percos = all
      .filter(perco => perco.serveur === widgetState.server)
      .sort((left, right) => new Date(right.dateAjout).getTime() - new Date(left.dateAjout).getTime());

    renderPercos();
    setFeedback(buildFilterLabel(getFilteredZoneStates().length));
  } catch (error) {
    console.error('Erreur widget:', error);
    widgetState.percos = [];
    renderPercos();
    setFeedback('Impossible de charger les percepteurs.');
  }
}

function reloadTagData() {
  widgetState.tags = getTags(widgetState.server);
  widgetState.zoneTagMap = getZoneTagMap(widgetState.server);

  if (widgetState.selectedTagId && !widgetState.tags.some(t => t.id === widgetState.selectedTagId)) {
    widgetState.selectedTagId = '';
    widgetState.tagIdByServer[widgetState.server] = '';
    localStorage.setItem(WIDGET_TAG_STORAGE_KEY, JSON.stringify(widgetState.tagIdByServer));
  }
}

function renderTagSelect() {
  const tagSelect = document.getElementById('widget-tag');
  if (!tagSelect) return;

  const options = [
    `<option value=""${widgetState.selectedTagId === '' ? ' selected' : ''}>Tous les tags</option>`,
    `<option value="__favorites__"${widgetState.selectedTagId === '__favorites__' ? ' selected' : ''}>★ Favoris</option>`,
  ];
  widgetState.tags.forEach(tag => {
    const selected = tag.id === widgetState.selectedTagId ? ' selected' : '';
    options.push(`<option value="${escapeHtml(tag.id)}"${selected}>${escapeHtml(tag.name)}</option>`);
  });
  tagSelect.innerHTML = options.join('');
}

function getTrackedZones() {
  const zones = new Set();

  widgetState.percos.forEach(perco => {
    const zone = String(perco.map || perco.nom || '').trim();
    if (zone) zones.add(zone);
  });

  Object.keys(widgetState.zoneTagMap || {}).forEach(zone => {
    const clean = String(zone || '').trim();
    if (clean) zones.add(clean);
  });

  getFavorites().forEach(zone => zones.add(zone));

  return [...zones];
}

function getLatestPercoForZone(zoneName) {
  const target = String(zoneName || '').trim();
  if (!target) return null;

  const match = widgetState.percos.find(perco => String(perco.map || '').trim() === target);
  return match || null;
}

function getFilteredZoneStates() {
  let zones = getTrackedZones();

  if (widgetState.selectedTagId && widgetState.selectedTagId !== '__favorites__') {
    zones = zones.filter(zone => getZoneTagIds(zone).includes(widgetState.selectedTagId));
  }

  if (widgetState.selectedTagId === '__favorites__') {
    zones = zones.filter(zone => isFavorite(zone));
  }

  const mergedByDisplay = new Map();

  zones.forEach(zone => {
    const zoneRaw = String(zone || '').trim();
    if (!zoneRaw) return;

    const displayName = getDisplayZoneName(zoneRaw);
    const displayKey = displayName.toLowerCase();
    const perco = getLatestPercoForZone(zoneRaw);
    const existing = mergedByDisplay.get(displayKey);

    if (!existing) {
      mergedByDisplay.set(displayKey, {
        zone: zoneRaw,
        displayName,
        perco,
        variants: [zoneRaw],
      });
      return;
    }

    existing.variants.push(zoneRaw);

    // Prefer a canonical raw name when available (e.g. "Comte Harebourg" over technical alias).
    if (zoneRaw.toLowerCase() === displayName.toLowerCase()) {
      existing.zone = zoneRaw;
    }

    if (!existing.perco && perco) {
      existing.perco = perco;
      existing.zone = zoneRaw;
      return;
    }

    if (existing.perco && perco) {
      const currentTs = new Date(existing.perco.dateAjout || 0).getTime();
      const nextTs = new Date(perco.dateAjout || 0).getTime();
      if (Number.isFinite(nextTs) && nextTs > currentTs) {
        existing.perco = perco;
        existing.zone = zoneRaw;
      }
    }
  });

  const zoneStates = [...mergedByDisplay.values()].map(item => ({
    zone: item.zone,
    displayName: item.displayName,
    perco: item.perco,
    variants: [...new Set(item.variants)],
  }));

  zoneStates.sort((left, right) => {
    const leftPosed = Boolean(left.perco);
    const rightPosed = Boolean(right.perco);
    if (leftPosed !== rightPosed) {
      return rightPosed - leftPosed;
    }

    const leftLabel = left.displayName || getDisplayZoneName(left.zone);
    const rightLabel = right.displayName || getDisplayZoneName(right.zone);
    return leftLabel.localeCompare(rightLabel, 'fr', { sensitivity: 'base' });
  });

  return zoneStates;
}

function renderPercos() {
  const list = document.getElementById('widget-list');
  if (!list) return;

  const filtered = getFilteredZoneStates();

  if (!filtered.length) {
    list.innerHTML = '<div class="widget-empty">Aucune zone a afficher.</div>';
    return;
  }

  list.innerHTML = filtered.map(buildPercoCard).join('');
}

function buildPercoCard(zoneState) {
  const perco = zoneState.perco;
  const zoneRaw = String(zoneState.zone || '').trim() || 'Zone inconnue';
  const zone = escapeHtml(zoneRaw);
  const title = escapeHtml(zoneState.displayName || getDisplayZoneName(zoneRaw));
  const status = perco ? escapeHtml(perco.statut || 'inconnu') : 'non-pose';
  const elapsed = perco ? formatElapsed(perco.dateAjout) : '--';
  const variants = Array.isArray(zoneState.variants) && zoneState.variants.length
    ? zoneState.variants
    : [zoneRaw];
  const ownerTag = getZoneOwnerTag(zoneRaw) || variants.map(getZoneOwnerTag).find(Boolean) || null;
  const favorite = variants.some(zoneName => isFavorite(zoneName));
  const ownerLabel = ownerTag ? ownerTag.name : 'Moi';
  const percoId = perco?._id ? escapeHtml(perco._id) : '';

  return `
    <article class="widget-card" title="${title} | ${ownerLabel} | ${status}">
      <div class="widget-card-main">
        <div class="widget-title-line">
          <button type="button" class="widget-fav-btn ${favorite ? 'active' : ''}" data-action="toggle-favorite" data-zone="${zone}" title="Favori">${favorite ? '★' : '☆'}</button>
          <h2 class="widget-card-title">${title}</h2>
        </div>

        ${perco ? `
          <div class="widget-icons-row">
            <button type="button" class="widget-icon-btn ${perco.sacoche ? 'active' : ''}" data-action="toggle-icon" data-type="sacoche" data-id="${percoId}" title="Sacoche">
              <img class="widget-icon-img" src="assets/icons/Sacoche.png" alt="Sacoche" />
            </button>
            <button type="button" class="widget-icon-btn ${perco.coffre ? 'active' : ''}" data-action="toggle-icon" data-type="coffre" data-id="${percoId}" title="Coffre">
              <img class="widget-icon-img" src="assets/icons/Coffre.png" alt="Coffre" />
            </button>
            <button type="button" class="widget-icon-btn ${perco.cle ? 'active' : ''}" data-action="toggle-icon" data-type="cle" data-id="${percoId}" title="Cle">🔑</button>
          </div>

          <div class="widget-actions-row">
            <button type="button" class="widget-action-btn recolte" data-action="recolte-repose" data-id="${percoId}" data-zone="${zone}" title="Recolter + reposer">✅</button>
            <button type="button" class="widget-action-btn recolte" data-action="recolte-only" data-id="${percoId}" data-zone="${zone}" title="Recolter">🎒</button>
            <button type="button" class="widget-action-btn mort" data-action="mort-repose" data-id="${percoId}" data-zone="${zone}" title="Mort + repose">💀</button>
            <button type="button" class="widget-action-btn mort" data-action="mort-only" data-id="${percoId}" data-zone="${zone}" title="Mort">☠️</button>
          </div>
        ` : `
          <div class="widget-actions-row">
            <button type="button" class="widget-action-btn poser" data-action="poser" data-zone="${zone}" title="Poser un perco">Poser</button>
          </div>
        `}
      </div>
    </article>
  `;
}

async function togglePercoIcon(perco, type) {
  if (!['sacoche', 'coffre', 'cle'].includes(type)) return;

  const nextValue = !Boolean(perco[type]);
  await window.percoAPI.update(perco._id, { [type]: nextValue });
  await refreshWidget();
}

function toggleFavoriteForZone(zoneName) {
  const cleanZone = String(zoneName || '').trim();
  if (!cleanZone) return;

  const favorites = getFavorites();
  if (favorites.includes(cleanZone)) {
    setFavorites(favorites.filter(zone => zone !== cleanZone));
  } else {
    favorites.push(cleanZone);
    setFavorites(favorites);
  }
}

async function runPoseAction(zoneName) {
  const cleanZone = String(zoneName || '').trim();
  if (!cleanZone) return;

  const ownerSnapshot = getZoneOwnerSnapshot(cleanZone);

  const created = await window.percoAPI.add({
    map: cleanZone,
    nom: cleanZone,
    sacoche: false,
    coffre: false,
    cle: false,
    serveur: widgetState.server,
    statut: 'vivant',
  });

  await logPoseUsage({
    percoId: created?._id || null,
    zone: cleanZone,
    serveur: widgetState.server,
    ownerSnapshot,
  });

  await refreshWidget();
}

function toggleFavoriteForPerco(perco) {
  const zoneName = String(perco?.map || '').trim();
  if (!zoneName) return;

  toggleFavoriteForZone(zoneName);
}

async function runRecolteAction(perco, repose) {
  const valeur = await askRecolteValue(0);
  if (valeur === null) return;
  const ownerSnapshot = getZoneOwnerSnapshot(perco.map);

  await window.recolteAPI.log({
    percoId: perco._id,
    zone: perco.map || '',
    serveur: widgetState.server,
    valeur,
    repose,
    ownerKey: ownerSnapshot.ownerKey,
    ownerName: ownerSnapshot.ownerName,
    ownerColor: ownerSnapshot.ownerColor,
    ownerTagId: ownerSnapshot.ownerTagId,
    eventType: 'recolte',
  });

  if (repose) {
    await window.percoAPI.update(perco._id, {
      statut: 'vivant',
      sacoche: Boolean(perco.sacoche),
      coffre: Boolean(perco.coffre),
      cle: Boolean(perco.cle),
      dateAjout: new Date(),
    });

    await logPoseUsage({
      percoId: perco._id,
      zone: perco.map || '',
      serveur: widgetState.server,
      ownerSnapshot,
    });
  } else {
    await window.percoAPI.delete(perco._id);
  }

  await refreshWidget();
}

async function runMortAction(perco, repose) {
  const ownerSnapshot = getZoneOwnerSnapshot(perco.map);
  const pertes = [];
  if (perco.sacoche) pertes.push('Sacoche');
  if (perco.coffre) pertes.push('Coffre');
  if (perco.cle) pertes.push('Cle');

  await window.recolteAPI.log({
    percoId: perco._id,
    zone: perco.map || '',
    serveur: widgetState.server,
    valeur: 0,
    repose,
    ownerKey: ownerSnapshot.ownerKey,
    ownerName: ownerSnapshot.ownerName,
    ownerColor: ownerSnapshot.ownerColor,
    ownerTagId: ownerSnapshot.ownerTagId,
    eventType: 'mort',
    pertes,
  });

  if (repose) {
    await window.percoAPI.update(perco._id, {
      statut: 'vivant',
      sacoche: Boolean(perco.sacoche),
      coffre: Boolean(perco.coffre),
      cle: Boolean(perco.cle),
      dateAjout: new Date(),
    });

    await logPoseUsage({
      percoId: perco._id,
      zone: perco.map || '',
      serveur: widgetState.server,
      ownerSnapshot,
    });
  } else {
    await window.percoAPI.delete(perco._id);
  }

  await refreshWidget();
}

async function logPoseUsage({ percoId, zone, serveur, ownerSnapshot }) {
  if (!window.recolteAPI?.log) return;

  await window.recolteAPI.log({
    percoId: percoId || undefined,
    zone: zone || '',
    serveur,
    valeur: 0,
    repose: true,
    potionLevel: null,
    ownerKey: ownerSnapshot.ownerKey,
    ownerName: ownerSnapshot.ownerName,
    ownerColor: ownerSnapshot.ownerColor,
    ownerTagId: ownerSnapshot.ownerTagId,
    eventType: 'pose',
  });
}

function getTags(serverName = widgetState.server) {
  const tags = getScopedJSON(TAGS_STORAGE_KEY, [], serverName);
  if (!Array.isArray(tags)) return [];

  return tags
    .filter(tag => tag && typeof tag === 'object')
    .map(tag => ({
      id: String(tag.id || '').trim(),
      name: String(tag.name || '').trim(),
      color: normalizeTagColor(tag.color),
    }))
    .filter(tag => tag.id && tag.name);
}

function getZoneTagMap(serverName = widgetState.server) {
  const map = getScopedJSON(ZONE_TAGS_STORAGE_KEY, {}, serverName);
  return map && typeof map === 'object' ? map : {};
}

function getZoneTagIds(zoneName) {
  const ids = widgetState.zoneTagMap[String(zoneName || '').trim()];
  return Array.isArray(ids) ? ids : [];
}

function getZoneOwnerTag(zoneName) {
  const ids = getZoneTagIds(zoneName);
  if (!ids.length) return null;
  return widgetState.tags.find(tag => tag.id === ids[0]) || null;
}

function getZoneOwnerSnapshot(zoneName) {
  const ownerTag = getZoneOwnerTag(zoneName);
  if (!ownerTag) {
    return {
      ownerKey: 'moi',
      ownerName: 'Moi',
      ownerColor: '#7a7a9a',
      ownerTagId: '',
    };
  }

  return {
    ownerKey: `tag:${ownerTag.id}`,
    ownerName: ownerTag.name,
    ownerColor: ownerTag.color,
    ownerTagId: ownerTag.id,
  };
}

function getFavorites(serverName = widgetState.server) {
  const favorites = getScopedJSON(FAVORITES_STORAGE_KEY, [], serverName);
  if (!Array.isArray(favorites)) return [];
  return favorites.map(zone => String(zone || '').trim()).filter(Boolean);
}

function setFavorites(favorites, serverName = widgetState.server) {
  const normalized = Array.isArray(favorites)
    ? [...new Set(favorites.map(zone => String(zone || '').trim()).filter(Boolean))]
    : [];
  localStorage.setItem(getServerScopedStorageKey(FAVORITES_STORAGE_KEY, serverName), JSON.stringify(normalized));
}

function isFavorite(zoneName, serverName = widgetState.server) {
  return getFavorites(serverName).includes(String(zoneName || '').trim());
}

function getScopedJSON(baseKey, fallback, serverName = widgetState.server) {
  return readJSON(getServerScopedStorageKey(baseKey, serverName), fallback);
}

function getServerScopedStorageKey(baseKey, serverName = widgetState.server) {
  return `${baseKey}:${normalizeServerName(serverName).toLowerCase()}`;
}

function normalizeServerName(serverName = widgetState.server) {
  const clean = String(serverName || '').trim();
  return clean || 'Mikhal';
}

function normalizeTagColor(color) {
  const value = String(color || '').trim().toLowerCase();
  return value || '#5b8dee';
}

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function setFeedback(message) {
  const feedback = document.getElementById('widget-feedback');
  if (feedback) {
    feedback.textContent = message;
  }
}

function buildFilterLabel(count) {
  const selectedTag = widgetState.tags.find(tag => tag.id === widgetState.selectedTagId);
  const tagText = widgetState.selectedTagId === '__favorites__'
    ? 'Tag: favoris'
    : selectedTag
      ? `Tag: ${selectedTag.name}`
      : 'Tag: tous';
  return `${widgetState.server} | ${tagText} | ${count} zone(s)`;
}

function formatElapsed(dateStr) {
  const timestamp = new Date(dateStr).getTime();
  if (!Number.isFinite(timestamp)) {
    return '-';
  }

  const diff = Math.max(0, Date.now() - timestamp);
  const hours = Math.floor(diff / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);

  if (hours === 0) return `${minutes}m`;
  if (minutes === 0) return `${hours}h`;
  return `${hours}h${String(minutes).padStart(2, '0')}`;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getDisplayZoneName(zoneName) {
  const raw = String(zoneName || '').trim();
  if (!raw) return 'Zone inconnue';

  const alias = WIDGET_ZONE_DISPLAY_ALIASES[raw.toLowerCase()];
  return alias || raw;
}