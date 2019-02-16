const fights2 = require('../data/fights2.json');
const Discord = require('discord.js');
const db = require('quick.db');
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {

  message.channel.send(':boxing_glove: Vuruş yapılıyor...').then( msg => {

    
            setTimeout(() => {
    
                msg.edit('**Skor:** `551`');
    
            }, 3500);

           setTimeout(() => {
    
                msg.edit('**Skor:** `580`');
    
            }, 3500);

           setTimeout(() => {
    
                msg.edit('**Skor:** `650`');
    
            }, 3500);

        setTimeout(() => {
    
                msg.edit('**Skor:** `681`');
    
            }, 3500);

             setTimeout(() => {
    
                msg.edit('**Skor:** `700`');
    
            }, 3500);
    
            setTimeout(() => {
    
                msg.edit('**Skor:** `795`');
    
            }, 3500);

                setTimeout(() => {
    
                msg.edit('**Skor:** `799`');
    
            }, 3500);

            setTimeout(() => {
    
                msg.edit('**Skor:** `806`');
    
            }, 3500);
    
            setTimeout(() => {
    
                msg.edit('**Skor:** `856`');
    
            }, 3500);
    
            setTimeout(() => {
    
                msg.edit('**Skor:** `924`');
    
            }, 3500);
    
            setTimeout(() => {
    
                msg.edit('**Skor:** `956`');
    
            }, 3500);
    
            setTimeout(() => {
    
                msg.edit('**Skor:** `967`');
    
            }, 3500);
    
            setTimeout(() => {
    
             message.reply(`**Skorun:** ${fights2[Math.floor(Math.random() * fights2.length)]}`);
    
            }, 10000);
    
            setTimeout(() => {
    
                msg.edit('Tebrikler, güzel yumruk attın! :boxing_glove:').then(m => m.delete(1000));
    
            }, 3500);
    
        });
}; 
    ;



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['boks-makinesi', 'vur'],
  permLevel: 0
};

exports.help = {
  name: "boks",
  description: "boks-makinesi",
  usage: "boks-makinesi"
};