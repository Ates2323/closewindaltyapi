const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setDescription('** [Davet Linki](https://is.gd/ifM6bu)  |  [Destek Sunucusu](https://discord.gg/NNafAQj) | [WebSite](https://discordbots.org) **')
  .setColor(0x00ffff)
  .addField("Ana Komutlar",':white_small_square: | **_yardım** ::Botun Komutlarını Atar.\n :white_small_square: | **_bilgi** :: Bot Kendisi Hakkında Bilgi Verir.\n :white_small_square: | **_ping** :: Bot Gecikme Süresini Söyler.\n :white_small_square: | **_davet** :: Bot Davet Linkini Atar.\n :white_small_square: | **_istatistik** :: Bot İstatistiklerini Söyler.\n :white_small_square: | **_avatarım** :: Avatarını Gösterir.\n :white_small_square: | **_suncuubilgi** :: Sunucu Hakkında Bilgi Verir.\n :white_small_square: | **_kullanıcıbilgim** :: Kullanıcı Bilgini Gösterir.\n :white_small_square: | **_canlıdestek** :: Botun Sahibinden Destek Alırsınız.\n :white_small_square: | **_panelkur** :: Sunucu Paneli Kurar.\n :white_small_square: | **_paneltemizle** :: Sunucu Panellini Temizler.')
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
  aliases: ['ana', 'ak', '4'],
  permLevel: 0
};

exports.help = {
  name: 'anakomutlar',
  description: 'Ana komutları gösterir.',
  usage: 'anakomutlar'
};
