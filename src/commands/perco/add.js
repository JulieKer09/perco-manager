const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Percepteur = require('../../models/Percepteur');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('perco-add')
    .setDescription('Ajouter un percepteur sur une map')
    .addStringOption(opt =>
      opt.setName('map')
        .setDescription('Nom ou coordonnées de la map (ex: Astrub [-1,0])')
        .setRequired(true))
    .addStringOption(opt =>
      opt.setName('nom')
        .setDescription('Nom du percepteur')
        .setRequired(false))
    .addStringOption(opt =>
      opt.setName('position')
        .setDescription('Position précise sur la map (ex: bas-gauche)')
        .setRequired(false))
    .addStringOption(opt =>
      opt.setName('notes')
        .setDescription('Notes supplémentaires')
        .setRequired(false)),

  async execute(interaction) {
    const map = interaction.options.getString('map');
    const nom = interaction.options.getString('nom') ?? `Perco de ${interaction.user.username}`;
    const position = interaction.options.getString('position');
    const notes = interaction.options.getString('notes') ?? '';

    const perco = new Percepteur({
      nom,
      map,
      position,
      notes,
      posePar: interaction.user.username,
      poseParId: interaction.user.id,
    });

    await perco.save();

    const embed = new EmbedBuilder()
      .setTitle('✅ Percepteur ajouté')
      .setColor(0x00b300)
      .addFields(
        { name: '📛 Nom', value: nom, inline: true },
        { name: '🗺️ Map', value: map, inline: true },
        { name: '📍 Position', value: position ?? 'Non précisée', inline: true },
        { name: '👤 Posé par', value: interaction.user.username, inline: true },
        { name: '📝 Notes', value: notes || 'Aucune', inline: false },
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
