const MPP = require("anon64-mpp")

const Discord = require("discord.js");

const translate = require('translate');

const time = require("moment")

var Client = require("./AMPP.js/Client.js")

translate.engine = "yandex"

translate.key = process.env.YANDEX_TOKEN

var bot = new Discord.Client();

var lang = "en";

var start = Math.round(Date.now() / 1000)

MPP.client.setChannel("lolwutsecretlobbybackdoor")

var chat_buffer = [];

var cd_chat_buffer = [];

var d_chat_buffer = [];

var chatInt1 = setInterval(function () {
    var msg = chat_buffer.shift();
    if (msg) MPP.chat.send(msg)
}, 2050);

var chatInt2 = setInterval(function () {
    var msg = d_chat_buffer.shift();
    if (msg) bot.channels.get(msg.split(" ")[0]).sendMessage(msg.substring(msg.split(" ")[0].length))
}, 2050);

var lob = new Client("ws://www.multiplayerpiano.com:8080");
var tyeet = new Client("ws://www.multiplayerpiano.com:8080");
lob.start();
tyeet.start();
setInterval(function () {
    tyeet.setChannel("test/yeet");
    lob.setChannel("lolwutsecretlobbybackdoor");
}, 2500)
lob.on("a", function (msg) {
    if (msg.p._id == MPP.client.getOwnParticipant()._id) return;
    dChat("381521631140380672", `**${msg.p.name.split("").join("\u034f")}** (\`${msg.p._id.substring(0, 4)}\`): ${msg.a}`)
})

tyeet.on("a", function (msg) {
    if (msg.p._id == MPP.client.getOwnParticipant()._id) return;
    dChat("382622516771946499", `**${msg.p.name.split("").join("\u034f")}** (\`${msg.p._id.substring(0, 4)}\`): ${msg.a}`)
})

var mass = 100;
var gravity = 5;
var friction = 4;
var pos = { x: 50, y: 50 };
var pos2 = { x: 50, y: 50 };
var acc = { x: 0, y: 0 };
var vel = { x: 0, y: 0 };
var follower = "7504f8a8bb9e7c39ddbcbd27";
var followPos = { x: 50, y: 50 };
MPP.client.on("m", function (msg) {
    var part = MPP.client.findParticipantById(msg.id);
    if (part._id == MPP.client.user._id) return;
    followPos.x = +msg.x;
    followPos.y = +msg.y;
});
var updateInt = setInterval(function () {
    pos2.x = followPos.x;
    pos2.y = followPos.y;
    acc.x = ((pos2.x - pos.x) - (friction * vel.x)) / mass;
    acc.y = ((pos2.y - pos.y) - (friction * vel.y) + gravity) / mass;
    vel.x += acc.x;
    vel.y += acc.y;
    pos.x += vel.x;
    pos.y += vel.y;
    if (pos.x >= 100) pos.x = 100;
    if (pos.x <= 0) pos.x = 0;
    if (pos.y >= 100) pos.y = 100;
    if (pos.y <= 0) pos.y = 0;
    MPP.client.sendArray([{ m: "m", x: MPP.client.getOwnParticipant().x = pos.x, y: MPP.client.getOwnParticipant().y = pos.y }]);
}, 15);
function randNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
Array.prototype.random = function (q) {
    if (q === undefined) {
        return this.length > 0 ? this[Math.floor(this.length * Math.random())] :
            undefined;
    } else {
        let amount = q >>> 0;
        let result = this.slice(0, amount);
        for (let i = amount; i < this.length; i++) {
            let j = Math.floor(Math.random() * i);
            if (j < amount) {
                result[j] = this[i];
            }
        }
        return result;
    }
}
people = {};
function check(id) {
    var temp = false;
    Object.keys(people).forEach((user) => { if (user == id) temp = true; });
    return temp;
}
tried = false;
math = function () {
    tried = true;
    maths = "/*-+".split("");
    rand = randNum(0, 100);
    a = false;
    rand2 = randNum(0, 100);
    mathe = maths.random();
    ans = eval(rand + mathe + rand2);
    pts = randNum(15, 130);
    MPP.chat.send(`Math: what is ${rand} ${mathe} ${rand2} ? >${pts} pts<`);
    MPP.client.on("a", function (m) {
        if (m.a == ans) {
            if (!check(m.p._id)) {
                people[m.p._id] = { pts: 0 };
            }
            MPP.chat.send("Math: correct!");
            a = true;
            tried = false;
            MPP.client._events.a.pop();
            people[m.p._id].pts += pts;
        }
    });
    setTimeout(function () {
        if (!a) {
            MPP.chat.send(`Times up! Answer was ${ans}`);
            MPP.client._events.a.pop();
            tried = false;
        }
    }, 15000)
}

