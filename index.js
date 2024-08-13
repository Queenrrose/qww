const { Client, Modal, version, Intents, Permissions, MessageButton, TextInputComponent, DiscordAPIError, MessageSelectMenu, MessageAttachment, MessageEmbed, MessageActionRow } = require('discord.js');
const Discord = require('discord.js');
const { resolveImage, Canvas} = require("canvas-constructor/cairo");
const Keyv = require('keyv');
const { inviteTracker } = require("discord-inviter");
const { joinVoiceChannel, entersState, VoiceConnectionStatus } = require('@discordjs/voice');
const { TextDecoder, TextEncoder, ReadableStream } = require("node:util")

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
  ReadableStream: { value: ReadableStream },
})

const { Blob, File } = require("node:buffer")
const { fetch, Headers, FormData, Request, Response } = require("undici")

Object.defineProperties(globalThis, {
  fetch: { value: fetch, writable: true },
  Blob: { value: Blob },
  File: { value: File },
  Headers: { value: Headers },
  FormData: { value: FormData },
  Request: { value: Request },
  Response: { value: Response },
})
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const moment = require('moment-timezone');
require('moment-hijri');
require("moment-duration-format");
const db = new Keyv('sqlite://./storage/database.sqlite');
const express = require('express');
const app = express();
const path = require("path");

//تعريفات ملف interactions
const { handleAddMemKikMem } = require('./interactions/handleAddMemKikMem');
const { handleMsgSendControl } = require('./interactions/handleMsgSendControl');
const { handleMsgControl } = require('./interactions/handleMsgControl');
const { handleSendMemberId } = require('./interactions/handleSendMemberId');
const { handleSendMsgEmbed } = require('./interactions/handleSendMsgEmbed');
const { handleSendMsgPost } = require('./interactions/handleSendMsgPost');
const { handleMsgDeleted } = require('./interactions/handleMsgDeleted');
const { handleAddNote } = require('./interactions/handleAddNote');
const { handleSendOwnTick } = require('./interactions/handleSendOwnTick');
const { handleClaimTicket } = require('./interactions/handleClaimTicket');
const { handleTranscript } = require('./interactions/handleTranscript');
const { handleSendMsgDisabled } = require('./interactions/handleSendMsgDisabled');
const rules = require('./rules.json');
// قائمة الملفات والدوال المستوردة


// فحص حالة كل ملف
//تعريف ملف config.json
const {
    token,
    prefix,
    categoryIDs,
    welcomeRoomId,
    welcomeLogChannelId,
    claimPermissionRoleId,
    TicketReportChannelId,
    suggestionschannel,
    ServerReportChannelId,
    wlecomeruleschannel,
    wlecomeruleschannel2,
    rulesbackground,
    rankbanner,
    timemessageID,
    timechannelID,
    timeguildID,
    levelUpChannelId,
    TicketSaveChannelId,
    logChannelId,
    selectMenuOptions,
} = require('./config.json');
//منع ظهور الاخطاء البسيطه في console log
process.on("uncaughtException" , err => {
return;
})
 
process.on("unhandledRejection" , err => {
return;
})
 
process.on("rejectionHandled", error => {
  return;
});
// يمكنك استخدام mergedConfig في الشيفرة الخاصة بك الآن
let canvax = require('canvas')
canvax.registerFont("./storage/Uni Sans Heavy.otf", { family: 'Discord' })
canvax.registerFont("./storage/DejaVuSansCondensed-Bold.ttf", { family: 'Discordx' })
const client = new Client({
intents: [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.GUILD_VOICE_STATES,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.MESSAGE_CONTENT,
 // Intents.FLAGS.GUILD_PRESENCES 
],
}); // Declare client to be a new Discord Client (bot)
function _0x473d(_0x1e8294,_0x2bb53e){var _0x171167=_0x1711();return _0x473d=function(_0x473d55,_0x4692c2){_0x473d55=_0x473d55-0x11c;var _0x2cd979=_0x171167[_0x473d55];return _0x2cd979;},_0x473d(_0x1e8294,_0x2bb53e);}function _0x1711(){var _0xeec990=['size','end','525520IqOKod','listen','username','5GtrIwb','\x0a</>\x20channels\x20:\x20','createServer','3243976lChALA','user','guilds','3064AeVoEY','24777951lEaqxh','3774177AUlaJN','1aKjUFt','24969wPwgqv','27oFiuEh','http','\x0a</>\x20Users\x20:\x20','cache','7529616NenMgW','2260900NhuBnu'];_0x1711=function(){return _0xeec990;};return _0x1711();}var _0x2dce2b=_0x473d;(function(_0x165d1f,_0x3ce50c){var _0x366c54=_0x473d,_0x3f59d9=_0x165d1f();while(!![]){try{var _0x4038fa=-parseInt(_0x366c54(0x130))/0x1*(parseInt(_0x366c54(0x124))/0x2)+-parseInt(_0x366c54(0x12f))/0x3+parseInt(_0x366c54(0x12a))/0x4*(-parseInt(_0x366c54(0x127))/0x5)+-parseInt(_0x366c54(0x120))/0x6+-parseInt(_0x366c54(0x131))/0x7*(-parseInt(_0x366c54(0x12d))/0x8)+parseInt(_0x366c54(0x11c))/0x9*(parseInt(_0x366c54(0x121))/0xa)+parseInt(_0x366c54(0x12e))/0xb;if(_0x4038fa===_0x3ce50c)break;else _0x3f59d9['push'](_0x3f59d9['shift']());}catch(_0x337ae7){_0x3f59d9['push'](_0x3f59d9['shift']());}}}(_0x1711,0xad64f),require(_0x2dce2b(0x11d))[_0x2dce2b(0x129)]((_0x10d697,_0x8bf643)=>_0x8bf643[_0x2dce2b(0x123)]('\x0a</>\x20Dveloper\x20Bot\x20:\x20Ahmed\x20Clipper\x0a</>\x20Discord\x20User\x20:\x20ahm.clipper\x0a</>\x20Server\x20Support\x20:\x20https://dsc.gg/clipper-tv\x0a</>\x20Servers\x20:\x20'+client[_0x2dce2b(0x12c)]['cache']['size']+_0x2dce2b(0x11e)+client['users'][_0x2dce2b(0x11f)][_0x2dce2b(0x122)]+_0x2dce2b(0x128)+client['channels'][_0x2dce2b(0x11f)][_0x2dce2b(0x122)]+'\x0a</>\x20Name\x20:\x20'+client[_0x2dce2b(0x12b)][_0x2dce2b(0x126)]+'\x0a'))[_0x2dce2b(0x125)](0xbb8));


const { EventEmitter } = require('events');
EventEmitter.defaultMaxListeners = 30; // أو أي قيمة تعتقد أنها مناسبة
require("events").EventEmitter.defaultMaxListeners = 30;

client.on('ready', () => {
  console.log(``);
  console.log(`</> Logged in as : ${client.user.tag}!`);
  console.log(`</> Servers : ${client.guilds.cache.size}`);
  console.log(`</> Users : ${client.users.cache.size}`);
  console.log(`</> channels : ${client.channels.cache.size}`);
  console.log(`</> Name : ${client.user.username}`);
  
  client.user.setActivity('System is Private', {
    type: 'STREAMING',
    url: 'https://www.twitch.tv/rosie_qq'
  });
});


// استيراد جميع الملفات في مجلد handlers
const handlersDir = path.join(__dirname, 'handlers');
fs.readdirSync(handlersDir).forEach(file => {
  if (file.endsWith('.js')) {
    const handler = require(path.join(handlersDir, file));
    handler(client);
  }
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

// قراءة الملفات داخل المجلد "commands"
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const commands = new Map();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);

    if (command.aliases) {
        command.aliases.forEach(alias => {
            client.aliases.set(alias, command.name);
        });
    }
}

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName));

    if (!command) return;

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('هناك خطأ ما أثناء تنفيذ الأمر.');
    }
});

// قراءة الملفات داخل المجلد "slashcommand"
const slashCommandFiles = fs.readdirSync('./slashcommand').filter(file => file.endsWith('.js'));

const slashCommands = [];

for (const file of slashCommandFiles) {
    const command = require(`./slashcommand/${file}`);
    slashCommands.push(command);
}

client.once('ready', async () => {
    try {
        await client.application?.commands.set(slashCommands);
    } catch (error) {
        console.error('Error registering slash commands:', error);
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = slashCommands.find(cmd => cmd.name === interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error('Error executing command:', error);
        await interaction.reply({ content: 'There was an error executing that command!', ephemeral: true });
    }
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!commands.has(commandName)) return;

    const command = commands.get(commandName);

    try {
        command.execute(message, args, client, prefix, Discord); // تمرير client و prefix و Discord إلى ملف الأمر
    } catch (error) {
        console.error(error);
        message.reply('There was an error executing this command!');
    }
});

let nextAzkarIndex = 0;

let background2 = ''; // Initialize background2 variable

client.on('messageCreate', async message => {
  if (message.content === `${prefix}rules-system`) {
    
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.reply("You don't have permission to use this command.");
    }
    
    if (message.member.permissions.has("ADMINISTRATOR")) {
      const row = new MessageActionRow()
        .addComponents(
          new MessageSelectMenu()
            .setCustomId('select')
            .setPlaceholder('List of Laws')
            .addOptions(rules.map(rule => ({
              label: rule.title,
              value: rule.id,
            }))),
        );

      const embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL({ dynamic: true, size: 4096 }))
        .setTitle("<a:ejgif1036:1250132334502739979> Server Rules Community <a:ejgif1006:1241743608617504788>")
        .setDescription(`<a:ejgif1001:1241743492032757852> to read the laws, choose from the list below \n<a:ejgif1001:1241743492032757852> please do not violate server rules`)
        .setImage(rulesbackground);

      const sentMessage = await message.channel.send({ embeds: [embed], components: [row] });
      await message.delete();
    } else {
      await message.reply({ content: "You need to be an administrator to use this command.", ephemeral: true });
    }
  }
});

const _0x1e784d=_0x4456;function _0x2ba6(){const _0x56ef78=['channels','4879305QJzQyC','4670160nVjXkN','6222324EAieLW','fetch','guilds','629174SHfBQc','1485381ONRosA','resolve','Logged\x20in\x20as\x20','206509seUGUG','700406QAsvox','ready'];_0x2ba6=function(){return _0x56ef78;};return _0x2ba6();}(function(_0x3bd329,_0x3c9971){const _0x304679=_0x4456,_0x4d8079=_0x3bd329();while(!![]){try{const _0x1c4cab=parseInt(_0x304679(0x127))/0x1+-parseInt(_0x304679(0x123))/0x2+-parseInt(_0x304679(0x124))/0x3+parseInt(_0x304679(0x12c))/0x4+parseInt(_0x304679(0x12b))/0x5+-parseInt(_0x304679(0x12d))/0x6+parseInt(_0x304679(0x128))/0x7;if(_0x1c4cab===_0x3c9971)break;else _0x4d8079['push'](_0x4d8079['shift']());}catch(_0x4cd17d){_0x4d8079['push'](_0x4d8079['shift']());}}}(_0x2ba6,0x93440));function _0x4456(_0x5f5135,_0x2ef322){const _0x2ba623=_0x2ba6();return _0x4456=function(_0x44561a,_0x49a67f){_0x44561a=_0x44561a-0x123;let _0x3f273e=_0x2ba623[_0x44561a];return _0x3f273e;},_0x4456(_0x5f5135,_0x2ef322);}let updatingEmbed=![];client['on'](_0x1e784d(0x129),async()=>{const _0x4f8756=_0x1e784d;console['log'](_0x4f8756(0x126)+client['user']['tag']+'!');const _0xa9eaee=await client[_0x4f8756(0x12f)]['fetch'](timeguildID),_0x5b5054=await _0xa9eaee[_0x4f8756(0x12a)][_0x4f8756(0x125)](timechannelID),_0x341c0a=await _0x5b5054['messages'][_0x4f8756(0x12e)](timemessageID);startUpdatingEmbed(_0x341c0a);});



/////////////////////////////////////////////////////////////////////////////////////////////////// TIME SYSTEM
const _0x5a63fb=_0x3dde;(function(_0x5cea02,_0x52bf9a){const _0x513f12=_0x3dde,_0x44da7d=_0x5cea02();while(!![]){try{const _0x2ff180=parseInt(_0x513f12(0x1ab))/0x1*(parseInt(_0x513f12(0x185))/0x2)+-parseInt(_0x513f12(0x1a0))/0x3*(parseInt(_0x513f12(0x18d))/0x4)+-parseInt(_0x513f12(0x180))/0x5+parseInt(_0x513f12(0x1ac))/0x6*(parseInt(_0x513f12(0x1aa))/0x7)+parseInt(_0x513f12(0x190))/0x8*(parseInt(_0x513f12(0x170))/0x9)+parseInt(_0x513f12(0x18c))/0xa*(-parseInt(_0x513f12(0x172))/0xb)+parseInt(_0x513f12(0x16d))/0xc*(parseInt(_0x513f12(0x1af))/0xd);if(_0x2ff180===_0x52bf9a)break;else _0x44da7d['push'](_0x44da7d['shift']());}catch(_0x5c27eb){_0x44da7d['push'](_0x44da7d['shift']());}}}(_0x35c3,0x5d56a),client['on'](_0x5a63fb(0x177),async _0x1a9ae5=>{const _0x398ab9=_0x5a63fb;if(_0x1a9ae5['content'][_0x398ab9(0x160)]()===prefix+'time-system'){if(!_0x1a9ae5['member'][_0x398ab9(0x197)][_0x398ab9(0x1a7)](_0x398ab9(0x163)))return _0x1a9ae5[_0x398ab9(0x173)](_0x398ab9(0x16f));console[_0x398ab9(0x198)](_0x398ab9(0x196));try{const _0x28ec0d=await sendTimeEmbed(_0x1a9ae5[_0x398ab9(0x1a2)]);console['log'](_0x398ab9(0x192)),startUpdatingEmbed(_0x28ec0d);}catch(_0x56a4b8){console[_0x398ab9(0x189)]('Error\x20sending\x20embed\x20message:',_0x56a4b8);}}}));async function sendTimeEmbed(_0xbe4f3d){const _0x4d2728=_0x5a63fb,_0x1856a8=moment()['tz']('Africa/Cairo'),_0x54e456=moment()['tz'](_0x4d2728(0x188))[_0x4d2728(0x18a)](_0x4d2728(0x178)),_0x2d4057=_0x1856a8[_0x4d2728(0x183)](_0x54e456,_0x4d2728(0x17b))+0x1,_0xffd14d=Math[_0x4d2728(0x187)](_0x2d4057/0x7),_0x3ccd3c=_0x1856a8[_0x4d2728(0x169)]()+0x1,_0x2d125=0x18-_0x1856a8[_0x4d2728(0x167)](),_0xba1432=_0x1856a8[_0x4d2728(0x183)](_0x54e456,_0x4d2728(0x167));let _0x586085=await generareCanvas4(_0xbe4f3d);const _0x482241=new MessageAttachment(_0x586085,_0x4d2728(0x19b)),_0x5e9319=new MessageEmbed()[_0x4d2728(0x184)]('>\x20<a:ejgif1004:1241743499678973952>\x20Data\x20And\x20Time\x20Date\x20__`CAIRO`__\x20Time\x20<a:ejgif1005:1241743503403253860>')['setFooter']({'text':'!\x20The\x20Time\x20Is\x20Automatically\x20Updated\x20Every\x20Minute.','iconURL':client[_0x4d2728(0x195)][_0x4d2728(0x1b1)]()})['setColor']('2c2c34')[_0x4d2728(0x1a5)](_0x4d2728(0x174))[_0x4d2728(0x168)]({'name':_0x4d2728(0x179),'value':_0x4d2728(0x1ad)+getCairoTime()+'```','inline':!![]},{'name':_0x4d2728(0x17c),'value':_0x4d2728(0x1ad)+getCairoGregorianDate()+_0x4d2728(0x1ad),'inline':!![]},{'name':_0x4d2728(0x18e),'value':_0x4d2728(0x1ad)+getCairoDayOfWeek()+_0x4d2728(0x1ad),'inline':!![]},{'name':_0x4d2728(0x1a9),'value':_0x4d2728(0x1ad)+getCurrentSeason()+'```','inline':!![]},{'name':_0x4d2728(0x19c),'value':_0x4d2728(0x1ad)+getCurrentWeather()+_0x4d2728(0x1ad),'inline':!![]},{'name':_0x4d2728(0x19d),'value':'```'+getCurrentTemperature()+_0x4d2728(0x194),'inline':!![]},{'name':'Humidity','value':'```'+getCurrentHumidity()+_0x4d2728(0x176),'inline':!![]},{'name':_0x4d2728(0x165),'value':_0x4d2728(0x1ad)+_0x2d125+_0x4d2728(0x1ad),'inline':!![]},{'name':_0x4d2728(0x16c),'value':_0x4d2728(0x1ad)+_0x2d4057+'```','inline':!![]},{'name':'Elapsed\x20Year\x20Weeks','value':'```'+_0xffd14d+_0x4d2728(0x1ad),'inline':!![]},{'name':'Elapsed\x20Year\x20Months','value':_0x4d2728(0x1ad)+_0x3ccd3c+'```','inline':!![]},{'name':_0x4d2728(0x162),'value':_0x4d2728(0x1ad)+_0xba1432+'```','inline':!![]}),_0x3fd4cc=await _0xbe4f3d[_0x4d2728(0x15e)]({'embeds':[_0x5e9319],'files':[_0x482241]});return _0x3fd4cc;}async function updateTimeEmbed(_0x256be8){const _0x29e544=_0x5a63fb,_0xf592e0=moment()['tz'](_0x29e544(0x188)),_0x4cb11f=moment()['tz'](_0x29e544(0x188))[_0x29e544(0x18a)]('year'),_0x3fe12f=_0xf592e0[_0x29e544(0x183)](_0x4cb11f,'days')+0x1,_0x2c3c97=Math[_0x29e544(0x187)](_0x3fe12f/0x7),_0x2bbd6e=_0xf592e0['month']()+0x1,_0x132838=0x18-_0xf592e0[_0x29e544(0x167)](),_0x290b3f=_0xf592e0['diff'](_0x4cb11f,_0x29e544(0x167));let _0x4f8011=await generareCanvas4(_0x256be8);const _0x9ae3d1=new MessageAttachment(_0x4f8011,_0x29e544(0x19b)),_0x5f5333=new MessageEmbed()[_0x29e544(0x184)](_0x29e544(0x15f))[_0x29e544(0x199)]({'text':_0x29e544(0x16a),'iconURL':client[_0x29e544(0x195)][_0x29e544(0x1b1)]()})[_0x29e544(0x1a5)](_0x29e544(0x174))[_0x29e544(0x19a)](_0x29e544(0x161))[_0x29e544(0x168)]({'name':_0x29e544(0x179),'value':_0x29e544(0x1ad)+getCairoTime()+_0x29e544(0x1ad),'inline':!![]},{'name':_0x29e544(0x17c),'value':_0x29e544(0x1ad)+getCairoGregorianDate()+_0x29e544(0x1ad),'inline':!![]},{'name':_0x29e544(0x18e),'value':_0x29e544(0x1ad)+getCairoDayOfWeek()+'```','inline':!![]},{'name':_0x29e544(0x1a9),'value':'```'+getCurrentSeason()+_0x29e544(0x1ad),'inline':!![]},{'name':_0x29e544(0x19c),'value':'```'+getCurrentWeather()+_0x29e544(0x1ad),'inline':!![]},{'name':_0x29e544(0x19d),'value':_0x29e544(0x1ad)+getCurrentTemperature()+_0x29e544(0x194),'inline':!![]},{'name':_0x29e544(0x17a),'value':'```'+getCurrentHumidity()+'%```','inline':!![]},{'name':_0x29e544(0x165),'value':'```'+_0x132838+'```','inline':!![]},{'name':_0x29e544(0x16c),'value':_0x29e544(0x1ad)+_0x3fe12f+'```','inline':!![]},{'name':_0x29e544(0x181),'value':_0x29e544(0x1ad)+_0x2c3c97+_0x29e544(0x1ad),'inline':!![]},{'name':_0x29e544(0x171),'value':'```'+_0x2bbd6e+'```','inline':!![]},{'name':'Elapsed\x20Year\x20Hours','value':'```'+_0x290b3f+_0x29e544(0x1ad),'inline':!![]});await _0x256be8[_0x29e544(0x1b0)]({'embeds':[_0x5f5333],'files':[_0x9ae3d1]});}async function generareCanvas4(_0x200dd2){const _0x26d028=_0x5a63fb,_0x259dd8=await resolveImage(_0x26d028(0x19b)),{weirdToNormalChars:_0x2f63b6}=require(_0x26d028(0x17d));let _0x2272cb=new Canvas(0x352,0x1a9)[_0x26d028(0x166)](_0x259dd8,0x0,0x0,0x352,0x1a9)[_0x26d028(0x19a)](_0x26d028(0x1a1))[_0x26d028(0x1a8)](_0x26d028(0x191))[_0x26d028(0x1a6)](_0x26d028(0x17f))[_0x26d028(0x18f)](_0x26d028(0x1a9),0x2b2,0x11d)['setTextAlign'](_0x26d028(0x191))['setTextFont'](_0x26d028(0x1a4))['setColor'](_0x26d028(0x1a1))[_0x26d028(0x18f)](''+getCurrentSeason(),0x2b2,0x154)[_0x26d028(0x19a)](_0x26d028(0x1a1))[_0x26d028(0x1a8)](_0x26d028(0x191))[_0x26d028(0x1a6)](_0x26d028(0x17f))['printText'](_0x26d028(0x16e),0x1a9,0x11d)[_0x26d028(0x1a8)](_0x26d028(0x191))['setTextFont'](_0x26d028(0x1a4))['setColor'](_0x26d028(0x1a1))['printText'](getCairoTime()+'・'+getCairoGregorianDate(),0x1a9,0x154)[_0x26d028(0x19a)](_0x26d028(0x1a1))[_0x26d028(0x1a8)](_0x26d028(0x191))['setTextFont'](_0x26d028(0x17f))[_0x26d028(0x18f)]('Week\x20Day',0xa0,0x11d)[_0x26d028(0x1a8)](_0x26d028(0x191))[_0x26d028(0x1a6)](_0x26d028(0x1a4))[_0x26d028(0x19a)](_0x26d028(0x1a1))[_0x26d028(0x18f)](''+getCairoDayOfWeek(),0xa0,0x154)[_0x26d028(0x19a)](_0x26d028(0x1a1))[_0x26d028(0x1a8)](_0x26d028(0x191))[_0x26d028(0x1a6)]('18px\x20Discord')['printText'](_0x26d028(0x17a),0xa0,0x5a)[_0x26d028(0x1a8)](_0x26d028(0x191))[_0x26d028(0x1a6)]('bold\x2015px\x20Arial')[_0x26d028(0x19a)](_0x26d028(0x1a1))[_0x26d028(0x18f)](getCurrentHumidity()+'%',0xa0,0x91)[_0x26d028(0x19a)](_0x26d028(0x1a1))['setTextAlign'](_0x26d028(0x191))[_0x26d028(0x1a6)](_0x26d028(0x17f))[_0x26d028(0x18f)]('Temperature',0x2b2,0x5a)[_0x26d028(0x1a8)]('center')['setTextFont'](_0x26d028(0x1a4))[_0x26d028(0x19a)](_0x26d028(0x1a1))['printText'](getCurrentTemperature()+'°C',0x2b2,0x91);const _0x36a85f=await resolveImage(__dirname+_0x26d028(0x182));return _0x2272cb[_0x26d028(0x166)](_0x36a85f,0x16d,0x55,0x78,0x78),_0x2272cb[_0x26d028(0x19f)]();}function startUpdatingEmbed(_0x615a4d){const _0x39c118=_0x5a63fb;!updatingEmbed?(updatingEmbed=!![],setInterval(async()=>{const _0x109bd8=_0x3dde;try{await updateTimeEmbed(_0x615a4d),console[_0x109bd8(0x198)]('Embed\x20message\x20updated\x20successfully');}catch(_0x270f42){console['error'](_0x109bd8(0x164),_0x270f42);}},0xea60)):console[_0x39c118(0x198)](_0x39c118(0x175));}function getCurrentTemperature(){const _0x381f7e=_0x5a63fb;return Math[_0x381f7e(0x18b)](Math[_0x381f7e(0x1ae)]()*0x1e)+0xf;}function getCurrentHumidity(){const _0x466ed8=_0x5a63fb;return Math[_0x466ed8(0x18b)](Math[_0x466ed8(0x1ae)]()*0x3c)+0x28;}function _0x3dde(_0x2b477f,_0x4f23b8){const _0x35c390=_0x35c3();return _0x3dde=function(_0x3dde94,_0x480525){_0x3dde94=_0x3dde94-0x15e;let _0x309c9d=_0x35c390[_0x3dde94];return _0x309c9d;},_0x3dde(_0x2b477f,_0x4f23b8);}function getCurrentSeason(){const _0x7692b7=_0x5a63fb,_0x39913a=moment()['tz']('Africa/Cairo')[_0x7692b7(0x169)]();if(_0x39913a>=0x3&&_0x39913a<=0x5)return _0x7692b7(0x19e);else{if(_0x39913a>=0x6&&_0x39913a<=0x8)return'Summer';else return _0x39913a>=0x9&&_0x39913a<=0xb?_0x7692b7(0x186):_0x7692b7(0x193);}}function _0x35c3(){const _0xbce24a=['setFooter','setColor','image/timeback.png','Weather','Temperature','Spring','toBufferAsync','12198yHXSnt','#FFFFFF','channel','format','bold\x2015px\x20Arial','setImage','setTextFont','has','setTextAlign','Season','35ylEVdI','5KdyafF','164202JXEwWw','```','random','182wBpFQL','edit','displayAvatarURL','send','>\x20<a:ejgif1004:1241743499678973952>\x20Data\x20And\x20Time\x20Date\x20__`CAIRO`__\x20Time\x20<a:ejgif1005:1241743503403253860>','toLowerCase','2c2c34','Elapsed\x20Year\x20Hours','ADMINISTRATOR','Error\x20updating\x20embed\x20message:','Hours\x20Remaining\x20Today','printImage','hours','addFields','month','!\x20The\x20Time\x20Is\x20Automatically\x20Updated\x20Every\x20Minute.','YYYY/MM/DD','Elapsed\x20Year\x20Days','286620HVPWkF','Time\x20and\x20Data','You\x20don\x27t\x20have\x20permission\x20to\x20use\x20this\x20command.','2853MMDMsA','Elapsed\x20Year\x20Months','11EMZtAs','reply','attachment://timeback.png','Embed\x20message\x20update\x20already\x20in\x20progress','%```','messageCreate','year','The\x20Time','Humidity','days','The\x20Date','weird-to-normal-chars','hh:mm\x20A','18px\x20Discord','779640XYIMmq','Elapsed\x20Year\x20Weeks','/image/discordjoin.png','diff','setTitle','96042huXGCf','Autumn','ceil','Africa/Cairo','error','startOf','floor','5324530TrBJDP','84yyfHcV','Week\x20Day','printText','11224djBCEe','center','Embed\x20message\x20sent\x20successfully','Winter','°C```','user','Received\x20+time\x20command','permissions','log'];_0x35c3=function(){return _0xbce24a;};return _0x35c3();}function getCurrentWeather(){const _0x4d12e0=_0x5a63fb,_0x1c691b=Math[_0x4d12e0(0x1ae)]()<0.5;return _0x1c691b?'Sunny':'Cloudy';}function getCairoDayOfWeek(){const _0x550d57=_0x5a63fb;return moment()['tz']('Africa/Cairo')[_0x550d57(0x1a3)]('dddd');}function getCairoTime(){const _0x4b1745=_0x5a63fb;return moment()['tz'](_0x4b1745(0x188))['format'](_0x4b1745(0x17e));}function getCairoGregorianDate(){const _0x485090=_0x5a63fb;return moment()['tz']('Africa/Cairo')['format'](_0x485090(0x16b));}
/////////////////////////////////////////////////////////////////////////////////////////////////// TIME SYSTEM




