const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config()

const token = process.env.APP_BOT_TOKEN;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content.includes('hello time-bot') || message.content.includes('hello time bot')) {
    message.channel.send(`Hello, ${message.author.username}!`);
  }

  if (message.content.split(" ")[0] === 'propose') {
    const splitMessageArray = message.content.split(" ");
    message.channel.send(`${message.author.username} would like to propose that we play ${splitMessageArray[1]} from ${splitMessageArray[2]}`)
  }
});

client.login(token);
