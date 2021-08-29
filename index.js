const Discord = require("discord.js")
const fs = require("fs")
  //İntent Bölümü 
const { Intents, Collection } = Discord;
const Client = new Discord.Client({
 "intents": [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] 
  })
  
  //Commands
client.comands = new Collection() 

// Command Handler
const comands = fs.readdirSync("./commands")
comands.forEach(commandName => {
  const command = require(`./commands/${commandName}`)
  client.commands.set(command.name, command)
})
  
  //Events
  const events = fs.readdirSync("./events")
  
  
  //Config, Ready Bölümü 
  const { token } = require("./config.json")
  client.on("ready", () => {
    console.log("ArYa Bot Hazır!")
    
    
    
    //Oynuyor Kısmı 
    client.user.setPresence({status: "online", activities: [{name: "ArYaSoftware.Net", type: "PLAYING"}] })
  })
  
  // Events
  events.forEach(event => {
    const eventFunc = require(`./events/${event}`)
    eventFunc(client)
  })
  
client.login(token)