const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NjM5NjAyNTc1ODE3MDQ4MDg2.Xbt5Mg.uVKgHyjunJ3lyPvLFc6IKiFloFI');
