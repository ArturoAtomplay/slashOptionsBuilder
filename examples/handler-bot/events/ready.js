module.exports = {
  once: true,
  /** @param {import('../structures/Bot')} client */
  run: (client) => {
    // discord bot ready
    console.log(`Discord bot ${client.user.tag} ready`)

    if (client.config.argv.deploy) {
      const guild = client.guilds.cache.get(client.config.guildID)

      if (!guild) console.error('ready.js deploy guildID not found')

      guild.commands.set(client.commands.map(c => c.data))
        .then(() => console.log('ready.js guild commands set'))
        .catch(console.error)
    }
  }
}
