const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('randomlaugh')
		.setDescription('Gif of a random FC member laughing'),
	async execute(interaction) {
		const laughArray = [1,2,3,4,5,6]
		return interaction.reply((laughArray[Math.floor(Math.random() * array.length)]).toString())
	},
};