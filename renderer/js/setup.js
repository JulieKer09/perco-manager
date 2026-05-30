const form = document.getElementById('setup-form');
const statusEl = document.getElementById('status');
const saveBtn = document.getElementById('save-btn');

const mongoInput = document.getElementById('mongodb-uri');
const clientInput = document.getElementById('client-id');
const redirectInput = document.getElementById('redirect-uri');
const envPathEl = document.getElementById('env-path');

function setStatus(message, type = '') {
  statusEl.textContent = message || '';
  statusEl.classList.remove('ok', 'error');
  if (type) {
    statusEl.classList.add(type);
  }
}

async function prefillConfig() {
  if (!window.setupAPI?.getConfig) return;

  try {
    const config = await window.setupAPI.getConfig();
    mongoInput.value = config.mongodbUri || '';
    clientInput.value = config.clientId || '';
    redirectInput.value = config.redirectUri || 'http://127.0.0.1:43871/callback';
    envPathEl.textContent = config.envPath ? `Le fichier sera enregistre ici: ${config.envPath}` : '';
  } catch (error) {
    setStatus(error?.message || 'Impossible de charger la configuration.', 'error');
  }
}

form.addEventListener('submit', async event => {
  event.preventDefault();

  const payload = {
    mongodbUri: mongoInput.value.trim(),
    clientId: clientInput.value.trim(),
    redirectUri: redirectInput.value.trim(),
  };

  saveBtn.disabled = true;
  setStatus('Verification et demarrage...', '');

  try {
    await window.setupAPI.saveConfig(payload);
    setStatus('Configuration enregistree. Ouverture...', 'ok');
  } catch (error) {
    setStatus(error?.message || 'Erreur de configuration.', 'error');
  } finally {
    saveBtn.disabled = false;
  }
});

prefillConfig();
