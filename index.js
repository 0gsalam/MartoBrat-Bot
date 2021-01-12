const Discord = require('discord.js');

const client = new Discord.Client();


const prefix = '!';


client.once('ready',() => {
    console.log('MartoBrat Bot is online!');   
    client.user.setActivity("!help", {
        type: "STREAMING",
            url: "https://www.twitch.tv/martin01"
    });
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'invite'){
        const embed = new Discord.MessageEmbed()
  .setTitle("You can add me to your Liitle Server to help you!")
  .setAuthor("MartoBrat💫#6443", "https://patenca.000webhostapp.com/discord/gaming.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(139,31,239)
  .setDescription("!help to see full list of my commands.")
  /*.setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  */.setThumbnail("https://patenca.000webhostapp.com/discord/logo.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://bit.ly/dinvitem")
  /*.addFields({ name: "This is a field title, it can hold 256 characters",
      value: "This is a field value, it can hold 1024 characters."})
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  /*.addFields({ name: "Inline Field", value: "They can also be inline.", inline: true })
  /*
   * Blank field, useful to create some space.
   */
  /*.addFields({ name: '\u200b', value: '\u200b' })
  .addFields({ name: "Inline Field 3", value: "You can have a maximum of 25 fields.", inline: true});
*/
  message.channel.send(embed);
    } else if (command == 'twitch'){
        const embed = new Discord.MessageEmbed()
        .setTitle("You can Follow my Twitch")
        /*.setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(139,31,239)
        .setDescription("This is Martin01#1722 Twitch")
        /*.setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
        .setImage("http://i.imgur.com/yVpymuV.png")
        */.setThumbnail("http://patenca.000webhostapp.com/discord/twitch.png")
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .setURL("https://twitch.tv/martin01")
        /*.addFields({ name: "This is Martin01#1722 Twitch",
            value: "This is a field value, it can hold 1024 characters."})
        /*
         * Inline fields may not display as inline if the thumbnail and/or image is too big.
         */
        /*.addFields({ name: "Inline Field", value: "They can also be inline.", inline: true })
        /*
         * Blank field, useful to create some space.
         */
        /*.addFields({ name: '\u200b', value: '\u200b' })
        .addFields({ name: "Inline Field 3", value: "You can have a maximum of 25 fields.", inline: true});
      */
        message.channel.send(embed);
    } else if (command == 'discord'){
        const embed = new Discord.MessageEmbed()
        .setTitle("You can join my Official Discord Server.")
        .setAuthor("Martin01#1722", "http://patenca.000webhostapp.com/discord/avatar.png")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(139,31,239)
        .setDescription("This server is made by Martin01#1722.")
        /*.setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
        .setImage("http://i.imgur.com/yVpymuV.png")
        */.setThumbnail("http://patenca.000webhostapp.com/discord/gaming.jpg")
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .setURL("https://discord.gg/FbJHpB5")
        /*.addFields({ name: "This is a field title, it can hold 256 characters",
            value: "This is a field value, it can hold 1024 characters."})
        /*
         * Inline fields may not display as inline if the thumbnail and/or image is too big.
         */
        /*.addFields({ name: "Inline Field", value: "They can also be inline.", inline: true })
        /*
         * Blank field, useful to create some space.
         */
        /*.addFields({ name: '\u200b', value: '\u200b' })
        .addFields({ name: "Inline Field 3", value: "You can have a maximum of 25 fields.", inline: true});
        */
        message.channel.send(embed);
    } else if (command == 'itzninjaman'){
        const embed = new Discord.MessageEmbed()
        .setTitle("You can Follow my Twitch")
        /*.setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(139,31,239)
        .setDescription("This is ᏜᎠᎬᎪᎠᏚᎻᏫᎢᏜ#9313 Twitch")
        /*.setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
        .setImage("http://i.imgur.com/yVpymuV.png")
        */.setThumbnail("http://patenca.000webhostapp.com/discord/twitch.png")
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .setURL("https://twitch.tv/itzninjaman")
        /*.addFields({ name: "This is Martin01#1722 Twitch",
            value: "This is a field value, it can hold 1024 characters."})
        /*
         * Inline fields may not display as inline if the thumbnail and/or image is too big.
         */
        /*.addFields({ name: "Inline Field", value: "They can also be inline.", inline: true })
        /*
         * Blank field, useful to create some space.
         */
        /*.addFields({ name: '\u200b', value: '\u200b' })
        .addFields({ name: "Inline Field 3", value: "You can have a maximum of 25 fields.", inline: true});
      */
        message.channel.send(embed);
    } else if (command == 'ts'){
        const embed = new Discord.MessageEmbed()
  .setTitle("You can join my TS3 Server")
  .setAuthor("0gsalam.us.to", "http://patenca.000webhostapp.com/discord/ip.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(139,31,239)
  /*.setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  */.setThumbnail("http://patenca.000webhostapp.com/discord/ts3.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("")
  /*.addFields({ name: "This is a field title, it can hold 256 characters",
      value: "This is a field value, it can hold 1024 characters."})
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
   /*.addFields({ name: "Inline Field", value: "They can also be inline.", inline: true })
  /*
   * Blank field, useful to create some space.
   */
  /*.addFields({ name: '\u200b', value: '\u200b' })
  .addFields({ name: "Inline Field 3", value: "You can have a maximum of 25 fields.", inline: true});
  */message.channel.send(embed);
    } else if (command == 'help'){
        const embed = new Discord.MessageEmbed()
  /*.setTitle("This is your title, it can hold 256 characters")
  */.setAuthor("MartoBrat💫 Plugin Commands", "https://patenca.000webhostapp.com/discord/gaming.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(139,31,239)
  /*.setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  /*.setImage("http://i.imgur.com/yVpymuV.png")
  /*.setThumbnail("https://patenca.000webhostapp.com/discord/gaming.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  /*.setURL("https://discord.js.org/#/docs/main/v12/class/MessageEmbed")
  .addFields({ name: "This is a field title, it can hold 256 characters",
      value: "This is a field value, it can hold 1024 characters."})
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addFields({ name: "List of Commands", value: "```!help```", inline: true })
  .addFields({ name: "Martin01 Twitch", value: "```!twitch```", inline: true })
  .addFields({ name: "nedx Twitch", value: "```!itzninjaman```", inline: true })
  .addFields({ name: "My TS3 Server", value: "```!ts```", inline: true })
  .addFields({ name: "To Invite Me", value: "```!invite```", inline: true })
  .addFields({ name: "My Discord Server", value: "```!discord```", inline: true })
  /*
   * Blank field, useful to create some space.
   */
  /*.addFields({ name: '\u200b', value: '\u200b' })
  .addFields({ name: "Inline Field 3", value: "You can have a maximum of 25 fields.", inline: true});
*/
  message.channel.send(embed);
    }
})



client.login('');
