const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();

const token = 'NzI2NDAyNzY5OTM3NzYwMzA2.XvdFpA.2t3p3sHiTcMO8Zbb83LuTJWVgyQ';

const PREFIX = '!';

var version = '1.0.0';

bot.on('ready', () => {
    console.log('This bot is online!');

})

bot.on('guildMemberAdd',member =>{

    const channel = member.guild.channels.find(channel => channel.name === 'welcome');
    if(!channel) return

    channel.send('Welcome to our server, ${member}, please read the rules in the rules channel!')

});
   

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'play':

        break;
    }
})

bot.login(token);