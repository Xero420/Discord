const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';


client.once('ready', () => 
{
console.log('Xero is online!');

});

client.on('message', message => 
{

if(!message.content.startsWith(prefix) || message.author.bot)return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = arg.shift().toLowerCase();

if(command === 'ping')
{

message.channel.send('pong!');

}
else if (command == 'youtube')
{

    message.channel.send('https://www.dustinnohr.com');

}



}
);





client.login('NzI2NDAyNzY5OTM3NzYwMzA2.XvdFpA.2t3p3sHiTcMO8Zbb83LuTJWVgyQ');

