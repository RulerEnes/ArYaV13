const { prefix } = require("../config.json")
const cooldown = require("../utils/cooldown")

module.exports = client => {
  
  client.on("messageCreate", message =>{
    
    if (message.content.startsWith(prefix) == false) return
    
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()
    
    const command = client.commands.get(commandName)
    if(command == undefined)return
    
    //Cooldown Control
    const cooldownTime = cooldown(command, message.author.id)
    if (cooldownTime) return message.channel.send({ content: `Lütfen Bu Komutu Tekrar Kullanmak İçin ${cooldownTime} Saniye Bekleyiniz.`})
    
    
    
    try{
    command.execute(message)
    } catch(e){
      console.log(e)
      return message.channel.send({ content: "Bu Komut Şuan Da Hatalı!" })
    }
    
  })
}

