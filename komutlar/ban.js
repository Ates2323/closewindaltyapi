const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`yasakla` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('`:no_entry_sign: Log Kanalını Bulamıyorum.');
  if (reason.length < 1) return message.reply(':no_entry_sign: Bir Ban Sebebi Yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply(':no_entry_sign: Kimi Banlayacağımı Yazmalısın.').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply(':no_entry_sign:Yetkisi Benden Yüksek Olanları Banlayamam.');
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Sunucudan Yasaklama <a:sinirligif:502208088141725696>')
    .addField('Yasaklanan Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yasaklayan Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Yasaklama Sebebi:', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'yasakla',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'yasakla [kullanıcı] [sebep]'
};
