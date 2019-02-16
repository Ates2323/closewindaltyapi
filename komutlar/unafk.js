const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    icon_url: "https://i.hizliresim.com/A193Xp.png"
                  },
                description: "**:white_check_mark: Artık ``Afk`` Değilsin.**"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afkkapat'],
  permLevel: 0
};

exports.help = {
  name: 'geldim',
  description: 'Değişiklikleri gösterir.',
  usage: 'geldim'
};
