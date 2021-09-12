const Discord = require("discord.js");
const fs = require("fs")
const { Intents, } = Discord
const client = new Discord.Client({
    "intents": [Discord.Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

// 7/24 Bölümü
const keep_alive = require('./keep_alive.js')


//Command Handler
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./commands")
commands.forEach(commandName => {
    const command = require(`./commands/${commandName}`)
    client.commands.set(command.name, command);
})

//Events
const events = fs.readdirSync("./events")

//Config File
const { token } = require("./config.json")


client.once("ready", () => {
    console.log("Syntax Support Bot Hazır!")

    client.user.setPresence({ status: "dnd", activities: [{ name: "SyntaxSoftware.Net", type: "PLAYING" }] })
        //events
    events.forEach(event => {
        const eventFunc = require(`./events/${event}`)
        eventFunc(client)
    })
})

client.login(token)