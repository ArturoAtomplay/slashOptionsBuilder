const fs = require('fs')
const path = require('path')
const Bot = require('./structures/Bot')

const client = new Bot({ intents: 0 })

// read commands
const commands = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'))
for (const file of commands) {
  const command = require(`./commands/${file}`)
  client.commands.set(command.data.name, command)
}

// read events
const events = fs.readdirSync(path.join(__dirname, 'events'))
for (const file of events) {
  const event = require(`./events/${file}`)
  const eventName = file.split('.')[0]

  if (event.once) client.once(eventName, (...args) => event.run(...args, client))
  else client.on(eventName, (...args) => event.run(...args, client))
}

client.login(client.config.token)
