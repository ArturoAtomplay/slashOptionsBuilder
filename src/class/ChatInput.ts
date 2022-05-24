import type { ApplicationCommandOptionData } from 'discord.js'
import type { ChatInputData, SubCommandData, SubCommandGroupData } from '../typings'
import { validateDescription, validateDescriptionLocalizations, validateName, validateNameLocalizations, validatePermission } from '../utils/validate'

import CommandBase from './CommandBase'
import SubCommand from './sub/SubCommand'
import SubCommandGroup from './sub/SubCommandGroup'

export default class ChatInput extends CommandBase {
  protected options: ApplicationCommandOptionData[] = []
  protected defaultPermission?: boolean

  setDefaultPermission (permission: boolean) {
    this.defaultPermission = validatePermission(permission)
    return this
  }

  addSubCommandOption (subCommandData: (sub: SubCommand) => SubCommand | SubCommandData) {
    if (typeof subCommandData !== 'function') throw new Error('subCommandData must be a function')
    const subCommand = subCommandData(new SubCommand())
    if (subCommand instanceof SubCommand) {
      const subCommandOption = subCommand.toJSON()
      this.options.push(subCommandOption)
    } else {
      this.options.push(subCommand)
    }
    return this
  }

  addSubCommandGroupOption (subCommandGroupData: (sub: SubCommandGroup) => SubCommandGroup | SubCommandGroupData) {
    if (typeof subCommandGroupData !== 'function') throw new Error('subCommandGroupData must be a function')
    const subCommandGroup = subCommandGroupData(new SubCommandGroup())
    if (subCommandGroup instanceof SubCommandGroup) {
      const subCommandGroupOption = subCommandGroup.toJSON()
      this.options.push(subCommandGroupOption)
    } else {
      this.options.push(subCommandGroup)
    }
    return this
  }

  toJSON (): ChatInputData {
    return {
      name: validateName(this.name),
      nameLocalizations: validateNameLocalizations(this.nameLocalizations),
      description: validateDescription(this.description),
      descriptionLocalizations: validateDescriptionLocalizations(this.descriptionLocalizations),
      defaultPermission: this.defaultPermission,
      type: 'CHAT_INPUT',
      options: this.options
    }
  }
}
