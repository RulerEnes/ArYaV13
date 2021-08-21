const Discord = require("discord.js")
const { Intents } = Discord;
const Client = new Discord.Client({
 "intents": [Intents.FLAG.GUILDS] 
  })
  
  //Config 
  const { token } = require("./config.json")
  client.once("ready", () =>{
    console.log("ArYa Bot Hazır!")
    
    
    client.user.setPresence({status: "online", activities: [{name: "ArYaSoftware.Net", type: "PLAYING"}] })
  })
  
client.login(token)