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

bot.on(message, message =>{
  if(message.content === "a!say")
  message.delete();
if(!message.author.id === "481469054868258836") return message.channel.sendMessage("Vous ne pouvez pas faire cette commande")
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
     

});

bot.login(process.env.TOKEN)
