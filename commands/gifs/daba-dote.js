const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dabadote')
		.setDescription('Gif of Daba doting'),
	async execute(interaction) {
		return interaction.reply('dote');
	},
};