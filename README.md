# slashOptionsBuilder
options for slash commands discord.js

# installation
```bash
npm i slash-options-builder
```

# example

```javascript
  const Discord = require("discord.js");
  const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] });
  const { SlashOptions } = require("slash-options-builder");

const cmd1 = SlashOptions("CHAT_INPUT").setName("test").setDescription("test") // . Ctrl + space or ⌘ + space for more opcions

const commands = [cmd1];

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("messageCreate", (message) => {
  (() => {
    if (message.content === "ping") {
      message.reply("pong");
    } else if (message.content === "!deploy") {
      if (message.author.id !== "624712119098802198") return message.reply("You are not authorized to use this command!");
      message.channel.send("Deploying...").then((m) => {
        message.guild.commands
          .set(commands.map((c) => c.toJSON()))
          .then(() => {
            m.edit("Deployed!");
          })
          .catch((e) => {
            m.edit("Failed to deploy!");
            console.error(e);
          });
      });
    }
  })();
});

client.on("interactionCreate", (interaction) => {
  if (interaction.isCommand()) {
    console.log({ commandName: interaction.commandName, options: interaction.options.data });
    if (interaction.commandName === "test") {
      interaction.reply("test");
    }
  }
});

client.login("TOKEN");
```
