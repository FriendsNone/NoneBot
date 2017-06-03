var eightBall = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]

module.exports.run = async (bot, message, args) => {
    if (args[0]) message.channel.send(eightBall[Math.floor(Math.random() * eightBall.length)]);
    else message.channel.send("I can't read minds you know. I guess you need to learn how to type.");
}

module.exports.help = {
    name: "ask",
    usage: "ask [question]",
    desc: "A Magic 8 Ball ripoff",
    ex: "ask Is life pointless?"
}
