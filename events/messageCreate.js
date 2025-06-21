// events/messageCreate.js
const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate, // The official event name from discord.js
    once: false, // This event should fire every time a message is created

    async execute(message) {
        // Ignore messages from other bots to prevent infinite loops
        if (message.author.bot) return;

        // Define your bot's prefix
        const prefix = '!';

        // Check if the message starts with the prefix
        if (message.content.startsWith(prefix)) {
            // Extract the command and arguments
            const args = message.content.slice(prefix.length).trim().split(/ +/);
            const command = args.shift().toLowerCase();

            // --- Command Logic ---
            if (command === 'hello') {
                await message.channel.send(`Hello there, ${message.author.username}!`);
            } else if (command === 'ping') {
                await message.channel.send('Pong!');
            } else {
                await message.channel.send(`Sorry, I don't recognize the command \`${command}\`.`);
            }
        }
    },
};