function sendChat(msg) {
    if (lang == "en") {
        msg.match(/.{1,508}/g).forEach(function (x, i) {
            if (x === "") return;
            if (i !== 0) x = x;
            chat_buffer.push(x);
        });
    } else {
        translate(msg, lang).then(oof => {
            oof.match(/.{1,508}/g).forEach(function (x, i) {
                if (x === "") return;
                if (i !== 0) x = x;
                chat_buffer.push(x);
            });
        })
    }
}
function sectoform(sec) {
    var totalSeconds = sec;
    var years = Math.floor(totalSeconds / 31556926);
    totalSeconds %= 31556926;
    var months = Math.floor(totalSeconds / Math.round(2629743.83));
    totalSeconds %= Math.round(2629743.83);
    var days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    var hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    console.log(years, months, days, hours, minutes, seconds);
    if (parseInt(years) <= 9) years = "0" + years;
    if (parseInt(months) <= 9) months = "0" + months;
    if (parseInt(days) <= 9) days = "0" + days;
    if (parseInt(hours) <= 9) hours = "0" + hours;
    if (parseInt(minutes) <= 9) minutes = "0" + minutes;
    if (parseInt(seconds) <= 9) seconds = "0" + seconds;

    years = years + ":";
    months = months + ":";
    days = days + ":";
    hours = hours + ":";
    minutes = minutes + ":";

    if (years == "00:" && months == "00:") years = "";
    if (months == "00:" && days == "00:") months = "";
    if (days == "00:" && hours == "00:") days = "";
    if (hours == "00:" && minutes == "00:") hours = "";


    return years + months + days + hours + minutes + seconds;
}
function dChat(id, msg) {
    if (lang == "en") {
        msg.match(/.{1,508}/g).forEach(function (x, i) {
            if (x === "") return;
            if (i !== 0) x = x;
            d_chat_buffer.push(id + " " + x);
        })
    } else {
        translate(msg, lang).then(oof => {
            oof.match(/.{1,508}/g).forEach(function (x, i) {
                if (x === "") return;
                if (i !== 0) x = x;
                d_chat_buffer.push(id + " " + x)
            })
        })
    }
}

function name(name) {
    MPP.client.sendArray([{
        m: "userset",
        set: {
            name: name
        }
    }]);
}
var op = ["d55bf273f64f37c5691f3bbb"]
var cmdChar = ">"
MPP.client.on("a", function (msg) {
    var isAdmin = false;
    var args = msg.a.split(' ');
    var cmd = args[0];
    var input = msg.a.substring(cmd.length).trim();
    var commands = ["help", "test", "pts", "math"]
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
        } else if (cmd == cmdChar + "pts") {
            if (!check(msg.p._id)) {
                sendChat(`You are not in the database, ${msg.p.name}`);
                return;
            }
            var pt = people[msg.p._id].pts == 1 ? "point" : "points"
            sendChat(`You, ${msg.p.name}, have ${people[msg.p._id].pts} ${pt}`)
        } else if (cmd == cmdChar + "math") {
            if (tried) return;
            math()
        }
});

//DISCORD!!!!
bot.on("ready", () => {
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
    sendChat(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`, lang)
    bot.user.setGame(`on ${bot.guilds.size} servers`);
})
bot.on("ready", () => {
    var dop = ["251985222915194881", "210605340201451521", "209015289990348800", "362315641161515008"]
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
            if (message.content.startsWith(".") || message.content.startsWith("/") || message.content.startsWith(">") || message.content.startsWith("<") || message.content.startsWith("^") || message.content.startsWith("?") || message.content.startsWith("!") || message.content.startsWith("/")) {
                lob.sendArray([{
                    m: "a",
                    message: message.content
                }])
            } else {
                lob.sendArray([{
                    m: "a",
                    message: message.author.username + ": " + message.content
                }])
            }
        }

        if (message.channel.id == "382622516771946499") {
            if (message.content.startsWith(".") || message.content.startsWith("/") || message.content.startsWith(">") || message.content.startsWith("<") || message.content.startsWith("^") || message.content.startsWith("?") || message.content.startsWith("!") || message.content.startsWith("/")) {
                tyeet.sendArray([{
                    m: "a",
                    message: message.content
                }])
            } else {
                tyeet.sendArray([{
                    m: "a",
                    message: message.author.username + ": " + message.content
                }])
            }
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
count = 0;
function name() {
    names = { 0: `AnonBot v6.4 [discord.gg/6gnK95G]`, 1: `Uptime: ${sectoform(Math.round(Date.now() / 1000) - start)}`, 2: `AnonBot v6.4 [${cmdChar}help]` }
    MPP.client.sendArray([{
        m: "userset",
        set: {
            name: names[count++]
        }
    }]);
    if (count >= Object.keys(names).length) count = 0;
}
setInterval(name, 2100)
bot.login(process.env.BOT_TOKEN)