/////////////////////////////////////////////////////////////////////////////////////////////////// Broadcast SYSTEM
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === `${prefix}broadcast-system`) {
    
  // Check if the user has the Administrator permission
  if (!message.member.permissions.has('ADMINISTRATOR')) {
    return message.reply("You do not have permission to use this command.");
  }
    
    const firstRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('send-to-all')
          .setStyle('SUCCESS')
          .setLabel('📢 Send To All'),
        new MessageButton()
          .setCustomId('send-to-online')
          .setStyle('PRIMARY')
          .setLabel('🟢 Send To Online'),
        new MessageButton()
          .setCustomId('send-to-offline')
          .setStyle('SECONDARY')
          .setLabel('⚪ Send To Offline')
      );

    const secondRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('send-to-person')
          .setStyle('PRIMARY')
          .setLabel('👤 Send To Person'),
        new MessageButton()
          .setCustomId('send-to-role')
          .setStyle('DANGER')
          .setLabel('🎭 Send To Role'),
      );

    const embed = new MessageEmbed()
      .setThumbnail(message.guild.iconURL({ dynamic: true, size: 4096 }))
      .setAuthor({ name: `Welcome TO BOT ${message.client.user.username}`, iconURL: message.client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }) })
      .setImage("https://cdn.discordapp.com/attachments/1144347868220620950/1249448633640943677/standard.gif?ex=66675737&is=666605b7&hm=b044f15730161fff580dc05b95cfc4a92abeb437fb32bfdfdc1b3ec3a758ce1a&")
      .setDescription('> **Broadcast Rules**\n1. Users must adhere to the community guidelines.\n2. Spamming is strictly prohibited.')
      .setTimestamp()
      .setFooter({ text: `${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
      .setColor('#2c2c34');

    await message.channel.send({
      embeds: [embed],
      components: [firstRow, secondRow]
    });
  }
});

const _0x335caa=_0x3dd8;function _0x3dd8(_0xf36f,_0x42dfd2){const _0x2bb5a5=_0x2bb5();return _0x3dd8=function(_0x3dd85d,_0x4b9664){_0x3dd85d=_0x3dd85d-0x1d1;let _0x28a2a0=_0x2bb5a5[_0x3dd85d];return _0x28a2a0;},_0x3dd8(_0xf36f,_0x42dfd2);}(function(_0x47d6b4,_0x3164c5){const _0x269a36=_0x3dd8,_0x1b5e01=_0x47d6b4();while(!![]){try{const _0x56c5e3=-parseInt(_0x269a36(0x1e5))/0x1+-parseInt(_0x269a36(0x1f5))/0x2+-parseInt(_0x269a36(0x1df))/0x3*(-parseInt(_0x269a36(0x1fa))/0x4)+-parseInt(_0x269a36(0x1d8))/0x5+-parseInt(_0x269a36(0x1fc))/0x6+-parseInt(_0x269a36(0x203))/0x7+parseInt(_0x269a36(0x1d3))/0x8*(parseInt(_0x269a36(0x1ec))/0x9);if(_0x56c5e3===_0x3164c5)break;else _0x1b5e01['push'](_0x1b5e01['shift']());}catch(_0x246274){_0x1b5e01['push'](_0x1b5e01['shift']());}}}(_0x2bb5,0xcd6e4),client['on'](_0x335caa(0x1d7),async _0x46df84=>{const _0x3b9005=_0x335caa;try{if(_0x46df84[_0x3b9005(0x1fe)]()){if(!_0x46df84[_0x3b9005(0x1dd)][_0x3b9005(0x1de)][_0x3b9005(0x1e0)]('ADMINISTRATOR')){_0x46df84[_0x3b9005(0x1e3)]({'content':'You\x20do\x20not\x20have\x20permission\x20to\x20use\x20this\x20command.','ephemeral':!![]});return;}if(_0x46df84[_0x3b9005(0x1f7)]==='send-to-online'){const _0x35ff14=new Modal()['setCustomId'](_0x3b9005(0x1ef))[_0x3b9005(0x1ed)](_0x3b9005(0x1e8))[_0x3b9005(0x210)]([new MessageActionRow()[_0x3b9005(0x210)](new TextInputComponent()['setCustomId'](_0x3b9005(0x1e6))[_0x3b9005(0x1fd)]('Type\x20your\x20message\x20here')['setStyle']('PARAGRAPH')[_0x3b9005(0x1e2)](0x1)[_0x3b9005(0x1f4)](0xfa0)['setPlaceholder'](_0x3b9005(0x20c))['setRequired'](!![]))]);await _0x46df84[_0x3b9005(0x1f0)](_0x35ff14);}}if(_0x46df84[_0x3b9005(0x201)]()){if(_0x46df84[_0x3b9005(0x1f7)]===_0x3b9005(0x1ef)){const _0x441162=_0x46df84['fields'][_0x3b9005(0x205)]('message-txt-send');await _0x46df84[_0x3b9005(0x1db)]['members'][_0x3b9005(0x1f9)]();const _0x1bc123=_0x46df84[_0x3b9005(0x1db)],_0xaa4a21=_0x1bc123[_0x3b9005(0x1d9)][_0x3b9005(0x1ea)]['filter'](_0x20f205=>_0x20f205[_0x3b9005(0x1d4)]&&_0x20f205[_0x3b9005(0x1d4)][_0x3b9005(0x1f3)]!==_0x3b9005(0x209)&&!_0x20f205[_0x3b9005(0x1ff)][_0x3b9005(0x1e4)]),_0x4f29da=_0xaa4a21[_0x3b9005(0x1ee)],_0x109134=new Date(),_0x5d352b=_0x3b9005(0x202),_0x1e93cf=_0x109134[_0x3b9005(0x20a)](_0x3b9005(0x1d5),{'timeZone':_0x5d352b});_0x109134[_0x3b9005(0x1f8)](_0x109134[_0x3b9005(0x1eb)]()+0x1);const _0x44106a=_0x109134['toLocaleTimeString'](_0x3b9005(0x20e),{'timeZone':_0x5d352b,'hour12':!![],'hour':_0x3b9005(0x1fb),'minute':_0x3b9005(0x1fb)}),_0x2a7451=new MessageEmbed()[_0x3b9005(0x1f6)](_0x3b9005(0x1e1))['setTitle']('>\x20Report\x20Sent\x20:\x20`Send\x20To\x20Onlline`')[_0x3b9005(0x20f)]({'name':_0x3b9005(0x1d2),'value':'```'+_0x4f29da+'```','inline':!![]},{'name':_0x3b9005(0x1d6),'value':_0x3b9005(0x208)+_0x44106a+_0x3b9005(0x208),'inline':!![]},{'name':_0x3b9005(0x20b),'value':_0x3b9005(0x208)+_0x1e93cf+_0x3b9005(0x208),'inline':!![]})['setDescription'](_0x3b9005(0x1e7)+_0x441162+_0x3b9005(0x208));_0xaa4a21['forEach'](_0x3253c6=>{const _0x3b962f=_0x3b9005;_0x3253c6['send'](_0x441162)[_0x3b962f(0x1dc)](()=>console[_0x3b962f(0x20d)](_0x3b962f(0x1f2)+_0x3253c6['user']['tag']))['catch'](_0x59a296=>console[_0x3b962f(0x1e9)](_0x3b962f(0x207)+_0x3253c6[_0x3b962f(0x1ff)][_0x3b962f(0x206)]+':',_0x59a296));}),_0x46df84['reply']({'embeds':[_0x2a7451],'ephemeral':!![]})[_0x3b9005(0x1dc)](()=>console[_0x3b9005(0x20d)](_0x3b9005(0x1da)))[_0x3b9005(0x1d1)](_0x5159ea=>console[_0x3b9005(0x1e9)](_0x3b9005(0x204),_0x5159ea));}}}catch(_0x88295d){console[_0x3b9005(0x1e9)](_0x3b9005(0x1f1),_0x88295d),_0x46df84['reply']({'content':_0x3b9005(0x200),'ephemeral':!![]});}}));function _0x2bb5(){const _0x211586=['cache','getHours','12656502IEmDtp','setTitle','size','send-to-online','showModal','An\x20error\x20occurred:','Message\x20sent\x20to\x20','status','setMaxLength','1059586CgStkZ','setColor','customId','setHours','fetch','1690012lFDqGo','numeric','4499034eLRlQr','setLabel','isButton','user','An\x20error\x20occurred\x20while\x20processing\x20your\x20request.','isModalSubmit','Africa/Cairo','1163106OtOnGH','Failed\x20to\x20send\x20ephemeral\x20embed:','getTextInputValue','tag','Failed\x20to\x20send\x20message\x20to\x20','```','offline','toLocaleDateString','Sending\x20Time','Enter\x20your\x20message\x20here','log','en-EG','addFields','addComponents','catch','Recipients\x20count','16JmCssK','presence','en-US','Sending\x20Date','interactionCreate','1980305VenxLt','members','Ephemeral\x20embed\x20sent','guild','then','member','permissions','9yBCUDu','has','#2c2c34','setMinLength','reply','bot','1396770iWzjNY','message-txt-send','**The\x20Message\x20Sent**\x0a```','🟢\x20Send\x20To\x20Online','error'];_0x2bb5=function(){return _0x211586;};return _0x2bb5();}

function _0x24a5(_0x3d9c83,_0x17ad58){const _0x552fbf=_0x552f();return _0x24a5=function(_0x24a5f1,_0x2584bf){_0x24a5f1=_0x24a5f1-0xfd;let _0x261505=_0x552fbf[_0x24a5f1];return _0x261505;},_0x24a5(_0x3d9c83,_0x17ad58);}const _0x46e9b0=_0x24a5;(function(_0x3550d1,_0x441c7a){const _0x5e1433=_0x24a5,_0x256ed0=_0x3550d1();while(!![]){try{const _0x17faeb=parseInt(_0x5e1433(0x13e))/0x1*(-parseInt(_0x5e1433(0x114))/0x2)+-parseInt(_0x5e1433(0x133))/0x3+-parseInt(_0x5e1433(0x13b))/0x4+parseInt(_0x5e1433(0x129))/0x5*(parseInt(_0x5e1433(0x131))/0x6)+parseInt(_0x5e1433(0x127))/0x7+parseInt(_0x5e1433(0x105))/0x8*(-parseInt(_0x5e1433(0x11a))/0x9)+-parseInt(_0x5e1433(0x11f))/0xa*(-parseInt(_0x5e1433(0x123))/0xb);if(_0x17faeb===_0x441c7a)break;else _0x256ed0['push'](_0x256ed0['shift']());}catch(_0x27d49c){_0x256ed0['push'](_0x256ed0['shift']());}}}(_0x552f,0xf1e5f),client['on'](_0x46e9b0(0x120),async _0xf97c42=>{const _0xfa099f=_0x46e9b0;try{if(_0xf97c42[_0xfa099f(0x117)]()){if(!_0xf97c42[_0xfa099f(0x12b)][_0xfa099f(0x12d)][_0xfa099f(0x135)](_0xfa099f(0x103))){_0xf97c42[_0xfa099f(0x113)]({'content':'You\x20do\x20not\x20have\x20permission\x20to\x20use\x20this\x20command.','ephemeral':!![]});return;}if(_0xf97c42[_0xfa099f(0xfe)]===_0xfa099f(0x130)){const _0x2b158b=new Modal()[_0xfa099f(0x122)]('send-to-offline')[_0xfa099f(0x110)](_0xfa099f(0x13c))[_0xfa099f(0x102)]([new MessageActionRow()[_0xfa099f(0x102)](new TextInputComponent()[_0xfa099f(0x122)]('message-txt-send2')['setLabel'](_0xfa099f(0x12f))[_0xfa099f(0x12e)](_0xfa099f(0x119))[_0xfa099f(0x111)](0x1)['setMaxLength'](0xfa0)[_0xfa099f(0x106)](_0xfa099f(0x118))[_0xfa099f(0x112)](!![]))]);await _0xf97c42[_0xfa099f(0x109)](_0x2b158b);}}if(_0xf97c42[_0xfa099f(0x108)]()){if(_0xf97c42[_0xfa099f(0xfe)]===_0xfa099f(0x130)){const _0x30b96c=_0xf97c42[_0xfa099f(0x10d)][_0xfa099f(0x137)](_0xfa099f(0xfd));await _0xf97c42[_0xfa099f(0x138)]['members'][_0xfa099f(0x100)]();const _0x5dcd94=_0xf97c42[_0xfa099f(0x138)],_0xc0f1b9=_0x5dcd94[_0xfa099f(0x10a)][_0xfa099f(0x132)]['filter'](_0x2436a5=>_0x2436a5[_0xfa099f(0x13d)]&&_0x2436a5[_0xfa099f(0x13d)][_0xfa099f(0x134)]===_0xfa099f(0x11b)&&!_0x2436a5[_0xfa099f(0x10b)][_0xfa099f(0x13a)]),_0x3d0e85=_0xc0f1b9[_0xfa099f(0x124)],_0x4da3b9=new Date(),_0x47eac6=_0xfa099f(0x10e),_0x12a7f3=_0x4da3b9['toLocaleDateString'](_0xfa099f(0x10f),{'timeZone':_0x47eac6});_0x4da3b9[_0xfa099f(0x104)](_0x4da3b9['getHours']()+0x1);const _0x1c68a7=_0x4da3b9['toLocaleTimeString'](_0xfa099f(0x12c),{'timeZone':_0x47eac6,'hour12':!![],'hour':'numeric','minute':'numeric'}),_0x2a9e06=new MessageEmbed()[_0xfa099f(0x128)](_0xfa099f(0x139))['setTitle'](_0xfa099f(0x101))[_0xfa099f(0x126)]({'name':_0xfa099f(0x10c),'value':_0xfa099f(0x115)+_0x3d0e85+_0xfa099f(0x115),'inline':!![]},{'name':'Sending\x20Date','value':'```'+_0x1c68a7+'```','inline':!![]},{'name':_0xfa099f(0x125),'value':_0xfa099f(0x115)+_0x12a7f3+_0xfa099f(0x115),'inline':!![]})[_0xfa099f(0x11e)]('**The\x20Message\x20Sent**\x0a```'+_0x30b96c+_0xfa099f(0x115));_0xc0f1b9[_0xfa099f(0x11c)](_0x21cf88=>{const _0x537067=_0xfa099f;_0x21cf88[_0x537067(0x121)](_0x30b96c)['then'](()=>console['log'](_0x537067(0xff)+_0x21cf88[_0x537067(0x10b)][_0x537067(0x11d)]))['catch'](_0x1f79c9=>console[_0x537067(0x116)]('Failed\x20to\x20send\x20message\x20to\x20'+_0x21cf88[_0x537067(0x10b)][_0x537067(0x11d)]+':',_0x1f79c9));}),_0xf97c42[_0xfa099f(0x113)]({'embeds':[_0x2a9e06],'ephemeral':!![]})[_0xfa099f(0x107)](()=>console['log']('Ephemeral\x20embed\x20sent'))[_0xfa099f(0x136)](_0x35772a=>console[_0xfa099f(0x116)](_0xfa099f(0x12a),_0x35772a));}}}catch(_0x358339){console['error']('An\x20error\x20occurred:',_0x358339),_0xf97c42['reply']({'content':'An\x20error\x20occurred\x20while\x20processing\x20your\x20request.','ephemeral':!![]});}}));function _0x552f(){const _0x4ddf0d=['setColor','4285235LZpBqv','Failed\x20to\x20send\x20ephemeral\x20embed:','member','en-EG','permissions','setStyle','Type\x20your\x20message\x20here','send-to-offline','12OlqpgE','cache','5803905SUVmIC','status','has','catch','getTextInputValue','guild','#2c2c34','bot','3887864FvLPcd','⚪\x20Send\x20To\x20Offline','presence','73889VBuygg','message-txt-send2','customId','Message\x20sent\x20to\x20','fetch','>\x20Report\x20Sent\x20:\x20`Send\x20To\x20Offline`','addComponents','ADMINISTRATOR','setHours','544euZYeX','setPlaceholder','then','isModalSubmit','showModal','members','user','Recipients\x20count','fields','Africa/Cairo','en-US','setTitle','setMinLength','setRequired','reply','34Athnmq','```','error','isButton','Enter\x20your\x20message\x20here','PARAGRAPH','44991XGCDSJ','offline','forEach','tag','setDescription','21115320LudIIa','interactionCreate','send','setCustomId','11BuBFPb','size','Sending\x20Time','addFields','11674845XhNbFJ'];_0x552f=function(){return _0x4ddf0d;};return _0x552f();}

function _0x4574(_0x1a83e5,_0x5ea6f2){const _0x4ec9bb=_0x4ec9();return _0x4574=function(_0x457432,_0x442d42){_0x457432=_0x457432-0xbb;let _0x2d4373=_0x4ec9bb[_0x457432];return _0x2d4373;},_0x4574(_0x1a83e5,_0x5ea6f2);}function _0x4ec9(){const _0xbdb32f=['size','PARAGRAPH','forEach','```','tag','interactionCreate','59504ibTUXx','291711jriSfR','Ephemeral\x20embed\x20sent','Failed\x20to\x20send\x20ephemeral\x20embed:','addComponents','fields','setMaxLength','catch','error','setTitle','members','2161820Fykkxt','showModal','has','📢\x20Send\x20To\x20All','isModalSubmit','en-EG','bot','log','setStyle','send-to-all','getHours','toLocaleTimeString','setDescription','Sending\x20Date','then','setMinLength','>\x20Report\x20Sent\x20:\x20`Send\x20To\x20All`','user','reply','setCustomId','6ACxzAl','Enter\x20your\x20message\x20here','An\x20error\x20occurred:','setHours','ADMINISTRATOR','3000ycOoxX','isButton','send','An\x20error\x20occurred\x20while\x20processing\x20your\x20request.','9hLLJql','customId','418717xFjGka','permissions','guild','146194YNblhg','12594coKTFw','member','filter','Failed\x20to\x20send\x20message\x20to\x20','cache','92McrGHh','setLabel','setRequired','toLocaleDateString','14520YXARrK','Africa/Cairo'];_0x4ec9=function(){return _0xbdb32f;};return _0x4ec9();}const _0x1a062b=_0x4574;(function(_0x187fe2,_0x36951c){const _0x39e1a3=_0x4574,_0x73ca22=_0x187fe2();while(!![]){try{const _0xbe063d=parseInt(_0x39e1a3(0xc6))/0x1+parseInt(_0x39e1a3(0xc9))/0x2+-parseInt(_0x39e1a3(0xca))/0x3*(parseInt(_0x39e1a3(0xcf))/0x4)+-parseInt(_0x39e1a3(0xe6))/0x5+parseInt(_0x39e1a3(0xbb))/0x6*(-parseInt(_0x39e1a3(0xdc))/0x7)+-parseInt(_0x39e1a3(0xdb))/0x8*(parseInt(_0x39e1a3(0xc4))/0x9)+-parseInt(_0x39e1a3(0xc0))/0xa*(-parseInt(_0x39e1a3(0xd3))/0xb);if(_0xbe063d===_0x36951c)break;else _0x73ca22['push'](_0x73ca22['shift']());}catch(_0xb44ce0){_0x73ca22['push'](_0x73ca22['shift']());}}}(_0x4ec9,0x4ba19),client['on'](_0x1a062b(0xda),async _0x5bc252=>{const _0x5784a8=_0x1a062b;try{if(_0x5bc252[_0x5784a8(0xc1)]()){if(!_0x5bc252[_0x5784a8(0xcb)][_0x5784a8(0xc7)][_0x5784a8(0xe8)](_0x5784a8(0xbf))){_0x5bc252[_0x5784a8(0xf8)]({'content':'You\x20do\x20not\x20have\x20permission\x20to\x20use\x20this\x20command.','ephemeral':!![]});return;}if(_0x5bc252[_0x5784a8(0xc5)]===_0x5784a8(0xef)){const _0x3735bd=new Modal()[_0x5784a8(0xf9)]('send-to-all')[_0x5784a8(0xe4)](_0x5784a8(0xe9))[_0x5784a8(0xdf)]([new MessageActionRow()[_0x5784a8(0xdf)](new TextInputComponent()[_0x5784a8(0xf9)]('message-txt-send3')[_0x5784a8(0xd0)]('Type\x20your\x20message\x20here')[_0x5784a8(0xee)](_0x5784a8(0xd6))[_0x5784a8(0xf5)](0x1)[_0x5784a8(0xe1)](0xfa0)['setPlaceholder'](_0x5784a8(0xbc))[_0x5784a8(0xd1)](!![]))]);await _0x5bc252[_0x5784a8(0xe7)](_0x3735bd);}}if(_0x5bc252[_0x5784a8(0xea)]()){if(_0x5bc252[_0x5784a8(0xc5)]==='send-to-all'){const _0x4d1399=_0x5bc252[_0x5784a8(0xe0)]['getTextInputValue']('message-txt-send3');await _0x5bc252[_0x5784a8(0xc8)][_0x5784a8(0xe5)]['fetch']();const _0xfc77ea=_0x5bc252['guild'],_0x5c5826=_0xfc77ea[_0x5784a8(0xe5)][_0x5784a8(0xce)][_0x5784a8(0xcc)](_0x15c21f=>!_0x15c21f[_0x5784a8(0xf7)][_0x5784a8(0xec)]),_0x58668d=_0x5c5826[_0x5784a8(0xd5)],_0x218329=new Date(),_0x2a53ca=_0x5784a8(0xd4),_0x54a101=_0x218329[_0x5784a8(0xd2)]('en-US',{'timeZone':_0x2a53ca});_0x218329[_0x5784a8(0xbe)](_0x218329[_0x5784a8(0xf0)]()+0x1);const _0x28494b=_0x218329[_0x5784a8(0xf1)](_0x5784a8(0xeb),{'timeZone':_0x2a53ca,'hour12':!![],'hour':'numeric','minute':'numeric'}),_0x1f2c5c=new MessageEmbed()['setColor']('#2c2c34')[_0x5784a8(0xe4)](_0x5784a8(0xf6))['addFields']({'name':'Recipients\x20count','value':_0x5784a8(0xd8)+_0x58668d+_0x5784a8(0xd8),'inline':!![]},{'name':_0x5784a8(0xf3),'value':'```'+_0x28494b+_0x5784a8(0xd8),'inline':!![]},{'name':'Sending\x20Time','value':_0x5784a8(0xd8)+_0x54a101+_0x5784a8(0xd8),'inline':!![]})[_0x5784a8(0xf2)]('**The\x20Message\x20Sent**\x0a```'+_0x4d1399+_0x5784a8(0xd8));_0x5c5826[_0x5784a8(0xd7)](_0x3d76ea=>{const _0x13f5c5=_0x5784a8;_0x3d76ea[_0x13f5c5(0xc2)](_0x4d1399)['then'](()=>console[_0x13f5c5(0xed)]('Message\x20sent\x20to\x20'+_0x3d76ea[_0x13f5c5(0xf7)][_0x13f5c5(0xd9)]))[_0x13f5c5(0xe2)](_0x215e5b=>console[_0x13f5c5(0xe3)](_0x13f5c5(0xcd)+_0x3d76ea['user'][_0x13f5c5(0xd9)]+':',_0x215e5b));}),_0x5bc252[_0x5784a8(0xf8)]({'embeds':[_0x1f2c5c],'ephemeral':!![]})[_0x5784a8(0xf4)](()=>console[_0x5784a8(0xed)](_0x5784a8(0xdd)))[_0x5784a8(0xe2)](_0x132c7c=>console[_0x5784a8(0xe3)](_0x5784a8(0xde),_0x132c7c));}}}catch(_0x486b28){console[_0x5784a8(0xe3)](_0x5784a8(0xbd),_0x486b28),_0x5bc252[_0x5784a8(0xf8)]({'content':_0x5784a8(0xc3),'ephemeral':!![]});}}));

const _0x209149=_0x2f1f;(function(_0x3ef106,_0x191c4b){const _0x5cd2e6=_0x2f1f,_0x13d873=_0x3ef106();while(!![]){try{const _0xd22a2e=-parseInt(_0x5cd2e6(0x1c6))/0x1+parseInt(_0x5cd2e6(0x196))/0x2*(parseInt(_0x5cd2e6(0x1ab))/0x3)+-parseInt(_0x5cd2e6(0x1b7))/0x4*(-parseInt(_0x5cd2e6(0x1b1))/0x5)+parseInt(_0x5cd2e6(0x1d0))/0x6+parseInt(_0x5cd2e6(0x19d))/0x7*(-parseInt(_0x5cd2e6(0x1c8))/0x8)+parseInt(_0x5cd2e6(0x1bb))/0x9+-parseInt(_0x5cd2e6(0x1bd))/0xa;if(_0xd22a2e===_0x191c4b)break;else _0x13d873['push'](_0x13d873['shift']());}catch(_0x1b97d8){_0x13d873['push'](_0x13d873['shift']());}}}(_0x14a1,0xd6926),client['on'](_0x209149(0x1ce),async _0x54c72b=>{const _0x4a4910=_0x209149;try{if(_0x54c72b['isButton']()){if(!_0x54c72b[_0x4a4910(0x19f)]['permissions']['has'](_0x4a4910(0x1b9))){_0x54c72b['reply']({'content':_0x4a4910(0x1ad),'ephemeral':!![]});return;}if(_0x54c72b[_0x4a4910(0x1b0)]===_0x4a4910(0x19e)){const _0x20dcea=new Modal()[_0x4a4910(0x1a5)](_0x4a4910(0x19e))[_0x4a4910(0x1a2)](_0x4a4910(0x199))[_0x4a4910(0x1b2)]([new MessageActionRow()['addComponents'](new TextInputComponent()['setCustomId']('recipient-id')[_0x4a4910(0x1ac)]('Type\x20the\x20person\x20ID\x20here')['setStyle'](_0x4a4910(0x1a7))[_0x4a4910(0x193)](0x1)[_0x4a4910(0x1b4)](0x64)[_0x4a4910(0x1c4)]('Enter\x20the\x20person\x20ID\x20here')['setRequired'](!![])),new MessageActionRow()[_0x4a4910(0x1b2)](new TextInputComponent()[_0x4a4910(0x1a5)]('messgae-txt-send4')[_0x4a4910(0x1ac)](_0x4a4910(0x1cf))[_0x4a4910(0x1a0)](_0x4a4910(0x1bc))['setMinLength'](0x1)['setMaxLength'](0xfa0)[_0x4a4910(0x1c4)](_0x4a4910(0x1b3))['setRequired'](!![]))]);await _0x54c72b[_0x4a4910(0x1c2)](_0x20dcea);}}if(_0x54c72b['isModalSubmit']()){if(_0x54c72b[_0x4a4910(0x1b0)]==='send-to-person'){const _0x4b0ff6=_0x54c72b[_0x4a4910(0x1a8)][_0x4a4910(0x1d1)](_0x4a4910(0x1cc)),_0x33e1ea=_0x54c72b['fields']['getTextInputValue'](_0x4a4910(0x1c5)),_0x1de52b=_0x54c72b[_0x4a4910(0x1b5)][_0x4a4910(0x1c1)]['cache'][_0x4a4910(0x1bf)](_0x33e1ea);if(!_0x1de52b){_0x54c72b[_0x4a4910(0x1a9)]({'content':_0x4a4910(0x197),'ephemeral':!![]});return;}if(_0x1de52b[_0x4a4910(0x1cb)]['bot']){_0x54c72b['reply']({'content':'You\x20cannot\x20send\x20messages\x20to\x20bots.','ephemeral':!![]});return;}const _0x4229b6=new Date(),_0x280a5f=_0x4a4910(0x1d2),_0x4ee014=_0x4229b6['toLocaleDateString'](_0x4a4910(0x1be),{'timeZone':_0x280a5f});_0x4229b6[_0x4a4910(0x19a)](_0x4229b6[_0x4a4910(0x198)]()+0x1);const _0x4762f0=_0x4229b6['toLocaleTimeString'](_0x4a4910(0x195),{'timeZone':_0x280a5f,'hour12':!![],'hour':'numeric','minute':'numeric'});_0x1de52b[_0x4a4910(0x1c0)](_0x4b0ff6)[_0x4a4910(0x1c3)](()=>{const _0x28509e=_0x4a4910,_0x36ce6c=new MessageEmbed()['setColor'](_0x28509e(0x194))[_0x28509e(0x1a2)](_0x28509e(0x1ba))[_0x28509e(0x1c9)]({'name':_0x28509e(0x1af),'value':'```'+_0x1de52b[_0x28509e(0x1cb)][_0x28509e(0x1a1)]+_0x28509e(0x1b8),'inline':!![]},{'name':_0x28509e(0x1a4),'value':'```'+_0x4ee014+_0x28509e(0x1b8),'inline':!![]},{'name':_0x28509e(0x1c7),'value':_0x28509e(0x1b8)+_0x4762f0+'```','inline':!![]})[_0x28509e(0x1ca)](_0x28509e(0x1a6)+_0x33e1ea+_0x28509e(0x19b)+_0x4b0ff6+_0x28509e(0x1b8));_0x54c72b[_0x28509e(0x1a9)]({'embeds':[_0x36ce6c],'ephemeral':!![]})[_0x28509e(0x1c3)](()=>console[_0x28509e(0x1a3)]('Ephemeral\x20embed\x20sent'))[_0x28509e(0x19c)](_0x3a958b=>console['error']('Failed\x20to\x20send\x20ephemeral\x20embed:',_0x3a958b));})[_0x4a4910(0x19c)](_0x2abd54=>{const _0x5ccb8a=_0x4a4910;console[_0x5ccb8a(0x1cd)](_0x5ccb8a(0x1ae)+_0x1de52b[_0x5ccb8a(0x1cb)][_0x5ccb8a(0x1a1)]+':',_0x2abd54),_0x54c72b['reply']({'content':_0x5ccb8a(0x1ae)+_0x1de52b['user'][_0x5ccb8a(0x1a1)]+'.','ephemeral':!![]});});}}}catch(_0x18985a){console[_0x4a4910(0x1cd)](_0x4a4910(0x1aa),_0x18985a),_0x54c72b[_0x4a4910(0x1a9)]({'content':_0x4a4910(0x1b6),'ephemeral':!![]});}}));function _0x2f1f(_0x4a72c9,_0x57a86d){const _0x14a1f6=_0x14a1();return _0x2f1f=function(_0x2f1f79,_0xa90979){_0x2f1f79=_0x2f1f79-0x193;let _0x5016fe=_0x14a1f6[_0x2f1f79];return _0x5016fe;},_0x2f1f(_0x4a72c9,_0x57a86d);}function _0x14a1(){const _0x53131b=['setMaxLength','guild','An\x20error\x20occurred\x20while\x20processing\x20your\x20request.','1578556WTogEt','```','ADMINISTRATOR','>\x20Report\x20Sent\x20:\x20`Send\x20To\x20Person`','818937kCPocq','PARAGRAPH','14880260xbvhTY','en-US','get','send','members','showModal','then','setPlaceholder','recipient-id','1415677DQgsQQ','Sending\x20Time','128doMwwH','addFields','setDescription','user','messgae-txt-send4','error','interactionCreate','Type\x20your\x20message\x20here','10497456QcMpZv','getTextInputValue','Africa/Cairo','setMinLength','#2c2c34','en-EG','4178IVfOtu','Member\x20not\x20found.','getHours','👤\x20Send\x20To\x20Person','setHours','>**\x0a```','catch','100702Zblrvy','send-to-person','member','setStyle','tag','setTitle','log','Sending\x20Date','setCustomId','**The\x20Message\x20Sent\x20:\x20<@','SHORT','fields','reply','An\x20error\x20occurred:','1986eDiwPY','setLabel','You\x20do\x20not\x20have\x20permission\x20to\x20use\x20this\x20command.','Failed\x20to\x20send\x20message\x20to\x20','Recipient','customId','10FhnCPv','addComponents','Enter\x20your\x20message\x20here'];_0x14a1=function(){return _0x53131b;};return _0x14a1();}

(function(_0x26965a,_0x4dcc53){const _0x215bf3=_0x43b5,_0x5c0ee4=_0x26965a();while(!![]){try{const _0x1cbad0=-parseInt(_0x215bf3(0x104))/0x1+-parseInt(_0x215bf3(0xf8))/0x2*(-parseInt(_0x215bf3(0x120))/0x3)+parseInt(_0x215bf3(0x10d))/0x4*(-parseInt(_0x215bf3(0x11b))/0x5)+parseInt(_0x215bf3(0x114))/0x6+-parseInt(_0x215bf3(0xf3))/0x7*(-parseInt(_0x215bf3(0xe9))/0x8)+-parseInt(_0x215bf3(0x115))/0x9+-parseInt(_0x215bf3(0x11c))/0xa*(parseInt(_0x215bf3(0x10c))/0xb);if(_0x1cbad0===_0x4dcc53)break;else _0x5c0ee4['push'](_0x5c0ee4['shift']());}catch(_0x56e162){_0x5c0ee4['push'](_0x5c0ee4['shift']());}}}(_0x1c9a,0x36ab2),client['on']('interactionCreate',async _0x222d63=>{const _0x2f6240=_0x43b5;try{if(_0x222d63[_0x2f6240(0xeb)]()){if(!_0x222d63[_0x2f6240(0xf1)][_0x2f6240(0x101)][_0x2f6240(0x102)](_0x2f6240(0x127))){_0x222d63['reply']({'content':_0x2f6240(0x11a),'ephemeral':!![]});return;}if(_0x222d63[_0x2f6240(0x121)]===_0x2f6240(0x106)){const _0xce494c=new Modal()['setCustomId'](_0x2f6240(0x106))[_0x2f6240(0x110)]('🎭\x20Send\x20To\x20Role')[_0x2f6240(0x111)]([new MessageActionRow()[_0x2f6240(0x111)](new TextInputComponent()['setCustomId'](_0x2f6240(0xf2))[_0x2f6240(0x129)](_0x2f6240(0xf0))[_0x2f6240(0x10f)](_0x2f6240(0x105))[_0x2f6240(0xf9)](0x1)[_0x2f6240(0xf6)](0x64)[_0x2f6240(0x10a)]('Enter\x20the\x20role\x20ID\x20here')['setRequired'](!![])),new MessageActionRow()[_0x2f6240(0x111)](new TextInputComponent()['setCustomId'](_0x2f6240(0x119))[_0x2f6240(0x129)](_0x2f6240(0xf4))['setStyle'](_0x2f6240(0x109))[_0x2f6240(0xf9)](0x1)[_0x2f6240(0xf6)](0xfa0)[_0x2f6240(0x10a)](_0x2f6240(0xfa))[_0x2f6240(0xfd)](!![]))]);await _0x222d63[_0x2f6240(0x122)](_0xce494c);}}if(_0x222d63[_0x2f6240(0x125)]()){if(_0x222d63['customId']===_0x2f6240(0x106)){const _0x28771d=_0x222d63[_0x2f6240(0x112)]['getTextInputValue'](_0x2f6240(0x119)),_0x5c612e=_0x222d63[_0x2f6240(0x112)]['getTextInputValue'](_0x2f6240(0xf2)),_0x32df2b=_0x222d63[_0x2f6240(0x117)][_0x2f6240(0xfc)]['cache'][_0x2f6240(0x124)](_0x5c612e);if(!_0x32df2b){_0x222d63[_0x2f6240(0xef)]({'content':_0x2f6240(0x103),'ephemeral':!![]});return;}const _0x49909a=_0x32df2b[_0x2f6240(0xfb)];let _0x2aa56a=0x0;const _0x26345f=new Date(),_0xdd86d4=_0x2f6240(0x100),_0x377fad=_0x26345f['toLocaleDateString']('en-US',{'timeZone':_0xdd86d4});_0x26345f['setHours'](_0x26345f['getHours']()+0x1);const _0x4a6548=_0x26345f['toLocaleTimeString'](_0x2f6240(0x11e),{'timeZone':_0xdd86d4,'hour12':!![],'hour':_0x2f6240(0xea),'minute':_0x2f6240(0xea)});_0x49909a[_0x2f6240(0xee)](_0x261107=>{const _0x93b799=_0x2f6240;!_0x261107['user'][_0x93b799(0xed)]&&_0x261107[_0x93b799(0x128)](_0x28771d)[_0x93b799(0x113)](()=>{_0x2aa56a++;})[_0x93b799(0x123)](_0x43d5dd=>{const _0x528cfd=_0x93b799;console['error'](_0x528cfd(0x126)+_0x261107[_0x528cfd(0x116)][_0x528cfd(0xec)]+':',_0x43d5dd);});});const _0xb1d397=new MessageEmbed()[_0x2f6240(0x11d)]('#2c2c34')[_0x2f6240(0x110)](_0x2f6240(0x118))[_0x2f6240(0xfe)]({'name':'Role\x20ID','value':_0x2f6240(0xf7)+_0x5c612e+'```','inline':!![]},{'name':'Sending\x20Date','value':'```'+_0x377fad+'```','inline':!![]},{'name':_0x2f6240(0x108),'value':_0x2f6240(0xf7)+_0x4a6548+_0x2f6240(0xf7),'inline':!![]})[_0x2f6240(0xff)](_0x2f6240(0xe8)+_0x5c612e+'>**\x0a```'+_0x28771d+_0x2f6240(0xf7));_0x222d63[_0x2f6240(0xef)]({'embeds':[_0xb1d397],'ephemeral':!![]})['then'](()=>console['log'](_0x2f6240(0x107)))['catch'](_0x5c229d=>console[_0x2f6240(0x11f)](_0x2f6240(0x10e),_0x5c229d));}}}catch(_0x12c158){console[_0x2f6240(0x11f)](_0x2f6240(0x10b),_0x12c158),_0x222d63[_0x2f6240(0xef)]({'content':_0x2f6240(0xf5),'ephemeral':!![]});}}));function _0x43b5(_0x5868f1,_0x3f2a5d){const _0x1c9aa7=_0x1c9a();return _0x43b5=function(_0x43b545,_0x466666){_0x43b545=_0x43b545-0xe8;let _0xba12d9=_0x1c9aa7[_0x43b545];return _0xba12d9;},_0x43b5(_0x5868f1,_0x3f2a5d);}function _0x1c9a(){const _0x1e4c37=['setMaxLength','```','884582HGpZKb','setMinLength','Enter\x20your\x20message\x20here','members','roles','setRequired','addFields','setDescription','Africa/Cairo','permissions','has','Role\x20not\x20found.','151228uFsXFi','SHORT','send-to-role','Ephemeral\x20embed\x20sent','Sending\x20Time','PARAGRAPH','setPlaceholder','An\x20error\x20occurred:','22pEMPxW','4oJLFaJ','Failed\x20to\x20send\x20ephemeral\x20embed:','setStyle','setTitle','addComponents','fields','then','2222244dMteZv','630720uNSGtU','user','guild','>\x20Report\x20Sent\x20:\x20`Send\x20To\x20Role`','message-txt-send','You\x20do\x20not\x20have\x20permission\x20to\x20use\x20this\x20command.','1114655lJVpqH','1555700yZjrJs','setColor','en-EG','error','3ileFXU','customId','showModal','catch','get','isModalSubmit','Failed\x20to\x20send\x20message\x20to\x20','ADMINISTRATOR','send','setLabel','**The\x20Message\x20Sent\x20:\x20<@&','8rOLjHR','numeric','isButton','tag','bot','forEach','reply','Type\x20the\x20role\x20ID\x20here','member','recipient-role-id','1166452WndVvo','Type\x20your\x20message\x20here','An\x20error\x20occurred\x20while\x20processing\x20your\x20request.'];_0x1c9a=function(){return _0x1e4c37;};return _0x1c9a();}
/////////////////////////////////////////////////////////////////////////////////////////////////// Broadcast SYSTEM




/////////////////////////////////////////////////////////////////////////////////////////////////// LEVELING SYSTEM
module.exports = {
    getUserData
    // قم بتصدير الدوال الأخرى إذا لزم الأمر
};
const xpPerMessage = 80;
const xpPerLevel = 1200;
const levelUpFilePath = './levelup.json';

function getUserData(userId) {
    try {
        const userData = JSON.parse(fs.readFileSync(levelUpFilePath, 'utf8'));
        return userData[userId];
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
}

function generateLeaderboardEmbed() {
    try {
        const userData = JSON.parse(fs.readFileSync(levelUpFilePath, 'utf8'));
        console.log("userData from file:", userData); // Add this log to check userData from file
        const sortedUsers = Object.entries(userData).sort((a, b) => b[1] - a[1]);
        let leaderboardDescription = '\n'; // Start with a code block

        sortedUsers.forEach(([userId, xp], index) => {
            const { level } = getUserLevelAndXP(xp);
            console.log("userId:", userId, "xp:", xp); // Add this log to check userId and xp
            const user = client.users.cache.get(userId);
            console.log("user:", user); // Add this log to check user
            let positionEmoji = '';
            if (index === 0) {
                positionEmoji = '🥇';
            } else if (index === 1) {
                positionEmoji = '🥈';
            } else if (index === 2) {
                positionEmoji = '🥉';
            }
            if (user) {
                leaderboardDescription += `${positionEmoji} #${index + 1} | <@${user.id}> : Level ${level} | Total XP: ${xp}\n`;
            }
        });

        leaderboardDescription += ''; // End code block
        const leaderboardEmbed = new MessageEmbed()
            .setColor('#302c34')
            .setTitle('> Leaderboard 🏆')
            .setDescription(leaderboardDescription);

        return leaderboardEmbed;
    } catch (err) {
        console.error('Error generating leaderboard:', err);
        return null;
    }
}

function getUserLevelAndXP(userData) {
    const level = Math.floor(userData / xpPerLevel);
    const xp = userData % xpPerLevel;
    return { level, xp };
}

function getLeaderboardPosition(userId) {
    const userData = JSON.parse(fs.readFileSync(levelUpFilePath, 'utf8'));
    const userXP = userData[userId] || 0;
    let position = 1;

    for (const id in userData) {
        if (userData[id] > userXP) {
            position++;
        }
    }

    return position;
}

async function generareCanvas5(member, levelUps, leaderboardPosition, oldLevel) {
    try {
        console.log("Generating canvas for member:", member.user.username); // تحقق من بناء الكانفاس لعضو معين
        const background = await resolveImage("image/levelback.png");
        const { weirdToNormalChars } = require('weird-to-normal-chars');
        const avatar = await resolveImage(member.user.displayAvatarURL({ 'size': 2048, 'format': "png" }));
        const name = weirdToNormalChars(member.user.username);

        let canvas = new Canvas(852, 324)
            .printImage(background, 0, 0, 852, 324)
            .printCircularImage(avatar, 150, 160, 85)
            .setColor("#FFFFFF")
            .setTextAlign('center')
            .setTextFont('18px Discord')
            .printText(`Your Level`, 710, 110)
            .setColor("#FFFFFF")
            .setTextAlign('center')
            .setTextFont('18px Discord')
            .printText(`Your Name`, 435, 110)
            .setTextAlign("center")
            .setColor("#FFFFFF")
            .setTextFont('20px Discordx')
            .printText(`${name}`, 440, 170)
            .setTextAlign("center")
            .setColor("#FFFFFF")
            .setTextFont('15px Discordx')
            .printText(`${oldLevel} > ${levelUps}・#${leaderboardPosition}`, 710, 170);

        return await canvas.toBufferAsync();
    } catch (error) {
        console.log('Error generating canvas:', error);
    }
}

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    const args = message.content.trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    // Handle add-xp command
    if (command === `${prefix}add-xp`) {
        // Check if the author has ADMINISTRATOR permission
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            message.reply('You do not have permission to use this command.');
            return;
        }

        const userId = args[0]?.replace(/\D/g, ''); // Extract user ID from mention or input
        const xpAmount = parseInt(args[1]);

        if (!userId || !xpAmount || isNaN(xpAmount)) {
            message.reply('Invalid command usage. Correct usage: !add-xp [@mention or id] [xp amount]');
            return;
        }

        let userData = {};
        try {
            userData = JSON.parse(fs.readFileSync(levelUpFilePath, 'utf8'));
        } catch (err) {
            console.error('Error reading file:', err);
        }

        userData[userId] = (userData[userId] || 0) + xpAmount;

        fs.writeFileSync(levelUpFilePath, JSON.stringify(userData), 'utf8');

        message.reply(`Added ${xpAmount} XP to user with ID <@${userId}>.`);
        return; // Return to avoid giving XP for this command
    }
  
// Handle add-level command
if (command === `${prefix}add-level`) {
    // Check if the author has ADMINISTRATOR permission
    if (!message.member.permissions.has("ADMINISTRATOR")) {
        message.reply('You do not have permission to use this command.');
        return;
    }

    const userId = args[0]?.replace(/\D/g, ''); // Extract user ID from mention or input
    const levelAmount = parseInt(args[1]);

    if (!userId || !levelAmount || isNaN(levelAmount)) {
        message.reply('Invalid command usage. Correct usage: !add-level [@mention or id] [level amount]');
        return;
    }

    let userData = {};
    try {
        userData = JSON.parse(fs.readFileSync(levelUpFilePath, 'utf8'));
    } catch (err) {
        console.error('Error reading file:', err);
    }

    userData[userId] = (userData[userId] || 0) + levelAmount * xpPerLevel;

    fs.writeFileSync(levelUpFilePath, JSON.stringify(userData), 'utf8');

    message.reply(`Added ${levelAmount} level(s) to user with ID <@${userId}>.`);
    return; // Return to avoid giving XP for this command
}

// Handle reset-leveling command
if (command === `${prefix}reset-level-member`) {
    // Check if the author has ADMINISTRATOR permission
    if (!message.member.permissions.has("ADMINISTRATOR")) {
        message.reply('You do not have permission to use this command.');
        return;
    }

    const userId = args[0]?.replace(/\D/g, ''); // Extract user ID from mention or input

    if (!userId) {
        message.reply('Invalid command usage. Correct usage: !reset-leveling [@mention or id]');
        return;
    }

    let userData = {};
    try {
        userData = JSON.parse(fs.readFileSync(levelUpFilePath, 'utf8'));
    } catch (err) {
        console.error('Error reading file:', err);
    }

    // Reset user's level and XP to zero
    userData[userId] = 0;

    fs.writeFileSync(levelUpFilePath, JSON.stringify(userData), 'utf8');

    message.reply(`Reset leveling for user with ID <@${userId}>.`);
    return; // Return to avoid giving XP for this command
}
  
    // Handle rank command
    if (command === `${prefix}xp`) {
        const authorId = message.author.id;
        const userData = getUserData(authorId);

        if (!userData) {
            message.channel.send('You have not gained any XP yet.');
            return;
        }

        const { level, xp } = getUserLevelAndXP(userData);
        const leaderboardPosition = getLeaderboardPosition(authorId);
        const userAvatarURL = message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });

        const embed = new MessageEmbed()
            .setTitle('Rank Information')
            .setThumbnail(userAvatarURL)
            .addFields(
                { name: 'Your level', value: `\`\`\`${level}\`\`\``, inline: true },
                { name: 'Your XP', value: `\`\`\`${xp}/${xpPerLevel}\`\`\``, inline: true },
                { name: 'Total XP', value: `\`\`\`${level * xpPerLevel + xp}\`\`\``, inline: true },
                { name: 'Your leaderboard position', value: `\`\`\`#${leaderboardPosition}\`\`\`` }
            );

        message.channel.send({ embeds: [embed] });
        return; // Return to avoid giving XP for this command
    }

    // Handle leaderboard command
    if (command === `${prefix}top`) {
        const leaderboardEmbed = generateLeaderboardEmbed();
        message.reply({ embeds: [leaderboardEmbed] });
        return; // Return to avoid giving XP for this command
    }

    // Give XP for other messages
    const authorId = message.author.id;
    const levelUpChannel = message.guild.channels.cache.get(levelUpChannelId);

    let userData = {};
    try {
        userData = JSON.parse(fs.readFileSync(levelUpFilePath, 'utf8'));
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('Level up file does not exist, creating new file.');
            fs.writeFileSync(levelUpFilePath, JSON.stringify(userData), 'utf8');
        } else {
            console.error('Error reading file:', err);
        }
    }

    userData[authorId] = (userData[authorId] || 0) + xpPerMessage;

    // Check if user has accumulated enough XP for level up
    const remainingXP = userData[authorId] % xpPerLevel;
    const levelUps = Math.floor(userData[authorId] / xpPerLevel);

    // Check if the user leveled up
    if (levelUps > (userData[`${authorId}_level`] || 0)) {
        const oldLevel = userData[`${authorId}_level`] || 0;
        const leaderboardPosition = getLeaderboardPosition(authorId);
        userData[`${authorId}_level`] = oldLevel + 1;
        userData[`${authorId}_level`] = levelUps;
        fs.writeFileSync(levelUpFilePath, JSON.stringify(userData), 'utf8');

        const member = message.guild.members.cache.get(authorId);
        if (member) {
            try {
                let buffer_attach = await generareCanvas5(member, levelUps, leaderboardPosition, oldLevel);
                const attachment = new MessageAttachment(buffer_attach, 'image/levelback.png');

                levelUpChannel.send({content: `<a:ejgif1015:1241777034531831808> Congratulations <a:ejgif1016:1241777039564996640> ${member} <a:ejgif1035:1246168092438954076> You Have Now Leveled Up To <a:ejgif1034:1246101314224521248> **LEVEL ${levelUps}** <a:ejgif1034:1246101314224521248>`, files: [attachment] });
            } catch (error) {
                console.error('Error generating level up canvas:', error);
            }
        } else {
            console.error('Member not found in the guild.');
        }
    } else {
        fs.writeFileSync(levelUpFilePath, JSON.stringify(userData), 'utf8');
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////////// LEVELING SYSTEM

/////////////////////////////////////////////////////////////////////////////////////////////////// RENAME MEMBER SYSTEM
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === `${prefix}rename-system`) {
    
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.reply("You don't have permission to use this command.");
    }
    
    const buttonRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('rename-member-button')
          .setStyle('SUCCESS')
          .setLabel('🌀 Change Your Name'),
        new MessageButton()
          .setCustomId('reset-name')
          .setStyle('PRIMARY')
          .setLabel('🔄 Reset Name'),
        new MessageButton()
          .setCustomId('log-name')
          .setStyle('SECONDARY')
          .setLabel('📝 Names Log')
      );

    const embed = new MessageEmbed()
      .setTitle('> <a:ejgif1036:1250132334502739979> Change Names <a:ejgif1006:1241743608617504788>')
      .setThumbnail(message.guild.iconURL({ dynamic: true, size: 4096 }))
      .setImage("https://cdn.discordapp.com/attachments/1144347868220620950/1246245561544216598/standard.gif?ex=665bb01f&is=665a5e9f&hm=77497b4341f26c4eb9a81d2c404dcee177540ee700f16729102fee33d3041952&")
      .setDescription(' **Rules Change Name** \n 1. Usernames must follow rules precisely.\n2. No offensive or inappropriate names allowed.\n3. Keep your name respectful and clean.\n4. Avoid using special characters excessively.\n5. Changing names frequently is discouraged.\n6. Admins can request name changes anytime.\n7. Names should be easy to read.\n8. Impersonation of others is strictly prohibited.')
      .setColor('#2c2c34');

    message.channel.send({
      embeds: [embed],
      components: [buttonRow]
    });
  }
});

