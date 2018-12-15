const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();   
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
 const prefix = "-";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
   client.user.setGame('Deluxe ','https://www.twitch.tv/A7mdkw');
   // client.user.setActivity("-help || -inv ",{type: 'PLAYING'})

});

var editedyaklaab = "-";
client.on('message', edddiiiittteeeddd => {
 
  if (edddiiiittteeeddd.content ===  editedyaklaab + 'colors'){
              if (!edddiiiittteeeddd.member.hasPermission('MANAGE_ROLES')) return edddiiiittteeeddd.channel.sendMessage(':radio_button: Hey! || You Don\'t Have Perms . ')
	  edddiiiittteeeddd.channel.send('**Done || Create The Colors . :ballot_box_with_check: **')
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < 101; x++){
            edddiiiittteeeddd.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

 // اعمل ريستارت يا بوت يا وسخ

const temp = {};
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'click here',
      channel : 'click here'
       }
        if(message.content.startsWith('-temp on')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('click here', 'category').then(cg => {
           var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**Done || Temporary Rooms Has Been Activated . :ballot_box_with_check: **')
              client.on('message' , message => {
               if(message.content === '+temp off') {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**Done || Closed . :ballot_box_with_check:**  ')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "fgfdkjfdhfgdjghdhghj")) {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
	                if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
	MOVE_MEMBERS:true,
	 VIEW_CHANNEL:true
	  })
	   neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
	      CONNECT:false,
	       SPEAK:false
		})
               }
              })
             })
           })
          }
      });



const clans = {};
const system = {};
const level = {};


