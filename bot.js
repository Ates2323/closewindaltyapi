//consts (for glitch)
// GEREKLİ YERLER
const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
// GEREKLİ YERLER
// -------------------------------------------------------------
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const Jimp = require('jimp');
const db = require('quick.db');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on("guildMemberAdd", async member => {
  
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find('name', skanal9)
  if (!skanal31) return
  skanal31.send(`:inbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucuya katıldı. \`${sayac}\` kullanıcı olmaya \`${sayac - member.guild.members.size}\` kullanıcı kaldı.`)
});

client.on("guildMemberRemove", async member => {
  
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find('name', skanal9)
  if (!skanal31) return
  skanal31.send(`:outbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucudan ayrıldı. \`${sayac}\` kullanıcı olmaya \`${sayac - member.guild.members.size}\` kullanıcı kaldı.`)
});

////////////////////////

client.on("guildMemberAdd", async member => {
  const kanal30 = await db.fetch(`gckanal_${member.guild.id}`)
  const kanal31 = member.guild.channels.find('name', kanal30)
  if (!kanal31) return;
  const embed = new Discord.RichEmbed()
  .setTitle('📥 | Sunucumuza Katıldı :smiley:')
  kanal31.send(embed);
});


client.on("guildMemberRemove", async member => {
  const kanal30 = await db.fetch(`gckanal_${member.guild.id}`)
  const kanal31 = member.guild.channels.find('name', kanal30)
  if (!kanal31) return;
  const embed = new Discord.RichEmbed()
  .setTitle('📤 | Sunucumuzdan Ayrıldı :frowning:')
  kanal31.send(embed);
});

client.on('message', msg => {
  if (msg.content === 'SA') {
    msg.reply('`  Aleyküm Selam Kardeşim Hoşgeldin.`');
  }
});


client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('`  Aleyküm Selam Kardeşim Hoşgeldin.`');
  }
});

client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('`  Aleyküm Selam Kardeşim Hoşgeldin.`');
  }
});

client.on('message', msg => {
  if (msg.content === 'sea') {
    msg.reply('`  Aleyküm Selam Kardeşim Hoşgeldin.`');
  }
});

client.on('message', msg => {
  if (msg.content === 'Sea') {
    msg.reply('`  Aleyküm Selam Kardeşim Hoşgeldin.`');
  }
});

client.on('message', msg => {
  if (msg.content === 'selamun aleyküm') {
    msg.reply('`  Aleyküm Selam Kardeşim Hoşgeldin.`');
  }
});

client.on('message', msg => {
  if (msg.content === 'Selamun aleyküm') {
    msg.reply('`  Aleyküm Selam Kardeşim Hoşgeldin.`');
  }
});

client.on('message', msg => {
  if (msg.content === 'selamın aleyküm') {
    msg.reply('`  Aleyküm Selam Kardeşim Hoşgeldin.`');
  }
});

client.on('message', msg => {
  if (msg.content === 'Selamın aleyküm') {
    msg.reply('`  Aleyküm Selam Kardeşim Hoşgeldin.`');    
  }
});

client.on('message', message => {
if (message.content === '<@521371675221164041>') {
  const embed = new Discord.RichEmbed()
  .setTitle('Ben DearBot:')
  .setDescription('Prefixim: `!`')
  .setFooter('Dear Bot')
  .setColor('RANDOM')
 message.reply(embed)
}
});



client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
