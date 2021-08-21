const Discord = require("discord.js")
const { Intents } = Discord;
const Client = new Discord.Client({
 "intents": [Intents.FLAG.GUILDS] 
  })
  
  //Config Bölümü 
  const { token } = require("./config.json")
  client.once("ready", () =>{
    console.log("ArYa Bot Hazır!")
    
   //User Oynuyor kısmı 
    client.user.setPresence({status: "online", activities: [{name: "ArYaSoftware.Net", type: "PLAYING"}] })
  })
  
client.login(token)