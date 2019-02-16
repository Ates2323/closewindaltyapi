const Discord = require('discord.js');


exports.run = function(client, message) {

	const embed = new Discord.RichEmbed()
		.setDescription("**Sigara Sağlığa Zararlıdır **")
		.setImage("https://i.imgyukle.com/2018/09/13/S1li1.jpg")
	
	message.channel.send(embed)
  message.react('🚭')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sigara',
  description: 'Sigara iç belki sürpriz olabilir :)',
  usage: 'sigara'
};
