// eslint-disable-next-line camelcase
const { Slash_Chat_Input } = require('../../../lib')

/** @type {import('../typings').BotCommand}  */
module.exports = {
  data: new Slash_Chat_Input()
    .setName('interact')
    .setDescription('Interacts with users.')
    .addSubCommandOption(sub => sub.setName('pat').setDescription('Pats the user.')
      .addUserOption({
        name: 'user',
        description: 'The user to pat.',
        required: true
      }))
    .addSubCommandOption(sub => sub.setName('punch').setDescription('Punches the user.')
      .addUserOption({
        name: 'user',
        description: 'The user to punch.',
        required: true
      }))
    .toJSON(),
  run: (interaction, client) => {
    const subCommand = interaction.options.getSubcommand()

    require(`./interact-sub/${subCommand}`)(interaction, client)
  }
}
