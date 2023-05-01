const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('blahblah')
		.setDescription('oopsie'),
	async execute(interaction) {
        const array = [1,2,3,4,5,6]
		return interaction.reply((array[Math.floor(Math.random() * array.length)]).toString())
	},
};