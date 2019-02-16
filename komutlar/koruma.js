const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
   .setDescription(' [Bot Davet Linki](https://bit.ly/2Gf2sB7)  |  [Destek Sunucusu](https://discord.gg/tNteN4D)')
  .setColor(0x00ffff)
    .setAuthor(`BossBoat`, client.user.avatarURL)
        .setTitle(`ღ▬▬▬▬▬▬▬▬▬ஜ۩Ƹ̵̡Ӝ̵̨̄Ʒ۩ஜ▬▬▬▬▬▬▬▬ღ`)
  .addField("**★ BossBoat - Koruma Menüsü ★**",'• | **_reklamtaraması** = Reklam Taraması Yapar.\n • | **_linkengelle** = Çok Yakında Hizmetinizde.\n • | **_reklamengelle** = Çok Yakında Hizmetinizde.')
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k', 'koruma', '7'],
  permLevel: 0
};

exports.help = {
  name: 'koruma',
  description: 'Koruma Komtuları Gösterir.',
  usage: 'koruma'
};
