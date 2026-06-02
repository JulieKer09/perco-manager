/* =============================================
   ZONES DOFUS
   { zone, donjon, level } — donjon/level utilisés plus tard
============================================= */
const ZONES = [
  { zone: 'Comte Harebourg',                    donjon: 'Comte Harebourg',               level: 200, bda: true },
  { zone: 'Missiz Frizz',                       donjon: 'Missiz Frizz',                  level: 200, bda: true },
  { zone: 'Ventre de la Baleine',               donjon: 'Ventre de la Baleine',          level: 200, bda: true },
  { zone: 'Oeil de Vortex',                     donjon: 'Oeil de Vortex',                level: 200, bda: true },
  { zone: 'NILEZA',                              donjon: "Jardin d'Hivers",               level: 200 },
  { zone: 'KLIME',                               donjon: 'Tannerie écarlate',              level: 200 },
  { zone: 'GROLLUM',                             donjon: 'Sakai',                          level: 200 },
  { zone: 'SYLARGH',                             donjon: 'Rempart à vent',                level: 200 },
  { zone: 'DANTINÉA',                            donjon: 'Domaine des Trithons',           level: 200 },
  { zone: 'FRAKTAL',                             donjon: 'Xelorium',                       level: 120 },
  { zone: 'CAUCHEMAR',                           donjon: 'Aurore Pourpre',                 level: 200 },
  { zone: 'DÉCHIREUSE',                           donjon: 'Ozavora',                        level: 200 },
  { zone: 'Reine des Voleurs',                   donjon: 'Hautes ténébreux',              level: 200 },
  { zone: 'BWORKER',                             donjon: 'Gisgoul',                        level: 200 },
  { zone: 'VOLKORNE',                            donjon: 'Haras de Brakmar',               level: 60  },
  { zone: 'DRAGODINDE',                          donjon: 'Territoire des dragodindes sauvages', level: 60 },
  { zone: 'MULDO',                               donjon: 'Bassin des muldos',              level: 60  },
  { zone: 'TORKÉLONIA',                          donjon: 'Crocuzko',                       level: 200 },
  { zone: 'KOUTOULOU',                           donjon: "Plateau de R'lyugluglu",         level: 200 },
  { zone: 'KIMBO',                               donjon: "Feuillage de l'arbre Hakam",     level: 160 },
  { zone: 'RASBOUL',                             donjon: 'Plaines herbeuses',              level: 120 },
  { zone: 'HELL MINA',                           donjon: 'Dédale du dark Vlad',            level: 160 },
  { zone: 'GLOURS',                              donjon: 'Ruche des glourson',             level: 200 },
  { zone: 'KOLOSSO',                             donjon: 'Croc de verre',                  level: 200 },
  { zone: 'OUGAH',                               donjon: 'Caverne des Fungus',             level: 160 },
  { zone: 'TYNRIL',                              donjon: 'Jungle Obscure',                 level: 140 },
  { zone: 'CHALOEIL',                            donjon: 'Temple de Kerubim',              level: 200 },
  { zone: 'USH',                                 donjon: 'Lande Poilue',                   level: 160 },
  { zone: 'POUNICHEUR',                          donjon: "Pierre de l'élévation",         level: 120 },
  { zone: 'MENO',                                donjon: 'Ville submergée',               level: 200 },
  { zone: 'GIVREFOUX',                           donjon: 'Creuvasse Perge',                level: 180 },
  { zone: 'KORRI',                               donjon: 'Forêt pétrifiée',               level: 180 },
  { zone: 'MERKATOR',                            donjon: 'Base Abyssale',                  level: 200 },
  { zone: 'RING EKARLATTE',                      donjon: 'Ruelles des eaux suaires',       level: 140 },
  { zone: 'Belladone',                           donjon: 'Ephedrya',                       level: 200 },
  { zone: 'Quatre cavalier',                     donjon: 'Eliocalypse',                    level: 200 },
  { zone: 'MOON',                                donjon: 'Jungle Interdite',               level: 100 },
  { zone: 'KANIGROULA',                          donjon: 'Dent de Pierre',                 level: 160 },
  { zone: 'TAL KASHA',                           donjon: 'Pyramide Maudite',               level: 200 },
  { zone: 'BREUIL DU VÉNÉRABLE',               donjon: 'Osavora',                        level: 200 },
  { zone: 'NIDAS',                               donjon: 'Enutrosor',                      level: 200 },
  { zone: 'Horologium XLII',                     donjon: 'Xelorium',                       level: 180 },
  { zone: 'BEN le ripat',                        donjon: "Berceau d'alma",                 level: 160 },
  { zone: 'ILYZAEL',                             donjon: 'Caserne du jour sans fin',       level: 200 },
  { zone: 'DEMEURE DES ESPRITS',                 donjon: 'Mont des tombeaux',              level: 180 },
  { zone: 'Royaume de papier',                   donjon: 'Wukin et Wukang',                level: 200 },
  { zone: 'HAUTE RUCHE',                         donjon: 'Cirque de Cania',                level: 140 },
  { zone: 'DRAMAK',                              donjon: 'Kartonpathe',                    level: 100 },
  { zone: 'Anerice',                             donjon: 'TERRE DÉSACRÉ',                level: 200 },
  { zone: "Royaume d'encre",                     donjon: 'Wukin et Wukang',                level: 200 },
  { zone: 'Tanoukoui San',                       donjon: 'TERRDALA',                       level: 140 },
  { zone: 'MINOTOR',                             donjon: 'Ile du Minotoror',               level: 160 },
  { zone: 'MENO ZONE 3',                         donjon: 'Vestige englouti',               level: 200 },
  { zone: 'KOUTOU ZONE 3',                       donjon: "Abime R'lyugluglu",              level: 200 },
  { zone: 'DANTI ZONE 3',                        donjon: 'Tréfonds des trithons',          level: 200 },
  { zone: 'SHOGUN',                              donjon: 'Cimetière de grobe',             level: 160 },
  { zone: 'DAZAK',                               donjon: 'Royaume des Martegel',           level: 200 },
  { zone: 'SOLAR',                               donjon: 'Marche Magmatique',              level: 200 },
  { zone: 'BETHEL',                              donjon: 'Epave silencieuses',             level: 200 },
  { zone: 'OMBRE',                               donjon: 'Dimension Obscure',              level: 200 },
  { zone: 'TOXOLIATH',                           donjon: 'Catacombres',                    level: 180 },
  { zone: "Hypogée del 'obsidiandre",            donjon: "Larme d'ouronigride",            level: 160 },
  { zone: 'BLOP MULTI',                          donjon: 'Lac de Cania',                   level: 120 },
  { zone: 'RAZOF',                               donjon: 'Nimotopia',                      level: 200 },
  { zone: 'VILLAGE ENSEVELI',                    donjon: 'VILLAGE ENSEVELI',               level: 160 },
  { zone: 'SUPERVIZOEUF',                        donjon: 'Osavora',                        level: 180 },
  { zone: 'Kralamour',                           donjon: 'Tourbière sans fond',            level: 100 },
  { zone: 'SKEUNK',                              donjon: 'Vallée de la Morkitu',           level: 120 },
  { zone: 'Barbéril',                            donjon: "Galerie d'Ereboria",             level: 200 },
  { zone: 'PHOSSILE',                            donjon: 'Enutrosor',                      level: 160 },
  { zone: 'EL PIKO',                             donjon: 'Saharach',                       level: 160 },
  { zone: 'MANSOT',                              donjon: 'Lac gelé',                       level: 140 },
  { zone: 'PER VER',                             donjon: 'Saharach',                       level: 180 },
  { zone: 'Royal Mouth',                         donjon: 'Champ de glace',                 level: 120 },
  { zone: 'RIKTUS',                              donjon: 'Route des roulottes',            level: 100 },
  { zone: 'GELEE',                               donjon: 'Dimension gelée',                level: 60  },
  { zone: 'CROCABULIA',                          donjon: 'Sanctuaire des dragoeufs',       level: 120 },
  { zone: 'KABHAL',                              donjon: 'Atoll des possédés',             level: 200 },
  { zone: 'KHARNOOZORE',                         donjon: 'Presqu\'ile des dragoeuf',       level: 100 },
  { zone: 'CHENE MOU',                           donjon: 'Foret sombre',                   level: 140 },
  { zone: 'VILLAGE CANOPE',                      donjon: 'Village de la canaopée',         level: 120 },
  { zone: 'Dame des eaux',                       donjon: 'Akwadala',                       level: 140 },
  { zone: 'MEULOU',                              donjon: 'Landes de sidimote',             level: 100 },
  { zone: 'Dojo du vent',                        donjon: 'aerdala',                        level: 140 },
  { zone: 'DOPEUL',                              donjon: 'Village des dopeul',             level: 100 },
  { zone: 'GLIGLI',                              donjon: 'Landes de cania',                level: 140 },
  { zone: 'MARÉCAGE AMAKNA',                     donjon: '',                               level: 60  },
  { zone: 'Dragon cochon / DC',                  donjon: 'Territoire des porcos',          level: 100 },
  { zone: 'BRUMEN',                              donjon: 'Désolation de sidimote',         level: 80  },
  { zone: 'CIMETIERE KOALAK',                    donjon: 'Cimetière primitif',             level: 120 },
  { zone: 'VILLAGE KANIG',                       donjon: '',                               level: 160 },
  { zone: 'MASSIF DE CANIA',                     donjon: '',                               level: 60  },
  { zone: 'DRAGNEYRYS',                          donjon: 'Presqu\'ile des dragoeuf',       level: 80  },
  { zone: 'KOULOSSE',                            donjon: 'Canyon Sauvage',                 level: 100 },
  { zone: 'BOIS LITNEG',                         donjon: '',                               level: 120 },
  { zone: 'CORBAC',                              donjon: 'Pénate du corbac',               level: 100 },
  { zone: 'PIC DE CANIA',                        donjon: '',                               level: 80  },
  { zone: 'ILOT DE LA CAWOTTE',                  donjon: 'Wabbit',                         level: 40  },
  { zone: 'Grotte hesque',                       donjon: 'PLAGE DE CORAIL',               level: 60  },
  { zone: 'ZONE BWORKS',                         donjon: '',                               level: 60  },
  { zone: 'DJ REINE NYE',                        donjon: 'Bois des arak-ai',               level: 100 },
  { zone: 'MANTISCROC',                          donjon: 'Saharach',                       level: 80  },
  { zone: "Fabrique de Foux d'artifice",         donjon: 'Feudala',                        level: 140 },
  { zone: 'FORET DES PINS PERDU',                donjon: '',                               level: 140 },
  { zone: 'GALERIE ABANDONNER',                  donjon: 'Wabbit',                         level: 60  },
  { zone: 'RAT BLANC',                           donjon: 'Bonta',                          level: 120 },
  { zone: 'RAT NOIR',                            donjon: 'Brakmar',                        level: 120 },
  { zone: 'SPHINTER CELL',                       donjon: "Souterrain d'astrub",            level: 160 },
  { zone: "Campagne d'amakna",                   donjon: '',                               level: 20  },
  { zone: 'Route rocailleuse',                   donjon: '',                               level: 60  },
  { zone: 'Port de givre (Île de Frigost)',       donjon: '',                               level: 80  },
  { zone: 'La Bourgade (Île de Frigost)',         donjon: '',                               level: 80  },
  { zone: 'Plage de la Tortue (Île de Moon)',     donjon: '',                               level: 40  },
  { zone: 'Village Kanniboul (Île de Moon)',      donjon: '',                               level: 60  },
  { zone: 'Bateau du Chouque (Île de Moon)',      donjon: '',                               level: 100 },
  { zone: 'Bord de la forêt maléfique (Amakna)',  donjon: '',                               level: 40  },
  { zone: 'Souterrains des Dragoeufs (Amakna)',   donjon: '',                               level: 100 },
  { zone: 'Scarafeuilles (Plaine des Scarafeuilles)', donjon: '',                           level: 40  },
  { zone: "Forêt d'Amakna",                      donjon: '',                               level: 20  },
  { zone: 'Rivage sufokien (Baie de Sufokia)',    donjon: '',                               level: 40  },
  { zone: 'Forgerons (Territoire des Bandits)',   donjon: '',                               level: 60  },
  { zone: 'Squelettes (Amakna, Cimetière)',       donjon: '',                               level: 40  },
  { zone: 'Clairière de Brouce Boulgoure (Amakna)', donjon: '',                             level: 20  },
  { zone: 'Coin des Boos (Amakna)',               donjon: '',                               level: 20  },
  { zone: 'Tofus (Champ des Ingalsse)',           donjon: '',                               level: 40  },
  { zone: 'Tofulailler Royal',                   donjon: '',                               level: 40  },
  { zone: 'Milifutaie (Amakna)',                  donjon: '',                               level: 20  },
  { zone: 'Coin des Bouftous (Amakna)',           donjon: '',                               level: 20  },
  { zone: 'Montagne basse des Craqueleurs (Amakna)', donjon: '',                            level: 40  },
  { zone: 'Campement des Bworks',                donjon: '',                               level: 40  },
  { zone: 'Gobs',                                donjon: 'Campement des Gobelins',         level: 40  },
  { zone: "Village d'Amakna",                    donjon: '',                               level: 20  },
  { zone: 'Rivière Kawaii',                      donjon: '',                               level: 20  },
  { zone: "Côte d'Asse",                         donjon: '',                               level: 20  },
  { zone: 'Port de Madrestam (Amakna)',           donjon: '',                               level: 20  },
  { zone: 'Nid du Kwakwa (Amakna)',               donjon: '',                               level: 60  },
  { zone: 'Pitons Rocheux des Craqueleurs (Amakna)', donjon: '',                            level: 80  },
  { zone: 'Larves (Amakna)',                      donjon: '',                               level: 60  },
  { zone: "Orée de la Forêt des Abraknydes",     donjon: '',                               level: 40  },
  { zone: 'Domaine Ancestral',                   donjon: '',                               level: 90  },
  { zone: 'Champs de Cania',                     donjon: '',                               level: 60  },
  { zone: 'Fôret de Kaliptus (Montagne des Koalaks)', donjon: '',                           level: 80  },
  { zone: 'Baie de Cania',                       donjon: '',                               level: 40  },
  { zone: 'Lacs enchantés (Montagne des Koalaks)', donjon: '',                              level: 80  },
  { zone: 'Cimetiere des Tortures (Brakmar)',     donjon: '',                               level: 40  },
  { zone: 'Bordure de Brakmar',                  donjon: '',                               level: 40  },
  { zone: 'Plaine des Porkass (Cania)',           donjon: '',                               level: 40  },
  { zone: 'Bambusaie de Damadrya (Plantana)',     donjon: '',                               level: 120 },
  { zone: 'Maison Fantôme (Foire du Trool)',      donjon: '',                               level: 60  },
  { zone: 'Route des Roulottes (Riktus)',         donjon: '',                               level: 100 },
  { zone: 'Rives iridescentes (Bonta)',           donjon: '',                               level: 20  },
  { zone: 'Cimetière des Héros (Bonta)',          donjon: '',                               level: 40  },
  { zone: 'Plaines Rocheuses (Cania)',            donjon: '',                               level: 60  },
  { zone: 'Îlot des Tombeaux',                   donjon: '',                               level: 60  },
  { zone: 'Château du Wa Wabbit',                donjon: '',                               level: 60  },
  { zone: 'Port de Sarakech (Saharach)',          donjon: '',                               level: 80  },
  { zone: 'Refuge Sylvestre (Valonia)',           donjon: '',                               level: 60  },
  { zone: 'Cœur immaculé (Bonta)',               donjon: '',                               level: 20  },
  { zone: "Havres d'ivoire (Bonta)",             donjon: '',                               level: 20  },
  { zone: 'Promontoire des cieux (Bonta)',        donjon: '',                               level: 20  },
  { zone: 'Faubourgs des artisans (Bonta)',       donjon: '',                               level: 20  },
  { zone: 'La Cuirasse (Brakmar)',                donjon: '',                               level: 20  },
  { zone: 'La Marmite (Brakmar)',                 donjon: '',                               level: 20  },
  { zone: "L'Ancre (Brakmar)",                   donjon: '',                               level: 20  },
  { zone: "L'Enclume (Brakmar)",                 donjon: '',                               level: 20  },
];

