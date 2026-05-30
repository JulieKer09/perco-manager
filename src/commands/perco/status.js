const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Percepteur = require('../../models/Percepteur');

const STATUT_COULEUR = {
  vivant: 0x00b300,
  attaqué: 0xff8c00,
  mort: 0xff0000,
};

const STATUT_EMOJI = {
  vivant: '🟢',
  attaqué: '🟠',
  mort: '🔴',
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName('perco-status')
    .setDescription('Mettre à jour le statut d\'un percepteur')
    .addStringOption(opt =>
      opt.setName('map')
        .setDescription('Map du percepteur')
        .setRequired(true))
    .addStringOption(opt =>
      opt.setName('statut')
        .setDescription('Nouveau statut')
        .setRequired(true)
        .addChoices(
          { name: '🟢 Vivant', value: 'vivant' },
          { name: '🟠 Attaqué', value: 'attaqué' },
          { name: '🔴 Mort', value: 'mort' },
        ))
    .addStringOption(opt =>
      opt.setName('notes')
        .setDescription('Notes (ex: attaqué par quelle guilde)')
        .setRequired(false)),

  async execute(interaction) {
    const map = interaction.options.getString('map');
    const statut = interaction.options.getString('statut');
    const notes = interaction.options.getString('notes');

    const perco = await Percepteur.findOne({
      map: { $regex: new RegExp(map, 'i') },
    }).sort({ dateAjout: -1 });

    if (!perco) {
      return interaction.reply({
        content: `❌ Aucun percepteur trouvé sur la map **${map}**.`,
        ephemeral: true,
      });
    }

    const ancienStatut = perco.statut;
    perco.statut = statut;
    if (notes) perco.notes = notes;
    await perco.save();

    const embed = new EmbedBuilder()
      .setTitle(`${STATUT_EMOJI[statut]} Statut mis à jour`)
      .setColor(STATUT_COULEUR[statut])
      .addFields(
        { name: '📛 Nom', value: perco.nom, inline: true },
        { name: '🗺️ Map', value: perco.map, inline: true },
        { name: '🔄 Statut', value: `${STATUT_EMOJI[ancienStatut]} ${ancienStatut} → ${STATUT_EMOJI[statut]} ${statut}`, inline: false },
        { name: '👤 Modifié par', value: interaction.user.username, inline: true },
      );

    if (notes) embed.addFields({ name: '📝 Notes', value: notes, inline: false });
    embed.setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
