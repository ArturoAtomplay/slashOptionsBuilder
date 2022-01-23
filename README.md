# [slashOptionsBuilder](https://github.com/arturoAtomplay/slashOptionsBuilder)

#### options for slash commands discord.js

## Installation

```bash
npm install slash-options-builder
```

## Usage

```javascript
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] });
const { Slash_Chat_Input, Slash_Message, Slash_User } = require("slash-options-builder");

const slash = new Slash_Chat_Input()
  .setName("say")
  .setDescription("say Command")
  .addStringOption({ name: "text", description: "Text to send", required: true }); // . Ctrl + space or ⌘ + space for more options

const slashMessage = new Slash_Message().setName("make a message hidden");

const slashUser = new Slash_User().setName("hi user");

client.on("ready", () => console.log("Ready!"));

client.on("messageCreate", async (message) => {
  if (message.content === "!deploy") {
    if (message.author.id !== "ID") return;
    const msg = await message.channel.send("Deploying...");

    message.guild.commands
      .set([slash, slashMessage, slashUser].map((cmd) => cmd.toJSON()))
      .then(() => msg.edit("Deployed!"))
      .catch((err) => msg.edit("Error!" + err.message));
  }
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    if (interaction.command.name === "say") {
      const text = interaction.options.getString("text");
      interaction.reply(text);
    }
  } else if (interaction.isUserContextMenu()) {
    interaction.reply(`Hello ${interaction.user.username}`);
  } else if (interaction.isMessageContextMenu()) {
    const message = await interaction.channel.messages.fetch(interaction.targetId);
    interaction.reply(`||${message.content}||`);
  }
});

client.login("TOKEN");
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
