const path = require('path')
const argv = require('minimist')(process.argv.slice(2))
require('dotenv').config({ path: path.resolve(__dirname, '.env') })

module.exports = {
  argv,
  token: process.env.DISCORD_TOKEN,
  guildID: '624836560247848970',
  developerID: '624712119098802198'
}