/* =============================================
   ÉTAT GLOBAL
============================================= */
const state = {
  percos: [],
  serveur: 'Mikhal',
  activeSeasonId: 'none',
  search: '',
  activeTab: 'serveur',
  actionTarget: null,
  recolteRepose: true,  // true = récolter & reposer, false = récolter seulement
  mortRepose: false,
  formIcons: { sacoche: false, coffre: false, cle: false },
  showFavoritesOnly: false,
  lastRecolteByZone: {},
  activeTagFilter: '',
  dashboardViewMode: 'global',
  dashboardContentMode: 'zones',
  dashboardZoneSort: 'kamas',
  dashboardSeasonId: 'none',
  seasonFormMode: 'create',
};

const authState = {
  session: null,
};

const FAVORITES_STORAGE_KEY = 'percoFavorites';
const DASHBOARD_CONTENT_MODE_STORAGE_KEY = 'dashboardContentMode';
const DASHBOARD_SEASON_FILTER_STORAGE_KEY = 'dashboardSeasonFilter';
const ACTIVE_SEASON_BY_SERVER_STORAGE_KEY = 'activeSeasonByServer';
const TAGS_STORAGE_KEY = 'customZoneTagsV2';
const ZONE_TAGS_STORAGE_KEY = 'zoneTagIdsByZone';
const SERVER_SCOPED_STORAGE_MIGRATION_KEY = 'serverScopedStorageMigratedV1';
const LEGACY_TAG_STORAGE_MIGRATION_KEY = 'legacyTagStorageMigratedV1';
const LEGACY_TAGS_STORAGE_KEY = 'customZoneTags';
const LEGACY_ZONE_TAGS_STORAGE_KEY = 'zoneTagsByZone';
const TAG_COLOR_PRESETS = [
  { value: '#5b8dee', label: 'Bleu' },
  { value: '#3ddc84', label: 'Vert' },
  { value: '#f5a623', label: 'Orange' },
  { value: '#e74c3c', label: 'Rouge' },
  { value: '#a68bff', label: 'Violet' },
  { value: '#e8b84b', label: 'Or' },
  { value: '#55c7c7', label: 'Turquoise' },
  { value: '#d98fd0', label: 'Rose' },
];
const DEFAULT_TAG_COLORS = TAG_COLOR_PRESETS.map(c => c.value);

function normalizeServerName(serverName = state.serveur) {
  const clean = String(serverName || '').trim();
  return clean || 'Mikhal';
}

function normalizeSeasonId(seasonId = state.activeSeasonId) {
  const clean = String(seasonId || '').trim();
  return clean || 'none';
}

function getLegacyServerScopedStorageKey(baseKey, serverName = state.serveur) {
  return `${baseKey}:${normalizeServerName(serverName).toLowerCase()}`;
}

function getServerScopedStorageKey(baseKey, serverName = state.serveur, seasonId = state.activeSeasonId) {
  return `${baseKey}:${normalizeServerName(serverName).toLowerCase()}:season:${normalizeSeasonId(seasonId)}`;
}

