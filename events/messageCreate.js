const { prefix } = require("../config.json")

module.exports = client => {
  
  client.on("messageCreate", message =>{
    
    if (message.content.startsWith(prefix) == false) return
    
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()
    
    const command = client.commands.get(commandName)
    if(command == undefined)return
    
    try{
    command.execute(message)
    } catch(e){
      console.log(e)
      return message.channel.send({ content: "Bu Komut Şuan Da Hatalı!" })
    }
    
  })
}

