const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'stfu') {
    	message.reply('no u');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(TOKEN);
