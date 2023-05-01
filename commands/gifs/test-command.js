const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('blahblah')
		.setDescription('oopsie'),
	async execute(interaction) {
		return interaction.reply('this is funny');
	},
};