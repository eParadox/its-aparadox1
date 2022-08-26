const discord = require(`discord.js`);
const Util = require(`discord.js`);
const client = new discord.Client({ disableMentions: 'everyone' });
const ms = require('ms')
const fs = require('fs')
var gamerNamer = require('gamer-namer');
let prefix = "!";
let blue = "#4286f4";
let greenSuccess = '2EEA0C'
let redError = 'EE320A'

client.commands = new discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.on('ready', () => {
    let total = client.guilds.cache.reduce((total, guild) => total + guild.memberCount , 0);
        console.log('ready!');
        client.user.setActivity(`${total} users! | !help`, { type: 'WATCHING' });

client.on('message', message => {
if(message.author.bot) return; 
if(message.channel.type === "dm") return;
msg = message.content.toLowerCase();
let arguements = message.content.slice(prefix.length).trim().split(' '); 
let messageArray = message.content.split(" ");
let args = message.content.split(" ").slice(1);
let command = messageArray[0].toLowerCase();
let user = message.mentions.users.first();
let member = message.mentions.users.first() || message.author;
let argsMinesweeper = message.content.slice(prefix.length).trim().split(' '); 
let argsPoll = message.content.slice(prefix.length).trim().split(' ');
let argsVote = message.content.slice(prefix.length).trim().split(' ');

if(command === `${prefix}purge`) {
    client.commands.get('purge').execute(message, args, client, discord);
}
if(command === `${prefix}mute`) {
    client.commands.get('mute').execute(message, args, client, discord, blue, redError, greenSuccess, member);
}
if(command === `${prefix}unmute`) {
    client.commands.get('unmute').execute(message, args, client, discord, blue, redError, greenSuccess);
}
if(command === `${prefix}ban`) {
    client.commands.get('ban').execute(message, arguements, client, discord, blue, redError, greenSuccess);
}
if(command === `${prefix}kick`) {
    client.commands.get('kick').execute(message, arguements, client, discord, blue, redError, greenSuccess);
}
if(command === `${prefix}hack`) {
    client.commands.get('hack').execute(message, args, client, discord, blue, redError, greenSuccess, gamerNamer, user);
}
if(command === `${prefix}check`) {
    client.commands.get('check').execute(message, args, client, discord, blue, redError, greenSuccess);
}
if(command === `${prefix}reboot`) {
    client.commands.get('reboot').execute(message, args, client, discord);
}
if(command === `${prefix}reminder`) {
    client.commands.get('reminder').execute(message, arguements, client, discord, ms, blue);
}
if(command === `${prefix}dankrate`) {
    client.commands.get('dankrate').execute(message, args, client, discord, blue);
}
if(command === `${prefix}thotrate`) {
    client.commands.get('thotrate').execute(message, args, client, discord, blue);
}
if(command === `${prefix}ping`) {
    client.commands.get('ping').execute(message, args, discord, client, blue);
}
if(command === `${prefix}help`) {
    client.commands.get('help').execute(message, command, discord, args, client, blue, prefix);
}
if(command === `${prefix}say`) {
    client.commands.get('say').execute(message, discord, client, args, blue, redError);
}
if(command === `${prefix}avatar`) {
    client.commands.get('avatar').execute(message, discord, client, args, blue);
}
if(command === `${prefix}8ball`) {
    client.commands.get('8ball').execute(message, discord, client, args, blue, redError);
}
if(command === `${prefix}serverinfo`) {
    client.commands.get('serverinfo').execute(message, args, discord, client, blue);
}
if(command === `${prefix}stats`) {
    client.commands.get('stats').execute(message, discord, client, args, blue, command, prefix);
}
if(command === `${prefix}minesweeper`) {
    client.commands.get('minesweeper').execute(message, client, discord, argsMinesweeper, redError, blue);
}
if(command === `${prefix}minesweeperinfo`) {
    client.commands.get('minesweeperinfo').execute(message, client, discord, blue);
}
if(command === `${prefix}userinfo`) {
    client.commands.get('userinfo').execute(message, client, args, discord);
}
if(command === `${prefix}kill`) {
    client.commands.get('kill').execute(message, discord, client, blue, arguements);
}
// if(command === `${prefix}crole`) {
//     client.commands.get('crole').execute(message, client, discord, args, blue, messageArray, prefix, user, redError);
// }
if(command === `${prefix}poll`) {
    client.commands.get('poll').execute(message, discord, client, argsPoll, redError, blue);
}
// if(command === `${prefix}vote`) {
//     client.commands.get('vote').execute(message, client, discord, argsVote, blue, redError);
// }
if(command === `${prefix}server-lockdown`) {
    client.commands.get('server-lockdown').execute(message, client, discord, args, redError, blue, prefix, greenSuccess);
}
if(command === `${prefix}end-serverlockdown`) {
    client.commands.get('end-serverlockdown').execute(message, discord, client, redError, blue, greenSuccess);
}
if(command === `${prefix}lockdown`) {
    client.commands.get('lockdown').execute(message, client, discord, prefix, blue, redError, greenSuccess);
}
if(command === `${prefix}end-lockdown`) {
    client.commands.get('end-lockdown').execute(message, discord, client, redError, blue, greenSuccess);
}
if(command === `${prefix}invite`) {
    client.commands.get('invite').execute(message, discord, client, args, blue);
}

});

});

client.login(process.env.BOT_TOKEN);
