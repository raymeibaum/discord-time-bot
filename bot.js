const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config()

const token = process.env.APP_BOT_TOKEN;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'hello time-bot' || message.content === 'hello time bot') {
    message.channel.send(`Hello, ${message.author.username}!`);
  }
});

client.login(token);