client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  let args = message.content.split(' ');
  let random = Math.floor(Math.random() * 5) + 2;
  let author = message.author;

  let xpLeft;
  let nameClan;
  let membersClan = [];
  let levelClan = 0;
  if(!system[author.id]) system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};

  if(!level[author.id]) level[author.id] = {level: 1, xp: 1};


  level[author.id].xp += (+random);
  if(level[author.id].xp >= 300) {
    if(level[author.id].xp > 300) xpLeft = level[author.id].xp - 300;
    level[author.id] = {
      level: level[author.id].level + 1,
      xp: xpLeft
    };

  }
  if(message.content.startsWith(prefix + "clan")) {
    if(message.content.split(' ')[0] !== `${prefix}clan`) return;

    if(!args[1] || args[1] && args[1] === 'info') {
  let embed = new Discord.RichEmbed()
  .setAuthor('الكلانات', message.author.avatarURL)
  .setDescription(`- \`${prefix}clan\`: نظام الكلانات هو نظام شبه مسلي ينمي التفاعل ويمكنك التحكم بالكلان تبعك بشكل كامل
  - \`${prefix}clan info\`: لأظهار رسالة الأوامر ( هذه الرسالة ) ء
  - \`${prefix}clan create\`: لأنشاء كلان بالأسم الذي تريده
  - \`${prefix}clan invite\`: لدعوة شخص ما للكلان تبعك
  - \`${prefix}clan join\`: للتقديم على دخول الكلان الذي تريده
  - \`${prefix}clan promote\`: لأعطاء شخص بالكلان صلاحيات الادمن ( يتطلب صلاحية الادمن ) ء
  - \`${prefix}clan demote\`: لأزالة صلاحية الادمن من عضو بالكلان ( صاحب الكلان فقط ) ء
  - \`${prefix}clan ownership\`: لنقل ملكيةالكلان
  - \`${prefix}clan leave\`: للخروج من الكلان الذي انت به
  - \`${prefix}clan kick\`: لطرد عضو من الكلان ( يتطلب صلاحية الادمن ) ء
  - \`${prefix}clan disband\`: لمسح الكلان من السستم ( صاحب الكلان فقط ) ء
  - \`${prefix}clan stats\`: لعرض معلومات الكلان تبعك
  - \`${prefix}clan list\`: يظهر لك اعضاء الكلان برسالة
  - \`${prefix}clan accept\`: لقبول شخص وجعل الشخص يدخل الكلان ( يتطلب صلاحية الادمن ) ء
  - \`${prefix}clan decline\`: لرفض شخص وعم جعل الشخص يدخل الكلان ( يطلب صلاحية الادمن ) ء
  - \`${prefix}clan room\`: لعمل روم شات او كتابي بأسم الكلان ( صاحب الكلان فقط ) ء`)
  .setFooter(message.author.username, message.author.avatarURL);
  message.channel.send(embed);
}

    if(args[1] && args[1] === 'create') {
      //if(level[author.id].level < 10) return message.channel.send('**# يجب أن يكون لديك 10 مستويات لعمل كلان , لتجميع مستويات تفاعل بالشات وسيتم حساب النقاط**');
      if(system[author.id].clan !== 'None') return message.channel.send('**# يجب عليك ان تخرج من الكلان الذي أنت به حاليا**');

      let m = await message.channel.send('**# أكتب أسم الكلان الان**');
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, { max: 1, time: 20000, errors: ['time']}).then(collected => {
        if(collected.first().content.length > 25) return message.channel.send("**# لا يمكنك وضع اسم للكلان يفوق الـ25 حرفا , أعد كابة الأمر**");
        if(collected.first().content.includes("None")) return message.channel.send("**# `None`, لا يمكنك وضع هذه الكلمة كأسم للكلان**");
        collected.first().delete().catch();
        nameClan = collected.first().content;
      });

      m = await m.edit('**# جارى عمل الكلان**');
      awaited = await setTimeout(async() => {
        let membersArray = {
          nameClan: {
            array: []
          }
        };
        let members = membersArray.nameClan.array;
        members.push(message.author.id);
        clans[nameClan] = {
          name: nameClan,
          createdAt: new Date().toLocaleString(),
          level: levelClan,
          creator: message.author.id,
          members: members,
          applylist: [],
          admins: []
        };

        system[author.id] = {
          clan: nameClan,
          joinedAt: new Date().toLocaleString(),
          clanLevel: 0,
          creator: message.author.id
        };

        m = await m.edit('**# تم عمل الكلان بنجاح**');
      }, 2300);

    }
    if(args[1] && args[1] === 'invite') {
      if(!system[author.id]) return message.channel.send("**# أنت لست بكلان**");
      let clan = system[author.id].clan;
      if(system[author.id].clan === 'None') return message.channel.send('**# أنت لست بكلان**');
      if(!clans[clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send('**# يجب عليك ان تكون اداري بالكلان**');
      let mention = message.mentions.users.first();
      if(!mention) return message.channel.send('**# منشن شخص لدعوته للكلان**');
      if(clans[clan].members.includes(mention.id)) return message.channel.send("**# هذا العضو بالكلان بالفعل**");
      if(clans[clan].members.length === 10) return message.channel.send("**# هذا الكلان وصل للحد الاقصى من الاعضاء يمكنك**");

      let m = await message.channel.send(`**${mention} # \`${clan}\`, تم دعوتك لدخول الكلان**\n\n - لقبول الدعوة \`نعم\`\n - لرفض الدعوة \`لا\``);
      let awaiting = await message.channel.awaitMessages(r => r.author.id === mention.id, {max: 1, time: 20000, errors:['time']}).then(collected => {
        collected.first().delete().catch();
        if(collected.first().content === 'نعم') {
          clans[clan].members.push(mention.id);

          system[author.id].members += 1;


          system[mention.id] = {
            clan: clan,
            joinedAt: new Date().toLocaleString(),
            clanLevel: 0,
            creator: clans[clan].creator
          };

          message.channel.send(`**${message.author} # تم قبول الدعوة**`);
        }
        if(collected.first().content === 'لا') {
          message.channel.send(`**${message.author} # تم رفض الدعوة**`);
        } else if(collected.first().content !== 'نعم' && collected.first().content !== 'لا'){
          return message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**');
        }
      });
    }
    if(args[1] && args[1] === 'stats') {
      if(system[author.id].clan === 'None') return message.channel.send('**# يجب ان تكون بكلان لأستخدام هذا الأمر**');
      let clan = system[author.id].clan;
      let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} || الكلانات`, message.author.avatarURL)
        .setDescription(`الكلان || \`${clan.toString()}\``)
        embed.addField('» اسم الكلان', clan, true)
        embed.addField('» تاريخ عمل الكلان', clans[clan].createdAt, true);
        embed.addField('» تاريخ دخول الكلان', system[author.id].joinedAt, true)
        embed.addField('» صاحب الكلان', `<@${clans[clan].creator}>`, true);
        embed.addField('» لفل الكلان', clans[clan].level, true);
        embed.addField('» عدد اعضاء الكلان', clans[clan].members.length, true);
        embed.addField('» عدد التقديمات للكلان', clans[clan].applylist.length, true);
        embed.addField('» عدد الادمنية بالكلان', clans[clan].admins.length, true);
        embed.addField('» اعضاء الكلان', `${prefix}clan list || يظهرلك رسالة بها اعضاء الكلان`);
      message.channel.send(embed);

    }
    if(args[1] && args[1] === 'join') {
    let clanName = message.content.split(' ').slice(2).join(" ");
    if(system[author.id].clan !== 'None') return message.channel.send("**# يجب أن لا تكون بكلان**");
    if(!args[2]) return message.channel.send("**# يجب عليك كتابة اسم الكلان**");
    if(!clans[clanName]) return message.channel.send("**# هذا الكلان غير موجود**");
    if(clans[clanName].applylist.includes(message.author.id)) return message.channel.send("**# لقد قدمت على دخول هذا الكلان مسبقا");

    clans[clanName].applylist.push(message.author.id);
    message.channel.send("**# لقد تم التقديم على دخول الكلان , سيتم الرد عليك من قبل احد ادارة الكلان**");

  }
    if(args[1] && args[1] === 'accept') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اداري بالكلان لأستخدام هذا الأمر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لأستخدام هذا الأمر**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};

      if(!clans[system[author.id].clan].applylist.includes(mention.id)) return message.channel.send("**# هذا الشخص لم يقم بالتقديم على دخول الكلان**");

      clans[system[author.id].clan].applylist.shift(mention.id);
      clans[system[author.id].clan].members.push(mention.id);
      let clan = system[author.id].clan;


      system[mention.id] = {
        clan: clan,
        joinedAt: new Date().toLocaleString(),
        clanLevel: 0,
        creator: clans[clan].creator
      };


      mention.send(`**# \`${system[author.id].clan}\`, لقد تم قبولك بالكلان**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم قبول الشخص ودخوله للكلان**`);
    }
    if(args[1] && args[1] === 'decline') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اداري بالكلان لأستخدام هذا الأمر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لأستخدام هذا الأمر**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};

      if(!clans[system[author.id].clan].applylist.includes(message.author.id)) return message.channel.send("**# هذا الشخص لم يقم بالتقديم على دخول الكلان**");

      clans[system[author.id].clan].applylist.shift(mention.id);

      system[mention.id] = {
        clan: clans[system[author.id].clan],
        joinedAt: new Date().toLocaleString(),
        clanLevel: 0
      };


      mention.send(`**# \`${system[author.id].clan}\`, لقد تم رفض دخولك للكلان**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم رفض دخول الشخص للكلان**`);

    }
    if(args[1] && args[1] === 'promote') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اونر او ادمن بالكلان لترقية عضو بالكلان**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لأعطائه الترقية**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};

      if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      if(clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# هذا العضو لديه ادمن بالفعل**");
      if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك اعطاء نفسك ترقية**");

      clans[system[author.id].clan].admins.push(mention.id);


      mention.send(`**# \`${system[author.id].clan}\`, لقد تم ترقيتك الى ادمن**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم ترقية العضو الى رتبة ادمن**`);
    }
    if(args[1] && args[1] === 'demote') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا الأمر لضاحب الكلان فقط**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لأعطائه الترقية**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};

      if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      if(!clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس ادمن بالكلان**");
      if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك اعطاء نفسك ترقية**");

      clans[system[author.id].clan].admins.shift(mention.id);

      mention.send(`**# \`${system[author.id].clan}\`, لقد تم ازالتك من منصب الادمن**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم ازالة الادمنية من العضو**`);
    }
    if(args[1] && args[1] === 'rename') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      let newName;
      let oldName = clans[system[author.id].clan];
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا الأمر مخصص لصاحب الكلان فقط**");
      if(!args[2]) return message.channel.send("**# يجب عليك تحديد اسم الكلان**");

      let c = message.content.split(' ').slice(2).join(" ");
      newName = c;
      let clanInfo = clans[system[author.id].clan];
      let m = await message.channel.send(`**# \`${c}\`, هل أنت متأكد من تغيير اسم الكلان \n\n - للتأكيد \`نعم\`\n - للرفض \`لا\`**`);
      let awaiting = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(c => {
        let collected = c.first();
        collected.delete().catch();
        m.delete().catch();
        if(collected.content === 'نعم') {
          clans[newName] = {
            name: newName,
            createdAt: clanInfo.createdAt,
            level: clanInfo.level,
            creator: clanInfo.creator,
            members: clanInfo.members,
            applylist: clanInfo.applylist,
            admins: clanInfo.admins
          };
          clans[system[author.id].clan] = undefined;

          system[author.id].clan = newName;


            message.channel.send("**# جارى تغيير الاسم**");
            message.channel.send("**# تم تغيير اسم الكلان بنجاح**");

        } else if(collected.content === 'لا') {
          message.channel.send(`**# \`${newName}\`, تم الغاء تغيير اسم الكلان**`);

        } else if(collected.first().content !== 'نعم' && collected.first().content !== 'لا'){
          return message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**')
        }
      });
    }
    if(args[1] && args[1] === 'list') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
      let clan = clans[system[author.id].clan];
      let members = Array.from(clan.members);
      let admins = Array.from(clan.admins);
      let applylist = Array.from(clan.applylist);
      let i = 1;
      let o = 1;

      let embed = new Discord.RichEmbed();
      embed.setAuthor(`${message.author.username} || ${clan.name}`, message.author.avatarURL);
      embed.addField("# Members", members.map(r => `\`${i++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Admins', admins.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Apply', applylist.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Owner', `\`1.\` **|| <@${clan.creator}>**`, true);
      message.channel.send(embed);
    }
    if(args[1] && args[1] === 'leave') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      let m = await message.channel.send("**# هل انت متأكد انك تريد الخروج من الكلان \n\n - للتأكيد \`نعم\`\n - للألغاء \`لا\`**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
        let collected = c.first();
        if(collected.content === 'نعم') {
          clans[system[author.id].clan].members.shift(author.id);

          system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};


          message.channel.send("**# لقد غادرت الكلان**");
        } else if(collected.content === 'لا') {
          message.channel.send("**# تم الغاء الخروج من الكلان**");
        } else if(collected.content !== 'نعم' && collected.content === 'لا') {
          message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**');
        }
      });
    }
    if(args[1] && args[1] === 'kick') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اونر او ادمن بالكلان لأستخدام هذا الامر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لطرده**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};

      if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      if(clans[system[author.id].clan].admins.includes(mention.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا العضو لديه ادمن**");
      if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك طرد نفسك**");

        let index = clans[system[author.id].clan].members.indexOf(mention.id);
        let index2 = clans[system[author.id].clan].admins.indexOf(mention.id) || "";
        clans[system[author.id].clan].members.splice(index, 1);
        if(clans[system[author.id].clan].admins.includes(mention.id)) clans[system[author.id].clan].admins.splice(index2, 1);

        system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};


        message.channel.send(`**# \`${mention.username}\`, تم طرد الشخص من الكلان**`);
        mention.send(`**# \`${system[author.id].clan}\`, لقد تم طردك من الكلان**`).catch();
    }
    if(args[1] && args[1] === 'ownership') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لتسليمه الأونر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      let o = Math.floor(Math.random() * 8) + 1;
      let t = Math.floor(Math.random() * 8) + 1;
      let th = Math.floor(Math.random() * 8) + 1;
      let f = Math.floor(Math.random() * 8) + 1;
      let number = `${o}${t}${th}${f}`;

      message.author.send(`- \`${number}\`, أكتب هذا الرقم بالشات للأستمرار`).catch(e => {
        return message.channel.send(`**# يجب عليك فتح خاصك لأستخدام هذا الأمر**`);
      });

      let m = await message.channel.send("**# تم ارسال رقم التكملة بالخاص .. يجب عليك كتابة الرقم بالشات للأستمرار**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 10000, errors:['time']}).then(c => {
        let collected = c.first();

        if(collected.content === number) {
          clans[system[author.id].clan].creator = mention.id;


          m.delete();
          message.channel.send(`**# \`${mention.username}\`, تم تحويل اونر الكلان للشخص**`);
        } else
        if(collected.content !== number) {
          m.delete();
        }
      });
    }
    if(args[1] && args[1] === 'disband') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
      let o = Math.floor(Math.random() * 8) + 1;
      let t = Math.floor(Math.random() * 8) + 1;
      let th = Math.floor(Math.random() * 8) + 1;
      let f = Math.floor(Math.random() * 8) + 1;
      let fi = Math.floor(Math.random() * 8) + 1;
      let number = `${o}${t}${th}${f}${fi}`;

      message.author.send(`- \`${number}\`, أكتب هذا الرقم بالشات للأستمرار`).catch(e => {
        return message.channel.send(`**# يجب عليك فتح خاصك لأستخدام هذا الأمر**`);
      });

      let m = await message.channel.send("**# تم ارسال رقم التكملة بالخاص .. يجب عليك كتابة الرقم بالشات للأستمرار**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 60000, errors:['time']}).then(c => {
        let collected = c.first();

        if(collected.content === number) {
          m.delete().catch();
          collected.delete().catch();
          let name = system[author.id].clan;
          let members = clans[system[author.id].clan].members.length;
          let cvlMembers = Array.from(clans[name].members);
          for(let i = 0; i < cvlMembers.length; i++) {
            let g = hero.users.get(cvlMembers[0]);
              g.send(`- \`${system[author.id].clan}\`, تم اقفال الكلان`).catch();
              system[g.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};


            cvlMembers.shift();
            if(cvlMembers.length <= 0) {
              message.channel.send(`- \`${name}\`, تم اقفال الكلان`);

              system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
              clans[system[author.id].clan] = undefined;

            }
          }
        } else
        if(collected.content !== number) {
          m.delete();
          message.channel.send(`- \`${name}\`, تم الإلغاء`);
        }
      });
    }
    if(args && args[1] === 'room') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
      if(message.guild.channels.find(r => r.name.toLowerCase() === system[author.id].clan && r.type === 'text') || message.guild.channels.find(r => r.name === system[author.id].clan && r.type === 'voice')) return message.channel.send("**# الكلان لديه روم بالفعل**");
      let id = '487721170687229977';
      let m = await message.channel.send("**# اكتب نوع الروم الان\n\n - `كتابي`\n - `صوتي`**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
        let collected = c.first();
        if(collected.content === 'كتابي') {
          message.guild.createChannel(system[author.id].clan, 'text').then(c => {
            c.setParent(id);
            c.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              READ_MESSAGES: true,
              CONNECT: false,
              SPEAK: false
            });

            let newArray = Array.from(clans[system[author.id].clan].members);
            for(let i = 0; i < newArray.length; i++) {
              c.overwritePermissions(newArray[0], {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                CONNECT: true,
                SPEAK: true
              });

              newArray.shift();
            }
          });
          m.edit('**# تم عمل الروم**');
        } else if(collected.content === 'صوتي') {
          message.guild.createChannel(system[author.id].clan, 'voice').then(c => {
            c.setParent(id);
            c.overwritePermissions(message.guild.id, {
              CONNECT: false,
              SPEAK: false
            });

            let newArray = Array.from(clans[system[author.id].clan].members);
            for(let i = 0; i < newArray.length; i++) {
              c.overwritePermissions(newArray[0], {
                CONNECT: true,
                SPEAK: true
              });

              newArray.shift();
            }
          });
          m.edit('**# تم عمل الروم**');
        }
      });
    }
  }
});




  client.on('message', async message => {
  if(message.content.startsWith(prefix + "bc")) {
    let i = client.users.size;
    if(message.author.id !== '351472610732670976') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});




  


client.on('message', message => {
         if (message.content === prefix + "td") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";

            }
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }


                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png")
                .setTitle( "Time & Date.")
                .setColor('#ff0000')
                .setFooter(message.author.username, message.author.avatarURL)
                 .addField('- KWT. :flag_kw: ',
                ""+ hours2 + ":" + minutes +":"+ seconds  + "")
                 .addField('- KSA. :flag_sa: ',
                ""+ hours2 + ":" + minutes +":"+ seconds  + "")
                .addField('- EGY. :flag_eg: ',
                ""+ hours3 + ":" + minutes +":"+ seconds  + "")

                .addField('- Date.',
                ""+ Day + "-" + Month + "-" + Year +  "")

                 message.channel.sendEmbed(Date15);
        }
    });

  client.on('message', message => {
if(message.content.startsWith("+slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = " : ** لقد فزت   ** ."
  } else {
    we = ": ** لقد خسرت  ** ."
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});

/*client.on('message', message => {
var prefix = "-";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send(`** - أستعمل : -bc [الرسالة] \n يمكنك أرسال صوره مع البرودكاست :smile:**`);
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `<@${message.author.id}>`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            m.send(`${m}`,{embed: bc})
    if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
}
})
}
}
});*/

client.on('message', message => {
  if(message.content.startsWith(prefix + "ping")) {
message.channel.send(`MessageTaken: \`${Date.now() - message.createdTimestamp}\`ms\n DiscordAPi: \`${Math.round(client.ping)}\`ms\nAverage: \`${Math.round(client.pings[0])}\`ms. `)
}
});

 client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith("-avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});





client.on('message',function(message) {
    let w = ['Rock','Paper','Scissors'];
   if(message.content.startsWith(prefix + "rps")) {
       message.channel.send(`\`\`\`css
Choose one of the following.
#1 ( Rock )
#2 ( Paper )
#3 ( Scissors )
\`\`\`

__امامك  5 توان للاختيار__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
      if(message.author !== message.author)return;
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
});
  message.channel.awaitMessages(response => response.content === '2', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
      message.channel.awaitMessages(response => response.content === '3', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
   } 
});


client.on('message',function(message) {
   if(message.content.startsWith(prefix + "guilds")) {
       message.channel.send(`Guilds: \`\`${client.guilds.size}\`\``);
   } 
});
//========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "users")) {
       message.channel.send(`Users: \`\`${client.users.size}\`\``);
   } 
});
//=========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "channels")) {
       message.channel.send(`channels: \`\`${client.channels.size}\`\``);
   } 
});