function getScopedJSON(baseKey, fallback, serverName = state.serveur, seasonId = state.activeSeasonId) {
  try {
    const scopedKey = getServerScopedStorageKey(baseKey, serverName, seasonId);
    let raw = localStorage.getItem(scopedKey);

    // Migration douce: si on est hors saison et qu'une ancienne cle serveur existe,
    // on la recopie sur la nouvelle cle serveur+saison.
    if (raw === null && normalizeSeasonId(seasonId) === 'none') {
      const legacyRaw = localStorage.getItem(getLegacyServerScopedStorageKey(baseKey, serverName));
      if (legacyRaw !== null) {
        localStorage.setItem(scopedKey, legacyRaw);
        raw = legacyRaw;
      }
    }

    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function setScopedJSON(baseKey, value, serverName = state.serveur, seasonId = state.activeSeasonId) {
  localStorage.setItem(getServerScopedStorageKey(baseKey, serverName, seasonId), JSON.stringify(value));
}

function migrateLegacyGlobalStorageToCurrentServer() {
  if (localStorage.getItem(SERVER_SCOPED_STORAGE_MIGRATION_KEY) === '1') return;

  const currentServer = normalizeServerName();
  const favoriteServerKey = getServerScopedStorageKey(FAVORITES_STORAGE_KEY, currentServer, 'none');
  const tagsServerKey = getServerScopedStorageKey(TAGS_STORAGE_KEY, currentServer, 'none');
  const zoneTagsServerKey = getServerScopedStorageKey(ZONE_TAGS_STORAGE_KEY, currentServer, 'none');

  if (localStorage.getItem(favoriteServerKey) === null) {
    const legacyFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (legacyFavorites !== null) {
      localStorage.setItem(favoriteServerKey, legacyFavorites);
    }
  }

  if (localStorage.getItem(tagsServerKey) === null) {
    const legacyTags = localStorage.getItem(TAGS_STORAGE_KEY);
    if (legacyTags !== null) {
      localStorage.setItem(tagsServerKey, legacyTags);
    }
  }

  if (localStorage.getItem(zoneTagsServerKey) === null) {
    const legacyZoneTags = localStorage.getItem(ZONE_TAGS_STORAGE_KEY);
    if (legacyZoneTags !== null) {
      localStorage.setItem(zoneTagsServerKey, legacyZoneTags);
    }
  }

  localStorage.setItem(SERVER_SCOPED_STORAGE_MIGRATION_KEY, '1');
}

function getFavorites(serverName = state.serveur, seasonId = state.activeSeasonId) {
  const favs = getScopedJSON(FAVORITES_STORAGE_KEY, [], serverName, seasonId);
  if (!Array.isArray(favs)) return [];
  return favs.map(v => String(v || '').trim()).filter(Boolean);
}

function setFavorites(favs, serverName = state.serveur, seasonId = state.activeSeasonId) {
  const normalized = Array.isArray(favs)
    ? [...new Set(favs.map(v => String(v || '').trim()).filter(Boolean))]
    : [];
  setScopedJSON(FAVORITES_STORAGE_KEY, normalized, serverName, seasonId);
}

function isFavorite(zone, serverName = state.serveur, seasonId = state.activeSeasonId) {
  const favs = getFavorites(serverName, seasonId);
  return favs.includes(zone);
}

function toggleFavorite(zone) {
  let favs = getFavorites();
  if (favs.includes(zone)) {
    favs = favs.filter(z => z !== zone);
  } else {
    favs.push(zone);
  }
  setFavorites(favs);
  renderCards();
}

function getTags(serverName = state.serveur, seasonId = state.activeSeasonId) {
  try {
    const tags = getScopedJSON(TAGS_STORAGE_KEY, [], serverName, seasonId);
    if (!Array.isArray(tags)) return [];
    return tags
      .filter(t => t && typeof t === 'object')
      .map(t => ({
        id: String(t.id || ''),
        name: normalizeTagName(t.name),
        color: normalizeTagColor(t.color),
      }))
      .filter(t => t.id && t.name);
  } catch {
    return [];
  }
}

function setTags(tags, serverName = state.serveur, seasonId = state.activeSeasonId) {
  setScopedJSON(TAGS_STORAGE_KEY, tags, serverName, seasonId);
}

function getZoneTagMap(serverName = state.serveur, seasonId = state.activeSeasonId) {
  const map = getScopedJSON(ZONE_TAGS_STORAGE_KEY, {}, serverName, seasonId);
  return map && typeof map === 'object' ? map : {};
}

function setZoneTagMap(map, serverName = state.serveur, seasonId = state.activeSeasonId) {
  setScopedJSON(ZONE_TAGS_STORAGE_KEY, map, serverName, seasonId);
}

function normalizeTagName(name) {
  return String(name || '').trim();
}

function normalizeTagColor(color) {
  const c = String(color || '').trim().toLowerCase();
  const values = TAG_COLOR_PRESETS.map(t => t.value);
  return values.includes(c) ? c : TAG_COLOR_PRESETS[0].value;
}

function buildColorOptionsHtml(selectedColor) {
  const normalized = normalizeTagColor(selectedColor);
  return TAG_COLOR_PRESETS
    .map(c => `<option value="${c.value}" ${c.value === normalized ? 'selected' : ''}>${c.label}</option>`)
    .join('');
}

function makeTagId() {
  return 'tag_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
}

function ensureTagStorageMigration() {
  if (localStorage.getItem(LEGACY_TAG_STORAGE_MIGRATION_KEY) === '1') {
    return;
  }

  const currentTags = getTags();
  if (currentTags.length > 0) {
    localStorage.setItem(LEGACY_TAG_STORAGE_MIGRATION_KEY, '1');
    return;
  }

  if (localStorage.getItem(LEGACY_TAGS_STORAGE_KEY) === null) {
    return;
  }

  let legacyTags = [];
  let legacyMap = {};
  try {
    legacyTags = JSON.parse(localStorage.getItem(LEGACY_TAGS_STORAGE_KEY) || '[]');
  } catch {
    legacyTags = [];
  }
  try {
    legacyMap = JSON.parse(localStorage.getItem(LEGACY_ZONE_TAGS_STORAGE_KEY) || '{}');
  } catch {
    legacyMap = {};
  }

  if (!Array.isArray(legacyTags)) legacyTags = [];
  if (!legacyMap || typeof legacyMap !== 'object') legacyMap = {};

  const tags = legacyTags
    .map((name, idx) => ({
      id: makeTagId(),
      name: normalizeTagName(name),
      color: DEFAULT_TAG_COLORS[idx % DEFAULT_TAG_COLORS.length],
    }))
    .filter(t => t.name);

  if (tags.length === 0) {
    setTags([]);
    setZoneTagMap({});
    return;
  }

  const byName = Object.fromEntries(tags.map(t => [t.name.toLowerCase(), t.id]));
  const zoneMap = {};

  Object.entries(legacyMap).forEach(([zone, names]) => {
    if (!Array.isArray(names)) return;
    const ids = names
      .map(n => byName[String(n || '').toLowerCase()])
      .filter(Boolean);
    if (ids.length > 0) zoneMap[zone] = [...new Set(ids)];
  });

  setTags(tags);
  setZoneTagMap(zoneMap);
  localStorage.setItem(LEGACY_TAG_STORAGE_MIGRATION_KEY, '1');
}

function getZoneTagIds(zoneName) {
  const map = getZoneTagMap();
  const ids = map[zoneName];
  return Array.isArray(ids) ? ids : [];
}

function getZoneTags(zoneName) {
  const tags = getTags();
  const ids = getZoneTagIds(zoneName);
  return tags.filter(t => ids.includes(t.id));
}

function getZoneOwnerSnapshot(zoneName) {
  const zoneTags = getZoneTags(zoneName);
  const ownerTag = zoneTags[0] || null;

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

function createTag(name, color) {
  const cleanName = normalizeTagName(name);
  if (!cleanName) return { ok: false, reason: 'empty' };

  const tags = getTags();
  const exists = tags.some(t => t.name.toLowerCase() === cleanName.toLowerCase());
  if (exists) return { ok: false, reason: 'exists' };

  const tag = { id: makeTagId(), name: cleanName, color: normalizeTagColor(color) };
  setTags([...tags, tag].sort((a, b) => a.name.localeCompare(b.name, 'fr')));
  return { ok: true, tag };
}

function updateTag(tagId, patch) {
  const tags = getTags();
  const idx = tags.findIndex(t => t.id === tagId);
  if (idx < 0) return;

  const next = { ...tags[idx] };
  if (Object.prototype.hasOwnProperty.call(patch, 'name')) {
    const cleanName = normalizeTagName(patch.name);
    if (cleanName) {
      const exists = tags.some((t, i) => i !== idx && t.name.toLowerCase() === cleanName.toLowerCase());
      if (!exists) next.name = cleanName;
    }
  }
  if (Object.prototype.hasOwnProperty.call(patch, 'color')) {
    next.color = normalizeTagColor(patch.color);
  }

  tags[idx] = next;
  setTags(tags.sort((a, b) => a.name.localeCompare(b.name, 'fr')));
}

function deleteTag(tagId) {
  const tags = getTags().filter(t => t.id !== tagId);
  setTags(tags);

  const zoneMap = getZoneTagMap();
  Object.keys(zoneMap).forEach(zone => {
    zoneMap[zone] = (zoneMap[zone] || []).filter(id => id !== tagId);
    if (zoneMap[zone].length === 0) delete zoneMap[zone];
  });
  setZoneTagMap(zoneMap);

  if (state.activeTagFilter === `tag:${tagId}`) {
    state.activeTagFilter = '';
  }
}

function addTagToZone(zoneName, tagId) {
  if (!tagId) return;
  const map = getZoneTagMap();
  map[zoneName] = [tagId];
  setZoneTagMap(map);
}

function removeTagFromZone(zoneName, tagId) {
  const map = getZoneTagMap();
  const current = Array.isArray(map[zoneName]) ? map[zoneName] : [];
  map[zoneName] = current.filter(id => id !== tagId);
  if (map[zoneName].length === 0) delete map[zoneName];
  setZoneTagMap(map);
}

function setupTagsUI() {
  migrateLegacyGlobalStorageToCurrentServer();
  ensureTagStorageMigration();

  const actionBar = document.querySelector('.action-bar');
  if (!actionBar) return;

  let wrap = document.getElementById('tags-toolbar');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'tags-toolbar';
    wrap.className = 'tags-toolbar';
    wrap.innerHTML = `
      <button id="btn-tag-manager" class="btn-tag-manager">Tag</button>
      <div id="tag-filters-row" class="tag-filters-row"></div>
      <div id="tag-manager-panel" class="tag-manager-panel hidden">
        <div class="tag-panel-section">
          <div class="tag-panel-title">1) Voir les tags</div>
          <div id="tag-manage-list" class="tag-manage-list"></div>
        </div>
        <div class="tag-panel-section">
          <div class="tag-panel-title">2) Creer un tag</div>
          <div class="tag-create-row">
            <input type="text" id="tag-new-name" class="input" placeholder="Nom du tag" />
            <select id="tag-new-color" class="input tag-color-select">
              ${buildColorOptionsHtml(TAG_COLOR_PRESETS[0].value)}
            </select>
            <button id="btn-tag-new" class="btn-tag-create">Creer</button>
          </div>
        </div>
      </div>
    `;

    const right = actionBar.querySelector('.action-bar-right');
    actionBar.insertBefore(wrap, right || null);
  }

  if (wrap.dataset.bound === '1') {
    renderTagFilterButtons();
    renderTagManageList();
    return;
  }

  wrap.dataset.bound = '1';

  const btnManager = document.getElementById('btn-tag-manager');
  const panel = document.getElementById('tag-manager-panel');
  const btnCreate = document.getElementById('btn-tag-new');
  const newName = document.getElementById('tag-new-name');
  const newColor = document.getElementById('tag-new-color');

  btnManager.addEventListener('click', () => {
    panel.classList.toggle('hidden');
    if (!panel.classList.contains('hidden')) {
      renderTagManageList();
    }
  });

  btnCreate.addEventListener('click', () => {
    const res = createTag(newName.value, newColor.value);
    if (!res.ok) return;
    newName.value = '';
    newColor.value = TAG_COLOR_PRESETS[0].value;
    renderTagManageList();
    renderTagFilterButtons();
    renderCards();
  });

  newName.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      btnCreate.click();
    }
  });

  document.addEventListener('click', e => {
    if (!wrap.contains(e.target)) {
      panel.classList.add('hidden');
      document.querySelectorAll('.zone-tag-menu').forEach(m => m.classList.add('hidden'));
    }
  });

  renderTagFilterButtons();
  renderTagManageList();
}

function renderTagManageList() {
  const list = document.getElementById('tag-manage-list');
  if (!list) return;

  const tags = getTags();
  if (tags.length === 0) {
    list.innerHTML = '<div class="tag-manage-empty">Aucun tag cree.</div>';
    return;
  }

  list.innerHTML = tags.map(tag => `
    <div class="tag-manage-item" data-tag-id="${escHtml(tag.id)}">
      <input class="input tag-manage-name" value="${escHtml(tag.name)}" />
      <select class="input tag-color-select tag-manage-color">${buildColorOptionsHtml(tag.color)}</select>
      <button class="tag-manage-delete">Suppr.</button>
    </div>
  `).join('');

  list.querySelectorAll('.tag-manage-item').forEach(row => {
    const tagId = row.dataset.tagId;
    const nameInput = row.querySelector('.tag-manage-name');
    const colorInput = row.querySelector('.tag-manage-color');
    const delBtn = row.querySelector('.tag-manage-delete');

    nameInput.addEventListener('blur', () => {
      updateTag(tagId, { name: nameInput.value });
      renderTagManageList();
      renderTagFilterButtons();
      renderCards();
    });

    colorInput.addEventListener('change', () => {
      updateTag(tagId, { color: colorInput.value });
      renderTagManageList();
      renderTagFilterButtons();
      renderCards();
    });

    delBtn.addEventListener('click', () => {
      deleteTag(tagId);
      renderTagManageList();
      renderTagFilterButtons();
      renderCards();
    });
  });
}

function renderTagFilterButtons() {
  const row = document.getElementById('tag-filters-row');
  if (!row) return;

  const tags = getTags();
  if (tags.length === 0) {
    row.innerHTML = '';
    state.activeTagFilter = '';
    return;
  }

  row.innerHTML = tags.map(tag => `
    <button class="tag-filter-btn ${state.activeTagFilter === `tag:${tag.id}` ? 'active' : ''}" data-tag-id="${escHtml(tag.id)}" style="--tag-color:${escHtml(tag.color)}">#${escHtml(tag.name)}</button>
  `).join('');

  row.querySelectorAll('.tag-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const value = `tag:${btn.dataset.tagId}`;
      state.activeTagFilter = state.activeTagFilter === value ? '' : value;
      renderTagFilterButtons();
      renderCards();
    });
  });
}

/* =============================================
   INIT
============================================= */
document.addEventListener('DOMContentLoaded', async () => {
  setupDiscordAuthControls();

  const session = await syncDiscordSessionState();
  if (!session) {
    return;
  }

  migrateLegacyGlobalStorageToCurrentServer();
  setupTabs();
  setupServeur();
  setupSeasonWorkspaceControls();
  setupWidgetPanel();
  setupDataSync();
  setupModals();
  setupForm();
  setupDashboard();
  setupSearch();
  setupFavoritesFilter();
  setupTagsUI();
  await refreshActiveSeasonOptions();
  await loadPercos();
  setInterval(updateTimers, 60_000);
});

