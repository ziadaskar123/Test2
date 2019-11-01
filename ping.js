client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});
- const config = require('./config.json');
+ const { prefix, token } = require('./config.json');
- client.login(config.token);
+ client.login(token);
if (message.content === `${prefix}ping`) {
	message.channel.send('Pong.');
} else if (message.content === `${prefix}beep`) {
	message.channel.send('Boop.');
}
if (message.content.startsWith(`${prefix}ping`)) {
	message.channel.send('Pong.');
} else if (message.content.startsWith(`${prefix}beep`)) {
	message.channel.send('Boop.');
}
