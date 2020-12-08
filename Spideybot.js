// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login('NTAyMTkxMDM4MDI3MjY4MTAw.W8eD2Q.8FpvHFI2fRHS-mo8YjF-DXAImbY');

client.on('message', message => {
	console.log(message.content);
});

if (message.content === '!ping') {
	// send back "Pong." to the channel the message was sent in
	message.channel.send('Pong.');
}
