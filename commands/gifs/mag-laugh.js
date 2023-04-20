const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('maglaugh')
		.setDescription('Gif of Mag laughing'),
	async execute(interaction) {
		return interaction.reply('https://i.postimg.cc/KYxLS5DH/fff.gif');
	},
};