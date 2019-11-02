const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Roy Check DM') {
    	message.reply('ROY CHECK DM YOU NOOB ROY ROY ROY ROY ROY ROY ROY ROY ROY ROY ROY ROY ROY ROY ROY ROY @Roy#2529  ');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
