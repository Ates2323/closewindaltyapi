const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/MSqZaYsZJGUGk/giphy.gif",  "https://media.giphy.com/media/MSqZaYsZJGUGk/giphy.gif",  "https://media.giphy.com/media/6uMqzcbWRhoT6/giphy.gif", "https://media.giphy.com/media/vgMmIZoHbR7bi/giphy.gif", "https://media.giphy.com/media/8fu6uGQYeAkms/giphy.gif", "https://media.giphy.com/media/131zxKeMxUs81y/giphy.gif", "https://media.giphy.com/media/ctUtYKSfmvJOE/giphy.gif", "https://media.giphy.com/media/NgEt9Mqppd5qo/giphy.gif", "https://media.giphy.com/media/12Ip6BKWKEa1W0/giphy.gif", "https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif"]
    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Gifiniz")
        .setColor("#FF69B4")
        .setFooter(`Al Sana Hayvan ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gif'],
  permLevel: 0
};

exports.help = {
  name: 'hayvan',
  description: 'Rastgele gif atar.',
  usage: 'hayvan'
};
