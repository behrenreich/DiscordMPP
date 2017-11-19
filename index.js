const MPP = require("anon64-mpp")

const Discord = require("discord.js");

const translate = require('translate');

var Client = require("./AMPP.js/Client.js")

translate.engine = "yandex"

translate.key = process.env.YANDEX_TOKEN

var bot = new Discord.Client();

var lang = "ja";

MPP.client.setChannel("lobby")

function sendChat(msg) {
    if (lang == "en") {
        MPP.chat.send(msg)
    } else {
        translate(msg, lang).then(oof => { MPP.chat.send(oof) })
    }
}
function dChat(id, msg) {
    if (lang == "en") {
        bot.channels.get(id).sendMessage(msg)
    } else {
        translate(msg, lang).then(oof => { bot.channels.get(id).sendMessage(oof) })
    }
}
var op = ["d55bf273f64f37c5691f3bbb"]
var cmdChar = ">"

var lob = new Client("ws://www.multiplayerpiano.com:8080")

MPP.client.on("a", function (msg) {
    if (msg.p._id == MPP.client.getOwnParticipant()._id) return;
    dChat("381521631140380672", `**${msg.p.name}** (\`${msg.p._id.substring(0, 4)}\`): ${msg.a}`)
})

MPP.client.on("a", function (msg) {
    var isAdmin = false;
    var args = msg.a.split(' ');
    var cmd = args[0];
    var input = msg.a.substring(cmd.length).trim();
    var commands = ["help", "test"]
    var opcmds = ["js"]
    if (op.indexOf(msg.p._id) !== -1) isAdmin = true;
    if (cmd == cmdChar + "help" || cmd == cmdChar + "h") {
        var cmds2 = cmdChar + commands[0];
        var adminstring2 = cmdChar + opcmds[0];
        for (d = 1; d < commands.length; d++) {
            cmds2 += ", " + cmdChar + commands[d];
        }
        for (d = 1; d < opcmds.length; d++) {
            adminstring2 += ", " + cmdChar + opcmds[d];
        }
        if (isAdmin) { //help commands
            sendChat("Main Commands: " + cmds2);
            sendChat("Operator Commands: " + adminstring2);
        } else {
            sendChat("Main Commands: " + cmds2);
        }
    } else
        if (cmd == cmdChar + "js") {
            if (isAdmin) {
                try {
                    sendChat("Console: " + eval(input));
                } catch (err) {
                    sendChat('' + err);
                }
            }
        } else if (cmd == cmdChar + "test") {
            sendChat("TEST!!")
        } else if (cmd == cmdChar + "oof" && isAdmin) {
            sendChat("Debugs: " + op)
        } else if (cmd == cmdChar + "translate") {
            var def1 = args[args.length - 1] ? args[args.length - 1] : "en"
            sendChat(input.substring(0, input.length - args[args.length - 1]), def1)
        }
});

//DISCORD!!!!
bot.on("ready", () => {
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
    sendChat(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`, lang)
    bot.user.setGame(`on ${bot.guilds.size} servers`);
})
bot.on("ready", () => {
    var dop = ["251985222915194881"]
    bot.on("message", function (message) {
        function cdChat(msg) {
            if (lang == "en") {
                message.author.lastMessage.channel.send(message.author.username + ": " + msg)
            } else {
                translate(msg, lang).then(oof => { message.author.lastMessage.channel.send(message.author.username + ": " + oof) })
            }
        }

        if (message.author.bot) return;

        if (message.channel.id == "381521631140380672") {
            sendChat(message.author.username + ": " + message.content)
        }

        if (message.content.indexOf(cmdChar) !== 0) return;

        var user = message.author;

        const args = message.content.slice(cmdChar.length).trim().split(/ +/g);

        const command = args.shift().toLowerCase();

        var isAdmind = false;

        var input = message.content.substring(cmdChar.length + command.length).trim();

        //console.log(input)

        if (dop.indexOf(user.id) !== -1) isAdmind = true;

        if (command == "js") {
            if (isAdmind) {
                try {
                    cdChat("Console: " + eval(input));
                } catch (err) {
                    cdChat('' + err);
                }
            }
        }
    })
})
bot.login(process.env.BOT_TOKEN)
