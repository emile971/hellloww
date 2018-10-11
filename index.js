var Discord = require("discord.js");
bot = new Discord.Client();
client = new Discord.Client();
const config = require("./config.json");
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

bot.on('message', message =>{
  
  if (message.content === '_help'){
 
    let sicon = bot.user.displayAvatarURL;
      var help_embed = new Discord.RichEmbed()
     

      .setThumbnail(sicon)
      .addField(":warning: Tohru Army :warning:","**Help **", true)
      .addField("warn","**COMMANDE M**", true)
      .addField("say","**COMMANDE M**", true)
          .setColor("#320242")
          .setFooter("Developper par Tohru & Emile || CORPORATION 2018")
          message.author.sendEmbed(help_embed).catch(console.error);

  }

});

bot.on('message', message => {

 
   
  if (message.content.startsWith(prefix)) {
      if(message.author.bot) return;
      try {
          var splited_message = message.content.slice(prefix.length).split(" ");
          var command = splited_message[0];
          var parameters = splited_message.slice(1)
      } catch (error) {
          return
      };
     
     
      try {
         

          if (["warn"].includes(command)) {
  if(!message.member.hasPermission("ADMINISTRATOR") )
    return message.reply("Desole mais vous n'avez pas les droits necessaires pour utiliser cette commande.");
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const sayMessage = args.join(" ");
message.delete().catch(O_o=>{});
var toRepeat = parameters.join(" ");
var advert_embed = new Discord.RichEmbed()
          .setColor('#320242')
       .setAuthor(message.author.username, message.author.avatarURL)
          .setDescription(`@everyone\n\n___***${toRepeat}***___`)
          .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96gVQGTHi8NqHpIINYVGjnm7x9ja0RWaWYBs3mQ8Ln-MLmd8P")
          .setTimestamp()
          message.channel.sendEmbed(advert_embed);

}
         

          else if (["say"].includes(command)) {
            if(!message.member.hasPermission("ADMINISTRATOR") )
            return message.reply("Desole mais vous n'avez pas les droits necessaires pour utiliser cette commande.");
              var toRepeat = parameters.join(" ");
              if (toRepeat === "") {
                  return message.channel.send("? **Utilisation:** "+prefix+"say <message>")
              };
              toRepeat = toRepeat .replace("@everyone", "@??everyone")
                .replace("@here", "@??here");

                var embed = new Discord.RichEmbed()

                .setAuthor(bot.user.username, bot.user.avatarURL)    
                .setDescription(toRepeat)
                .setColor("#320242");
   
            message.channel.send(embed).catch(console.error);
            }

  else {
          console.log("[LOG] ["+message.author.tag+" = "+message.author.id+"] ["+message.guild.name+"] La commande "+command+" a ete executee.")
 
    }

      }  

      catch (error) {
        console.log("[ERREUR] ["+message.author.tag+" = "+message.author.id+"] "+message.content)

        console.log(error)
      }
    }
  });

bot.login(process.env.TOKEN)
