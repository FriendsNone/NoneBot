const Discord = require("discord.js");

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    var time = hours + ':' + minutes + ':' + seconds;
    return time;
}

module.exports.run = async (bot, message, args) => {
    var time1 = process.uptime();
    var uptime1 = (time1 + "").toHHMMSS();
    var time2 = require('os').uptime();
    var uptime2 = (time2 + "").toHHMMSS();
    
    let embed = new Discord.RichEmbed()
        .setAuthor(`${bot.user.username}'s Status`, bot.user.avatarURL)
        .addField("Bot Uptime:", uptime1)
        .addField("System Uptime:", uptime2)
        .setTimestamp()
    message.channel.send({ embed });
}

module.exports.help = {
    name: "uptime",
    usage: "uptime",
    desc: "Checks status.",
    ex: "uptime"
}
