const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzI2NDAyNzY5OTM3NzYwMzA2.XvdFpA.2t3p3sHiTcMO8Zbb83LuTJWVgyQ';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online');

})


bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.reply('pong!');
        break;
        
        
        
        
        case 'website':
            message.reply('dustinnohr.com');
        break;

        case 'info': 
           message.reply('420');
        break;
        
        case 'clear':
            if(!args[1]) return message.reply('error')
            message.channel.bulkDelete(args[1]);
        break;

        
    }

})


bot.login(token);