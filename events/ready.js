const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Bereit! eingeloggt als ${client.user.tag}`);
    },
};