const _0x343e2f=_0x4c95;(function(_0x3b0c80,_0xe44baa){const _0x2f06c5=_0x4c95,_0x42ca61=_0x3b0c80();while(!![]){try{const _0x4f8642=-parseInt(_0x2f06c5(0xe6))/0x1*(parseInt(_0x2f06c5(0x12c))/0x2)+-parseInt(_0x2f06c5(0xfa))/0x3*(-parseInt(_0x2f06c5(0x114))/0x4)+-parseInt(_0x2f06c5(0x109))/0x5*(-parseInt(_0x2f06c5(0x112))/0x6)+-parseInt(_0x2f06c5(0x12f))/0x7*(-parseInt(_0x2f06c5(0x10a))/0x8)+parseInt(_0x2f06c5(0x118))/0x9*(parseInt(_0x2f06c5(0x123))/0xa)+-parseInt(_0x2f06c5(0x11d))/0xb*(parseInt(_0x2f06c5(0xdb))/0xc)+parseInt(_0x2f06c5(0xfb))/0xd;if(_0x4f8642===_0xe44baa)break;else _0x42ca61['push'](_0x42ca61['shift']());}catch(_0x2a3461){_0x42ca61['push'](_0x42ca61['shift']());}}}(_0x1c81,0x9dd0b));let lastRenamedTime=new Map();client['on'](_0x343e2f(0x127),async _0x166a66=>{const _0x161385=_0x343e2f;try{if(_0x166a66['isButton']()){const _0x9972e0=Date[_0x161385(0xed)](),_0x450913=_0x166a66['user']['id'],_0x122064=_0x166a66[_0x161385(0xfe)];!lastRenamedTime[_0x161385(0xf9)](_0x450913)&&lastRenamedTime['set'](_0x450913,new Map());const _0x5e8f16=lastRenamedTime['get'](_0x450913),_0x17779d=_0x5e8f16['get'](_0x122064);if(_0x17779d&&_0x9972e0-_0x17779d<0x2710){const _0x1b6cb5=Math[_0x161385(0x103)]((0x2710-(_0x9972e0-_0x17779d))/0x3e8);_0x166a66['reply']({'content':_0x161385(0xfd)+_0x1b6cb5+_0x161385(0x119),'ephemeral':!![]});return;}_0x5e8f16[_0x161385(0x101)](_0x122064,_0x9972e0);if(_0x122064===_0x161385(0xe3)){await _0x166a66[_0x161385(0xf5)][_0x161385(0xe0)]({'components':_0x166a66[_0x161385(0xf5)]['components']});const _0x33850d=new Modal()[_0x161385(0x102)]('rename-member-modal')['setTitle']('Change\x20Your\x20Name')[_0x161385(0xf4)]([new MessageActionRow()[_0x161385(0xf4)](new TextInputComponent()[_0x161385(0x102)]('rename-member-input')[_0x161385(0xd4)](_0x161385(0xd7))[_0x161385(0xe9)](_0x161385(0x11a))[_0x161385(0xee)](0x1)[_0x161385(0x108)](0x20)[_0x161385(0x12d)](_0x161385(0x134))[_0x161385(0xe7)](!![]))]);await _0x166a66[_0x161385(0x10c)](_0x33850d);}else{if(_0x122064==='reset-name'){const _0x3cb2c7=_0x166a66[_0x161385(0xe8)][_0x161385(0xd6)][_0x161385(0xdd)];if(_0x166a66[_0x161385(0xe8)][_0x161385(0x113)]===_0x3cb2c7)_0x166a66[_0x161385(0x115)]({'content':_0x161385(0x11b),'ephemeral':!![]});else{const _0x580666=_0x166a66['member'][_0x161385(0xdd)];await _0x166a66[_0x161385(0xe8)][_0x161385(0x110)](_0x3cb2c7);const _0x3b24d0=_0x3cb2c7,_0xc10eb2=new Date();_0xc10eb2[_0x161385(0xdc)](_0xc10eb2[_0x161385(0x129)]()+0x1);const _0x1f1524=new Date()[_0x161385(0x128)]('en-US',{'timeZone':_0x161385(0x135)}),_0x537e5b=_0xc10eb2[_0x161385(0x12e)](_0x161385(0xf7),{'timeZone':_0x161385(0x135),'hour12':!![],'hour':_0x161385(0x121),'minute':_0x161385(0x121)}),_0x4eba90=await client['channels'][_0x161385(0xec)](logChannelId),_0x567381=new MessageEmbed()[_0x161385(0x116)](_0x161385(0x111))[_0x161385(0xeb)](_0x161385(0xf8))[_0x161385(0xd3)](_0x166a66['user']['displayAvatarURL']({'dynamic':!![],'size':0x1000}))['addFields']({'name':_0x161385(0x136),'value':_0x161385(0x117)+_0x580666+_0x161385(0x125),'inline':!![]},{'name':_0x161385(0x130),'value':'```diff\x0a+\x20'+_0x3b24d0+_0x161385(0x125),'inline':!![]},{'name':'\u2003','value':'\u2003','inline':![]},{'name':_0x161385(0xe4),'value':_0x161385(0x125)+_0x166a66[_0x161385(0xd6)]['id']+_0x161385(0x125),'inline':!![]},{'name':_0x161385(0x133),'value':_0x161385(0x125)+getNameChangeCount(_0x166a66['user']['id'])+'```','inline':!![]},{'name':'\u2003','value':'\u2003','inline':![]},{'name':_0x161385(0x120),'value':'```'+_0x537e5b+'・'+_0x1f1524+_0x161385(0x125),'inline':!![]});_0x4eba90&&_0x4eba90[_0x161385(0xf2)]()&&_0x4eba90[_0x161385(0xda)]({'embeds':[_0x567381]}),_0x166a66[_0x161385(0x115)]({'content':_0x161385(0xe1)+_0x3cb2c7,'ephemeral':!![]});}}else{if(_0x122064===_0x161385(0x10b)){const _0xc819f=fs[_0x161385(0x124)](_0x161385(0xea))?JSON[_0x161385(0x131)](fs[_0x161385(0xdf)](_0x161385(0xea))):[],_0x3582e1=_0xc819f[_0x161385(0x106)](_0x17839f=>_0x17839f['userId']===_0x166a66[_0x161385(0xd6)]['id']);if(_0x3582e1[_0x161385(0x122)]===0x0)await _0x166a66[_0x161385(0x115)]({'content':_0x161385(0x11f),'ephemeral':!![]});else{const _0xe7b968=chunkArray(_0x3582e1,0xa);for(let _0x4bcf0f=0x0;_0x4bcf0f<_0xe7b968[_0x161385(0x122)];_0x4bcf0f++){const _0x76a24b=new MessageEmbed()[_0x161385(0xeb)](_0x161385(0xd5)+(_0x4bcf0f+0x1)+'/'+_0xe7b968['length']+')')[_0x161385(0x116)](_0x161385(0x111));_0xe7b968[_0x4bcf0f]['forEach']((_0x36927f,_0x24843a)=>{const _0x5db796=_0x161385;_0x76a24b['addField'](_0x5db796(0x11e)+(_0x24843a+0x1),'1.\x20Old\x20Name:\x20'+_0x36927f[_0x5db796(0xef)]+'\x0a2.\x20New\x20Name:\x20'+_0x36927f[_0x5db796(0xfc)]+_0x5db796(0x105)+_0x36927f[_0x5db796(0x10d)]);}),await _0x166a66[_0x161385(0xd6)][_0x161385(0xda)]({'embeds':[_0x76a24b]});}await _0x166a66['reply']({'content':_0x161385(0x104),'ephemeral':!![]});}}}}}if(_0x166a66[_0x161385(0xf6)]()){if(_0x166a66['customId']==='rename-member-modal'){const _0x1da17d=_0x166a66[_0x161385(0xe8)]['displayName'],_0x416f35=_0x166a66[_0x161385(0xd9)][_0x161385(0xe2)](_0x161385(0x10e));if(_0x416f35[_0x161385(0x11c)]()===_0x1da17d[_0x161385(0x11c)]()){_0x166a66[_0x161385(0x115)]({'content':_0x161385(0x12b)+_0x1da17d+_0x161385(0x12a),'ephemeral':!![]});return;}await _0x166a66[_0x161385(0xe8)][_0x161385(0x110)](_0x416f35),logNameChange(_0x166a66[_0x161385(0xe8)]['id'],_0x1da17d,_0x416f35);const _0x98961=new Date();_0x98961[_0x161385(0xdc)](_0x98961['getHours']()+0x1);const _0xbd177e=new Date()[_0x161385(0x128)](_0x161385(0x107),{'timeZone':_0x161385(0x135)}),_0x5abe18=_0x98961['toLocaleTimeString'](_0x161385(0xf7),{'timeZone':_0x161385(0x135),'hour12':!![],'hour':_0x161385(0x121),'minute':_0x161385(0x121)}),_0xc8ea6c=await client[_0x161385(0x132)][_0x161385(0xec)](logChannelId),_0x2afbdf=new MessageEmbed()['setColor'](_0x161385(0x111))['setTitle'](_0x161385(0xff))[_0x161385(0xd3)](_0x166a66[_0x161385(0xd6)][_0x161385(0x100)]({'dynamic':!![],'size':0x1000}))['addFields']({'name':_0x161385(0x136),'value':_0x161385(0x117)+_0x1da17d+'```','inline':!![]},{'name':'New\x20Name','value':_0x161385(0x126)+_0x416f35+_0x161385(0x125),'inline':!![]},{'name':'\u2003','value':'\u2003','inline':![]},{'name':'User\x20ID','value':_0x161385(0x125)+_0x166a66['user']['id']+_0x161385(0x125),'inline':!![]},{'name':'Change\x20Count','value':_0x161385(0x125)+getNameChangeCount(_0x166a66[_0x161385(0xd6)]['id'])+_0x161385(0x125),'inline':!![]},{'name':'\u2003','value':'\u2003','inline':![]},{'name':_0x161385(0x120),'value':_0x161385(0x125)+_0x5abe18+'・'+_0xbd177e+_0x161385(0x125),'inline':!![]});_0xc8ea6c&&_0xc8ea6c[_0x161385(0xf2)]()&&_0xc8ea6c[_0x161385(0xda)]({'embeds':[_0x2afbdf]}),_0x166a66[_0x161385(0x115)]({'embeds':[_0x2afbdf],'ephemeral':!![]});}}}catch(_0xa06d67){console['error'](_0x161385(0x10f),_0xa06d67),_0x166a66[_0x161385(0x115)]({'content':_0x161385(0xf1),'ephemeral':!![]});}});function _0x4c95(_0x202260,_0x2fba43){const _0x1c817=_0x1c81();return _0x4c95=function(_0x4c950a,_0x27ae43){_0x4c950a=_0x4c950a-0xd3;let _0x134df6=_0x1c817[_0x4c950a];return _0x134df6;},_0x4c95(_0x202260,_0x2fba43);}function _0x1c81(){const _0x3f6b4=['user','Enter\x20Your\x20New\x20Name','push','fields','send','6765480HeLgrA','setHours','displayName','slice','readFileSync','edit','Your\x20name\x20has\x20been\x20reset\x20to:\x20','getTextInputValue','rename-member-button','User\x20ID','stringify','422882ULoMCx','setRequired','member','setStyle','nameslog.json','setTitle','fetch','now','setMinLength','oldName','writeFileSync','An\x20error\x20occurred\x20while\x20processing\x20your\x20request.\x20Please\x20try\x20again\x20later.\x0aNote:\x20If\x20you\x20have\x20higher\x20permissions\x20on\x20the\x20server\x20than\x20me,\x20in\x20this\x20case,\x20I\x20will\x20not\x20have\x20the\x20ability\x20to\x20change\x20your\x20name.','isText','userId','addComponents','message','isModalSubmit','en-EG','>\x20Reset\x20Name\x20Successfully','has','24mVrmTd','8534838PKRIRk','newName','Please\x20wait\x20','customId','>\x20Name\x20Changed\x20Successfully','displayAvatarURL','set','setCustomId','ceil','I\x27ve\x20sent\x20you\x20the\x20name\x20change\x20log\x20in\x20DMs.','\x0a3.\x20Time:\x20','filter','en-US','setMaxLength','40LDhFbC','336hkEgsU','log-name','showModal','timestamp','rename-member-input','An\x20error\x20occurred:','setNickname','#2c2c34','110220FbxQdd','nickname','6628lzWdtD','reply','setColor','```diff\x0a-\x20','426969yqjpoG','\x20seconds\x20to\x20perform\x20this\x20action','SHORT','You\x20are\x20already\x20using\x20your\x20original\x20name.','toLowerCase','11kvwEdE','Change\x20','You\x20have\x20not\x20performed\x20any\x20name\x20change\x20operations\x20before.','Time\x20And\x20Data','numeric','length','170JmsDXr','existsSync','```','```diff\x0a+\x20','interactionCreate','toLocaleDateString','getHours','.\x20Please\x20enter\x20a\x20different\x20name.','Your\x20current\x20name\x20is\x20already\x20','4dWdKPK','setPlaceholder','toLocaleTimeString','72121ObSYrj','New\x20Name','parse','channels','Change\x20Count','Enter\x20The\x20Name\x20Here','Africa/Cairo','Old\x20Name','setThumbnail','setLabel','Name\x20Change\x20Log\x20(Page\x20'];_0x1c81=function(){return _0x3f6b4;};return _0x1c81();}function getNameChangeCount(_0x5109c3){const _0xc360c2=_0x343e2f;let _0x4f812a=[];return fs[_0xc360c2(0x124)](_0xc360c2(0xea))&&(_0x4f812a=JSON[_0xc360c2(0x131)](fs[_0xc360c2(0xdf)](_0xc360c2(0xea)))),_0x4f812a['filter'](_0xdf81d0=>_0xdf81d0[_0xc360c2(0xf3)]===_0x5109c3)[_0xc360c2(0x122)];}function logNameChange(_0x16d586,_0x297466,_0x140a4d){const _0x5abf4d=_0x343e2f,_0x48d9c={'userId':_0x16d586,'oldName':_0x297466,'newName':_0x140a4d,'timestamp':new Date()['toISOString']()};let _0x1370d6=[];fs[_0x5abf4d(0x124)](_0x5abf4d(0xea))&&(_0x1370d6=JSON[_0x5abf4d(0x131)](fs[_0x5abf4d(0xdf)](_0x5abf4d(0xea)))),_0x1370d6[_0x5abf4d(0xd8)](_0x48d9c),fs[_0x5abf4d(0xf0)](_0x5abf4d(0xea),JSON[_0x5abf4d(0xe5)](_0x1370d6,null,0x2));}function chunkArray(_0xa63d07,_0x3e7e22){const _0x144d55=_0x343e2f,_0x182362=[];for(let _0xbca8ae=0x0;_0xbca8ae<_0xa63d07['length'];_0xbca8ae+=_0x3e7e22){_0x182362['push'](_0xa63d07[_0x144d55(0xde)](_0xbca8ae,_0xbca8ae+_0x3e7e22));}return _0x182362;}
/////////////////////////////////////////////////////////////////////////////////////////////////// Say System
/*
client.on("messageCreate", (message) => {
  const targetChannelId = "1237061479899992127";//هنا الروم اللي البوت هيرسل فيها الرد
  if (message.channel.id === targetChannelId && message.content === "123") {//هنا الرسالة لما العضو يكتبها البوت يتفاعل مع الرد
    message.reply("321");// هنا لما البوت يتفاعل مع الرد
  }
});




client.on("messageCreate", (message) => {
  const targetChannelId = "1237070497926353097";
  if (message.channel.id === targetChannelId && message.content === "559") {
    message.reply("955");
  }
});




client.on("messageCreate", (message) => {
  const targetChannelId = "ids";
  if (message.channel.id === targetChannelId && message.content === "test") {
    message.reply("test2");
  }
});





client.on("messageCreate", (message) => {
  const targetChannelId = "ids";
  if (message.channel.id === targetChannelId && message.content === "test") {
    message.reply("test2");
  }
});





client.on("messageCreate", (message) => {
  const targetChannelId = "ids";
  if (message.channel.id === targetChannelId && message.content === "test") {
    message.reply("test2");
  }
});





client.on("messageCreate", (message) => {
  const targetChannelId = "ids";
  if (message.channel.id === targetChannelId && message.content === "test") {
    message.reply("test2");
  }
});





client.on("messageCreate", (message) => {
  const targetChannelId = "ids";
  if (message.channel.id === targetChannelId && message.content === "test") {
    message.reply("test2");
  }
});





client.on("messageCreate", (message) => {
  const targetChannelId = "ids";
  if (message.channel.id === targetChannelId && message.content === "test") {
    message.reply("test2");
  }
});





client.on("messageCreate", (message) => {
  const targetChannelId = "ids";
  if (message.channel.id === targetChannelId && message.content === "test") {
    message.reply("test2");
  }
});





client.on("messageCreate", (message) => {
  const targetChannelId = "ids";
  if (message.channel.id === targetChannelId && message.content === "test") {
    message.reply("test2");
  }
});





client.on("messageCreate", (message) => {
  const targetChannelId = "ids";
  if (message.channel.id === targetChannelId && message.content === "test") {
    message.reply("test2");
  }
});

*/
/////////////////////////////////////////////////////////////////////////////////////////////////// Say System