client.on('message', message => {
    let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + 'clear')) {
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply("**:octagonal_sign: || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if (!messagecount) return message.reply("**:bulb: || أختر كميه الرسائل المراد مسحها .**").then(messages => messages.delete(5000))
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });

 

client.on('message',async message => {
  if(message.content.startsWith(prefix + "server")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle(`\`${message.guild.name}\``)
    .setThumbnail(message.guild.iconURL)
    .addField('• iD:', `- ${message.guild.id}`,true)
    .addField('• Owner:', `- ${message.guild.owner}`, true)
    .addField('• Channels:', `\`#\` ${message.guild.channels.filter(a => a.type === 'text').size} - \`🎤\` ${message.guild.channels.filter(a => a.type === 'voice').size}`, true)
    .addField('• Members:', `\`Count\` ${message.guild.memberCount} - \`Last\` ${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `${m}`).splice(0, 1)}`, true)
    .addField('• AFK Channel:', `${message.guild.afkChannel || 'None'}`, true)
    .addField('• Other:', `\`Roles\` ${message.guild.roles.size} - \`Emojis\` ${message.guild.emojis.size} \`[\` ${message.guild.emojis.map(m => m).join(' **|** ')} \`]\``,true)
    .addField('• Region:', `${message.guild.region}`, true);

    message.channel.send(embed);
  }
});

