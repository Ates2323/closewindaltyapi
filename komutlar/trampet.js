const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "O Yeeeee Trampet",
                    icon_url: "http://static.wixstatic.com/media/0ab469_8ab446b72f784c0db19c2ca4326e7911~mv2.gif"
                  },
                description: "**:white_check_mark: Çal baba çall dinleyehh hele**"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['trumpat', 'trumpet'],
  permLevel: 0
};

exports.help = {
  name: 'trampet',
  description: 'Trampet',
  usage: 'trampet'
};