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
     var parameters = splited_message.slice(1)
     
  if(msg.content === "a!say")
  msg.delete();
if(!msg.author.id === "481469054868258836") return msg.channel.sendMessage("Vous ne pouvez pas faire cette commande")
  var toRepeat = parameters.join(" ");
                if (toRepeat === "") {
                    return msg.channel.send("? **Utilisation:** "+prefix+"say <message>")
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
