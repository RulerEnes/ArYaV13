const Discord = require("discord.js");
const fs = require("fs")
const { Intents } = Discord
const client = new Discord.Client({
  "intents": [Discord.Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

//Events
const events = fs.readdirSync("./events")

//Config File
const { token } = require("./config.json")


client.once("ready", () => {
  console.log("ArYa Bot Hazır!")
  
  client.user.setPresence({status: "idle", activities: [{name: "SyntaxSoftware.Net", type: "PLAYING" }]})
  
  //Events
events.forEach(event =>{
  const eventFile = require(`./events/${event}`)
  eventFunc(client)
})
})

client.login(token)