# Perco Manager v1.0.1

Correctif de configuration pour simplifier le partage de l'application.

## Correctifs
- Chargement du fichier .env plus robuste (prise en charge du dossier utilisateur).
- Message d'erreur de demarrage ameliore quand MONGODB_URI est manquant.
- Instructions plus claires pour configurer la connexion MongoDB/Discord.

## Installation
1. Telecharger Perco Dofus Setup 1.0.1.exe.
2. Installer l'application.
3. Au premier lancement, creer un fichier .env si necessaire.

## Fichier .env minimal
MONGODB_URI=mongodb+srv://.../perco-dofus
CLIENT_ID=votre_client_id_discord
DISCORD_REDIRECT_URI=http://127.0.0.1:43871/callback

## Important
- Cette version corrige l'erreur MONGODB_URI manquant lors d'un partage a d'autres utilisateurs.
- Windows SmartScreen peut afficher un avertissement sur les applications non signees.
