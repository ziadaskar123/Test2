const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Roy Check DM') {
    	message.reply('@Roy#2529 @Roy#2529 @Roy#2529 @Roy#2529 @Roy#2529 @Roy#2529 @Roy#2529 ');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
