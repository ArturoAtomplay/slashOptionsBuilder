// eslint-disable-next-line camelcase
const { Slash_Chat_Input } = require('../../../lib')

/** @type {import('../typings').BotCommand}  */
module.exports = {
  data: new Slash_Chat_Input()
    .setName('help')
    .setDescription('Shows this help message.')
    .toJSON(),
  run: (interaction, client) => {
    interaction.reply(`\`\`\`${client.commands.map(command => `${command.data.name} - ${command.data.description}`).join('\n')}\`\`\``)
  }
}
