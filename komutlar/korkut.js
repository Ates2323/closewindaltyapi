const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('BÖÖ! KORKTUN MU!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://images-ext-2.discordapp.net/external/ySnwbFJgVA6r4NLlu7GW2b8N7NfRaEUdBKNqkJVkt2E/https/78.media.tumblr.com/452063fcc1533a028f27cba85291d644/tumblr_ms8w5wWoOT1spwp48o1_500.gif?width=400&height=216`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'korkut',
  description: 'Yumruk Atar.',
  usage: 'korkut'
};


