const ainasepics = require('ainasepics')
const { MessageEmbed } = require('discord.js')
/** @type {import("../../typings").BotSubCommand} */
module.exports = async (interaction, client) => {
  const user = interaction.options.getUser('user')
  const patGif = (await ainasepics.get('pat')).url

  const patEmbed = new MessageEmbed()
    .setColor('#ff0000')
    .setDescription(`${user.username} got patted by ${interaction.user.username}!`)
    .setImage(patGif)

  interaction.reply({ embeds: [patEmbed] })
}