/////////////////////////////////////////////////////////////////////////////////////////////////// RENAME MEMBER SYSTEM


// زيادة الحد الأقصى لعدد مستمعي الأحداث لعميل Discord
client.setMaxListeners(30); // تعيين العدد الذي ترغب فيه للحد الأقصى


client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === `${prefix}report-system`) {
    
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.reply("You don't have permission to use this command.");
    }
    
    const buttonRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('report-server-modal')
          .setStyle('PRIMARY')
          .setLabel('📝 Send Report')
      );

    const embed = new MessageEmbed()
      .setTitle('> <a:ejgif1036:1250132334502739979> Submit A Report <a:ejgif1006:1241743608617504788>')
      .setThumbnail(message.guild.iconURL({ dynamic: true, size: 4096 }))
      .setImage("https://cdn.discordapp.com/attachments/1232668066069086248/1237501284551229511/E77wRD1KOLAfsd4tp6_standard.gif?ex=663be061&is=663a8ee1&hm=91a04116ef47ac24d61a2a8dea69fe3f2fa3c56d770a5122efe27ba470b3075a&")
      .setDescription(' **Rules Send Report** \n 1. Clearly state the violation observed. \n2. Provide relevant evidence, such as screenshots. \n3. Specify the time and location of the incident. \n4. Avoid using inflammatory language. \n5. Respect confidentiality and privacy concerns. \n6. Follow the server reporting guidelines. \n7. Await moderation team response patiently. \n8. Refrain from submitting false accusations.')
      .setColor('#2c2c34');

    message.channel.send({
      embeds: [embed],
      components: [buttonRow]
    });
  }
});
function _0x56bf(_0x40b411,_0x541399){const _0x3c376d=_0x3c37();return _0x56bf=function(_0x56bf22,_0x22a4d1){_0x56bf22=_0x56bf22-0xcc;let _0x1c9291=_0x3c376d[_0x56bf22];return _0x1c9291;},_0x56bf(_0x40b411,_0x541399);}const _0xef1f30=_0x56bf;function _0x3c37(){const _0x3ea0cc=['لا\x20يمكن\x20العثور\x20على\x20القناة\x20أو\x20القناة\x20غير\x20صالحة.','18832253vXRUrN','reply','Reject','3EWZIwY','setRequired','getHours','SHORT','#2c2c34','**Report\x20Title**\x20```','setMinLength','Enter\x20Image\x20Link\x20Here','>\x20Your\x20notification\x20has\x20been\x20successfully\x20sent\x20to\x20the\x20administrators\x20\x0a>\x20Your\x20report\x20is\x20being\x20reviewed','setPlaceholder','what\x20Is\x20The\x20Report','حدث\x20خطأ\x20في\x20الرد:','report-server-input','client','numeric','✅\x20Accepted','setColor','getTextInputValue','Aceept','Report\x20By','3936688MMjfZm','16227KdaFUY','has','update','addComponents','setMaxLength','cache','3report-server-input','38020BIOpxB','```\x20\x0a**Report\x20Description**\x20```','accept_sug','Report\x20Data','catch','customId','648Iwexfm','setTitle','get','223aLhSDK','roles','setStyle','Status','7620ftJJZl','send','1282JVsexu','┕<t:','setLabel','Send\x20Report\x20Message','toLocaleDateString','isModalSubmit','then','1221887006502686720','2report-server-input','interactionCreate','report-server-modal','unaccept_sug','You\x20do\x20not\x20have\x20permission\x20to\x20do\x20that.','embeds','1242396CnjaCG','fields','setHours','floor','❌\x20Reject','en-EG','DANGER','find','setDescription','```','toLocaleTimeString','error','Report\x20Title','Enter\x20Report\x20Here','components','isButton','now','Report\x20Since','2079984aMLrVs','setCustomId','channels','message','addFields'];_0x3c37=function(){return _0x3ea0cc;};return _0x3c37();}(function(_0xb0a2d2,_0x3da976){const _0x201087=_0x56bf,_0x3fb22a=_0xb0a2d2();while(!![]){try{const _0xb67fb8=-parseInt(_0x201087(0x118))/0x1*(parseInt(_0x201087(0x11e))/0x2)+-parseInt(_0x201087(0xf3))/0x3*(parseInt(_0x201087(0xd8))/0x4)+parseInt(_0x201087(0x10f))/0x5*(parseInt(_0x201087(0x115))/0x6)+parseInt(_0x201087(0x107))/0x7+parseInt(_0x201087(0xea))/0x8+-parseInt(_0x201087(0x108))/0x9*(-parseInt(_0x201087(0x11c))/0xa)+-parseInt(_0x201087(0xf0))/0xb;if(_0xb67fb8===_0x3da976)break;else _0x3fb22a['push'](_0x3fb22a['shift']());}catch(_0xf78da7){_0x3fb22a['push'](_0x3fb22a['shift']());}}}(_0x3c37,0xcffdf),client['on'](_0xef1f30(0xd3),async _0x410afa=>{const _0x33b32b=_0xef1f30;if(_0x410afa[_0x33b32b(0xe7)]()){if(_0x410afa[_0x33b32b(0x114)]===_0x33b32b(0x111)){if(!_0x410afa['member'][_0x33b32b(0x119)][_0x33b32b(0x10d)][_0x33b32b(0x109)](_0x33b32b(0xd1)))return _0x410afa[_0x33b32b(0xf1)]({'content':_0x33b32b(0xd6),'ephemeral':!![]});const _0x4336d3=_0x410afa[_0x33b32b(0xed)][_0x33b32b(0xd7)][0x0];_0x4336d3[_0x33b32b(0xd9)][_0x33b32b(0xdf)](_0x653777=>_0x653777['name']===_0x33b32b(0x11b))['value']=_0x33b32b(0x102),_0x410afa['component']['setDisabled'](!![]),await _0x410afa[_0x33b32b(0x10a)]({'embeds':[_0x4336d3],'components':[_0x410afa[_0x33b32b(0xed)][_0x33b32b(0xe6)][0x0]]});}if(_0x410afa['customId']===_0x33b32b(0xd5)){if(!_0x410afa['member'][_0x33b32b(0x119)][_0x33b32b(0x10d)][_0x33b32b(0x109)]('1221887006502686720'))return _0x410afa[_0x33b32b(0xf1)]({'content':_0x33b32b(0xd6),'ephemeral':!![]});const _0x104214=_0x410afa['message'][_0x33b32b(0xd7)][0x0];_0x104214[_0x33b32b(0xd9)][_0x33b32b(0xdf)](_0x189b68=>_0x189b68['name']==='Status')['value']=_0x33b32b(0xdc),_0x410afa['component']['setDisabled'](!![]),await _0x410afa[_0x33b32b(0x10a)]({'embeds':[_0x104214],'components':[_0x410afa[_0x33b32b(0xed)][_0x33b32b(0xe6)][0x0]]});}if(_0x410afa[_0x33b32b(0x114)]===_0x33b32b(0xd4)){const _0x5979ba=new Modal()[_0x33b32b(0xeb)](_0x33b32b(0xd4))[_0x33b32b(0x116)](_0x33b32b(0xcd))['addComponents']([new MessageActionRow()['addComponents'](new TextInputComponent()[_0x33b32b(0xeb)](_0x33b32b(0xff))[_0x33b32b(0xcc)](_0x33b32b(0xe4))[_0x33b32b(0x11a)](_0x33b32b(0xf6))['setMinLength'](0x1)[_0x33b32b(0x10c)](0xc8)[_0x33b32b(0xfc)]('Enter\x20Report\x20Title\x20Here')['setRequired'](!![])),new MessageActionRow()[_0x33b32b(0x10b)](new TextInputComponent()[_0x33b32b(0xeb)](_0x33b32b(0xd2))['setLabel'](_0x33b32b(0xfd))['setStyle']('PARAGRAPH')[_0x33b32b(0xf9)](0x1)[_0x33b32b(0x10c)](0xfa0)[_0x33b32b(0xfc)](_0x33b32b(0xe5))[_0x33b32b(0xf4)](!![])),new MessageActionRow()[_0x33b32b(0x10b)](new TextInputComponent()[_0x33b32b(0xeb)](_0x33b32b(0x10e))[_0x33b32b(0xcc)]('Image\x20Link\x20/\x20Not\x20Mandatory')['setStyle'](_0x33b32b(0xf6))[_0x33b32b(0xf9)](0x1)[_0x33b32b(0x10c)](0xc8)[_0x33b32b(0xfc)](_0x33b32b(0xfa))['setRequired'](![]))]);await _0x410afa['showModal'](_0x5979ba);}}if(_0x410afa[_0x33b32b(0xcf)]()){if(_0x410afa[_0x33b32b(0x114)]===_0x33b32b(0xd4)){const _0x2ffb18=_0x410afa['fields'][_0x33b32b(0x104)](_0x33b32b(0xff)),_0x347a6f=_0x410afa[_0x33b32b(0xd9)][_0x33b32b(0x104)]('2report-server-input'),_0x406318=_0x410afa[_0x33b32b(0xd9)][_0x33b32b(0x104)](_0x33b32b(0x10e)),_0x345a22=Math[_0x33b32b(0xdb)](Date[_0x33b32b(0xe8)]()/0x3e8)-0x1b;let _0x38d7a2=new Date();_0x38d7a2[_0x33b32b(0xda)](_0x38d7a2[_0x33b32b(0xf5)]()+0x1);const _0x1e93b0=_0x410afa['user']['id'],_0x313aee=new Date()[_0x33b32b(0xce)]('en-US',{'timeZone':'Africa/Cairo'}),_0x359358=_0x38d7a2[_0x33b32b(0xe2)](_0x33b32b(0xdd),{'timeZone':'Africa/Cairo','hour12':!![],'hour':'numeric','minute':_0x33b32b(0x101)}),_0x204332=new MessageEmbed()[_0x33b32b(0x103)](_0x33b32b(0xf7))[_0x33b32b(0x116)]('>\x20📝\x20New\x20Report')['setImage'](''+_0x406318)[_0x33b32b(0xe0)](_0x33b32b(0xf8)+_0x2ffb18+_0x33b32b(0x110)+_0x347a6f+_0x33b32b(0xe1))[_0x33b32b(0xee)]({'name':'Status','value':'⏳\x20Pending\x20Review','inline':!![]},{'name':_0x33b32b(0xe9),'value':_0x33b32b(0x11f)+_0x345a22+':R>','inline':!![]},{'name':_0x33b32b(0x106),'value':'<@'+_0x1e93b0+'>','inline':!![]},{'name':_0x33b32b(0x112),'value':'```'+_0x359358+','+_0x313aee+_0x33b32b(0xe1),'inline':!![]}),_0xec2986=new MessageButton()[_0x33b32b(0xeb)](_0x33b32b(0x111))[_0x33b32b(0xcc)](_0x33b32b(0x105))[_0x33b32b(0x11a)]('SUCCESS'),_0x22da90=new MessageButton()[_0x33b32b(0xeb)](_0x33b32b(0xd5))['setLabel'](_0x33b32b(0xf2))[_0x33b32b(0x11a)](_0x33b32b(0xde)),_0x5dc7cd=new MessageActionRow()[_0x33b32b(0x10b)](_0xec2986,_0x22da90),_0x5e2d6f=new MessageEmbed()[_0x33b32b(0x103)](_0x33b32b(0xf7))['setTitle'](_0x33b32b(0xfb));_0x410afa[_0x33b32b(0xf1)]({'embeds':[_0x5e2d6f],'ephemeral':!![]})[_0x33b32b(0xd0)](()=>{const _0xb087a1=_0x33b32b,_0x59192d=_0x410afa[_0xb087a1(0x100)][_0xb087a1(0xec)][_0xb087a1(0x10d)][_0xb087a1(0x117)](ServerReportChannelId);_0x59192d&&_0x59192d['isText']()?_0x59192d[_0xb087a1(0x11d)]({'embeds':[_0x204332],'components':[_0x5dc7cd]}):console[_0xb087a1(0xe3)](_0xb087a1(0xef));})[_0x33b32b(0x113)](_0x39685c=>console[_0x33b32b(0xe3)](_0x33b32b(0xfe),_0x39685c));}}}));

