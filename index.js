const Discord = require("discord.js");
const { token } = require("./config.json");

const client = new Discord.Client();



client.login(token);