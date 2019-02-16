const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const slots = [':banana:',':strawberry:',':apple:',':pineapple:',':cherries:'];

exports.run = function(client, message) {

    var slot1 = slots[Math.floor(Math.random() * slots.length)];
    var slot2 = slots[Math.floor(Math.random() * slots.length)];
    var slot3 = slots[Math.floor(Math.random() * slots.length)];
    
    if (slot1 === slot2 && slot1 === slot3) {
        message.channel.send(stripIndents`
        ${slot1} : ${slot2} : ${slot3}
        Tebrikler, kazandınız!
        `); 
    } else {
        message.channel.send(stripIndents`
        ${slot1} : ${slot2} : ${slot3}
        Eyvah, kaybettin!
        `);    
    }

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'slots', 
  description: 'Slots oyunu oynarsınız.',
  usage: 'slots'
};