const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('randomlaugh')
		.setDescription('Gif of a random FC member laughing'),
	async execute(interaction) {
		return interaction.reply('');
	},
};