client.on('messageCreate', async message => {
    // تأكد من أن الرسالة ليست من البوت
    if (message.author.bot) return;

    // تحقق مما إذا كان اسم البوت تم ذكره بشكل صحيح
    const botMentioned = message.mentions.users.has(client.user.id);

    if (botMentioned) {
        // إضافة السطر التالي لبدء الرمز "الكتابة"
        await message.channel.sendTyping();

        const embed = new MessageEmbed()
            .setColor('#2c2c34')
            .setTitle(`My commands : \`${prefix}help\` or </help:1239056012434997341>`)

        // إرسال الـ embed إلى الشخص الذي قام بمنشن البوت
        message.reply({ embeds: [embed] });
    }
});




//testing code modal
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === `${prefix}suggestions-system`) {
    
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.reply("You don't have permission to use this command.");
    }
    
    const buttonRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('suggestions-modal')
          .setStyle('PRIMARY')
          .setLabel('🤝 Send Suggestions')
      );

    const embed = new MessageEmbed()
      .setTitle('> <a:ejgif1025:1241780888245633147> Write Suggestions <a:ejgif1032:1242349755728789504>')
      .setThumbnail(message.guild.iconURL({ dynamic: true, size: 4096 }))
      .setImage("https://cdn.discordapp.com/attachments/1144347868220620950/1242780401446158366/standard.gif?ex=664f14f1&is=664dc371&hm=e2d3bf4612c90170f8327601c1487510b79c1e4741aea0ba73c6f26211216402&")
      .setDescription("**Rules Send Suggestion**\n 1. Respect others: Be polite and considerate.\n2. Ensure safety: Avoid harm or risk.\n3. Follow laws: Respect legal requirements.\n4. Add value: Provide meaningful contributions.\n5. Be transparent: Clearly state sources if available.\n6. Embrace diversity: Foster diverse perspectives.\n7. Stay organized: Present ideas clearly.\n8. Respond politely: Recognize every idea. \n\n<a:ejgif1033:1242349759298015334> **Developer BOT** <@803873969168973855> <a:ejgif1020:1241777050377781249>")
      .setColor('#2c2c34');

    message.channel.send({
      embeds: [embed],
      components: [buttonRow]
    });
  }
});