const giphy = require('giphy-api')();
    function getValue(key, array) {
  for (var el in array) {
    if (array[el].hasOwnProperty(key)) {
      return array[el][key];
    }
  }
}

    client.on('message', message => {
    if(message.content.startsWith(prefix + 'gif')) {
        sb = message.content.substring(4)
      giphy.random({
        tag: sb,
        rating: 'g',
        fmt: 'json'
      }, function(err, res) {
        if (getValue("image_url", res)) {

          message.channel.send({files:[{
              attachment: getValue("image_url", res),
              name: 'gif'+sb+'.gif'
          }]
        });
        }

      });
      }
});



client.on('message', message => {
if (message.author.codes) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "ban") {
             if(!message.channel.guild) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
       
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply(":x:**انت لا تملك الصلاحيات المطلوبه**");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply(":x: **ليس معي الصلاحيات الكافية**");
let user = message.mentions.users.first();

if (message.mentions.users.size < 1) return message.reply("- **منشن شخص**");
if (!message.guild.member(user)
.bannable) return message.reply(":x:**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


message.guild.member(user).ban(7, user);

message.channel.send(`**Done || ${user.tag} Banned . :ballot_box_with_check: **`)

}
});

 client.on('message' , message => {

    if (message.content === "+inv") {
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**')
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
.setTitle('Click Here .')
.setURL('https://discordapp.com/oauth2/authorize?client_id=477008338048253983&permissions=8&scope=bot')
  message.channel.sendEmbed(embed);
   }
}); 





