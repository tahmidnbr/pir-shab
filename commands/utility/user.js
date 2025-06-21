const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('user')
        .setDescription('User details.'),

    async execute(interaction) {

        const user = interaction.user.username;

        if(interaction.member == null){
            await interaction.reply(`Command ran by ${user}`);

        } else {
            const joinedAt = interaction.member.joinedAt;
            // interaction.user is the object representing the User who ran the command
	        // interaction.member is the GuildMember object, which represents the user in the specific guild
            await interaction.reply(`Command ran by ${user}, joined Discord ${joinedAt}`);
        }
        
    },
};