const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sayatoast')
		.setDescription('Gif of Saya toasting'),
	async execute(interaction) {
		return interaction.reply('a');
	},
};