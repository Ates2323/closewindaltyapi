const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();  
    
  if ( message.react(':flag_tr:')) {
      var gif = [
      'https://im0-tub-tr.yandex.net/i?id=8d91c01a1e67e7cb538f39de4f69681e&n=13', 'https://www.tuvall.com/upload/images/006315/006315.jpg ', 'https://cdn.bolgegundem.com/d/gallery/679_41.jpg ', 'http://www.transanatolie.com/ic/images/Ataturk/ataturk_041.jpg', 'https://media1.tenor.com/images/aa21d544534620ac4f32e9c798d1eab0/tenor.gif?itemid=12846551', 'http://www.kisa-ozet.org/wp-content/uploads/2013/08/Atatürk-Ün-Fotoğraf-Albümü-26.jpg ', 'http://tablobudur.com/upload/images/tbl2034/tbl2034.jpg', 'https://i.pinimg.com/736x/a6/1d/f3/a61df3ec0a6efe5011aa955319e725c1--celebrity-history.jpg', 'https://i.gifer.com/75gf.gif ', 'https://i.pinimg.com/736x/bc/82/ca/bc82caa86b6fff78aa22c2b44f984609--hayao-miyazaki-posts.jpg '];

      var gifler = gif[Math.floor(Math.random() * gif.length)];
  }
    if (message.react(':flag_tr:')) {    
    const op = new Discord.RichEmbed()
    .setDescription("Her ülkenin bir kurucusu vardır ancak her ülkenin Atatürk'ü yoktur! Mustafa Kemal Atatürkü Sevgi ve Rahmetle Anıyoruz ❤")
    .setColor('RANDOM')
    .setImage(gifler)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL) 
    return message.channel.send(op)
    }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['atatürkfoto', 'atafotoğraf','atatürkfotoğraf'],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'atatürk resimleri atar.',
  usage: 'atatürk'
};