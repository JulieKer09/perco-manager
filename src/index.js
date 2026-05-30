require('dotenv').config();
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// --- Client Discord ---
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.commands = new Collection();

// --- Chargement des commandes ---
function loadCommands(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      loadCommands(fullPath);
    } else if (entry.name.endsWith('.js')) {
      const command = require(fullPath);
      if (command.data && command.execute) {
        client.commands.set(command.data.name, command);
        console.log(`  ✔ Commande chargée : ${command.data.name}`);
      }
    }
  }
}

console.log('📂 Chargement des commandes...');
loadCommands(path.join(__dirname, 'commands'));

// --- Chargement des événements ---
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(f => f.endsWith('.js'));

for (const file of eventFiles) {
  const event = require(path.join(eventsPath, file));
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
  console.log(`  ✔ Événement chargé : ${event.name}`);
}

// --- Connexion MongoDB ---
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connecté à MongoDB'))
  .catch(err => {
    console.error('❌ Erreur MongoDB :', err);
    process.exit(1);
  });

// --- Lancement du bot ---
client.login(process.env.DISCORD_TOKEN);
