const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Roy is Gay') {
    	message.reply('i Agree');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'what is my avatar') {
    message.reply(message.author.avatarURL);
  }
});
client.login('NjM5NjAyNTc1ODE3MDQ4MDg2.Xbt5Mg.uVKgHyjunJ3lyPvLFc6IKiFloFI');