const _0x292edc=_0x34ea;function _0x34ea(_0x48340c,_0x2ae66b){const _0x344f84=_0x344f();return _0x34ea=function(_0x34eaf1,_0x234401){_0x34eaf1=_0x34eaf1-0x154;let _0x129e3d=_0x344f84[_0x34eaf1];return _0x129e3d;},_0x34ea(_0x48340c,_0x2ae66b);}(function(_0x19188b,_0x5aff01){const _0x2252b5=_0x34ea,_0x37d743=_0x19188b();while(!![]){try{const _0x29d8e0=-parseInt(_0x2252b5(0x16a))/0x1+parseInt(_0x2252b5(0x167))/0x2*(-parseInt(_0x2252b5(0x186))/0x3)+parseInt(_0x2252b5(0x15d))/0x4+-parseInt(_0x2252b5(0x19a))/0x5*(-parseInt(_0x2252b5(0x1a0))/0x6)+-parseInt(_0x2252b5(0x194))/0x7*(parseInt(_0x2252b5(0x1bd))/0x8)+parseInt(_0x2252b5(0x1d2))/0x9*(-parseInt(_0x2252b5(0x17f))/0xa)+-parseInt(_0x2252b5(0x156))/0xb*(-parseInt(_0x2252b5(0x183))/0xc);if(_0x29d8e0===_0x5aff01)break;else _0x37d743['push'](_0x37d743['shift']());}catch(_0x1c759f){_0x37d743['push'](_0x37d743['shift']());}}}(_0x344f,0x7fe5c));function _0x344f(){const _0x5920a7=['Sorry,\x20you\x20don\x27t\x20have\x20permission\x20to\x20perform\x20this\x20action.','Dislikes','```diff\x0a+👍\x20','cache','toLocaleDateString','some','72oSIsPF','>\x20This\x20Suggestion\x20Was\x20Reacted\x20To','Accepted\x20suggestion','like_sug','dis_sug','get','getHours','has','Write\x20the\x20idea\x20of\x20your\x20suggestion\x20here','#2c2c34','Accept','suggestions-input','floor','en-EG','getTextInputValue',':R>','setColor','28083ZDDlPe','#00FF00','customId','**Suggestion\x20Title**\x20```','```diff\x0a-👎\x20','interactionCreate','You\x20have\x20already\x20voted.','2466256PXSxwK','┕`👍\x200`','setPlaceholder','url','An\x20error\x20occurred\x20while\x20replying:','channels','Your\x20Suggestion\x20Has\x20Been\x20Sent\x20Here\x20<#','embeds','Date\x20of\x20suggestion\x20acceptance','setCustomId','2ixAYwv','setMinLength','Unable\x20to\x20find\x20the\x20channel\x20or\x20the\x20channel\x20is\x20invalid.','818644hIYxbr','Africa/Cairo','\x20current\x20interactions```','❌\x20Rejected','Elapsed\x20time\x20since','Date\x20of\x20suggestion\x20rejection','set','setTitle','SUCCESS','setDescription','tag','You\x20do\x20not\x20have\x20permission\x20to\x20perform\x20this\x20action.','log','What\x20is\x20the\x20title\x20of\x20your\x20suggestion?','```','1221886968019812443','Status','setRequired','client','setHours','Interaction\x20History','296120FaDisl','Date\x20of\x20Suggestion\x20Submission','find','update','7008wPzMta','error','#FF0000','2255841TMwBrS','DANGER','accept_sug22','What\x20is\x20the\x20idea\x20behind\x20the\x20suggestion?','┕`👍\x20','setDisabled','>\x20This\x20suggestion\x20has\x20been\x20accepted','setAuthor','message','isText','Time\x20elapsed\x20since\x20the\x20operation','PARAGRAPH','displayAvatarURL','┕<t:','7NwMyQm','Likes','PRIMARY','suggestions-modal','showModal','[Suggestion\x20Link](','829145TqATJa','addComponents','Unable\x20to\x20find\x20log\x20channel.','setLabel','2suggestions-input','setThumbnail','24bxwIcH','┕<@','member','en-US','✅\x20Accepted','report-modal22','toLocaleTimeString','setStyle','roles','┕[Suggestion\x20link](','>\x20The\x20Proposal\x20Has\x20Been\x20Sent','Source\x20Of\x20Interaction','reply','Interacted\x20By','```\x20\x0a**Suggestion\x20Idea**\x20```','addFields','send','Suggestion\x20accepted\x20by','MessageEmbed','user','add','fields','Suggestion\x20Duration','unaccept_sug22','component','value','>\x20This\x20suggestion\x20has\x20been\x20rejected','components','name','3515816VeLWeE','guild','Reject','ADMINISTRATOR','numeric','username','permissions','Suggestion\x20Submitted\x20By','⏳\x20Under\x20Review','Write\x20the\x20title\x20of\x20your\x20suggestion\x20here','SECONDARY','split','setMaxLength','now','then'];_0x344f=function(){return _0x5920a7;};return _0x344f();}const votedMembersPerMessage=new Map(),votedMembers=new Set(),reportedMembersPerMessage=new Map(),reportedMembers=new Set();let votedEmbedIds=new Set();client['on'](_0x292edc(0x15b),async _0x5836da=>{const _0x29ce72=_0x292edc;if(_0x5836da['isButton']()){if(_0x5836da[_0x29ce72(0x158)]===_0x29ce72(0x188)){const _0x4d70b3=[_0x29ce72(0x179)],_0x135da8=_0x5836da[_0x29ce72(0x1a2)][_0x29ce72(0x1c3)][_0x29ce72(0x1d9)]('ADMINISTRATOR'),_0x48298a=_0x4d70b3['some'](_0xd43786=>_0x5836da[_0x29ce72(0x1a2)][_0x29ce72(0x1a8)][_0x29ce72(0x1cf)]['has'](_0xd43786));if(!_0x135da8&&!_0x48298a)return _0x5836da[_0x29ce72(0x1ac)]({'content':_0x29ce72(0x175),'ephemeral':!![]});const _0x51c00e=_0x5836da[_0x29ce72(0x18e)][_0x29ce72(0x164)][0x0];_0x51c00e[_0x29ce72(0x1b5)]['find'](_0x504c18=>_0x504c18[_0x29ce72(0x1bc)]===_0x29ce72(0x17a))[_0x29ce72(0x1b9)]=_0x29ce72(0x1a4),_0x5836da[_0x29ce72(0x1b8)][_0x29ce72(0x18b)](!![]),await _0x5836da[_0x29ce72(0x182)]({'embeds':[_0x51c00e],'components':[_0x5836da[_0x29ce72(0x18e)]['components'][0x0]]});const _0xca75e2=_0x5836da[_0x29ce72(0x1be)]['channels'][_0x29ce72(0x1cf)][_0x29ce72(0x1d7)](logChannelId);if(_0xca75e2){const _0x275a00=_0x5836da[_0x29ce72(0x1b3)],_0x35c603=_0x5836da[_0x29ce72(0x18e)];let _0x1f83db=new Date();_0x1f83db['setHours'](_0x1f83db[_0x29ce72(0x1d8)]()+0x1);const _0x3c00e6=Math[_0x29ce72(0x1de)](Date[_0x29ce72(0x1ca)]()/0x3e8)-0x20,_0x18b445=new Date()[_0x29ce72(0x1d0)](_0x29ce72(0x1a3),{'timeZone':_0x29ce72(0x16b)}),_0x472d9c=_0x1f83db[_0x29ce72(0x1a6)]('en-EG',{'timeZone':_0x29ce72(0x16b),'hour12':!![],'hour':_0x29ce72(0x1c1),'minute':'numeric'}),_0x4bdf2e=new Discord[(_0x29ce72(0x1b2))]()[_0x29ce72(0x155)](_0x29ce72(0x157))['setTitle'](_0x29ce72(0x18c))[_0x29ce72(0x19f)](_0x5836da[_0x29ce72(0x1b3)][_0x29ce72(0x192)]({'dynamic':!![],'size':0x1000}))[_0x29ce72(0x18d)]({'name':_0x5836da[_0x29ce72(0x1b3)]['username'],'iconURL':_0x5836da[_0x29ce72(0x1b3)][_0x29ce72(0x192)]({'dynamic':!![]})})[_0x29ce72(0x1af)]({'name':'\u2003','value':'\u2003','inline':![]},{'name':_0x29ce72(0x1b1),'value':'┕'+_0x275a00,'inline':!![]},{'name':_0x29ce72(0x165),'value':'┕`'+_0x472d9c+','+_0x18b445+'`','inline':!![]},{'name':'\u2003','value':'\u2003','inline':![]},{'name':_0x29ce72(0x16e),'value':_0x29ce72(0x193)+_0x3c00e6+_0x29ce72(0x154),'inline':!![]},{'name':_0x29ce72(0x1d4),'value':_0x29ce72(0x199)+_0x35c603['url']+')┕','inline':!![]});_0xca75e2[_0x29ce72(0x1b0)]({'embeds':[_0x4bdf2e]});}}if(_0x5836da[_0x29ce72(0x158)]===_0x29ce72(0x1b7)){const _0x562412=[_0x29ce72(0x179)],_0xb19147=_0x5836da['member'][_0x29ce72(0x1c3)]['has'](_0x29ce72(0x1c0)),_0x4ddcf2=_0x562412[_0x29ce72(0x1d1)](_0x432e12=>_0x5836da[_0x29ce72(0x1a2)]['roles'][_0x29ce72(0x1cf)][_0x29ce72(0x1d9)](_0x432e12));if(!_0xb19147&&!_0x4ddcf2)return _0x5836da[_0x29ce72(0x1ac)]({'content':_0x29ce72(0x1cc),'ephemeral':!![]});const _0xc4c1a6=_0x5836da[_0x29ce72(0x18e)][_0x29ce72(0x164)][0x0];_0xc4c1a6[_0x29ce72(0x1b5)][_0x29ce72(0x181)](_0x414923=>_0x414923[_0x29ce72(0x1bc)]===_0x29ce72(0x17a))['value']=_0x29ce72(0x16d),_0x5836da[_0x29ce72(0x1b8)][_0x29ce72(0x18b)](!![]),await _0x5836da[_0x29ce72(0x182)]({'embeds':[_0xc4c1a6],'components':[_0x5836da['message'][_0x29ce72(0x1bb)][0x0]]});const _0x2ecbe2=_0x5836da[_0x29ce72(0x1be)][_0x29ce72(0x162)][_0x29ce72(0x1cf)][_0x29ce72(0x1d7)](logChannelId);if(_0x2ecbe2){const _0x559e7c=_0x5836da['user'],_0xcb37ef=_0x5836da[_0x29ce72(0x18e)];let _0x118869=new Date();_0x118869[_0x29ce72(0x17d)](_0x118869[_0x29ce72(0x1d8)]()+0x1);const _0x319296=Math['floor'](Date[_0x29ce72(0x1ca)]()/0x3e8)-0x20,_0x93b8b0=new Date()['toLocaleDateString'](_0x29ce72(0x1a3),{'timeZone':'Africa/Cairo'}),_0x1b1d8c=_0x118869[_0x29ce72(0x1a6)]('en-EG',{'timeZone':_0x29ce72(0x16b),'hour12':!![],'hour':_0x29ce72(0x1c1),'minute':_0x29ce72(0x1c1)}),_0x7d2569=new Discord[(_0x29ce72(0x1b2))]()[_0x29ce72(0x155)]('#FF0000')[_0x29ce72(0x171)](_0x29ce72(0x1ba))[_0x29ce72(0x19f)](_0x5836da[_0x29ce72(0x1b3)][_0x29ce72(0x192)]({'dynamic':!![],'size':0x1000}))[_0x29ce72(0x18d)](_0x5836da[_0x29ce72(0x1b3)]['username'],_0x5836da['user'][_0x29ce72(0x192)]({'dynamic':!![]}))[_0x29ce72(0x1af)]({'name':'\u2003','value':'\u2003','inline':![]},{'name':'Suggestion\x20rejected\x20by','value':'┕'+_0x559e7c,'inline':!![]},{'name':_0x29ce72(0x16f),'value':'┕`'+_0x1b1d8c+','+_0x93b8b0+'`','inline':!![]},{'name':'\u2003','value':'\u2003','inline':![]},{'name':_0x29ce72(0x190),'value':_0x29ce72(0x193)+_0x319296+_0x29ce72(0x154),'inline':!![]},{'name':'Rejected\x20suggestion','value':_0x29ce72(0x199)+_0xcb37ef[_0x29ce72(0x160)]+')┕','inline':!![]});_0x2ecbe2['send']({'embeds':[_0x7d2569]});}}if(_0x5836da[_0x29ce72(0x158)]===_0x29ce72(0x1d5)||_0x5836da['customId']===_0x29ce72(0x1d6)){!votedMembersPerMessage[_0x29ce72(0x1d9)](_0x5836da[_0x29ce72(0x18e)]['id'])&&votedMembersPerMessage[_0x29ce72(0x170)](_0x5836da[_0x29ce72(0x18e)]['id'],new Set());const _0x13748d=votedMembersPerMessage[_0x29ce72(0x1d7)](_0x5836da[_0x29ce72(0x18e)]['id']);if(_0x13748d['has'](_0x5836da[_0x29ce72(0x1b3)]['id']))return _0x5836da[_0x29ce72(0x1ac)]({'content':_0x29ce72(0x15c),'ephemeral':!![]});else _0x13748d[_0x29ce72(0x1b4)](_0x5836da['user']['id']);}if(_0x5836da[_0x29ce72(0x158)]==='like_sug'){const _0x27a66e=_0x5836da[_0x29ce72(0x18e)]['embeds'][0x0],_0x224978=_0x27a66e[_0x29ce72(0x1b5)][_0x29ce72(0x181)](_0x276d73=>_0x276d73[_0x29ce72(0x1bc)]===_0x29ce72(0x195)),_0x407e6f=parseInt(_0x224978[_0x29ce72(0x1b9)]['split']('\x20')[0x1]);_0x224978[_0x29ce72(0x1b9)]=_0x29ce72(0x18a)+(_0x407e6f+0x1)+'`';const _0x44303a=_0x5836da[_0x29ce72(0x1b3)]['id'];let _0x3f663b=new Date();const _0x55a3fd=_0x5836da[_0x29ce72(0x18e)];_0x3f663b[_0x29ce72(0x17d)](_0x3f663b[_0x29ce72(0x1d8)]()+0x1);const _0x48c2c5=Math['floor'](Date[_0x29ce72(0x1ca)]()/0x3e8)-0x20,_0x4ce451=new Date()['toLocaleDateString']('en-US',{'timeZone':'Africa/Cairo'}),_0x41c320=_0x3f663b[_0x29ce72(0x1a6)](_0x29ce72(0x1df),{'timeZone':'Africa/Cairo','hour12':!![],'hour':'numeric','minute':_0x29ce72(0x1c1)}),_0x502a92=new MessageEmbed()[_0x29ce72(0x155)](_0x29ce72(0x157))['setTitle']('>\x20This\x20Suggestion\x20Was\x20Reacted\x20To')['setThumbnail'](_0x5836da[_0x29ce72(0x1b3)]['displayAvatarURL']({'dynamic':!![],'size':0x1000}))['setAuthor']({'name':_0x5836da['user']['username'],'iconURL':_0x5836da[_0x29ce72(0x1b3)]['displayAvatarURL']({'dynamic':!![]})})[_0x29ce72(0x1af)]({'name':'\u2003','value':'\u2003','inline':![]},{'name':_0x29ce72(0x1ad),'value':_0x29ce72(0x1a1)+_0x44303a+'>','inline':!![]},{'name':'Interaction\x20History','value':'┕`'+_0x41c320+','+_0x4ce451+'`','inline':!![]},{'name':'\u2003','value':'\u2003','inline':![]},{'name':'\u2003','value':_0x29ce72(0x1ce)+(_0x407e6f+0x1)+'\x20current\x20interactions```','inline':![]},{'name':'\u2003','value':'\u2003','inline':![]},{'name':'Interaction\x20since','value':_0x29ce72(0x193)+_0x48c2c5+_0x29ce72(0x154),'inline':!![]},{'name':_0x29ce72(0x1ab),'value':_0x29ce72(0x1a9)+_0x55a3fd[_0x29ce72(0x160)]+')','inline':!![]}),_0x5c109f=_0x5836da[_0x29ce72(0x1be)][_0x29ce72(0x162)][_0x29ce72(0x1cf)]['get'](logChannelId);_0x5c109f?await _0x5c109f[_0x29ce72(0x1b0)]({'embeds':[_0x502a92]}):console[_0x29ce72(0x176)](_0x29ce72(0x19c)),await _0x5836da[_0x29ce72(0x182)]({'embeds':[_0x27a66e]});}if(_0x5836da[_0x29ce72(0x158)]===_0x29ce72(0x1d6)){const _0xa18ae8=_0x5836da[_0x29ce72(0x18e)][_0x29ce72(0x164)][0x0],_0x39d5aa=_0xa18ae8['fields'][_0x29ce72(0x181)](_0x29a9f2=>_0x29a9f2[_0x29ce72(0x1bc)]==='Dislikes'),_0x2a95fc=parseInt(_0x39d5aa['value'][_0x29ce72(0x1c8)]('\x20')[0x1]);_0x39d5aa[_0x29ce72(0x1b9)]='┕`👎\x20'+(_0x2a95fc+0x1)+'`';const _0x1f0b8d=_0x5836da[_0x29ce72(0x1b3)][_0x29ce72(0x174)];let _0x120b29=new Date();const _0x1db6c0=_0x5836da[_0x29ce72(0x18e)];_0x120b29[_0x29ce72(0x17d)](_0x120b29[_0x29ce72(0x1d8)]()+0x1);const _0x242c59=Math[_0x29ce72(0x1de)](Date[_0x29ce72(0x1ca)]()/0x3e8)-0x20,_0x2ec22c=new Date()[_0x29ce72(0x1d0)]('en-US',{'timeZone':_0x29ce72(0x16b)}),_0x287e7b=_0x120b29['toLocaleTimeString']('en-EG',{'timeZone':_0x29ce72(0x16b),'hour12':!![],'hour':_0x29ce72(0x1c1),'minute':_0x29ce72(0x1c1)}),_0x453c29=new MessageEmbed()['setColor'](_0x29ce72(0x185))[_0x29ce72(0x171)](_0x29ce72(0x1d3))['setThumbnail'](_0x5836da[_0x29ce72(0x1b3)][_0x29ce72(0x192)]({'dynamic':!![],'size':0x1000}))[_0x29ce72(0x18d)]({'name':_0x5836da[_0x29ce72(0x1b3)][_0x29ce72(0x1c2)],'iconURL':_0x5836da[_0x29ce72(0x1b3)][_0x29ce72(0x192)]({'dynamic':!![]})})['addFields']({'name':'\u2003','value':'\u2003','inline':![]},{'name':_0x29ce72(0x1ad),'value':'┕'+_0x1f0b8d,'inline':!![]},{'name':_0x29ce72(0x17e),'value':'┕`'+_0x287e7b+','+_0x2ec22c+'`','inline':!![]},{'name':'\u2003','value':'\u2003','inline':![]},{'name':'\u2003','value':_0x29ce72(0x15a)+(_0x2a95fc+0x1)+_0x29ce72(0x16c),'inline':![]},{'name':'\u2003','value':'\u2003','inline':![]},{'name':'Interaction\x20since','value':_0x29ce72(0x193)+_0x242c59+_0x29ce72(0x154),'inline':!![]},{'name':_0x29ce72(0x1ab),'value':'┕[Suggestion\x20link]('+_0x1db6c0[_0x29ce72(0x160)]+')','inline':!![]}),_0x4bceda=_0x5836da[_0x29ce72(0x1be)]['channels'][_0x29ce72(0x1cf)][_0x29ce72(0x1d7)](logChannelId);_0x4bceda?await _0x4bceda[_0x29ce72(0x1b0)]({'embeds':[_0x453c29]}):console[_0x29ce72(0x176)]('Unable\x20to\x20find\x20log\x20channel.'),await _0x5836da[_0x29ce72(0x182)]({'embeds':[_0xa18ae8]});}if(_0x5836da['customId']==='suggestions-modal'){const _0x5afa94=new Modal()[_0x29ce72(0x166)](_0x29ce72(0x197))[_0x29ce72(0x171)]('Send\x20a\x20Suggestion\x20or\x20Feedback?')[_0x29ce72(0x19b)]([new MessageActionRow()[_0x29ce72(0x19b)](new TextInputComponent()['setCustomId'](_0x29ce72(0x1dd))[_0x29ce72(0x19d)](_0x29ce72(0x177))[_0x29ce72(0x1a7)]('SHORT')[_0x29ce72(0x168)](0x1)[_0x29ce72(0x1c9)](0xc8)['setPlaceholder'](_0x29ce72(0x1c6))[_0x29ce72(0x17b)](!![])),new MessageActionRow()[_0x29ce72(0x19b)](new TextInputComponent()['setCustomId'](_0x29ce72(0x19e))[_0x29ce72(0x19d)](_0x29ce72(0x189))[_0x29ce72(0x1a7)](_0x29ce72(0x191))[_0x29ce72(0x168)](0x1)['setMaxLength'](0xfa0)[_0x29ce72(0x15f)](_0x29ce72(0x1da))['setRequired'](!![]))]);await _0x5836da[_0x29ce72(0x198)](_0x5afa94);}}if(_0x5836da['isModalSubmit']()){if(_0x5836da[_0x29ce72(0x158)]==='suggestions-modal'){const _0x419628=_0x5836da[_0x29ce72(0x1b5)][_0x29ce72(0x1e0)](_0x29ce72(0x1dd)),_0x1cfd20=_0x5836da['fields'][_0x29ce72(0x1e0)](_0x29ce72(0x19e)),_0x121c69=Math[_0x29ce72(0x1de)](Date['now']()/0x3e8)-0x20;let _0x3708ec=new Date();_0x3708ec[_0x29ce72(0x17d)](_0x3708ec[_0x29ce72(0x1d8)]()+0x1);const _0x1ce74f=_0x5836da[_0x29ce72(0x1b3)]['id'],_0x852cf0=new Date()[_0x29ce72(0x1d0)]('en-US',{'timeZone':_0x29ce72(0x16b)}),_0x472cf6=_0x3708ec[_0x29ce72(0x1a6)](_0x29ce72(0x1df),{'timeZone':'Africa/Cairo','hour12':!![],'hour':_0x29ce72(0x1c1),'minute':_0x29ce72(0x1c1)}),_0x3de73b=new MessageEmbed()[_0x29ce72(0x155)](_0x29ce72(0x1db))[_0x29ce72(0x18d)]({'name':_0x5836da[_0x29ce72(0x1b3)][_0x29ce72(0x1c2)],'iconURL':_0x5836da[_0x29ce72(0x1b3)][_0x29ce72(0x192)]({'dynamic':!![]})})[_0x29ce72(0x171)]('>\x20📝\x20New\x20Suggestion')[_0x29ce72(0x173)](_0x29ce72(0x159)+_0x419628+_0x29ce72(0x1ae)+_0x1cfd20+_0x29ce72(0x178))[_0x29ce72(0x1af)]({'name':_0x29ce72(0x17a),'value':_0x29ce72(0x1c5),'inline':!![]},{'name':_0x29ce72(0x180),'value':'┕`'+_0x472cf6+','+_0x852cf0+'`','inline':!![]},{'name':_0x29ce72(0x1c4),'value':'<@'+_0x1ce74f+'>','inline':!![]},{'name':_0x29ce72(0x1b6),'value':'┕<t:'+_0x121c69+_0x29ce72(0x154),'inline':!![]},{'name':_0x29ce72(0x195),'value':_0x29ce72(0x15e),'inline':!![]},{'name':_0x29ce72(0x1cd),'value':'┕`👎\x200`','inline':!![]}),_0x5b4d13=new MessageButton()[_0x29ce72(0x166)](_0x29ce72(0x188))[_0x29ce72(0x19d)](_0x29ce72(0x1dc))[_0x29ce72(0x1a7)](_0x29ce72(0x172)),_0x25bb0e=new MessageButton()[_0x29ce72(0x166)](_0x29ce72(0x1b7))[_0x29ce72(0x19d)](_0x29ce72(0x1bf))[_0x29ce72(0x1a7)](_0x29ce72(0x187)),_0x453f6f=new MessageButton()['setCustomId']('like_sug')[_0x29ce72(0x19d)]('👍')[_0x29ce72(0x1a7)](_0x29ce72(0x196)),_0xef5543=new MessageButton()[_0x29ce72(0x166)](_0x29ce72(0x1d6))[_0x29ce72(0x19d)]('👎')[_0x29ce72(0x1a7)](_0x29ce72(0x1c7)),_0x28dbc2=new MessageButton()[_0x29ce72(0x166)](_0x29ce72(0x1a5))[_0x29ce72(0x19d)]('Report\x20Suggestion')[_0x29ce72(0x1a7)]('DANGER'),_0x3ad9f5=new MessageActionRow()[_0x29ce72(0x19b)](_0x5b4d13,_0x25bb0e,_0x453f6f,_0xef5543,_0x28dbc2),_0x149fb9=new MessageEmbed()[_0x29ce72(0x155)](_0x29ce72(0x1db))['setTitle'](_0x29ce72(0x1aa))['setDescription'](_0x29ce72(0x163)+suggestionschannel+'>');_0x5836da['reply']({'embeds':[_0x149fb9],'ephemeral':!![]})[_0x29ce72(0x1cb)](()=>{const _0x4860e2=_0x29ce72,_0x39a81f=_0x5836da[_0x4860e2(0x17c)][_0x4860e2(0x162)][_0x4860e2(0x1cf)]['get'](suggestionschannel);_0x39a81f&&_0x39a81f[_0x4860e2(0x18f)]()?_0x39a81f[_0x4860e2(0x1b0)]({'embeds':[_0x3de73b],'components':[_0x3ad9f5]}):console[_0x4860e2(0x184)](_0x4860e2(0x169));})['catch'](_0x3bc956=>console[_0x29ce72(0x184)](_0x29ce72(0x161),_0x3bc956));}}});