function getDiscordDisplayName(session) {
  return session?.user?.displayName || session?.user?.username || 'Discord';
}

function updateDiscordAuthUI(session) {
  authState.session = session || null;

  const badge = document.getElementById('discord-session-badge');
  if (badge) {
    badge.textContent = session ? `Discord: ${getDiscordDisplayName(session)}` : 'Discord: hors ligne';
  }

  const authButton = document.getElementById('discord-auth-button');
  if (authButton) {
    authButton.textContent = session ? 'Déconnexion' : 'Connexion Discord';
  }

  const veil = document.getElementById('auth-veil');
  if (veil) {
    veil.classList.toggle('hidden', Boolean(session));
  }

  const userLabel = document.getElementById('auth-user-name');
  if (userLabel) {
    userLabel.textContent = session ? getDiscordDisplayName(session) : 'Aucune session';
  }

  const statusText = document.getElementById('auth-status-text');
  if (statusText) {
    statusText.textContent = session
      ? ''
      : 'Tu dois te connecter à Discord pour utiliser l’application.';
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
  const topButton = document.getElementById('discord-auth-button');
  const overlayButton = document.getElementById('discord-login-button');

  const login = async () => {
    const statusText = document.getElementById('auth-status-text');
    if (statusText) {
      statusText.textContent = 'Ouverture de Discord...';
    }

    try {
      await window.authAPI.login();
      window.location.reload();
    } catch (error) {
      console.error('auth login error:', error);
      if (statusText) {
        statusText.textContent = error?.message || 'Connexion Discord impossible.';
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

  topButton?.addEventListener('click', async () => {
    if (authState.session) {
      await logout();
      return;
    }

    await login();
  });

  overlayButton?.addEventListener('click', login);
}

function setupDataSync() {
  if (!window.syncAPI?.onDataChanged) return;

  let refreshTimer = null;

  window.syncAPI.onDataChanged(() => {
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(async () => {
      await refreshActiveSeasonOptions();
      await loadPercos();
      await refreshSeasonFilterOptions();
      if (state.activeTab === 'dashboard') {
        const dashboardServerFilter = document.getElementById('dash-filtre-serveur')?.value || 'tous';
        await loadDashboard(dashboardServerFilter);
      }
    }, 120);
  });
}

function getZoneMeta(zoneName) {
  const target = String(zoneName || '').trim().toLowerCase();
  if (!target) return null;
  return ZONES.find(z => z.zone.toLowerCase() === target) || null;
}

function getPotionLevelFromZone(zoneName) {
  const meta = getZoneMeta(zoneName);
  return Number.isFinite(meta?.level) ? meta.level : null;
}

function isBdaZone(zoneName) {
  return Boolean(getZoneMeta(zoneName)?.bda);
}

function getActiveSeasonMap() {
  const map = getScopedJSON(ACTIVE_SEASON_BY_SERVER_STORAGE_KEY, {}, 'Mikhal', 'none');
  return map && typeof map === 'object' ? map : {};
}

function getActiveSeasonIdForServer(serverName = state.serveur) {
  const map = getActiveSeasonMap();
  return normalizeSeasonId(map[normalizeServerName(serverName)] || 'none');
}

function setActiveSeasonIdForServer(serverName = state.serveur, seasonId = 'none') {
  const server = normalizeServerName(serverName);
  const map = getActiveSeasonMap();
  map[server] = normalizeSeasonId(seasonId);
  setScopedJSON(ACTIVE_SEASON_BY_SERVER_STORAGE_KEY, map, 'Mikhal', 'none');
}

function normalizeDocSeasonId(seasonId) {
  return normalizeSeasonId(seasonId || 'none');
}

function isInActiveSeasonScope(docSeasonId) {
  return normalizeDocSeasonId(docSeasonId) === normalizeSeasonId(state.activeSeasonId);
}

function getCurrentSeasonIdForWrite() {
  return normalizeSeasonId(state.activeSeasonId) === 'none' ? '' : state.activeSeasonId;
}

function toDateInputValue(dateStr) {
  const d = new Date(dateStr);
  if (!Number.isFinite(d.getTime())) return '';
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function configureSeasonFormModal(mode = 'create', season = null) {
  state.seasonFormMode = mode === 'edit' ? 'edit' : 'create';

  const title = document.querySelector('#modal-season .modal-header h2');
  const submitBtn = document.getElementById('season-form-submit');
  const idInput = document.getElementById('season-form-id');
  const nameInput = document.getElementById('season-form-name');
  const serverSelect = document.getElementById('season-form-server');
  const startEl = document.getElementById('season-form-start');
  const endEl = document.getElementById('season-form-end');

  if (state.seasonFormMode === 'edit' && season) {
    if (title) title.textContent = 'Modifier la saison';
    if (submitBtn) submitBtn.textContent = 'Enregistrer';
    if (idInput) idInput.value = season._id || '';
    if (nameInput) nameInput.value = season.name || '';
    if (serverSelect) {
      serverSelect.value = season.serveur || normalizeServerName(state.serveur);
      serverSelect.disabled = true;
      serverSelect.title = 'Le serveur ne peut pas etre modifie pour eviter les incoherences de donnees.';
    }
    if (startEl) startEl.value = toDateInputValue(season.dateDebut);
    if (endEl) endEl.value = toDateInputValue(season.dateFin);
    return;
  }

  if (title) title.textContent = 'Créer une saison';
  if (submitBtn) submitBtn.textContent = 'Créer';
  if (idInput) idInput.value = '';
  if (serverSelect) {
    serverSelect.disabled = false;
    serverSelect.title = '';
  }
}

function openSeasonCreateModal(defaultServer = state.serveur) {
  const form = document.getElementById('season-form');
  if (!form) return;

  form.reset();
  configureSeasonFormModal('create');
  const serverSelect = document.getElementById('season-form-server');
  if (serverSelect) serverSelect.value = normalizeServerName(defaultServer);

  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const today = `${yyyy}-${mm}-${dd}`;
  const startEl = document.getElementById('season-form-start');
  const endEl = document.getElementById('season-form-end');
  if (startEl) startEl.value = startEl.value || today;
  if (endEl) endEl.value = endEl.value || today;

  openModal('modal-season');
}

async function openSeasonEditModalFromSelection() {
  const targetSeasonId = normalizeSeasonId(state.activeSeasonId);
  if (targetSeasonId === 'none') {
    window.alert('Selectionne une saison active a modifier.');
    return;
  }

  if (!window.seasonAPI?.list) return;
  const seasons = await window.seasonAPI.list();
  const season = seasons.find(s => s._id === targetSeasonId);
  if (!season) {
    window.alert('Saison introuvable.');
    return;
  }

  const form = document.getElementById('season-form');
  if (!form) return;
  configureSeasonFormModal('edit', season);
  openModal('modal-season');
}

async function refreshActiveSeasonOptions(preferredId) {
  const select = document.getElementById('season-actif');
  if (!select || !window.seasonAPI?.list) return;

  const server = normalizeServerName(state.serveur);
  const seasons = (await window.seasonAPI.list())
    .filter(s => s.serveur === server)
    .sort((a, b) => new Date(b.dateDebut).getTime() - new Date(a.dateDebut).getTime());

  select.innerHTML = [
    '<option value="none">Hors saison</option>',
    ...seasons.map(season => (
      `<option value="${escHtml(season._id)}">${escHtml(formatSeasonOptionLabel(season, false))}</option>`
    )),
  ].join('');

  const saved = getActiveSeasonIdForServer(server);
  const wanted = normalizeSeasonId(preferredId || saved || 'none');
  const selected = seasons.some(s => s._id === wanted) ? wanted : 'none';

  select.value = selected;
  state.activeSeasonId = selected;
  setActiveSeasonIdForServer(server, selected);

  if (state.activeTagFilter.startsWith('tag:')) {
    const activeTagId = state.activeTagFilter.slice(4);
    if (!getTags().some(t => t.id === activeTagId)) {
      state.activeTagFilter = '';
    }
  }

  renderTagFilterButtons();
  renderTagManageList();
  updateSeasonContextBadge();
}

function updateSeasonContextBadge() {
  const select = document.getElementById('season-actif');
  if (!select) return;
  const selected = select.options[select.selectedIndex];
  select.title = selected?.textContent || 'Hors saison';
}

function setupSeasonWorkspaceControls() {
  const seasonSelect = document.getElementById('season-actif');
  const quickCreate = document.getElementById('season-add-quick');
  const quickEdit = document.getElementById('season-edit-quick');

  seasonSelect?.addEventListener('change', async e => {
    const value = normalizeSeasonId(e.target.value || 'none');
    state.activeSeasonId = value;
    setActiveSeasonIdForServer(state.serveur, value);
    updateSeasonContextBadge();
    await refreshSeasonFilterOptions();
    await loadPercos();
  });

  quickCreate?.addEventListener('click', () => {
    openSeasonCreateModal(state.serveur);
  });

  quickEdit?.addEventListener('click', async () => {
    await openSeasonEditModalFromSelection();
  });
}

/* =============================================
   ONGLETS
============================================= */
function setupTabs() {
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
      state.activeTab = btn.dataset.tab;
    });
  });
}

function setupWidgetPanel() {
  const toggleButton = document.getElementById('widget-toggle-badge');

  if (!toggleButton || !window.widgetAPI) {
    return;
  }

  const syncState = widgetState => {
    const isOpen = Boolean(widgetState?.isOpen);
    toggleButton.textContent = isOpen ? 'Widget: ON' : 'Widget: OFF';
    toggleButton.classList.toggle('is-open', isOpen);
  };

  toggleButton.addEventListener('click', async () => {
    const currentState = await window.widgetAPI.getState();
    const nextState = currentState?.isOpen
      ? await window.widgetAPI.close()
      : await window.widgetAPI.open();
    syncState(nextState);
  });

  window.widgetAPI.onStateChanged(syncState);
  window.widgetAPI.getState().then(syncState).catch(() => syncState({ isOpen: false }));
}


/* =============================================
   SERVEUR
============================================= */
function setupServeur() {
  const badge = document.getElementById('serveur-actif');
  badge.addEventListener('click', () => openModal('modal-serveur'));

  document.querySelectorAll('.server-option').forEach(btn => {
    btn.addEventListener('click', async () => {
      state.serveur = btn.dataset.server;
      badge.textContent = state.serveur;
      document.querySelectorAll('.server-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      await refreshActiveSeasonOptions();
      await refreshSeasonFilterOptions();
      closeModal('modal-serveur');
      await loadPercos();
    });
  });

  document.querySelector(`.server-option[data-server="${state.serveur}"]`)?.classList.add('active');
}

async function loadPercos() {
  try {
    const all = await window.percoAPI.getAll('tous');
    const recoltes = window.recolteAPI?.getAll ? await window.recolteAPI.getAll() : [];
    state.percos = all.filter(p => p.serveur === state.serveur && isInActiveSeasonScope(p.seasonId));
    state.lastRecolteByZone = buildLastRecolteByZone(recoltes, state.serveur, state.activeSeasonId);
    renderCards();
    updateDbStatus(true);
  } catch (err) {
    console.error('Erreur chargement :', err);
    updateDbStatus(false);
  }
}

function buildLastRecolteByZone(recoltes, serveur, seasonId = state.activeSeasonId) {
  const byZone = {};
  recoltes
    .filter(r => r.serveur === serveur && normalizeDocSeasonId(r.seasonId) === normalizeSeasonId(seasonId))
    .forEach(r => {
      const zone = r.zone || '';
      if (!zone || !r.date) return;
      const current = byZone[zone];
      const currentTs = current ? new Date(current).getTime() : 0;
      const nextTs = new Date(r.date).getTime();
      if (Number.isFinite(nextTs) && nextTs > currentTs) {
        byZone[zone] = r.date;
      }
    });
  return byZone;
}

function getLastRecolteLabel(zoneName) {
  const date = state.lastRecolteByZone[zoneName];
  if (!date) {
    return {
      text: 'Dernière récolte: —',
      title: 'Aucune récolte enregistrée',
    };
  }

  const absoluteDate = formatDate(date);
  return {
    text: `Dernière récolte: ${formatRelativeDate(date)}`,
    title: `Dernière récolte: ${absoluteDate}`,
  };
}

/* =============================================
   RENDU CARTES
============================================= */
function getPercoForZone(zoneName) {
  const matches = state.percos.filter(p => p.map === zoneName);
  if (matches.length === 0) return null;
  matches.sort((a, b) => new Date(b.dateAjout).getTime() - new Date(a.dateAjout).getTime());
  return matches[0];
}

function getVisibleZones() {
  const search = state.search.toLowerCase().trim();
  let zones = ZONES.map(z => z.zone);

  if (search) {
    zones = zones.filter(zone => zone.toLowerCase().includes(search));
  }

  if (state.showFavoritesOnly) {
    const favs = getFavorites();
    zones = zones.filter(zone => favs.includes(zone));
  }

  if (state.activeTagFilter && state.activeTagFilter.startsWith('tag:')) {
    const tagId = state.activeTagFilter.slice(4);
    zones = zones.filter(zone => getZoneTagIds(zone).includes(tagId));
  }

  return zones;
}

function renderCards() {
  const list = document.getElementById('perco-list');
  const empty = document.getElementById('empty-msg');
  const zones = getVisibleZones();

  document.getElementById('count-label').textContent = `${zones.length} zone(s)`;

  if (zones.length === 0) {
    empty.textContent = state.showFavoritesOnly
      ? 'Aucune zone favorite ne correspond au filtre.'
      : 'Aucune zone ne correspond à la recherche.';
    empty.style.display = 'block';
    list.querySelectorAll('.perco-card').forEach(c => c.remove());
    return;
  }

  empty.style.display = 'none';
  list.querySelectorAll('.perco-card').forEach(c => c.remove());

  zones.forEach(zoneName => {
    const perco = getPercoForZone(zoneName);
    const card = buildCard(zoneName, perco);
    list.appendChild(card);
  });
}

function getZoneHaloColor(zoneName) {
  if (isBdaZone(zoneName)) return '#6f1f22';
  if (isFavorite(zoneName)) return '#e8b84b';
  const zoneTags = getZoneTags(zoneName);
  if (!zoneTags.length) return '';
  return normalizeTagColor(zoneTags[0].color);
}

function buildCard(zoneName, perco) {
  const card = document.createElement('div');
  const zoneMeta = getZoneMeta(zoneName);
  const isBda = Boolean(zoneMeta?.bda);
  const haloColor = getZoneHaloColor(zoneName);
  card.className = `perco-card ${perco ? `statut-${perco.statut}` : 'statut-libre no-perco'} ${haloColor ? 'has-zone-halo' : ''}`;
  if (haloColor) card.style.setProperty('--zone-halo-color', haloColor);
  if (perco?._id) card.dataset.id = perco._id;

  const elapsed = perco?.dateAjout ? formatElapsed(perco.dateAjout) : '--';
  const fav = isFavorite(zoneName);
  const poseLabel = perco ? 'pose' : 'pas pose';
  const lastRecolte = getLastRecolteLabel(zoneName);
  const zoneTags = getZoneTags(zoneName);
  const allTags = getTags();
  const availableTags = allTags.filter(t => !zoneTags.some(z => z.id === t.id));

  card.innerHTML = `
    <div class="card-zone card-zone-main">
      <button class="favorite-star ${fav ? 'active' : ''}" data-zone="${escHtml(zoneName)}" title="Ajouter/Retirer des favoris">${fav ? '★' : '☆'}</button>
      <div class="zone-main-col">
        <div class="card-zone-title-row">
          <span class="card-zone-name">${escHtml(zoneName)}</span>
          ${isBda ? '<span class="zone-bda-chip" title="Zone BDA">BDA</span>' : ''}
        </div>
        <div class="zone-tags-row">
          <div class="zone-tags-list">
            <span class="zone-status-chip ${perco ? 'is-posed' : 'is-not-posed'}">${poseLabel}</span>
            ${zoneTags.length > 0
              ? zoneTags.map(tag => `<button class="zone-tag-chip" data-action="remove-tag" data-zone="${escHtml(zoneName)}" data-tag-id="${escHtml(tag.id)}" title="Retirer ce tag" style="--tag-color:${escHtml(tag.color)}">#${escHtml(tag.name)} ×</button>`).join('')
              : '<span class="zone-tag-empty">Aucun tag</span>'}
          </div>
          <div class="zone-tag-actions">
            <button class="zone-tag-plus-btn" data-zone="${escHtml(zoneName)}" ${availableTags.length === 0 ? 'disabled' : ''}>+</button>
            <div class="zone-tag-menu hidden">
              ${availableTags.length > 0
                ? availableTags.map(tag => `<button class="zone-tag-menu-item" data-action="add-tag" data-zone="${escHtml(zoneName)}" data-tag-id="${escHtml(tag.id)}" style="--tag-color:${escHtml(tag.color)}">#${escHtml(tag.name)}</button>`).join('')
                : '<span class="zone-tag-menu-empty">Tous les tags sont deja attribues</span>'}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-cell">
      <span class="timer-value" data-pose="${perco?.dateAjout || ''}">${elapsed}</span>
      <span class="timer-label">posé</span>
    </div>

    <div class="card-cell">
      <div class="card-icons ${perco ? '' : 'disabled'}">
        <div class="icon-slot" data-type="sacoche" data-id="${perco?._id || ''}" title="Sacoche">
          <div class="icon-circle ${perco?.sacoche ? 'active' : ''}">
            <img class="icon-image" src="assets/icons/Sacoche.png" alt="Sacoche" />
          </div>
          <span class="icon-label">Sacoche</span>
        </div>
        <div class="icon-slot" data-type="coffre" data-id="${perco?._id || ''}" title="Coffre">
          <div class="icon-circle ${perco?.coffre ? 'active' : ''}">
            <img class="icon-image" src="assets/icons/Coffre.png" alt="Coffre" />
          </div>
          <span class="icon-label">Coffre</span>
        </div>
        <div class="icon-slot" data-type="cle" data-id="${perco?._id || ''}" title="Clé">
          <div class="icon-circle ${perco?.cle ? 'active' : ''}">🔑</div>
          <span class="icon-label">Clé</span>
        </div>
      </div>
    </div>

    <div class="card-cell action-cell">
      <div class="action-stack ${perco ? 'mode-recolte' : 'mode-poser'}">
        ${perco
          ? `<button class="btn-recolter btn-mode-recolter" data-id="${perco._id}" data-nom="${escHtml(zoneName)}">Récolter</button>`
          : `<button class="btn-recolter btn-poser btn-mode-poser" data-zone="${escHtml(zoneName)}">Poser</button>`}
        <span class="last-recolte" title="${escHtml(lastRecolte.title)}">${lastRecolte.text}</span>
      </div>
    </div>

    <div class="card-cell action-cell">
      ${perco
        ? `<div class="action-stack action-stack-mort">
             <button class="btn-mort" data-id="${perco._id}" data-nom="${escHtml(zoneName)}">Mort</button>
             <span class="last-recolte ghost" aria-hidden="true">placeholder</span>
           </div>`
        : `<span class="muted-action">—</span>`}
    </div>
  `;

  card.querySelector('.favorite-star').addEventListener('click', e => {
    e.stopPropagation();
    toggleFavorite(zoneName);
  });

  card.querySelectorAll('[data-action="remove-tag"]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      removeTagFromZone(zoneName, btn.dataset.tagId);
      renderCards();
    });
  });

  const addBtn = card.querySelector('.zone-tag-plus-btn');
  const menu = card.querySelector('.zone-tag-menu');
  if (addBtn && menu) {
    addBtn.addEventListener('click', e => {
      e.stopPropagation();
      menu.classList.toggle('hidden');
    });

    card.querySelectorAll('[data-action="add-tag"]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        addTagToZone(zoneName, btn.dataset.tagId);
        renderCards();
      });
    });
  }

  if (perco) {
    card.querySelectorAll('.icon-slot').forEach(slot => {
      slot.addEventListener('click', () => toggleIcon(slot.dataset.id, slot.dataset.type));
    });

    card.querySelector('.btn-recolter').addEventListener('click', e => {
      openRecolter(e.currentTarget.dataset.id, e.currentTarget.dataset.nom);
    });

    card.querySelector('.btn-mort').addEventListener('click', e => {
      openMort(e.currentTarget.dataset.id, e.currentTarget.dataset.nom);
    });

  } else {
    const poserBtn = card.querySelector('.btn-poser');
    if (poserBtn) {
      poserBtn.addEventListener('click', e => {
        openAddWithZone(e.currentTarget.dataset.zone);
      });
    }
  }

  return card;
}

function openAddWithZone(zoneName) {
  openAddModal(zoneName);
}

function setupFavoritesFilter() {
  const actionBar = document.querySelector('.action-bar');
  if (!actionBar) return;

  let favBtn = document.getElementById('btn-favorites-filter');
  if (!favBtn) {
    favBtn = document.createElement('button');
    favBtn.id = 'btn-favorites-filter';
    favBtn.className = 'btn-favorites-filter';
    favBtn.textContent = '★ Mes favoris';
    const right = actionBar.querySelector('.action-bar-right');
    actionBar.insertBefore(favBtn, right || null);
  }

  if (favBtn.dataset.bound === '1') {
    updateFavoritesFilterBtn();
    return;
  }

  favBtn.dataset.bound = '1';
  updateFavoritesFilterBtn();
  favBtn.addEventListener('click', () => {
    state.showFavoritesOnly = !state.showFavoritesOnly;
    updateFavoritesFilterBtn();
    renderCards();
  });
}

function updateFavoritesFilterBtn() {
  const favBtn = document.getElementById('btn-favorites-filter');
  if (!favBtn) return;
  favBtn.classList.toggle('active', state.showFavoritesOnly);
}

/* =============================================
   TIMER
============================================= */
function formatElapsed(dateStr) {
  if (!dateStr) return '--';
  const diff = Date.now() - new Date(dateStr).getTime();
  if (!Number.isFinite(diff) || diff < 0) return '--';
  const h = Math.floor(diff / 3_600_000);
  return `${h}h`;
}

function updateTimers() {
  document.querySelectorAll('.timer-value[data-pose]').forEach(el => {
    el.textContent = formatElapsed(el.dataset.pose);
  });
}

/* =============================================
   TOGGLE SACOCHE / COFFRE
============================================= */
async function toggleIcon(id, type) {
  const perco = state.percos.find(p => p._id === id);
  if (!perco) return;
  const newVal = !perco[type];
  await window.percoAPI.update(id, { [type]: newVal });
  perco[type] = newVal;

  // Mettre à jour le visuel directement
  const card = document.querySelector(`.perco-card[data-id="${id}"]`);
  const slot = card?.querySelector(`.icon-slot[data-type="${type}"] .icon-circle`);
  if (slot) slot.classList.toggle('active', newVal);
}

/* =============================================
   MODALS RÉCOLTER / MORT
============================================= */
function openRecolter(id, nom) {
  state.actionTarget = id;
  document.getElementById('recolter-perco-name').textContent = nom;
  document.getElementById('recolter-valeur').value = '';
  // Reset toggle sur "Récolter & Reposer" par défaut
  state.recolteRepose = true;
  document.getElementById('opt-repose').classList.add('active');
  document.getElementById('opt-norepose').classList.remove('active');
  openModal('modal-recolter');
}

function openMort(id, nom) {
  state.actionTarget = id;
  document.getElementById('mort-perco-name').textContent = nom;
  state.mortRepose = false;
  document.getElementById('opt-mort-norepose')?.classList.add('active');
  document.getElementById('opt-mort-repose')?.classList.remove('active');
  openModal('modal-mort');
}

async function confirmMortAction(repose) {
  if (!state.actionTarget) return;

  state.mortRepose = repose;
  const perco = state.percos.find(p => p._id === state.actionTarget);
  const ownerSnapshot = getZoneOwnerSnapshot(perco?.map || '');
  const pertes = [];
  if (perco?.sacoche) pertes.push('Sacoche');
  if (perco?.coffre) pertes.push('Coffre');
  if (perco?.cle) pertes.push('Clé');

  try {
    await window.recolteAPI.log({
      percoId: state.actionTarget,
      zone:    perco?.map || '',
      seasonId: getCurrentSeasonIdForWrite(),
      serveur: state.serveur,
      valeur: 0,
      repose,
      ownerKey: ownerSnapshot.ownerKey,
      ownerName: ownerSnapshot.ownerName,
      ownerColor: ownerSnapshot.ownerColor,
      ownerTagId: ownerSnapshot.ownerTagId,
      eventType: 'mort',
      pertes,
    });
  } catch (err) {
    console.error('mort log error:', err);
  }

  if (repose) {
    await window.percoAPI.update(state.actionTarget, {
      statut:    'vivant',
      sacoche:   Boolean(perco?.sacoche),
      coffre:    Boolean(perco?.coffre),
      cle:       Boolean(perco?.cle),
      dateAjout: new Date(),
    });

    await logPoseUsage({
      percoId: state.actionTarget,
      zone: perco?.map || '',
      serveur: state.serveur,
      ownerSnapshot,
    });
  } else {
    await window.percoAPI.delete(state.actionTarget);
  }

  closeModal('modal-mort');
  state.actionTarget = null;
  await loadPercos();
}

async function confirmRecolteAction(repose) {
  if (!state.actionTarget) return;

  state.recolteRepose = repose;
  const perco = state.percos.find(p => p._id === state.actionTarget);
  const valeur = parseInt(document.getElementById('recolter-valeur').value) || 0;
  const ownerSnapshot = getZoneOwnerSnapshot(perco?.map || '');

  try {
    await window.recolteAPI.log({
      percoId: state.actionTarget,
      zone:    perco?.map || '',
      seasonId: getCurrentSeasonIdForWrite(),
      serveur: state.serveur,
      valeur,
      repose,
      ownerKey: ownerSnapshot.ownerKey,
      ownerName: ownerSnapshot.ownerName,
      ownerColor: ownerSnapshot.ownerColor,
      ownerTagId: ownerSnapshot.ownerTagId,
      eventType: 'recolte',
    });
  } catch (err) {
    console.error('recolteAPI.log error:', err);
  }

  if (repose) {
    await window.percoAPI.update(state.actionTarget, {
      statut:    'vivant',
      sacoche:   Boolean(perco?.sacoche),
      coffre:    Boolean(perco?.coffre),
      cle:       Boolean(perco?.cle),
      dateAjout: new Date(),
    });

    await logPoseUsage({
      percoId: state.actionTarget,
      zone: perco?.map || '',
      serveur: state.serveur,
      ownerSnapshot,
    });
  } else {
    await window.percoAPI.delete(state.actionTarget);
  }

  closeModal('modal-recolter');
  state.actionTarget = null;
  await loadPercos();
}



/* =============================================
   FORMULAIRE AJOUT
============================================= */
function setupForm() {
  const btnAdd = document.getElementById('btn-add');
  if (btnAdd) {
    btnAdd.addEventListener('click', () => openAddModal(''));
  }

  // Toggle sacoche / coffre / clé dans le formulaire
  document.querySelectorAll('.picker-slot').forEach(slot => {
    slot.addEventListener('click', () => {
      const type = slot.dataset.type;
      state.formIcons[type] = !state.formIcons[type];
      slot.classList.toggle('active', state.formIcons[type]);
      // Mettre à jour le label Oui/Non pour la clé
      if (type === 'cle') {
        slot.querySelector('.picker-label').textContent =
          state.formIcons.cle ? 'Oui' : 'Non';
      }
    });
  });

  // Bouton annuler
  document.getElementById('btn-cancel-add').addEventListener('click', () => closeModal('modal-add'));
  document.getElementById('btn-cancel-recolter').addEventListener('click', () => closeModal('modal-recolter'));
  document.getElementById('btn-cancel-mort').addEventListener('click', () => closeModal('modal-mort'));
  document.getElementById('btn-cancel-season')?.addEventListener('click', () => {
    configureSeasonFormModal('create');
    closeModal('modal-season');
  });

  // Soumission formulaire
  document.getElementById('perco-form').addEventListener('submit', async e => {
    e.preventDefault();
    const zone = document.getElementById('form-zone-search').value.trim();
    if (!zone) {
      document.getElementById('form-zone-search').focus();
      return;
    }
    const data = {
      map:     zone,
      nom:     zone,
      sacoche: state.formIcons.sacoche,
      coffre:  state.formIcons.coffre,
      cle:     state.formIcons.cle,
      seasonId: getCurrentSeasonIdForWrite(),
      serveur: state.serveur,
      statut:  'vivant',
    };
    const created = await window.percoAPI.add(data);

    await logPoseUsage({
      percoId: created?._id || null,
      zone,
      serveur: state.serveur,
      ownerSnapshot: getZoneOwnerSnapshot(zone),
    });

    closeModal('modal-add');
    await loadPercos();
  });
  // Recolte: un clic sur l'option execute directement l'action
  document.getElementById('opt-repose').addEventListener('click', async () => {
    await confirmRecolteAction(true);
  });
  document.getElementById('opt-norepose').addEventListener('click', async () => {
    await confirmRecolteAction(false);
  });

  // Mort: un clic sur l'option exécute directement l'action
  document.getElementById('opt-mort-repose')?.addEventListener('click', async () => {
    await confirmMortAction(true);
  });

  document.getElementById('opt-mort-norepose')?.addEventListener('click', async () => {
    await confirmMortAction(false);
  });

  document.getElementById('season-form')?.addEventListener('submit', async e => {
    e.preventDefault();
    if (!window.seasonAPI?.create) return;

    const seasonId = (document.getElementById('season-form-id')?.value || '').trim();
    const name = (document.getElementById('season-form-name')?.value || '').trim();
    const serveur = document.getElementById('season-form-server')?.value || '';
    const startInput = document.getElementById('season-form-start')?.value || '';
    const endInput = document.getElementById('season-form-end')?.value || '';

    if (!name || !serveur || !startInput || !endInput) {
      window.alert('Complete tous les champs de la saison.');
      return;
    }

    const dateDebut = parseDayToIso(startInput, false);
    const dateFin = parseDayToIso(endInput, true);

    if (!dateDebut || !dateFin) {
      window.alert('Format de date invalide.');
      return;
    }

    if (new Date(dateFin).getTime() < new Date(dateDebut).getTime()) {
      window.alert('La date de fin doit etre superieure ou egale a la date de debut.');
      return;
    }

    try {
      const isEdit = state.seasonFormMode === 'edit' && Boolean(seasonId);
      const saved = isEdit
        ? await window.seasonAPI.update({ id: seasonId, name, serveur, dateDebut, dateFin })
        : await window.seasonAPI.create({ name, serveur, dateDebut, dateFin });

      configureSeasonFormModal('create');
      closeModal('modal-season');

      if (serveur === state.serveur) {
        const preferredSeasonId = isEdit ? state.activeSeasonId : (saved?._id || 'none');
        await refreshActiveSeasonOptions(preferredSeasonId);
      }

      await refreshSeasonFilterOptions(saved?._id || undefined);
      if (state.activeTab === 'dashboard') {
        await loadDashboard(document.getElementById('dash-filtre-serveur')?.value || 'tous');
      }
      await loadPercos();
    } catch (error) {
      window.alert(error?.message || 'Impossible de creer la saison.');
    }
  });
}

function openAddModal(prefilledZone) {
  document.getElementById('perco-form').reset();
  document.getElementById('form-id').value = '';

  // Reset icônes
  state.formIcons = { sacoche: false, coffre: false, cle: false };
  document.getElementById('picker-sacoche').classList.remove('active');
  document.getElementById('picker-coffre').classList.remove('active');
  const pickCle = document.getElementById('picker-cle');
  pickCle.classList.remove('active');
  pickCle.querySelector('.picker-label').textContent = 'Non';

  const zoneSearch = document.getElementById('form-zone-search');
  const zone = (prefilledZone || '').trim();

  zoneSearch.value = zone;

  openModal('modal-add');
}

async function logPoseUsage({ percoId, zone, serveur, ownerSnapshot }) {
  if (!window.recolteAPI?.log) return;

  try {
    await window.recolteAPI.log({
      percoId: percoId || undefined,
      zone: zone || '',
      seasonId: getCurrentSeasonIdForWrite(),
      serveur,
      valeur: 0,
      repose: true,
      potionLevel: getPotionLevelFromZone(zone),
      ownerKey: ownerSnapshot?.ownerKey || 'moi',
      ownerName: ownerSnapshot?.ownerName || 'Moi',
      ownerColor: ownerSnapshot?.ownerColor || '#7a7a9a',
      ownerTagId: ownerSnapshot?.ownerTagId || '',
      eventType: 'pose',
      pertes: [],
    });
  } catch (err) {
    console.error('pose log error:', err);
  }
}

/* =============================================
   DASHBOARD
============================================= */
function setupDashboard() {
  const savedContentMode = localStorage.getItem(DASHBOARD_CONTENT_MODE_STORAGE_KEY);
  if (savedContentMode === 'zones' || savedContentMode === 'history') {
    state.dashboardContentMode = savedContentMode;
  }

  const savedSeasonId = localStorage.getItem(DASHBOARD_SEASON_FILTER_STORAGE_KEY);
  if (savedSeasonId) {
    state.dashboardSeasonId = savedSeasonId;
  }

  document.querySelector('.tab[data-tab="dashboard"]').addEventListener('click', () => {
    loadDashboard(document.getElementById('dash-filtre-serveur').value);
  });
  document.getElementById('dash-filtre-serveur').addEventListener('change', e => {
    refreshSeasonFilterOptions();
    loadDashboard(e.target.value);
  });
  document.getElementById('dash-filtre-periode').addEventListener('change', () => {
    loadDashboard(document.getElementById('dash-filtre-serveur').value);
  });
  document.getElementById('dash-filtre-saison')?.addEventListener('change', e => {
    state.dashboardSeasonId = e.target.value || 'none';
    localStorage.setItem(DASHBOARD_SEASON_FILTER_STORAGE_KEY, state.dashboardSeasonId);
    syncDashboardTimeFilterState();
    loadDashboard(document.getElementById('dash-filtre-serveur').value);
  });
  document.getElementById('dash-filtre-zone')?.addEventListener('change', () => {
    loadDashboard(document.getElementById('dash-filtre-serveur').value);
  });
  document.getElementById('dash-zone-sort')?.addEventListener('change', e => {
    state.dashboardZoneSort = e.target.value || 'kamas';
    loadDashboard(document.getElementById('dash-filtre-serveur').value);
  });

  document.querySelectorAll('#dash-view-switch .dash-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.dashboardViewMode = btn.dataset.mode;
      document.querySelectorAll('#dash-view-switch .dash-switch-btn').forEach(b => {
        b.classList.toggle('active', b === btn);
      });
      loadDashboard(document.getElementById('dash-filtre-serveur').value);
    });
  });

  document.querySelectorAll('#dash-content-switch .dash-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.content;
      if (mode !== 'zones' && mode !== 'history') return;
      state.dashboardContentMode = mode;
      localStorage.setItem(DASHBOARD_CONTENT_MODE_STORAGE_KEY, mode);
      syncDashboardContentSwitch();
      applyDashboardContentView();
    });
  });

  document.getElementById('dash-season-delete')?.addEventListener('click', async () => {
    await handleDeleteSeason();
  });

  syncDashboardContentSwitch();
  applyDashboardContentView();
  refreshSeasonFilterOptions();
  syncDashboardTimeFilterState();
}

function syncDashboardContentSwitch() {
  document.querySelectorAll('#dash-content-switch .dash-switch-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.content === state.dashboardContentMode);
  });
}

function applyDashboardContentView() {
  const zonesBox = document.querySelector('.dash-zones-box');
  const historyBox = document.querySelector('.dash-history');
  const showHistory = state.dashboardContentMode === 'history';

  zonesBox?.classList.toggle('hidden', showHistory);
  historyBox?.classList.toggle('hidden', !showHistory);
}

function getSeasonServerFilterTarget() {
  const filter = document.getElementById('dash-filtre-serveur')?.value || 'tous';
  return filter === 'tous' ? null : filter;
}

function seasonDateOnly(dateStr) {
  const d = new Date(dateStr);
  if (!Number.isFinite(d.getTime())) return 'date invalide';
  return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatSeasonOptionLabel(season, withServerPrefix = false) {
  const serverPrefix = withServerPrefix ? `${season.serveur} · ` : '';
  return `${serverPrefix}${season.name} (${seasonDateOnly(season.dateDebut)} → ${seasonDateOnly(season.dateFin)})`;
}

function parseDayToIso(dayValue, endOfDay = false) {
  const clean = String(dayValue || '').trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(clean)) return null;

  const date = new Date(`${clean}T${endOfDay ? '23:59:59.999' : '00:00:00.000'}`);
  if (!Number.isFinite(date.getTime())) return null;
  return date.toISOString();
}

async function refreshSeasonFilterOptions(preferredId) {
  const select = document.getElementById('dash-filtre-saison');
  if (!select || !window.seasonAPI?.list) return;

  const serverTarget = getSeasonServerFilterTarget();
  const allSeasons = await window.seasonAPI.list();
  const filtered = (allSeasons || [])
    .filter(season => !serverTarget || season.serveur === serverTarget)
    .sort((a, b) => new Date(b.dateDebut).getTime() - new Date(a.dateDebut).getTime());

  const shouldPrefixServer = !serverTarget;
  select.innerHTML = [
    '<option value="none">Aucune saison (periode ci-dessus)</option>',
    ...filtered.map(season => (
      `<option value="${escHtml(season._id)}">${escHtml(formatSeasonOptionLabel(season, shouldPrefixServer))}</option>`
    )),
  ].join('');

  const candidate = preferredId || state.dashboardSeasonId || 'none';
  const selected = filtered.some(season => season._id === candidate) ? candidate : 'none';
  select.value = selected;
  state.dashboardSeasonId = selected;
  localStorage.setItem(DASHBOARD_SEASON_FILTER_STORAGE_KEY, selected);
  syncDashboardTimeFilterState();
}

function getSelectedSeason(seasons) {
  const seasonId = document.getElementById('dash-filtre-saison')?.value || 'none';
  if (!seasonId || seasonId === 'none') return null;
  return (seasons || []).find(s => s._id === seasonId) || null;
}

function isInSeasonRange(dateStr, season) {
  const ts = new Date(dateStr).getTime();
  const start = new Date(season?.dateDebut).getTime();
  const end = new Date(season?.dateFin).getTime();
  if (!Number.isFinite(ts) || !Number.isFinite(start) || !Number.isFinite(end)) return false;
  return ts >= start && ts <= end;
}

function syncDashboardTimeFilterState() {
  const hasSeason = (document.getElementById('dash-filtre-saison')?.value || 'none') !== 'none';
  const periodSelect = document.getElementById('dash-filtre-periode');
  if (periodSelect) {
    periodSelect.disabled = hasSeason;
    periodSelect.title = hasSeason
      ? 'Filtre periode desactive car une saison est selectionnee'
      : '';
  }
}

async function handleDeleteSeason() {
  if (!window.seasonAPI?.delete) return;

  const seasonId = document.getElementById('dash-filtre-saison')?.value || 'none';
  if (seasonId === 'none') {
    window.alert('Selectionne une saison a supprimer.');
    return;
  }

  const ok = window.confirm('Supprimer cette saison ?');
  if (!ok) return;

  try {
    await window.seasonAPI.delete(seasonId);
    await refreshSeasonFilterOptions('none');
    await refreshActiveSeasonOptions();
    await loadDashboard(document.getElementById('dash-filtre-serveur')?.value || 'tous');
  } catch (error) {
    window.alert(error?.message || 'Impossible de supprimer la saison.');
  }
}

function isInSelectedPeriod(dateStr, period) {
  if (period === 'all') return true;

  const ts = new Date(dateStr).getTime();
  if (!Number.isFinite(ts)) return false;

  const now = Date.now();
  const ranges = {
    '24h': 24 * 60 * 60 * 1000,
    '7d': 7 * 24 * 60 * 60 * 1000,
    '30d': 30 * 24 * 60 * 60 * 1000,
    '90d': 90 * 24 * 60 * 60 * 1000,
  };

  const windowMs = ranges[period] ?? ranges['30d'];
  return ts >= now - windowMs;
}

function isDashboardMineRecord(record, favoritesResolver) {
  const ownerKey = record.ownerKey || (record.ownerTagId ? `tag:${record.ownerTagId}` : 'moi');
  if (ownerKey === 'moi') return true;
  if (!record.zone) return false;
  return favoritesResolver(record.serveur || state.serveur, normalizeDocSeasonId(record.seasonId)).has(record.zone);
}

async function loadDashboard(filtreServeur = 'tous') {
  applyDashboardContentView();

  const all = await window.recolteAPI.getAll();
  let data = filtreServeur === 'tous' ? all : all.filter(r => r.serveur === filtreServeur);
  const seasons = window.seasonAPI?.list ? await window.seasonAPI.list() : [];
  const selectedSeason = getSelectedSeason(seasons);

  if (selectedSeason) {
    data = data.filter(r => {
      const docSeasonId = normalizeDocSeasonId(r.seasonId);
      if (docSeasonId === selectedSeason._id) return true;
      return docSeasonId === 'none'
        && r.serveur === selectedSeason.serveur
        && isInSeasonRange(r.date, selectedSeason);
    });
  } else {
    const period = document.getElementById('dash-filtre-periode')?.value || '30d';
    data = data.filter(r => isInSelectedPeriod(r.date, period));
  }

  if (state.dashboardViewMode === 'mine') {
    const favoritesByServer = new Map();
    const getFavoritesSetForServer = (serverName, seasonId) => {
      const server = normalizeServerName(serverName);
      const season = normalizeSeasonId(seasonId);
      const key = `${server}::${season}`;
      if (!favoritesByServer.has(key)) {
        favoritesByServer.set(key, new Set(getFavorites(server, season)));
      }
      return favoritesByServer.get(key);
    };

    data = data.filter(r => isDashboardMineRecord(r, getFavoritesSetForServer));
  }

  const selectedZone = updateDashboardZoneFilterOptions(data);
  if (selectedZone !== 'all') {
    data = data.filter(r => (r.zone || '') === selectedZone);
  }

  const poseEvents = data.filter(r => r.eventType === 'pose');
  const dashboardRows = data.filter(r => r.eventType !== 'pose');
  const recoltes = dashboardRows.filter(r => (r.eventType || 'recolte') === 'recolte');
  const morts = dashboardRows.filter(r => r.eventType === 'mort');

  const totalKamas   = recoltes.reduce((s, r) => s + (r.valeur || 0), 0);
  const countReposes = recoltes.filter(r => r.repose).length;

  document.getElementById('stat-total-kamas').textContent   = formatKamas(totalKamas);
  document.getElementById('stat-count-recoltes').textContent = recoltes.length;
  document.getElementById('stat-count-reposes').textContent  = countReposes;
  const deathsEl = document.getElementById('stat-count-morts');
  if (deathsEl) deathsEl.textContent = morts.length;
  const lostSacoches = morts.reduce((sum, r) => (
    sum + ((Array.isArray(r.pertes) && r.pertes.includes('Sacoche')) ? 1 : 0)
  ), 0);
  const lostCoffres = morts.reduce((sum, r) => (
    sum + ((Array.isArray(r.pertes) && r.pertes.includes('Coffre')) ? 1 : 0)
  ), 0);
  const lostSacochesEl = document.getElementById('stat-count-sacoches-perdues');
  if (lostSacochesEl) lostSacochesEl.textContent = lostSacoches;
  const lostCoffresEl = document.getElementById('stat-count-coffres-perdus');
  if (lostCoffresEl) lostCoffresEl.textContent = lostCoffres;

  const totalPotions = poseEvents.length;
  const potionsEl = document.getElementById('stat-count-potions');
  if (potionsEl) potionsEl.textContent = totalPotions;

  renderPotionUsage(poseEvents);
  renderZoneReport(dashboardRows);

  const list = document.getElementById('recolte-history-list');
  if (dashboardRows.length === 0) {
    list.innerHTML = state.dashboardViewMode === 'mine'
      ? '<div class="empty-msg">Aucune récolte/mort pour mes zones.</div>'
      : '<div class="empty-msg">Aucune récolte ou mort enregistrée.</div>';
    return;
  }

  const grouped = new Map();
  dashboardRows.slice(0, 300).forEach(r => {
    const ownerKey = r.ownerKey || (r.ownerTagId ? `tag:${r.ownerTagId}` : 'moi');
    const ownerName = r.ownerName || 'Moi';
    const ownerColor = normalizeTagColor(r.ownerColor || '#7a7a9a');

    if (!grouped.has(ownerKey)) {
      grouped.set(ownerKey, {
        ownerName,
        ownerColor,
        rows: [],
        totalKamas: 0,
        count: 0,
      });
    }

    const g = grouped.get(ownerKey);
    g.rows.push(r);
    g.totalKamas += r.valeur || 0;
    g.count += 1;
  });

  list.innerHTML = [...grouped.values()].map(group => `
    <div class="dash-owner-section">
      <div class="dash-owner-header">
        <span class="dash-owner-chip" style="--owner-color:${escHtml(group.ownerColor)}">${escHtml(group.ownerName)}</span>
        <span class="dash-owner-stats">${group.count} recolte(s) · ${formatKamas(group.totalKamas)}</span>
      </div>
      ${group.rows.map(r => `
        <div class="recolte-row">
          <span class="rcol-zone">${escHtml(r.zone || '—')}</span>
          <span class="rcol-serveur">${escHtml(r.serveur || '—')}</span>
          <span class="rcol-valeur">${(r.eventType || 'recolte') === 'mort' ? '—' : (r.valeur ? formatKamas(r.valeur) : '—')}</span>
          <span class="rcol-repose">
            ${renderDashboardEventBadge(r)}
          </span>
          <span class="rcol-date">${formatDate(r.date)}</span>
          <button class="btn-delete-dashboard-row" data-id="${escHtml(r._id || '')}" title="Supprimer cette ligne" aria-label="Supprimer cette ligne">🗑</button>
        </div>
      `).join('')}
    </div>
  `).join('');

  list.querySelectorAll('.btn-delete-dashboard-row').forEach(btn => {
    btn.addEventListener('click', async e => {
      e.stopPropagation();
      const rowId = btn.dataset.id;
      if (!rowId) return;

      const targetRow = dashboardRows.find(r => r._id === rowId);

      const ok = window.confirm('Supprimer cette ligne du dashboard ?');
      if (!ok) return;

      try {
        if (targetRow?.repose) {
          const linkedPose = findLinkedPoseEventForRow(poseEvents, targetRow);
          if (linkedPose?._id) {
            await window.recolteAPI.delete(linkedPose._id);
          }
        }

        await window.recolteAPI.delete(rowId);
        await refreshSeasonFilterOptions();
        await loadDashboard(document.getElementById('dash-filtre-serveur').value);
      } catch (err) {
        console.error('delete dashboard row error:', err);
      }
    });
  });
}

function updateDashboardZoneFilterOptions(records) {
  const select = document.getElementById('dash-filtre-zone');
  if (!select) return 'all';

  const previous = select.value || 'all';
  const zones = [...new Set((records || [])
    .map(r => String(r.zone || '').trim())
    .filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));

  select.innerHTML = [
    '<option value="all">Toutes les zones</option>',
    ...zones.map(zone => `<option value="${escHtml(zone)}">${escHtml(zone)}</option>`),
  ].join('');

  const selected = zones.includes(previous) ? previous : 'all';
  select.value = selected;
  return selected;
}

function buildZoneReportRows(rows) {
  const byZone = new Map();

  (rows || []).forEach(r => {
    const zone = String(r.zone || '').trim() || '—';
    if (!byZone.has(zone)) {
      byZone.set(zone, {
        zone,
        kamas: 0,
        recoltes: 0,
        morts: 0,
        reposes: 0,
      });
    }

    const row = byZone.get(zone);
    const type = r.eventType || 'recolte';

    if (type === 'recolte') {
      row.kamas += r.valeur || 0;
      row.recoltes += 1;
    }
    if (type === 'mort') {
      row.morts += 1;
    }
    if (r.repose) {
      row.reposes += 1;
    }
  });

  const list = [...byZone.values()];
  const sortMode = state.dashboardZoneSort || 'kamas';

  if (sortMode === 'alpha') {
    list.sort((a, b) => a.zone.localeCompare(b.zone, 'fr', { sensitivity: 'base' }));
  } else if (sortMode === 'recoltes') {
    list.sort((a, b) => b.recoltes - a.recoltes || b.kamas - a.kamas);
  } else if (sortMode === 'morts') {
    list.sort((a, b) => b.morts - a.morts || b.kamas - a.kamas);
  } else {
    list.sort((a, b) => b.kamas - a.kamas || b.recoltes - a.recoltes);
  }

  return list;
}

function renderZoneReport(rows) {
  const report = document.getElementById('dash-zone-report');
  const meta = document.getElementById('dash-zones-meta');
  if (!report || !meta) return;

  const zoneRows = buildZoneReportRows(rows);
  if (zoneRows.length === 0) {
    meta.textContent = 'Aucune donnée';
    report.innerHTML = '<div class="dash-zone-empty">Aucune récolte/mort enregistrée sur la période.</div>';
    return;
  }

  const totalKamas = zoneRows.reduce((sum, r) => sum + r.kamas, 0);
  meta.textContent = `${zoneRows.length} zone(s) · ${formatKamas(totalKamas)}`;

  report.innerHTML = `
    <div class="dash-zone-row head">
      <span>Zone</span>
      <span style="text-align:right">Kamas</span>
      <span style="text-align:right">Récoltes</span>
      <span style="text-align:right">Morts</span>
      <span style="text-align:right">Reposées</span>
    </div>
    ${zoneRows.map(r => `
      <div class="dash-zone-row">
        <span class="dash-zone-name">${escHtml(r.zone)}</span>
        <span class="dash-zone-kamas">${formatKamas(r.kamas)}</span>
        <span class="dash-zone-num">${r.recoltes}</span>
        <span class="dash-zone-num">${r.morts}</span>
        <span class="dash-zone-num">${r.reposes}</span>
      </div>
    `).join('')}
  `;
}

function buildPotionUsageByLevel(poseEvents) {
  return poseEvents.reduce((acc, event) => {
    const level = Number.isFinite(event.potionLevel)
      ? event.potionLevel
      : getPotionLevelFromZone(event.zone);
    if (!Number.isFinite(level)) return acc;
    acc[level] = (acc[level] || 0) + 1;
    return acc;
  }, {});
}

function buildPotionUsageByTag(poseEvents) {
  const grouped = new Map();

  poseEvents.forEach(event => {
    const ownerKey = event.ownerKey || (event.ownerTagId ? `tag:${event.ownerTagId}` : 'moi');
    const ownerName = event.ownerName || 'Moi';
    const ownerColor = normalizeTagColor(event.ownerColor || '#7a7a9a');
    const level = Number.isFinite(event.potionLevel)
      ? event.potionLevel
      : getPotionLevelFromZone(event.zone);

    if (!Number.isFinite(level)) return;

    if (!grouped.has(ownerKey)) {
      grouped.set(ownerKey, {
        ownerKey,
        ownerName,
        ownerColor,
        total: 0,
        byLevel: {},
      });
    }

    const row = grouped.get(ownerKey);
    row.total += 1;
    row.byLevel[level] = (row.byLevel[level] || 0) + 1;
  });

  return [...grouped.values()]
    .map(row => ({
      ...row,
      levels: Object.entries(row.byLevel)
        .map(([level, count]) => ({ level: Number(level), count }))
        .sort((a, b) => b.level - a.level),
    }))
    .sort((a, b) => b.total - a.total);
}

function renderPotionUsage(poseEvents) {
  const list = document.getElementById('dash-potion-levels');
  const meta = document.getElementById('dash-potions-meta');
  if (!list || !meta) return;

  const byLevel = buildPotionUsageByLevel(poseEvents);
  const entries = Object.entries(byLevel)
    .map(([level, count]) => ({ level: Number(level), count }))
    .sort((a, b) => b.level - a.level);

  const total = entries.reduce((sum, row) => sum + row.count, 0);
  meta.textContent = total > 0
    ? `${total} popo(s) utilisées` 
    : 'Aucune popo utilisée';

  if (entries.length === 0) {
    list.innerHTML = '<div class="dash-potion-empty">Aucune pose suivie pour le moment.</div>';
    return;
  }
  const byTag = buildPotionUsageByTag(poseEvents);

  list.innerHTML = `
    <div class="dash-potion-section dash-potion-tags-section">
      <div class="dash-potion-section-title">Par tag</div>
      ${byTag.map(row => `
        <div class="dash-potion-tag-row">
          <span class="dash-owner-chip dash-owner-chip-inline" style="--owner-color:${escHtml(row.ownerColor)}">${escHtml(row.ownerName)}</span>
          <div class="dash-potion-tag-levels">
            ${row.levels.map(levelRow => `
              <span class="dash-potion-tag-level-chip">${levelRow.level}: ${levelRow.count}</span>
            `).join('')}
          </div>
          <span class="dash-potion-tag-total">${row.total}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function findLinkedPoseEventForRow(poseEvents, row) {
  if (!Array.isArray(poseEvents) || !row) return null;

  const rowTs = new Date(row.date).getTime();
  if (!Number.isFinite(rowTs)) return null;

  const ownerKey = row.ownerKey || (row.ownerTagId ? `tag:${row.ownerTagId}` : 'moi');

  const candidates = poseEvents.filter(event => {
    if (event.eventType !== 'pose') return false;
    if ((event.zone || '') !== (row.zone || '')) return false;
    if ((event.serveur || '') !== (row.serveur || '')) return false;

    const eventOwnerKey = event.ownerKey || (event.ownerTagId ? `tag:${event.ownerTagId}` : 'moi');
    if (eventOwnerKey !== ownerKey) return false;

    if (row.percoId && event.percoId && String(event.percoId) !== String(row.percoId)) {
      return false;
    }

    const eventTs = new Date(event.date).getTime();
    if (!Number.isFinite(eventTs)) return false;

    const delta = eventTs - rowTs;
    return delta >= -60_000 && delta <= 10 * 60_000;
  });

  if (candidates.length === 0) return null;

  candidates.sort((a, b) => {
    const aTs = new Date(a.date).getTime();
    const bTs = new Date(b.date).getTime();
    return Math.abs(aTs - rowTs) - Math.abs(bTs - rowTs);
  });

  return candidates[0];
}

function renderDashboardEventBadge(r) {
  const type = r.eventType || 'recolte';
  if (type === 'mort') {
    const pertes = Array.isArray(r.pertes) && r.pertes.length > 0
      ? ` title="Perdu: ${escHtml(r.pertes.join(', '))}"`
      : '';
    if (r.repose) {
      return `<span class="badge-mort-event"${pertes}>💀 Mort &amp; Reposé</span>`;
    }
    return `<span class="badge-mort-event"${pertes}>💀 Mort</span>`;
  }
  return `<span class="${r.repose ? 'badge-repose' : 'badge-norepose'}">${r.repose ? '📍 Reposé' : '✔️ Récolté'}</span>`;
}

function formatKamas(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + ' M';
  if (n >= 1_000)     return Math.round(n / 1_000) + ' k';
  return String(n);
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' })
    + ' ' + d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}

function formatRelativeDate(dateStr) {
  const ts = new Date(dateStr).getTime();
  if (!Number.isFinite(ts)) return formatDate(dateStr);

  const diffMs = Date.now() - ts;
  if (diffMs < 0) return 'dans quelques instants';

  const minutes = Math.floor(diffMs / 60_000);
  if (minutes < 1) return "a l'instant";
  if (minutes < 60) return `il y a ${minutes} min`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `il y a ${hours} h`;

  const days = Math.floor(hours / 24);
  if (days === 1) return 'hier';
  if (days < 7) return `il y a ${days} j`;

  return formatDate(dateStr);
}

/* =============================================
   RECHERCHE
============================================= */
function setupSearch() {
  document.getElementById('search').addEventListener('input', e => {
    state.search = e.target.value;
    renderCards();
  });
}

/* =============================================
   MODALS GÉNÉRIQUES
============================================= */
function setupModals() {
  // Fermer via overlay background
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  // Fermer via touche Échap
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay:not(.hidden)').forEach(m => closeModal(m.id));
    }
  });

  // Boutons ✕ (data-modal)
  document.querySelectorAll('.modal-close[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.modal));
  });

  // Fallback si le bouton de confirmation existe encore
  document.getElementById('btn-recolter-ok')?.addEventListener('click', async () => {
    await confirmRecolteAction(state.recolteRepose);
  });

  // Fallback si le bouton de confirmation existe encore
  document.getElementById('btn-mort-ok')?.addEventListener('click', async () => {
    await confirmMortAction(state.mortRepose);
  });
}

function openModal(id)  { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

/* =============================================
   HELPERS
============================================= */
function updateDbStatus(ok) {
  const el = document.getElementById('db-status');
  el.textContent = '●';
  el.className = 'db-status ' + (ok ? 'connected' : 'error');
  el.title = ok ? 'MongoDB connecté' : 'MongoDB déconnecté';
}

function statutEmoji(s) {
  return { vivant: '🟢', attaqué: '🟠', mort: '🔴' }[s] ?? '❓';
}

function escHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
