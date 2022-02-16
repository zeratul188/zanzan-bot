const { Client, Intents } = require("discord.js");
//const { token } = require("./config.json");

const prefix = '#';

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
    ],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

client.on('ready', () => {
    console.log('Zanzan Bot is ready.');
});

client.on('message', async message => {

});

//개발용
//client.login(token);

//Heroku 전용
client.login(process.env.TOKEN);