client.on('message', message => {
if (message.author.codes) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "kick") {
             if(!message.channel.guild) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
       
if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply(":x:**انت لا تملك الصلاحيات المطلوبه**");
if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply(":x: **ليس معي الصلاحيات الكافية**");
let user = message.mentions.users.first();

if (message.mentions.users.size < 1) return message.reply("- **منشن شخص**");
if (!message.guild.member(user)
.bannable) return message.reply(":x:**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد طردة**");


message.guild.member(user).kick(7, user);

message.channel.send(`**Done || ${user.tag} Kicked . :ballot_box_with_check: **`)

}
});




    client.on('message', message => {
    if (message.content.startsWith(prefix + 'help')) {
        let pages = ['** \`\`\`General Commands \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n+server | معلومات السيرفر \n+id | أيدي حسابك\n+emojis | أيموجي السيرفر\n+rank | مستواك الكتابي \n+avatar | صورة بروفايلك\n+ping | سرعة الأتصال\n+gif | صورة متحركه \n+invites | لرؤية دعواتك\n+slots | لعبة الفواكة\n+td | التاريخ والوقت\n+clan | نظام الكلانات كامل \n+ \`\`\`** ','\`\`\`Admin Commands \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n+kick | طرد عضو\n+ban | حظر عضو\n+voice | المتصلين بالصوت\n+bc | لكي تقفل الشات\n+mutechannel | لكي تفتح الشات\n+unmutechannel | البرودكاست\n+clear | مسح الشات\n+temp on | لعمل قسم خاص بـ صناعه روم بأسمك\n+temp off | لتقفيل الخاصيه    \`\`\` ** ']

        let page = 1;

        let embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setThumbnail('https://cdn.discordapp.com/attachments/477011368403271680/477011788987367435/monogram-l-logo-letter-overlapping-thin-line-vector-5868172.jpg')
        .setDescription(pages[page-1])

        message.channel.sendEmbed(embed).then(msg => {

            msg.react('🌍').then( r => {
                msg.react('🔌')


            const backwardsFilter = (reaction, user) => reaction.emoji.name === '🌍' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '🔌' && user.id === message.author.id;


            const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});



            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page-1]);
                msg.edit(embed)
            })
            forwards.on('collect', r => {
                if (page === pages.length) return;
                page++;
                embed.setDescription(pages[page-1]);
                msg.edit(embed)
            })
            })
        })
        }
    });

