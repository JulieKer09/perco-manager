const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Percepteur = require('../../models/Percepteur');

const STATUT_EMOJI = {
  vivant: '🟢',
  attaqué: '🟠',
  mort: '🔴',
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName('perco-list')
    .setDescription('Lister les percepteurs actifs')
    .addStringOption(opt =>
      opt.setName('statut')
        .setDescription('Filtrer par statut')
        .setRequired(false)
        .addChoices(
          { name: '🟢 Vivant', value: 'vivant' },
          { name: '🟠 Attaqué', value: 'attaqué' },
          { name: '🔴 Mort', value: 'mort' },
          { name: 'Tous', value: 'tous' },
        )),

  async execute(interaction) {
    const filtre = interaction.options.getString('statut') ?? 'tous';

    const query = filtre === 'tous' ? {} : { statut: filtre };
    const percos = await Percepteur.find(query).sort({ dateAjout: -1 });

    if (percos.length === 0) {
      return interaction.reply({
        content: `📭 Aucun percepteur trouvé${filtre !== 'tous' ? ` avec le statut **${filtre}**` : ''}.`,
        ephemeral: true,
      });
    }

    const lines = percos.map((p, i) => {
      const emoji = STATUT_EMOJI[p.statut] ?? '❓';
      const pos = p.position ? ` (${p.position})` : '';
      return `${i + 1}. ${emoji} **${p.map}**${pos} — *${p.nom}* — posé par ${p.posePar}`;
    });

    const embed = new EmbedBuilder()
      .setTitle(`🗺️ Percepteurs${filtre !== 'tous' ? ` — ${filtre}` : ''}`)
      .setColor(0x3498db)
      .setDescription(lines.join('\n'))
      .setFooter({ text: `${percos.length} percepteur(s)` })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
