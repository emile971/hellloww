var Discord = require("discord.js");
bot = new Discord.Client();
client = new Discord.Client();
var prefix = ("a!");
bot.on('ready', () => {
    console.log("Correctement connecter!");
    avatar = "https://cdn.discordapp.com/attachments/498529437512368135/498914619793080356/Screenshot_20181008-194458.png"
    bot.user.setAvatar(avatar);
    bot.user.setUsername('! Tôhru',"")
});
 
bot.on("ready", () => {
 
  bot.user.setGame(`Bot en DEV | Tohru Army`);
});

bot.on('message', msg =>{
  
  if(message.content === "a!say")
  message.delete();
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.sendMessage("Vous n'avez pas la permission")
  var toRepeat = parameters.join(" ");
                if (toRepeat === "") {
                    return message.channel.send("? **Utilisation:** "+prefix+"say <message>")
                };
                toRepeat = toRepeat .replace("@everyone", "@??everyone")
                  .replace("@here", "@??here");
 
                  var embed = new Discord.RichEmbed()
 
                  .setAuthor(bot.user.username, bot.user.avatarURL)    
                  .setDescription(toRepeat)
                  .setColor("RANDOM");
     message.channel.send(embed);
    
 
     

});

bot.login(process.env.TOKEN)