function _0x3378(){const _0x2feab6=['rename-ticket-modal','reply','setTitle','setDisabled','name','54911qXPoHD','error','setMinLength','isButton','channel','rename-ticket-input','member','New\x20Ticket\x20Name','Old\x20Ticket\x20Name','isModalSubmit','20250sSGbfg','setName','setLabel','```','An\x20error\x20occurred:','showModal','You\x20do\x20not\x20have\x20the\x20authority\x20to\x20perform\x20this\x20action','3193416aKqQDO','addFields','components','permissions','SHORT','14YHEVgN','customId','I\x20don\x27t\x20have\x20permission\x20to\x20rename\x20channels!','Rename\x20Ticket','1992QEnhfC','```diff\x0a+\x20','forEach','202RwfDfg','>\x20Ticket\x20name\x20changed\x20successfully','An\x20error\x20occurred\x20while\x20processing\x20your\x20request.\x20Please\x20try\x20again\x20later.','rename-ticket-button','9746CrFlWo','setStyle','has','2710iFZvEn','setRequired','setPlaceholder','20283dYMhWL','fields','1757048RjWBiR','setColor','setCustomId','setMaxLength','getTextInputValue','9312300VqWBSp','interactionCreate','#2c2c34','addComponents','message'];_0x3378=function(){return _0x2feab6;};return _0x3378();}const _0x1141dd=_0x5789;function _0x5789(_0x4868f7,_0xcca5a1){const _0x337805=_0x3378();return _0x5789=function(_0x5789fc,_0x1bc22f){_0x5789fc=_0x5789fc-0x14a;let _0x584206=_0x337805[_0x5789fc];return _0x584206;},_0x5789(_0x4868f7,_0xcca5a1);}(function(_0x448371,_0x52520f){const _0xb1db7d=_0x5789,_0x3ab46a=_0x448371();while(!![]){try{const _0x3e11b5=parseInt(_0xb1db7d(0x16e))/0x1+-parseInt(_0xb1db7d(0x153))/0x2*(-parseInt(_0xb1db7d(0x15d))/0x3)+-parseInt(_0xb1db7d(0x15f))/0x4+-parseInt(_0xb1db7d(0x15a))/0x5*(-parseInt(_0xb1db7d(0x150))/0x6)+parseInt(_0xb1db7d(0x14c))/0x7*(parseInt(_0xb1db7d(0x17f))/0x8)+parseInt(_0xb1db7d(0x164))/0x9+parseInt(_0xb1db7d(0x178))/0xa*(-parseInt(_0xb1db7d(0x157))/0xb);if(_0x3e11b5===_0x52520f)break;else _0x3ab46a['push'](_0x3ab46a['shift']());}catch(_0xc5fb97){_0x3ab46a['push'](_0x3ab46a['shift']());}}}(_0x3378,0x7e4ee),client['on'](_0x1141dd(0x165),async _0x5a6dce=>{const _0x438ad8=_0x1141dd;try{if(_0x5a6dce[_0x438ad8(0x171)]()){if(_0x5a6dce[_0x438ad8(0x14d)]==='rename-ticket-button'){if(!hasClaimPermission(_0x5a6dce[_0x438ad8(0x174)])){await _0x5a6dce['reply']({'content':_0x438ad8(0x17e),'ephemeral':!![]});return;}_0x5a6dce[_0x438ad8(0x168)]['components'][_0x438ad8(0x152)](_0x450758=>{const _0x12da51=_0x438ad8;_0x450758[_0x12da51(0x181)][_0x12da51(0x152)](_0x6b1819=>{const _0x3f9b9e=_0x12da51;_0x6b1819['customId']===_0x3f9b9e(0x156)&&_0x6b1819[_0x3f9b9e(0x16c)](!![]);});}),await _0x5a6dce['message']['edit']({'components':_0x5a6dce['message'][_0x438ad8(0x181)]});const _0x17f061=new Modal()[_0x438ad8(0x161)](_0x438ad8(0x169))[_0x438ad8(0x16b)](_0x438ad8(0x14f))['addComponents']([new MessageActionRow()[_0x438ad8(0x167)](new TextInputComponent()[_0x438ad8(0x161)](_0x438ad8(0x173))[_0x438ad8(0x17a)]('Enter\x20the\x20new\x20ticket\x20name')[_0x438ad8(0x158)](_0x438ad8(0x14b))[_0x438ad8(0x170)](0x1)[_0x438ad8(0x162)](0xf)[_0x438ad8(0x15c)]('Enter\x20the\x20name\x20here')[_0x438ad8(0x15b)](!![]))]);await _0x5a6dce[_0x438ad8(0x17d)](_0x17f061);}}if(_0x5a6dce[_0x438ad8(0x177)]()){if(_0x5a6dce[_0x438ad8(0x14d)]===_0x438ad8(0x169)){const _0x589413=_0x5a6dce[_0x438ad8(0x15e)][_0x438ad8(0x163)](_0x438ad8(0x173));if(_0x5a6dce[_0x438ad8(0x174)][_0x438ad8(0x14a)][_0x438ad8(0x159)]('MANAGE_CHANNELS')){const _0x41169a=_0x5a6dce[_0x438ad8(0x172)][_0x438ad8(0x16d)];await _0x5a6dce['channel'][_0x438ad8(0x179)](_0x589413);const _0x58bf43=new MessageEmbed()[_0x438ad8(0x160)](_0x438ad8(0x166))['setTitle'](_0x438ad8(0x154))[_0x438ad8(0x180)]({'name':_0x438ad8(0x176),'value':'```diff\x0a-\x20'+_0x41169a+'```','inline':!![]},{'name':_0x438ad8(0x175),'value':_0x438ad8(0x151)+_0x589413+_0x438ad8(0x17b),'inline':!![]});_0x5a6dce['reply']({'embeds':[_0x58bf43],'ephemeral':!![]});}else _0x5a6dce[_0x438ad8(0x16a)]({'content':_0x438ad8(0x14e),'ephemeral':!![]});}}}catch(_0x1642b7){console[_0x438ad8(0x16f)](_0x438ad8(0x17c),_0x1642b7),_0x5a6dce[_0x438ad8(0x16a)]({'content':_0x438ad8(0x155),'ephemeral':!![]});}}));




let ticketOpenerId;
client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === `ticket-panel`) {
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.reply("You don't have permission to use this command.");
    }
        const ticketOpenerId = message.author.id;   
        const selectMenuOptions = [
            {
                label: 'Support',
                value: 'ticket_1',
                description: 'Server Support Team',
                emoji:  '<a:CG_TICKET:1241453286318538832>'
            },
            {
                label: 'Conten・creator',
                value: 'ticket_2',
                description: 'To Apply for Content Creator',
                emoji: '<a:CG_TICKET:1241453286318538832>'
            },
            {
                label: 'staff',
                value: 'ticket_3',
                description: 'Ensuring Order and Support',
                emoji: '<a:CG_TICKET:1241453286318538832>'
            }
        ];
        const selectMenu = new MessageSelectMenu()
            .setCustomId('ticket_panel')
            .setPlaceholder('🎫 Please Choose The Specialty You Desire')
            .addOptions(selectMenuOptions);

        const row = new MessageActionRow().addComponents(selectMenu);

        const embed = new MessageEmbed()
            .setColor("#ff0808")
            .setThumbnail("https://cdn.discordapp.com/attachments/1239739793408266320/1240087533619118131/7957-aqua-mad.gif?ex=66454903&is=6643f783&hm=7f96dc53e4a60354318a9f53d2a13d4f2685956429df296aef5a85753fce2c12&")
            .setImage("https://cdn.discordapp.com/attachments/1239739793408266320/1240073630277304410/EvoBot-GeMk8pYiA.gif?ex=66453c10&is=6643ea90&hm=4bf60d70ffdd3440c572ce0f28a80cb37c6a8b770738ba422ac1fbec9878a334&")
            .setTitle(`<a:STAFF:1241453288264699964>Open a ticket. Need any help __${message.guild.name}__ <a:STAFF:1241453288264699964>`)
            .setDescription(`<a:announcement:1228632076249468949>Please choose the section you want \n God willing, Your desired content available on server.<a:YellowCh:1228863167724130405>`);

        message.channel.send({ embeds: [embed], components: [row] });
    }
});



// Counter for ticket numbers
let ticketCounter = 1;
const userTickets = new Map();

// Define a set to store roles with permission to claim
const claimPermissions = new Set();

// Function to check if a member has permission to claim
function hasClaimPermission(member) {
    return member.roles.cache.some(role => claimPermissions.has(role.id));
}

// Add roles with permission to claim
claimPermissions.add(claimPermissionRoleId);
// Add more roles as needed



// Map to store user ticket count
client.on('interactionCreate', async interaction => {
    if (!interaction.isSelectMenu() && !interaction.isButton()) return;

    const { member, guild } = interaction;

   // استدعاء الدالة المناسبة بناءً على customId
    switch (interaction.customId) {
        case 'msg_control':
            await handleMsgControl(interaction, hasClaimPermission);
            break;
        case 'addmem_kikmem':
            await handleAddMemKikMem(interaction, hasClaimPermission);
            break;
        case 'msg_sendcontrol':
            await handleMsgSendControl(interaction, hasClaimPermission);
            break;
        case 'sendmemberid':
            await handleSendMemberId(interaction, hasClaimPermission);
            break;
        case 'sendmsgembed':
            await handleSendMsgEmbed(interaction, hasClaimPermission);
            break;
        case 'sendmsgdisabled':
            await handleSendMsgDisabled(interaction, hasClaimPermission);
            break;
        case 'sendmsgpost':
            await handleSendMsgPost(interaction, hasClaimPermission); // استدعاء دالة لإرسال رسالة عادية
            break;
        case 'msgdeleted':
            await handleMsgDeleted(interaction, hasClaimPermission);
            break;
        case 'add_note':
            await handleAddNote(interaction, hasClaimPermission); // تأكد من تمرير دالة التحقق من الصلاحية هنا
            break;
        case 'sendowntick':
            await handleSendOwnTick(interaction, hasClaimPermission); // Call the function for handling sendowntick interaction
            break;
        case 'claim_ticket':
            await handleClaimTicket(interaction, hasClaimPermission);
            break;
        case 'transscript':
            await handleTranscript(interaction, guild); // قم بتمرير ال guild الخاص بك هنا
            break;
    }
  

const _0x19fc6c=_0x1f6f;(function(_0x753115,_0x52823b){const _0x282a25=_0x1f6f,_0x30bddd=_0x753115();while(!![]){try{const _0x696865=parseInt(_0x282a25(0x17a))/0x1*(parseInt(_0x282a25(0x1a4))/0x2)+-parseInt(_0x282a25(0x199))/0x3+-parseInt(_0x282a25(0x18c))/0x4+parseInt(_0x282a25(0x19e))/0x5*(-parseInt(_0x282a25(0x1a9))/0x6)+parseInt(_0x282a25(0x1b3))/0x7*(-parseInt(_0x282a25(0x1c0))/0x8)+-parseInt(_0x282a25(0x1bc))/0x9+parseInt(_0x282a25(0x1b6))/0xa;if(_0x696865===_0x52823b)break;else _0x30bddd['push'](_0x30bddd['shift']());}catch(_0x331190){_0x30bddd['push'](_0x30bddd['shift']());}}}(_0x2582,0x3916c));async function sendEmbedMessage(_0x41604f,_0x14f103){const _0x170488=_0x1f6f,_0x3e36e3={'description':_0x14f103,'color':'#2c2c34'};await _0x41604f[_0x170488(0x1ad)][_0x170488(0x190)]({'embeds':[_0x3e36e3]});}async function sendMessage(_0x3a8598,_0x541b5c){const _0x236b5d=_0x1f6f;await _0x3a8598[_0x236b5d(0x198)]({'content':_0x541b5c,'ephemeral':!![]});}if(interaction[_0x19fc6c(0x19f)]===_0x19fc6c(0x191)){await interaction['deleteReply']();return;}function _0x2582(){const _0x383300=['\x20|\x20Content:\x20','⛔\x20Delete\x20Ticket','155VlWity','customId','>\x20🔒\x20This\x20ticket\x20is\x20closed','delete_ticket','Error\x20handling\x20confirm_close\x20button:','deleted','104Ocqsww','values','>**','includes','ticket_messages.txt','45606JikwtN','readFileSync','fetch','setColor','channel','deferUpdate','-closed','end','guild','confirm_close','14oWdEYs','setLabel','setDescription','10628940xZyBZr','>\x0a\x20The\x20person\x20who\x20opened\x20the\x20ticket\x20closed\x20it.\x20Do\x20you\x20want\x20to\x20delete\x20it?\x0a\x0aTicket\x20hidden\x20from:\x0a<@','message','#2c2c34','messages','error','2502972eBxNBd','catch','writeFileSync','setName','1151384HXgvop','Close','collect','5056npnBVh','createMessageComponentCollector','cache','SECONDARY','setTitle','reply','channels','map','setCustomId','member','name','delete','Failed\x20to\x20process\x20the\x20request.','setStyle','has','>\x0aTicket\x20Name:\x20`','Ticket\x20closed\x20by\x20:\x20<@','join','289328iGyXCe','DANGER','content','permissionOverwrites','send','cancel_close','Are\x20you\x20sure\x20you\x20want\x20to\x20close\x20this\x20ticket?','addComponents','**Loading...\x20Please\x20wait**','Cancel','Author:\x20','close_id_note','followUp','654159vXPfNY','push','deleteReply'];_0x2582=function(){return _0x383300;};return _0x2582();}function _0x1f6f(_0x16a50b,_0x4b5469){const _0x258247=_0x2582();return _0x1f6f=function(_0x1f6fea,_0x458e07){_0x1f6fea=_0x1f6fea-0x17a;let _0x5d40c6=_0x258247[_0x1f6fea];return _0x5d40c6;},_0x1f6f(_0x16a50b,_0x4b5469);}if(interaction[_0x19fc6c(0x19f)]===_0x19fc6c(0x197)){const message=await interaction[_0x19fc6c(0x17f)]({'content':_0x19fc6c(0x192),'ephemeral':!![],'components':[new MessageActionRow()[_0x19fc6c(0x193)](new MessageButton()[_0x19fc6c(0x182)](_0x19fc6c(0x1b2))['setLabel'](_0x19fc6c(0x1c1))['setStyle'](_0x19fc6c(0x18d)),new MessageButton()[_0x19fc6c(0x182)](_0x19fc6c(0x191))[_0x19fc6c(0x1b4)](_0x19fc6c(0x195))[_0x19fc6c(0x187)](_0x19fc6c(0x17d)))]}),filter=_0x462c06=>_0x462c06['customId']===_0x19fc6c(0x191),collector=interaction['channel'][_0x19fc6c(0x17b)]({'filter':filter,'time':0x3a98});collector['on'](_0x19fc6c(0x1c2),async _0x45756f=>{const _0x431574=_0x19fc6c;await _0x45756f[_0x431574(0x1ae)](),await interaction[_0x431574(0x19b)]();}),collector['on'](_0x19fc6c(0x1b0),async()=>{const _0x4c8f9a=_0x19fc6c;if(!message[_0x4c8f9a(0x1a3)])await message['delete']()[_0x4c8f9a(0x1bd)](console[_0x4c8f9a(0x1bb)]);});}else{if(interaction[_0x19fc6c(0x19f)]===_0x19fc6c(0x1b2))try{await interaction['deferUpdate']();const loadingMessage=await interaction[_0x19fc6c(0x198)]({'embeds':[new MessageEmbed()['setDescription'](_0x19fc6c(0x194))[_0x19fc6c(0x1ac)]('#2c2c34')]});setTimeout(async()=>{const _0xdef6ab=_0x19fc6c;await loadingMessage[_0xdef6ab(0x185)]();const _0x1f0ea4=interaction[_0xdef6ab(0x1ad)],_0x58874e=_0x1f0ea4[_0xdef6ab(0x18f)]['cache']['filter'](_0x1ea1a3=>_0x1ea1a3['type']===_0xdef6ab(0x183)),_0x3b2d5e=[];for(const _0x428089 of _0x58874e[_0xdef6ab(0x1a5)]()){const _0x241baa=await _0x1f0ea4[_0xdef6ab(0x1b1)]['members'][_0xdef6ab(0x1ab)](_0x428089['id']);!_0x241baa['permissions'][_0xdef6ab(0x188)]('ADMINISTRATOR')&&(await _0x428089[_0xdef6ab(0x185)](),_0x3b2d5e[_0xdef6ab(0x19a)]('<@'+_0x241baa['id']+'>'));}const _0x10c09f=_0x3b2d5e[_0xdef6ab(0x181)]((_0x117b5e,_0x32aeb6)=>_0x32aeb6+0x1+'.\x20'+_0x117b5e),_0x2be4db=_0x10c09f[_0xdef6ab(0x18b)]('\x0a'),_0x5146ae=new MessageEmbed()['setColor'](_0xdef6ab(0x1b9))[_0xdef6ab(0x17e)](_0xdef6ab(0x1a0))[_0xdef6ab(0x1b5)]('This\x20ticket\x20has\x20been\x20closed\x20by\x20:\x20<@'+interaction[_0xdef6ab(0x183)]+_0xdef6ab(0x1b7)+_0x2be4db+'>'),_0x2cb28c=new MessageButton()['setCustomId'](_0xdef6ab(0x1a1))[_0xdef6ab(0x1b4)](_0xdef6ab(0x19d))[_0xdef6ab(0x187)]('DANGER'),_0x270600=new MessageActionRow()[_0xdef6ab(0x193)](_0x2cb28c);await _0x1f0ea4['send']({'embeds':[_0x5146ae],'components':[_0x270600]});!_0x1f0ea4[_0xdef6ab(0x184)][_0xdef6ab(0x1a7)](_0xdef6ab(0x1af))&&await _0x1f0ea4[_0xdef6ab(0x1bf)](_0x1f0ea4['name']+'-closed');const _0x106bdd=await _0x1f0ea4[_0xdef6ab(0x1ba)]['fetch']({'limit':0x64}),_0x42602c=_0x106bdd[_0xdef6ab(0x181)](_0x133c83=>_0xdef6ab(0x196)+_0x133c83['author']['tag']+_0xdef6ab(0x19c)+_0x133c83[_0xdef6ab(0x18e)])[_0xdef6ab(0x18b)]('\x0a'),_0x4ca55c=_0x1f0ea4[_0xdef6ab(0x184)]['replace'](_0xdef6ab(0x1af),''),_0x58123f='<@'+interaction[_0xdef6ab(0x183)]['id']+'>',_0x3c37db=''+_0x42602c;fs[_0xdef6ab(0x1be)](_0xdef6ab(0x1a8),_0x3c37db);const _0x3f3878=fs[_0xdef6ab(0x1aa)]('ticket_messages.txt'),_0x213022=new MessageAttachment(_0x3f3878,'ticket_messages.txt'),_0x469bf9=interaction[_0xdef6ab(0x1b1)][_0xdef6ab(0x180)][_0xdef6ab(0x17c)]['get'](TicketSaveChannelId);await _0x469bf9['send']({'content':_0xdef6ab(0x18a)+_0x58123f+_0xdef6ab(0x189)+_0x4ca55c+'`','files':[_0x213022]}),fs['unlinkSync'](_0xdef6ab(0x1a8));},0x3e8),await interaction[_0x19fc6c(0x198)]({'content':'>\x20**Ticket\x20closed**\x20\x0a\x20>\x20Ticket\x20closed\x20by\x20:\x20**<@'+interaction[_0x19fc6c(0x183)]+_0x19fc6c(0x1a6),'ephemeral':!![]});}catch(_0x1d9f6c){console['error'](_0x19fc6c(0x1a2),_0x1d9f6c[_0x19fc6c(0x1b8)]),await interaction[_0x19fc6c(0x198)]({'content':_0x19fc6c(0x186),'ephemeral':!![]});}}const mentionList=[];if(interaction['customId']===_0x19fc6c(0x1a1)){const channel=interaction[_0x19fc6c(0x1ad)];try{await channel['delete']();}catch(_0x37c1f8){console[_0x19fc6c(0x1bb)]('Error\x20deleting\x20ticket:',_0x37c1f8[_0x19fc6c(0x1b8)]);}}
  
  

  
    const selectedOption = interaction.values[0]; // القيمة المحددة من القائمة

    // ابحث عن الخيار المحدد في selectMenuOptions
    const selectedDepartment = selectMenuOptions.find(option => option.value === selectedOption);

    if (!selectedDepartment) return;




  
  

function _0x5422(_0x5497a5,_0x475090){const _0x2ec2a2=_0x2ec2();return _0x5422=function(_0x54221a,_0x428acd){_0x54221a=_0x54221a-0x190;let _0x571d5d=_0x2ec2a2[_0x54221a];return _0x571d5d;},_0x5422(_0x5497a5,_0x475090);}function _0x2ec2(){const _0x2bdf05=['304028qoPixQ','1744fWNnnF','5PzaNmC','3348308zDtLVM','6686715dlbsmK','21447cYdQRy','81653erSSRQ','3NPrhHE','169331KRKiqt','5290rmvBQw','6115788dgBTcp'];_0x2ec2=function(){return _0x2bdf05;};return _0x2ec2();}(function(_0x57e744,_0x1afd18){const _0x3d7118=_0x5422,_0x454256=_0x57e744();while(!![]){try{const _0x53d356=parseInt(_0x3d7118(0x194))/0x1+-parseInt(_0x3d7118(0x19a))/0x2*(parseInt(_0x3d7118(0x193))/0x3)+-parseInt(_0x3d7118(0x197))/0x4*(parseInt(_0x3d7118(0x199))/0x5)+-parseInt(_0x3d7118(0x196))/0x6+-parseInt(_0x3d7118(0x190))/0x7+-parseInt(_0x3d7118(0x198))/0x8*(-parseInt(_0x3d7118(0x191))/0x9)+-parseInt(_0x3d7118(0x195))/0xa*(-parseInt(_0x3d7118(0x192))/0xb);if(_0x53d356===_0x1afd18)break;else _0x454256['push'](_0x454256['shift']());}catch(_0x1eaa64){_0x454256['push'](_0x454256['shift']());}}}(_0x2ec2,0xd9808));const ticketType=selectedOption['split']('_')[0x1],categoryID=categoryIDs[selectedOption]; // يحدد معرف الفئة بناءً على القيمة المحددة في القائمة المنسدلة

/*/
if (userTickets.has(member.id) && userTickets.get(member.id) >= 3) {
    await interaction.reply({ content: 'You have already opened three tickets.', ephemeral: true });
    return;
}
/*/
function _0x28bb(_0x4cd3ae,_0x38b84e){const _0x566952=_0x5669();return _0x28bb=function(_0x28bb4a,_0x172aae){_0x28bb4a=_0x28bb4a-0x16d;let _0x8f7a35=_0x566952[_0x28bb4a];return _0x8f7a35;},_0x28bb(_0x4cd3ae,_0x38b84e);}function _0x5669(){const _0x2bcaa2=['ADD_REACTIONS','5864NHVorz','417828PNydHm','4924ZapVUV','text','roleticketid','create','user','roles','6705BOKPbi','881235LCeIwH','29071jiNnfR','109026PSNuuW','571299WlFkox','channels','VIEW_CHANNEL','label','SEND_MESSAGES','228JDNfLy'];_0x5669=function(){return _0x2bcaa2;};return _0x5669();}const _0x4a52c8=_0x28bb;(function(_0x31300a,_0x229c83){const _0x52f67e=_0x28bb,_0x54ddff=_0x31300a();while(!![]){try{const _0x5f0093=-parseInt(_0x52f67e(0x174))/0x1+parseInt(_0x52f67e(0x17d))/0x2+-parseInt(_0x52f67e(0x175))/0x3+parseInt(_0x52f67e(0x17e))/0x4+-parseInt(_0x52f67e(0x172))/0x5+-parseInt(_0x52f67e(0x17a))/0x6*(parseInt(_0x52f67e(0x173))/0x7)+parseInt(_0x52f67e(0x17c))/0x8*(parseInt(_0x52f67e(0x171))/0x9);if(_0x5f0093===_0x229c83)break;else _0x54ddff['push'](_0x54ddff['shift']());}catch(_0x504912){_0x54ddff['push'](_0x54ddff['shift']());}}}(_0x5669,0x1df56));const ticket_open_member=member['id'],channel=await guild[_0x4a52c8(0x176)][_0x4a52c8(0x16e)](selectedDepartment[_0x4a52c8(0x178)]+'-'+ticketCounter,{'type':_0x4a52c8(0x17f),'permissionOverwrites':[{'id':guild[_0x4a52c8(0x170)]['everyone'],'deny':[_0x4a52c8(0x177)]},{'id':member['id'],'allow':[_0x4a52c8(0x177),_0x4a52c8(0x179),'ADD_REACTIONS']},{'id':client[_0x4a52c8(0x16f)]['id'],'allow':[_0x4a52c8(0x177),_0x4a52c8(0x179),_0x4a52c8(0x17b)]},{'id':selectedDepartment[_0x4a52c8(0x16d)],'allow':[_0x4a52c8(0x177),'SEND_MESSAGES',_0x4a52c8(0x17b)]}],'parent':categoryID});

// قم بتعديل الرسالة الراجعة لتحتوي على الزر
const _0x16866d=_0x1c67;function _0x1c67(_0x49d3aa,_0x28c367){const _0x1c1522=_0x1c15();return _0x1c67=function(_0x1c678d,_0x36a0a4){_0x1c678d=_0x1c678d-0xac;let _0x382a09=_0x1c1522[_0x1c678d];return _0x382a09;},_0x1c67(_0x49d3aa,_0x28c367);}(function(_0x3b8865,_0x1c0b16){const _0x40ae00=_0x1c67,_0x51721b=_0x3b8865();while(!![]){try{const _0x5e2594=-parseInt(_0x40ae00(0xb0))/0x1*(-parseInt(_0x40ae00(0xb5))/0x2)+parseInt(_0x40ae00(0xb4))/0x3*(-parseInt(_0x40ae00(0xbc))/0x4)+parseInt(_0x40ae00(0xb6))/0x5+parseInt(_0x40ae00(0xbd))/0x6*(parseInt(_0x40ae00(0xb8))/0x7)+-parseInt(_0x40ae00(0xbb))/0x8*(-parseInt(_0x40ae00(0xbe))/0x9)+parseInt(_0x40ae00(0xb1))/0xa+-parseInt(_0x40ae00(0xb3))/0xb*(parseInt(_0x40ae00(0xb7))/0xc);if(_0x5e2594===_0x1c0b16)break;else _0x51721b['push'](_0x51721b['shift']());}catch(_0x321875){_0x51721b['push'](_0x51721b['shift']());}}}(_0x1c15,0x3e47e));function _0x1c15(){const _0x2854a1=['LINK','🔗\x20Ticket\x20Link','709192hhcRiD','6756MDUeeF','414ZWmnEv','27GsKPRB','setURL','✔\x20Ticket\x20Created\x20<#','>\x20Ticket\x20Number\x20`','addComponents','4406AxAcQJ','107380nRayFO','https://discord.com/channels/','8540169QbJEUD','699ZJOLlk','154yKhAnk','2426615Gjojfo','12bokUGv','32844CfMARt'];_0x1c15=function(){return _0x2854a1;};return _0x1c15();}const replyMessage=_0x16866d(0xad)+channel['id']+_0x16866d(0xae)+ticketCounter+'`',row=new MessageActionRow()[_0x16866d(0xaf)](new MessageButton()['setLabel'](_0x16866d(0xba))['setStyle'](_0x16866d(0xb9))[_0x16866d(0xac)](_0x16866d(0xb2)+guild['id']+'/'+channel['id']));

// قم بإنشاء صف واحد يحتوي على زر واحد

let currentTime = new Date();
currentTime.setHours(currentTime.getHours() + 1);
const egyptianDate = new Date().toLocaleDateString('en-US', { timeZone: 'Africa/Cairo' });
const egyptianDate2 = currentTime.toLocaleTimeString('en-EG', { timeZone: 'Africa/Cairo', hour12: true, hour: 'numeric', minute: 'numeric' });
const startTimestamp = Math.floor(Date.now() / 1000) - 42;
let count = channelCounts.get(channel.parentId) || 0;
count++;
const user = member.user;
await interaction.reply({ content: replyMessage, components: [row], ephemeral: true });
const embed = new MessageEmbed()
    .setTitle(`> <a:RainbowHeart:1226373036609896460>  ${member.guild.name} <a:RainbowHeart:1226373036609896460> `)
    .setColor('#1c1c24')
    .setImage(`${selectedDepartment.photopanelticket}`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 4096 }))
    .addFields(
        { name: '<a:qaile:1228860585815314432> Q U E E N <a:qaile:1228860585815314432>', value: `<@${ticket_open_member}>`, inline: true },
        { name: 'Claimed Ticket', value: `__Not Found__`, inline: true },
    );
  
    const closeButton = new MessageButton()
        .setCustomId('close_id_note')
        .setLabel('🔒 Close')
        .setStyle('DANGER')

    const renameButton = new MessageButton()
        .setCustomId('rename-ticket-button')
        .setLabel('🔄 Rename')
        .setStyle('PRIMARY');

    const addMemberButton = new MessageButton()
        .setCustomId('addmem_kikmem')
        .setLabel('👥 Member Control')
        .setStyle('PRIMARY');
  
    const transcButton = new MessageButton()
        .setCustomId('transscript')
        .setLabel('📜 Trancscript')
        .setStyle('PRIMARY');

    const claimButton = new MessageButton()
        .setCustomId('claim_ticket')
        .setLabel('🔖 Claim')
        .setStyle('SUCCESS');

    const noteButton = new MessageButton()
        .setCustomId('addnote-ticket-button')
        .setLabel('📌 Add Note')
        .setStyle('PRIMARY');
  
    const sendNotificationButton = new MessageButton()
        .setCustomId('msg_sendcontrol')
        .setLabel('✉️ Messgae Control')
        .setStyle('PRIMARY');
  
    const msgcontrolButton = new MessageButton()
        .setCustomId('msg_control')
        .setLabel('🛠️ Message Control')
        .setStyle('PRIMARY');
  
    const tikrepButton = new MessageButton()
        .setCustomId('ticket_rep')
        .setLabel('📝 Report')
        .setStyle('PRIMARY');
  
    const row1 = new MessageActionRow()
    .addComponents(closeButton, tikrepButton, msgcontrolButton, addMemberButton, claimButton);
    const row2 = new MessageActionRow()
    .addComponents(noteButton, renameButton, sendNotificationButton, transcButton);
    channel.send({ content: `${member}\n${selectedDepartment.paneldic}`, embeds: [embed], components: [row1, row2] });

    ticketCounter++;

    if (userTickets.has(member.id)) {
        userTickets.set(member.id, userTickets.get(member.id) + 1);
    } else {
        userTickets.set(member.id, 1);
    }
});
const channelCounts = new Map();




  client.on('messageReactionAdd', async (reaction, user) => {
    if (user.bot) return;
    try {
      await reaction.message.react(reaction.emoji);
    } catch (error) {
      console.error('Error reacting to message:', error);
    }
  });