client.on('message', msg => {
 if (msg.content.startsWith( '-send')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      /*if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)*/
      let norElden = msg.mentions.members.first()
      if (!norElden) return msg.reply(`**يجب تحديد الشخص**`)
      let norEldenEmbed = new Discord.RichEmbed()
      .setTitle(`**من سيرفر T G C**`)
      .setDescription(args.join(" "))

      client.users.get(`${norElden.id}`).send(norEldenEmbed)
      msg.reply(`**تم ارسال رسالتك**`)
    }
});

client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emojis')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle(':negative_squared_cross_mark: »  Emojis.') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('#ff0000') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});


client.on('message', async message => {
  if(message.content.startsWith(prefix + "voice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send('**:negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__**');
  if(!args) args = ` » VoiceOnline :  ${message.guild.members.filter(s => s.voiceChannel).size} . `;
  message.channel.send('**:white_check_mark: » تم عمل الروم الصوتي بنجاح**');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});


var userData = {};
client.on("message", function(message){
if (message.content.startsWith(prefix + "rank")) {
	if (!userData[message.author.id]) {
		userData[message.author.id] = {Money:0,Xp:0,Level:0}
	}
     var mentionned = message.mentions.users.first();

      var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;

      }

	
	var CulLevel = Math.floor(0.25 * Math.sqrt(userData[message.author.id].Xp +1));
	if (CulLevel > userData[message.author.id].Level) {userData[message.author.id].Level +=CulLevel}
	let pEmbed = new Discord.RichEmbed()
	.setColor("Random")
	.addField("» UserName :", message.author.tag)
	.addField("» Level :", userData[message.author.id].Level)
	.addField("» XP :",Math.floor(userData[message.author.id].Xp))
	message.channel.send(pEmbed);
}
if (!userData[message.author.id]) {
	userData[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
	}

userData[message.author.id].Xp+= 0.25;
userData[message.author.id].Money+= 0.25;

});


/*
client.on('message',async message => {
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + "id")) {
    let newID = new Discord.RichEmbed()
    .setAuthor(`Userinfo.`, message.author.avatarURL)
    .setTitle(`• ${client.user.tag}`)
    .setThumbnail(client.user.avatarURL)
    .addField('• iD', `${client.user.id}`,true)
    .addField('• Nickname', `${client.nickname || 'None'}`,true)
    .addField('• Status', `${client.status.toUpperCase()}`,true)
    .addField('• Joined Discord', `${client.user.createdAt.toLocaleString()}`,true)
    .addField('• Joined Server', `${client.joinedAt.toLocaleString()}`,true)
    .addField('• Roles', `\`${client.roles.map(a => a.name).join('\n')}\``,true)
    .addField('• VoiceChannel', `${client.voiceChannel.name || 'None'}`,true);

    message.channel.send(newID);
  }
});*/

/*var antispam = require("anti-spam");//npm i anti-spam
 
antispam(client, {
  warnBuffer: 3, //الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على تحذير.
  maxBuffer: 5, // الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على ميوت.
  interval: 1000, // مقدار الوقت قبل حصول باند
  warningMessage: "stop spamming.", // رسالة تحذير اذا سوا سبام!
  roleMessage: "Muted!!", // الرسالة الي تجي اذا شخص اخذ ميوت
  roleName: "Muted", // اسم رتبة الميوت
  maxDuplicatesWarning: 7, // عدد الرسايل الي قبل التحذيرات
  maxDuplicatesBan: 10, // عدد الرسايل الي يقدر المستخدم يرسلها قبل الميوت
  time: 10, // عدد الوقت الي يجلس لين تسحب رتبة الميوت من الشخص الحسبة برمجية وليست كتابية 
});
*/
 client.on('message', message => {
          if (message.content.startsWith("+id")) {
            if(!message.channel.guild) return message.reply('هذا الامر للسيرفرات فقط')
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
       var heg;
       if(men) {
           heg = men
       } else {
           heg = message.author
       }
     var mentionned = message.mentions.members.first();
        var h;
       if(mentionned) {
           h = mentionned
       } else {
           h = message.member
       }
              moment.locale('ar-TN');
     var id = new  Discord.RichEmbed()
   .setColor("#ff0000")
   .setThumbnail(message.author.avatarURL)
   .setAuthor(` ${message.author.username} `, message.author.avatarURL)
   .addField(': تاريخ دخولك للديسكورد', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
   .addField(': تاريخ دخولك لسيرفرنا', `${moment(h.joinedAt).format('YYYY/M/D HH:mm')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
   .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
   message.channel.send(id)
}       });

client.on('message', message => {

       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//viper
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
                }
                
         
       
});



/* client.on('guildMemberAdd',async member => {
  const Canvas = require('canvas');
  const jimp = require('jimp');
  const w = ['./img/welcome_44.png'];
        let Image = Canvas.Image,
            canvas = new Canvas(800, 300),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.beginPath();
 
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 800, 300);
 
})
 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                 if (err) return console.log(err);
 
          ctx.font = '36px Arial';
          ctx.fontSize = '72px';
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.fillText(member.user.username, 545, 177);
         
          ctx.font = '16px Arial Bold';
          ctx.fontSize = '72px';
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.fillText(`${member.guild.memberCount} Members`, 580, 200);
         
          let Avatar = Canvas.Image;
          let ava = new Avatar;
          ava.src = buf;
          ctx.beginPath();
          ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(ava, 36, 21, 260, 260);
          
                      ctx.font = '20px Arial';
                        ctx.fontSize = '28px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
ctx.fillText(`Welcome To .....`
                        , 120, 20);
                        
 client.channels.get("480000765184966656").sendFile(canvas.toBuffer())
          client.channels.get("480000765184966656").send(`Welcome ${member} To **${member.guild.name}**`)
           
          
       
           

 
});
});
});*/
              
              
      //music
      
     /* client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
	if (command === `+play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
			}
			return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)

					.setFooter("T G C")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
				}
			}

			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `+skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `+stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `+vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `+np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `+queue`) {
		
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		
		const embedqu = new Discord.RichEmbed()

.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `+pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "+resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);*/

                        client.login('NDU5Njk0NzczMzUyMTM2NzA3.Dvabeg.FFWloXJ4py8I_moji4nfDtzYsEE');
