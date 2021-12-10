const Discord = require(`discord.js`);
const { Client, Collection, MessageEmbed,MessageAttachment } = require(`discord.js`);
const { readdirSync } = require(`fs`);
const { join } = require(`path`);
const db = require('quick.db');
const { TOKEN, PREFIX, } = require(`./config.json`);
const figlet = require("figlet");
const client = new Client({ disableMentions: `` , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login("TOKEN");
client.prefix = PREFIX;
///////////////
client.on("ready", () => {
  console.log(`${calli.user.tag}`);
  calli.user.setActivity(`${prefix}help`, {
    Type: "Playing"
  });
});
///////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(clientcolor)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`
**Info Commands**
\`${prefix}botinfo\`
\`${prefix}userinfo\`
\`${prefix}serverinfo\`
\`${prefix}invite\`
\`${prefix}avatar\`

**Gif Commands**
\`${prefix}boy\`
\`${prefix}girl\`
\`${prefix}emoji\`
\`${prefix}baby\`
\`${prefix}smoking\`
\`${prefix}anime\`
\`${prefix}couple\`
\`${prefix}sad\`

**Photo Commands**
\`${prefix}pgirl\`
\`${prefix}panime\`
\`${prefix}meme\`

**Links**
[Support]() - [Invite]()
      
      
      `);
    message.channel.send(help);
  }
});
///////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(clientcolor)
      .setDescription(`
[Click here]() **to invite the bot.**
`);
    message.channel.send(help);
  }
});
///////////////
client.on("message", message => {
  if (message.content.startsWith(`${prefix}botinfo`)) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    const tnx = new Discord.MessageEmbed()
      .setColor(clientcolor)
      .addField("Name", `${client.user.tag}`, true)
      .addField("Name", `${client.user.tag}`, true)
      .addField("ID", `${client.user.id}`, true)
      .addField("Version", `${process.version}`, true)
      .addField("Guilds", `${client.guilds.cache.size} Guilds`, true)
      .addField("Users", `${client.users.cache.size} Users`, true)
      .addField(
        "Ping",
        `${Date.now() - message.createdTimestamp}` + "ms",
        true
      );

    message.channel.send(tnx);
  }
});
///////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "serverinfo")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    var EMBED = new Discord.MessageEmbed()
      .addField("Server Name", `${message.guild.name}`)
      .addField("Server Id", `${message.guild.id}`)
      .addField("Guild Owner", `${message.guild.owner}`)
      .addField("Boosts", `${message.guild.premiumSubscriptionCount}`)
      .addField("Channels", `${message.guild.channels.cache.size} Channels`)
      .addField("Roles", `${message.guild.roles.cache.size} Roles`)
      .addField("Members", `${message.guild.memberCount} Members`)
      .setThumbnail(message.guild.iconURL())
      .setColor(clientcolor);
    message.channel.send(EMBED);
  }
});
///////////////
client.on("message", prof => {
  if (prof.content.startsWith(prefix + "userinfo")) {
    if (cooldown.has(prof.author.id)) {
      return prof.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(prof.author.id);
    setTimeout(() => {
      cooldown.delete(prof.author.id);
    }, cdtime * 1000);
    var professor = new Discord.MessageEmbed()
      .setThumbnail(prof.member.user.displayAvatarURL({ dynamic: true }))
      .setColor(clientcolor)
      .addField("Usernaem", `<@${prof.author.id}>`)
      .addField("User Id", `${prof.author.id}`)
      .addField(
        "Joined Server At",
        moment(prof.joinedAt).format("D/M/YYYY h:mm a"),
        true
      )
      .addField("Create User", prof.author.createdAt.toLocaleString());
    prof.channel.send(professor);
  }
});
///////////////
client.on('message',async message => {
  if(message.content.startsWith(prefix + "avatar")) {
 
    let args = message.content.split(" ").slice(1).join(" ");   
   let member = message.mentions.users.first() || message.author
    let avatar = member.displayAvatarURL({size: 1024})
      const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("clientcolor")
        message.channel.send(embed);
    
  }}) 
///////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "baby")) {
    let girl = [
"https://cdn.discordapp.com/attachments/699339066029768796/736983333254332456/1.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/737156529278550046/10.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736983248021749775/6.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736983242271359067/5.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736983236260921455/8.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736983217856315483/3.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736983211619516447/2-2.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736978634031759400/40.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736978111043731476/a_204c3f0f05cbef57c6297ee3f230f22a.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736978069038039050/f5a91c2c25a6a082f8ecafc826c13760.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736977973688795237/2.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736977934375583926/a_bf8ac566a856ad839d310e919ba15791.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736977911831330886/image0-7.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736977867811979324/a_c21ae57fdd3ad6ac99cd038b6a5aa1e4.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736148143678291968/15.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/735864299024810155/20200723_142037.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/735910966792945764/image0.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/735910962762350642/image0.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/735194170230308904/a_0690a3032ce9908e230d7f71dd9a6988_1.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/734965436663464076/a_4f5d107e5160642113337218f63a6441.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/734965350357008384/a_8f2bce5f3a3312e7e95236a39ea70efe.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/734965015739629599/image0-6.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/732175141567725639/image0.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/730498782265081876/bab3.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/730499512602329198/14.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} BABY GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////////
client.on("message", message => {
  if (message.startsWith(PREFIX + "smoking")) {
    let girl = [
"https://cdn.discordapp.com/attachments/755893014915711047/828894065332453397/a_96bfa97e6390c54975940689d36b1c21.gif",
"https://cdn.discordapp.com/attachments/755893014915711047/828972013040697364/gf.gif",
"https://cdn.discordapp.com/attachments/755893014915711047/829244464103030784/Smoking_Men_Smoking_GIF_-_Men_Smoking_Smoke_-_Discover__Share_GIFs.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/829244439310106664/Nikolaj_Coster-Waldau_Gif_Hunt.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/828893906656690186/KAPTANman_48.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/829594717859348480/20.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827979186257526814/ENES_ACAR_GIF_114_-_Kopya.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827978957668220928/Man_319.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827978869209563196/Man_137.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827978647142006804/Man_214.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827683207914323988/a_d4e861205473258d19542f451ed1083e.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827683124221444126/3B7183B3-32B1-4F3E-8469-7C1D75D165C9.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827651030937763880/a_f2c5f020621dc7da6854d194156a5a13.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827567581212573706/a_96bfa97e6390c54975940689d36b1c21.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827567125580480582/Zenard_91.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827567091674513408/sadsa.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827566756641636382/image2.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827566694846562324/ENES_ACAR_GIF_134.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827501391060140052/knassy1_6.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827471223964827668/4dsr5.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827471039629361172/20210121_175434.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827045264979656764/6.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827044744408072223/image0-123.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/826498012410019930/a_88e5b4c03a185d0d03f84039036da416.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/826498127895986186/KAPTANman_48.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/826497192579170344/a_9b2ed05b287fc58858272fa4294a293b-1.gif"

    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} SMOKING GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "emoji")) {
    let girl = [
"https://media.discordapp.net/attachments/790836700561670145/790836721896914954/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836726574350356/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836731821686784/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836737018036264/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836743762083851/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836753241866240/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836747260395540/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836766281564181/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836771385770004/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836775714029598/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836781654343710/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836806860931072/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836828197617714/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836833763852338/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836843235115008/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836867490250772/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836871882211338/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836880785801236/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836884304691230/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836897010286652/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836892903669770/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836914688098344/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836923442266112/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/791250869890056232/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/791250873741213716/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/791250879948783646/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/791250901562163220/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/791250931563495444/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/791250998936076288/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/791251020117573642/image1.gif", 
"https://media.discordapp.net/attachments/790836700561670145/799353223554269214/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/799353104881025054/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/794857455426207754/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/794857435550318602/image2.gif", 
"https://media.discordapp.net/attachments/790836700561670145/794857374413357086/image4.gif", 
"https://media.discordapp.net/attachments/790836700561670145/794273933838909440/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/794857297888673803/image0.gif"

    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} EMOJI GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "boy")) {
    let man = [
      "https://media.discordapp.net/attachments/786897044483604490/803870769313480714/Enes_Acar_GIF_70.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870793716858880/a_57a7f6c875e3a329b170edf177392911.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870817351368734/5-2.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829010513966/image1.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829483552838/image3.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804219672513478706/Lenora_36.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220384899498064/Lenora_28.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220394697392158/Lenora_33.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804315371271749662/image0-20.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968359572930580/ALANIS_MAN_GIF_156.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968381816111124/image0-5.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804760463044640808/ALANIS_MAN_GIF_99.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870704999202836/ENES_ACAR_GIF_104.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870737941135421/ENES_ACAR_GIF_15.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870682479067166/ENES_ACAR_GIF_135.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} BOY GIFS  `,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "girl")) {
    let girl = [
      "https://media.discordapp.net/attachments/786897045436366849/804968189892755456/image2-1.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968223577604126/gif472.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968231794245642/rexsin_212.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968258859827210/pintrst___luri_4.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804983128527077387/a_177ddfe86ad32b68be6200f007682136.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008600334073866/3WIu.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805370008330436648/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008566439641128/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804681217022099466/a_3c85d4517fbaf4f750d344820b49c076.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804682936615829504/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804314115601596426/ALANIS_WOMAN_GIF_176.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804280612227383316/ALANIS_WOMAN_GIF_138.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} GIRL GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "anime")) {
    let man = [
      "https://media.discordapp.net/attachments/608711485849337856/855998757451989002/image0-2.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856002084461084682/image0-4.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856046302302044190/RAGE.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856064006099959838/sword_in.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856064373285322772/brur.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856078080513671218/main-qimg-9b85288a288ad40533d86370edc2f861.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856082677124038706/243b546d229fecd75d49dfa96fa7d3af.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856083458426273852/1359536E-4B2C-46FD-B4C0-991DEDD90DB6.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856083601376673812/tumblr_n8afdsLdj31tgrxjfo1_400.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855944540519399454/a_ebfe24c4bd0d9ccfdfbb26e9c211616b.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855941510633619496/a_5079b0989b9b5957008426c949ada083.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855934815643762718/SPOILER_bcfd0735832eb9c8908fb09b3bbd76f7.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924849976541214/a_2b58061e423d0ed65d2e1a3e77ed61f8.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924705320239114/Anime_PP_Gif_64.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924615573143582/Anime_PP_Gif_46.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924558700085248/a_3bf21d37deefcf4cd1dcab780aab846c.gif",
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} ANIME GIFS `,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "couple")) {
    let loves = [
      "https://media.discordapp.net/attachments/608711480346542102/782233713538498600/hit_gif_5.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782286421020508170/image0_1.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782284851570147358/image0-1-4.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782406047473467422/image0.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782148760997593098/a_8bc52b6080ce3079988c6e49f84c4b03.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782445443665625128/ezgif-7-2032ed99845d.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782196955488321556/a_637b8e2042d540a1e5e28282e3fe5cc7.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803307812608409600/image0.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869330005688340/a_130ce69bc8c1f06d917ee668f7051b64.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869344266321931/dans4.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869587988152340/gif.13.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869653641854996/20210105_223539.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869660814376960/a_09fbaba0301c6db194af2f0c6d2a6a93.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804188805204410378/2.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804337804179275776/16-10-27-tenor.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759240451424256/Lrows_Gif_25.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759252899594259/ciftler8.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} Gif Couple `,
          image: {
            url: loves[Math.floor(Math.random() * loves.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

///////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "sad")) {
    let sads = [
      "https://media.discordapp.net/attachments/786897045952790550/798719676795715614/Zeyrox_43.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435191323852820/luisa1-1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435254011920404/a_caf4fdc4f3e516fcabec0022078c38ab.gif",
      "https://media.discordapp.net/attachments/786897045952790550/804040753072439326/038842117446a0c76a922d23727942b1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581071079768074/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581004424544256/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580974975549450/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580943627976704/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802930927784820766/Cedric_Anime_Gif_81.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802722301984243712/a_66f26e072e89a58c1879c6fa27744bd7.gif",
      "https://media.discordapp.net/attachments/786897045952790550/801054305569865778/uzgun-4.gif",
      "https://media.discordapp.net/attachments/786897044483604490/806288916160315422/image0.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} **SAD GIFS**`,
          image: {
            url: sads[Math.floor(Math.random() * sads.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "pgirl")) {
    let girl = [
"https://media.discordapp.net/attachments/608711474952798221/850629443026419752/f3bfd48e2e20b387d5971c5fea0b8d34.png", 
"https://media.discordapp.net/attachments/608711474952798221/850629415380451328/9244cfa0460e52cb97990acbeca49cba.webp", 
"https://media.discordapp.net/attachments/608711474952798221/850629403305050113/910eabc3d85a75dd518e84ad13cb4d7f.webp", 
"https://media.discordapp.net/attachments/608711474952798221/850629365762883584/5838d3454121aee3343faa1012d6b063.webp", 
"https://media.discordapp.net/attachments/608711474952798221/850629353007349810/7bc38d0e13eb7d5338ad8c3c1e55f937.webp", 
"https://media.discordapp.net/attachments/608711474952798221/850629340152856576/190acfe75241d06180483b6ce3e5b8fc.webp", 
"https://media.discordapp.net/attachments/608711474952798221/850629327875604520/8b378c126fe3bac7c41a6dccb8efa24d.webp", 
"https://media.discordapp.net/attachments/608711474952798221/850628755168690226/5e88cce1c32de06f23bf9d270c006088.png", 
"https://media.discordapp.net/attachments/608711474952798221/850628725497921556/c606e2b808b06d09bea7245185eec8fe.jpg", 
"https://media.discordapp.net/attachments/608711474952798221/850628690135351316/ade5b5a9ae0e25a496898c2d8e6609b0.jpg", 
"https://media.discordapp.net/attachments/608711474952798221/850628659013746698/d9892f9722a58082c07e4c6120364e80.jpg", 
"https://media.discordapp.net/attachments/608711474952798221/850628594589237288/cf9a462208b18ae0b5b70cf0b9534f58.jpg", 
"https://media.discordapp.net/attachments/608711474952798221/850628504860360714/baf4d15b4d0fbf23feb746e75c6c83b1.jpg", 
"https://media.discordapp.net/attachments/608711474952798221/850628454818381824/13dc2bfff51fe7c9405c31bc29c93770.jpg", 
"https://media.discordapp.net/attachments/608711474952798221/850628420471226398/247f8eb753d379f3181c865bbf86806d.jpg", 
"https://media.discordapp.net/attachments/608711474952798221/850628338292752384/9499dd4d6cd0c40c2f83287cdc7c49d5.jpg", 
"https://media.discordapp.net/attachments/608711474952798221/850628302825848842/b1078d58deb757e5fcadfddd95b7e051.jpg", 
"https://media.discordapp.net/attachments/608711474952798221/850628206175453184/868b2ccadb0ce32d7a10364f7860046e.jpg", 
"https://media.discordapp.net/attachments/608711474952798221/850628152291491850/70681801440d53a19d117306cffba9b7.jpg", 
"https://media.discordapp.net/attachments/608711474952798221/850628049187242024/f843281881efdae089888718910e0452.jpg"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} PHOTO GIRL `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "panime")) {
    let girl = [
"https://media.discordapp.net/attachments/608711487325995008/850620751953920021/images.jpeg", 
"https://media.discordapp.net/attachments/608711487325995008/850620724855308298/----30.jpeg", 
"https://media.discordapp.net/attachments/608711487325995008/850620718134591488/1-808-700x592.jpg", 
"https://media.discordapp.net/attachments/608711487325995008/850569853294084106/unnamed.jpg", 
"https://media.discordapp.net/attachments/608711487325995008/850569773187858452/afd7c9432ccf64e174de933c543f38ab.png", 
"https://media.discordapp.net/attachments/608711487325995008/850569745987272724/Screenshot_11.jpg", 
"https://media.discordapp.net/attachments/608711487325995008/850569656547803166/a604a6828503a67ce6516619bdea76a3.png", 
"https://media.discordapp.net/attachments/608711487325995008/850569616652632095/e73ad1bcb11f846fbcfd964fa4f29598e23c1fc8r1-746-1080v2_uhq.jpg", 
"https://media.discordapp.net/attachments/608711487325995008/850569506304294942/9634b16abd0f527cf41e24253e93e850.png", 
"https://media.discordapp.net/attachments/608711487325995008/850569442299215903/QHIBkfTO-SQ.jpg", 
"https://media.discordapp.net/attachments/608711487325995008/850569441028866109/maxresdefault.jpg", 
"https://media.discordapp.net/attachments/608711487325995008/850569312326647858/2c04c264f99b614c1b979962d90f1acc.png", 
"https://media.discordapp.net/attachments/608711487325995008/850494810980614174/--22.jpg", 
"https://media.discordapp.net/attachments/608711487325995008/850435543975460904/50b6848d418423365223d53c0dea825e.jpg", 
"https://media.discordapp.net/attachments/608711487325995008/850435543031611392/d7ea78aa6b8e00524873fe329ef1d34a.jpg", 
"https://media.discordapp.net/attachments/608711487325995008/850435457564147802/150102ebdc256120794dd3525f60116b.jpg", 
"https://media.discordapp.net/attachments/608711487325995008/850435457136459846/e2d97d78b6aceb76595fe930b49f3cac.jpg", 
"https://media.discordapp.net/attachments/608711487325995008/850435312177250325/2b6486a714974de69a57de60db8a3481.jpg", 
"https://media.discordapp.net/attachments/608711487325995008/850371836784279582/5c1f3c42-52f1-4992-91d0-e8fe21150a25.jpg", 
"https://media.discordapp.net/attachments/608711487325995008/850371790815363092/-_ICONS___tsuktea_24.jpg"

    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} PHOTO ANIME `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "meme")) {
    let girl = [
"https://media.discordapp.net/attachments/900411059461054464/902919517615816744/20210814_110411.jpg",
"https://media.discordapp.net/attachments/879767681908219905/900840868011995146/image0.jpg",
"https://media.discordapp.net/attachments/828316334726185041/902477476276629534/IMG_0439.jpg",
"https://media.discordapp.net/attachments/862052539754348595/900007513104187472/FB_IMG_1634583685040.jpg",
"https://media.discordapp.net/attachments/862052539754348595/899984476011134986/image0.jpg",
"https://media.discordapp.net/attachments/862052539754348595/899329013087076512/image0.png",
"https://media.discordapp.net/attachments/862052539754348595/890032218003611658/1ad7f4c64e5009b9.jpg",
"https://media.discordapp.net/attachments/862052539754348595/885976058220920872/image0.png",
"https://media.discordapp.net/attachments/862052539754348595/885672449050574848/received_381725836693257.jpeg",
"https://media.discordapp.net/attachments/789467800195432479/872845034930733127/FB_IMG_1628172846169.jpg",
"https://media.discordapp.net/attachments/868771845938229249/903333598101389382/1ad7f4c64e5009b9.jpg",
"https://media.discordapp.net/attachments/868771845938229249/903333597950410832/FB_IMG_1635441774761.jpg",
"https://media.discordapp.net/attachments/868771845938229249/903333597782626384/FB_IMG_1635441792089.jpg",
"https://media.discordapp.net/attachments/868771845938229249/903333597568700426/20211028_202400.jpg",
"https://media.discordapp.net/attachments/839251144924069899/903334485528027146/FB_IMG_1635442098471.jpg",
"https://media.discordapp.net/attachments/839251144924069899/903334485343498350/FB_IMG_1635442102544.jpg",
"https://media.discordapp.net/attachments/839251144924069899/903334485129580605/FB_IMG_1635442106193.jpg",
"https://media.discordapp.net/attachments/839251144924069899/903334838948491314/FB_IMG_1635442166847.jpg",
"https://media.discordapp.net/attachments/839251144924069899/903334838755532861/FB_IMG_1635442183313.jpg",
"https://media.discordapp.net/attachments/839251144924069899/903334838461956136/FB_IMG_1635442191448.jpg",
"https://media.discordapp.net/attachments/839251144924069899/903334838210285598/FB_IMG_1635442195945.jpg",
"https://media.discordapp.net/attachments/839251144924069899/903335467997593640/16559314164_38164192ef_b.jpg"

    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} MEME PHOTO `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////////

Code By Respect..


