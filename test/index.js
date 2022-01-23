//@ts-check

const { Slash_Chat_Input } = require("../lib/index");
const slashCommands = require("./commands");

const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] });

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("!deploy")) {
    if (message.author.id !== "624712119098802198") return;

    const msg = await message.channel.send("Deploying...");

    // console.log(slashCommands);

    message.guild.commands
      .set(slashCommands)
      .then(() => msg.edit("Deployed!"))
      .catch((e) => msg.edit(e.message));
  }
});

client.on("interactionCreate", (interaction) => {
  if (interaction.isCommand()) {
    interaction.reply("Hello!");
  }
});

client.login("");
