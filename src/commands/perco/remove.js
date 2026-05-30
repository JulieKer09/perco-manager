const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Percepteur = require('../../models/Percepteur');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('perco-remove')
    .setDescription('Supprimer un percepteur')
    .addStringOption(opt =>
      opt.setName('map')
        .setDescription('Map du percepteur à supprimer')
        .setRequired(true)),

  async execute(interaction) {
    const map = interaction.options.getString('map');

    const perco = await Percepteur.findOneAndDelete({
      map: { $regex: new RegExp(map, 'i') },
      statut: { $ne: 'mort' },
    });

    if (!perco) {
      return interaction.reply({
        content: `❌ Aucun percepteur actif trouvé sur la map **${map}**.`,
        ephemeral: true,
      });
    }

    const embed = new EmbedBuilder()
      .setTitle('🗑️ Percepteur supprimé')
      .setColor(0xff4444)
      .addFields(
        { name: '📛 Nom', value: perco.nom, inline: true },
        { name: '🗺️ Map', value: perco.map, inline: true },
        { name: '👤 Supprimé par', value: interaction.user.username, inline: true },
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
