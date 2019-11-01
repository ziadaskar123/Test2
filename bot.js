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
} if (message.content.startsWith(config.prefix + "avatar")) {
      if (!message.mentions.users.size) {
        const avatarAuthor = new Discord.RichEmbed()
      .setColor(0x333333)
      .setAuthor(message.author.username)
      .setImage(message.author.avatarURL)
        message.channel.send(avatarAuthor);
        let mention = message.mentions.members.first();
        const avatarMention = new Discord.RichEmbed()
        .setColor(0x333333)
        .setAuthor(mention.user.username)
        .setImage(mention.user.avatarURL)
        message.channel.send(avatarMention);