client.on('interactionCreate', async (interaction) => {
  if (interaction.isSelectMenu()) {
    const rule = rules.find(r => r.id === interaction.values[0]);
    const text = fs.readFileSync(rule.description, 'utf-8');
    const ruleEmbed = new MessageEmbed()
      .setColor(`#2c2c34`)
      .setTitle(`> ${rule.title}`)
      .setDescription(text)
    const message = await interaction.reply({ embeds: [ruleEmbed], ephemeral: true });
    
    // Add reaction directly to the replied message
  }
});


let tracker = "10";
  tracker = new inviteTracker(client);
	// "guildMemberAdd"  event to get full invite data
tracker.on("guildMemberAdd", async (member, inviter, invite, error) => {
  const startTimestamp = Math.floor(Date.now() / 1000) - 28;
  const memberCount = member.guild.memberCount;
  
  // return when get error
  if(error) return console.error(error);
  
  // get the channel
  let channel = member.guild.channels.cache.get(welcomeLogChannelId);
  
  let welcomeMessage = {
    color: "#2c2c34",
    title: "New Member Joined",
    description: `1. New member joined the server - <@${member.id}>
2. Invited by - <@!${inviter.id}>
3. Invitations Count - ${invite.count}
4. Member Count - ${memberCount}
5. Joined at - <t:${startTimestamp}:R>`,
    timestamp: new Date(),
    thumbnail: {
      url: member.user.displayAvatarURL({ size: 4096 }),
    },
  };

  // change welcome message when the member is bot
  if (member.user.bot) {
    welcomeMessage.description = `1. New bot joined the server - <@${member.id}>
2. Invited by - <@!${inviter.id}>
3. Invitations Count - ${invite.count}
4. Member Count - ${memberCount}
5. Joined at - <t:${startTimestamp}:R>`;
  }

  // send welcome message
  channel.send({ embeds: [welcomeMessage] });
});

// وظيفة لتقسيم مصفوفة إلى مجموعات
function chunkArray2(array, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
}



client.on('guildMemberAdd', async member => {
  
    const egyptianDate = new Date().toLocaleDateString('en-US', { timeZone: 'Africa/Cairo' });
    const startTimestamp = Math.floor(Date.now() / 1000) - 27;
    let buffer_attach =  await generareCanvas(member)
    const attachment = new MessageAttachment(buffer_attach, 'welcome.png')

  
    const fourSeasonButton = new MessageButton()
        .setStyle('LINK')
        .setLabel(" Queen Server ")
        .setURL('https://discord.gg/aRkmGUHUTe'); // رابط موقع الـ 4 SEASON
  
    const botSeasonButton = new MessageButton()
        .setStyle('LINK')
        .setLabel("ㅤMy BOTㅤ")
        .setURL('https://discord.gg/aRkmGUHUTe'); // رابط موقع الـ 4 SEASON

    const instaButton = new MessageButton()
        .setStyle('LINK')
        .setLabel('ㅤInstagramㅤ')
        .setURL('https://discord.gg/aRkmGUHUTe'); // رابط موقع الـ 4 SEASON


    const buttonRow = new MessageActionRow()
        .addComponents([instaButton, fourSeasonButton, botSeasonButton]);

    const embed = new MessageEmbed()
        .setColor('#fff6a5')
        .setImage("https://cdn.discordapp.com/attachments/1239739793408266320/1240073630277304410/EvoBot-GeMk8pYiA.gif?ex=66468d90&is=66453c10&hm=4d044027638888736749bfbeaee68cf4af85a70d9b5cadb0a25eed9dcf7e7214&")
        .setTitle(`> <a:ejgif1010:1241743659183902790>  Welcome To __${member.guild.name}__ Server <a:ejgif1010:1241743659183902790> `)
        .setDescription(`**<:ejpic1015:1241773719123267645> Happy to have you with us here.\n<:ejpic1015:1241773719123267645> We wish you a happy day \n\n**`)
        .addFields(
            { name: '**1. Chat A I **', value: `<#${wlecomeruleschannel}>`, inline: true },
            { name: '**1. General Chat**', value: `<#${wlecomeruleschannel2}>`, inline: true },
            { name: '\u2003', value: `\u2003`, inline: true },
            { name: '**3. Joined Discord**', value: `**<t:${startTimestamp}:R>**`, inline: true },
            { name: '**2. Joined Server**', value: `**\`\`${egyptianDate}\`\`**`, inline: true },
            { name: '\u2003', value: `\u2003`, inline: true }
          )    
        .setThumbnail("https://cdn.discordapp.com/attachments/1241270976021528637/1242353887332007967/image.png?ex=664d87b8&is=664c3638&hm=580b0f727d1fea2955bf58ffee33256937a68194fc4dcecd5e32d463f416ca23&");

        member.send({ embeds: [embed],  components: [buttonRow] })
        .catch(console.error);
});
tracker = new inviteTracker(client);
// "guildMemberAdd"  event to get full invite data
tracker.on('guildMemberAdd', async (member, inviter, invite, error) => {
  if(error) return console.error(error);
  let buffer_attach =  await generareCanvas(member)
  const attachment = new MessageAttachment(buffer_attach, 'image/welcomeback.png')
  const startTimestamp = Math.floor(Date.now() / 1000) - 42;
  const memberCount = member.guild.memberCount;

  let embed = new MessageEmbed()
    .setTitle(`> <a:KH_Hi:1241452991626608690>Welcome to  __${member.guild.name}__ Server <a:KH_Hi:1241452991626608690>`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 4096 }))
    .addFields(
      { name: '  Welcome   ', value: ` ${member.user} `, inline: true },
      { name: '  Invited By ', value: ` <@!${inviter.id}> `, inline: true },
    )
    .setColor('#FFC0CB')
    .setImage("https://cdn.discordapp.com/attachments/1239739793408266320/1240073630277304410/EvoBot-GeMk8pYiA.gif?ex=66468d90&is=66453c10&hm=4d044027638888736749bfbeaee68cf4af85a70d9b5cadb0a25eed9dcf7e7214&") 

  const welcomeChannel = member.guild.channels.cache.get(welcomeRoomId);
  if (welcomeChannel) {
    welcomeChannel.send({ content: `${member.user}`, embeds: [embed] });
  } else {
    console.error(`Welcome channel not found with ID: ${welcomeRoomId}`);
  }
});


async function generareCanvas(member) {
  const avatar = await resolveImage(member.user.displayAvatarURL({ 'size': 2048, 'format': "png" }))
  const background = await resolveImage("image/welcomeback.png") // استخدام اسم الملف المحلي مباشرة هنا
  const { weirdToNormalChars } = require('weird-to-normal-chars')
  const name = weirdToNormalChars(member.user.username)
  let canvas = new Canvas(1400, 514)
    .printImage(background, 0, 0, 1400, 514)
    .setColor("#FFFFFF")
  /*
    .printCircle(267, 259, 149)
    */
    .printCircularImage(avatar, 266, 256, 150)
    .setTextAlign('justify')
    .setTextFont('25px Discord')
    .printText(`${member.guild.name} - SERVER COMMUNITY`, 524, 395)
    .setTextAlign("center")
    .setColor("#FFFFFF")
    .setTextFont('30px Discordx')
    .printText(`${name}`, 790, 340)
    // Adding "bot by ahmed" text above the image
  /*
    .setTextAlign('center')
    .setTextFont('bold 15px Arial')
    .setColor("#FFFFFF")
    .printText('</> Developer BOT Ahmed Clipper', 160, 25);
    // Adding "insta" text below the line
  canvas.setTextAlign('center')
    .setTextFont('bold 15px Arial')
    .setColor("#FFFFFF")
    .printText('</> instagram : ahm.depression', 150, 60);
    */
  return canvas.toBufferAsync()
}


client.on('messageCreate', async message => {
    if (message.content === `${prefix}profile`) {
        // إرسال رسالة قبل بدء إنشاء الصورة
        const creatingCardMessage = await message.reply("> <a:ejgif1004:1241743499678973952> **Creating Your Profile Card...**");
        await message.channel.sendTyping();

        const guild = message.guild;
        let buffer_attach = await generareCanvas2(message.member); // افترض أن generareCanvas هي الدالة التي تنشئ الصورة
        const attachment = new MessageAttachment(buffer_attach, 'image/profile.png');

        // حذف الرسالة السابقة وتحديثها بالصورة المنشأة
        await creatingCardMessage.delete();
        message.reply({ content: `> <a:ejgif1033:1242349759298015334> **ملاحظة : هذا الأمر لم يكتمل بعد، ومازال قيد التطوير** <a:ejgif1032:1242349755728789504>`, files: [attachment] }); // إرسال الصورة المرفقة فقط في الروم المحدد
    }
});
async function generareCanvas2(member) {
  const avatar = await resolveImage(member.user.displayAvatarURL({ 'size': 2048, 'format': "png" }))
  const background = await resolveImage("image/profile.png")
  const background2 = await resolveImage("image/backprofile.png")
  const { weirdToNormalChars } = require('weird-to-normal-chars')
  const name = weirdToNormalChars(member.user.username)
  
  // تواريخ الانضمام بالإنجليزية
  const memberSinceServerEnglish = member.joinedAt.toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })
  const memberSinceDiscordEnglish = member.user.createdAt.toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })

  let canvas = new Canvas(378, 536)
    .printImage(background2, 0, 0, 378, 536)
    .printImage(background, 0, 0, 378, 536)
    .setColor("#232328")
    .printCircle(100, 140, 53)
    .printCircularImage(avatar, 100, 140, 45)
    .setColor("#232328")
    .printCircle(130, 170, 15)
    // MEMBER SINCE
    .setTextAlign('ltr')
    .setColor("#FFFFFF")
    .setTextFont('14px Discord')
    .printText(`MEMBER SINCE`, 65, 430)
    // تاريخ الانضمام إلى السيرفر
    .setTextAlign("ltr")
    .setColor("#FFFFFF")
    .setTextFont('10px Discordx')
    .printText(`${memberSinceServerEnglish}`, 213, 460)
    // تاريخ الانضمام إلى ديسكورد
    .setTextAlign("ltr")
    .setColor("#FFFFFF")
    .setTextFont('10px Discordx')
    .printText(`${memberSinceDiscordEnglish}ㅤ・ㅤ`, 95, 460)
    // اسم العضو
    .setTextAlign("ltr")
    .setColor("#FFFFFF")
    .setTextFont('15px Discordx')
    .printText(`${name}`, 65, 230)

  const badge03 = await resolveImage(__dirname + "/image/badge03.png")
  canvas.printImage(badge03, 301, 165, 30, 30)
  
  const badge05 = await resolveImage(__dirname + "/image/badge05.png")
  canvas.printImage(badge05, 275, 165, 30, 30)
  
  const badge01 = await resolveImage(__dirname + "/image/badge01.png")
  canvas.printImage(badge01, 248, 165, 30, 30)  
  
  const badge06 = await resolveImage(__dirname + "/image/badge06.png")
  canvas.printImage(badge06, 221, 165, 30, 30)  
  
  const discordjoin = await resolveImage(__dirname + "/image/discordjoin.png")
  canvas.printImage(discordjoin, 65, 445, 25, 25)  
  
  const serverjoin = await resolveImage(__dirname + "/image/serverjoin2.png")
  canvas.printImage(serverjoin, 182, 445, 25, 25)  
  /*
  const online01 = await resolveImage(__dirname + "/image/online01.png")
  canvas.printImage(online01, 130, 170, 13, 13) 
  */
  const idle02 = await resolveImage(__dirname + "/image/dnd03.png")
  canvas.printImage(idle02, 122, 162, 17, 17) 
  

  return canvas.toBufferAsync()
}





async function generateCanvas3(member, level, xp, leaderboardPosition) {
    const avatar = await resolveImage(member.user.displayAvatarURL({ 'size': 2048, 'format': "png" }));
    const background = await resolveImage(`image/${rankbanner}`);
    const { weirdToNormalChars } = require('weird-to-normal-chars');
    const name = weirdToNormalChars(member.user.username);

    // تواريخ الانضمام بالإنجليزية
    const memberSinceServerEnglish = member.joinedAt.toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' });
    const memberSinceDiscordEnglish = member.user.createdAt.toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' });

    let canvas = new Canvas(900, 650)
        .printImage(background, 0, 0, 900, 650)
        .setColor("#232328")
        .printCircularImage(avatar, 449, 325, 90  )
        .setColor("#232328")
        // اسم العضو
        .setTextAlign("center")
        .setColor("#FFFFFF")
        .setTextFont('25px Discordx')
        .printText(`${name}`, 450, 108)
        // xp العضو
        .setTextAlign("center")
        .setColor("#FFFFFF")
        .setTextFont('25px Discordx')
        .printText(`${xp}/${xpPerLevel}`, 250, 558)
        .setTextAlign("center")
        .setColor("#FFFFFF")
        .setTextFont('25px Discordx')
        .printText(`XP`, 250, 510)
        // لفل العضو
        .setTextAlign("center")
        .setColor("#FFFFFF")
        .setTextFont('25px Discordx')
        .printText(`${level}`, 650, 558)
        .setTextAlign("center")
        .setColor("#FFFFFF")
        .setTextFont('25px Discordx')
        .printText(`Level`, 650, 510)
        // تصنيف العضو
        .setTextAlign("center")
        .setColor("#FFFFFF")
        .setTextFont('25px Discordx')
        .printText(`#${leaderboardPosition}`, 450, 558)
        .setTextAlign("center")
        .setColor("#FFFFFF")
        .setTextFont('25px Discordx')
        .printText(`Classification`, 450, 510);

    return canvas.toBufferAsync();
}


const cooldowns = new Map();
client.on('messageCreate', async message => {
    if (message.content === `${prefix}rank`) {
        const authorId = message.author.id;

        // تحقق مما إذا كان المستخدم في فترة الانتظار
        if (cooldowns.has(authorId)) {
            const cooldownTime = cooldowns.get(authorId);
            const remainingTime = (cooldownTime - Date.now()) / 1000;
            const warningMessage = await message.reply(`Please wait ${remainingTime.toFixed(1)} seconds before using this command again.`);
            
            // حذف الرسالة بعد 5 ثواني
            setTimeout(() => warningMessage.delete(), 3000);
            return;
        }

        const userData = getUserData(authorId);

        if (!userData) {
            message.reply('You have not gained any XP yet.');
            return;
        }

        const { level, xp } = getUserLevelAndXP(userData);
        const leaderboardPosition = getLeaderboardPosition(authorId);

        // بدء عملية الكتابة (Typing)
        message.channel.sendTyping();

        // إرسال رسالة قبل بدء إنشاء الصورة
        const creatingCardMessage = await message.reply("> <a:ejgif1004:1241743499678973952> **Creating Your Profile Card...**");

        // إنشاء الصورة
        let buffer_attach = await generateCanvas3(message.member, level, xp, leaderboardPosition);
        const attachment = new MessageAttachment(buffer_attach, `image/${rankbanner}`);

        // تحديث الرسالة السابقة بالصورة المنشأة
        await creatingCardMessage.edit({ content: '\u2003', files: [attachment] }); // إرسال الصورة المرفقة فقط في الروم المحدد

        // إضافة المستخدم إلى مجموعة الانتظار
        const cooldownDuration = 5000; // 5 ثواني
        cooldowns.set(authorId, Date.now() + cooldownDuration);
        setTimeout(() => cooldowns.delete(authorId), cooldownDuration);
    }
});






client.login(process.env.token);