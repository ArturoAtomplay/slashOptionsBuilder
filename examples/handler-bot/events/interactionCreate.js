module.exports = {
  /**
   * @param {import('discord.js').Interaction} interaction
   * @param {import('../structures/Bot')}client
    */
  run: async (interaction, client) => {
    if (interaction.isCommand()) {
      const command = client.commands.get(interaction.commandName)
      if (!command) return interaction.reply(`Command \`${interaction.commandName}\` not found.`)

      try {
        await command.run(interaction)
      } catch (error) {
        console.error(error)
        interaction.reply(`Command \`${interaction.commandName}\` failed.`)
      }
    }
  }
}
