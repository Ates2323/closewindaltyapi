const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin Mesajları_Yönet Yetkin Yok!");
if(!args[0]) return message.channel.send("Lütfen Silinicek Mesaj Miktarını Yazın.!");
if (args[0] > 99) return message.reply("1-99 arasında bir sayı girin!")
if (args[0] < 1 )  return message.reply("1-99 arasında bir sayı girin!")
message.channel.bulkDelete(args[0])
  message.channel.send(`:white_check_mark: ${args[0]} Adet Mesajı Sildim. `)
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle','clear','sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};