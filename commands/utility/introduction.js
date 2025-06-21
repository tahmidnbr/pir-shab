const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('introduction')
        .setDescription('Gives introduction.'),
    async execute(interaction) {

        const botName = interaction.client.user.tag;
        await interaction.reply(`${botName} is a Guide Bot, Developed By MTN.`);
    },
};