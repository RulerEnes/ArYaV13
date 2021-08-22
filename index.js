const Discord = require("discord.js")
  //İntent Bölümü 
const { Intents } = Discord;
const Client = new Discord.Client({
 "intents": [Intents.FLAG.GUILDS] 
  })
  
  //Config, Ready Bölümü 
  const { token } = require("./config.json")
  client.on("ready", () =>{
    console.log("ArYa Bot Hazır!")
    
    //Oynuyor Kısmı 
    client.user.setPresence({status: "online", activities: [{name: "ArYaSoftware.Net", type: "PLAYING"}] })
  })
  
client.login(token)