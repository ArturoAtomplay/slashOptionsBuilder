const { Client, Collection } = require('discord.js')

module.exports = class Bot extends Client {
  /**
 * options for client constructor
 * @param {import('discord.js').ClientOptions} options
 */
  constructor (options) {
    super(options)
    this.config = require('../config')
    /** @type {Collection<string, import('../typings').BotCommand>} */
    this.commands = new Collection()
  }
}
