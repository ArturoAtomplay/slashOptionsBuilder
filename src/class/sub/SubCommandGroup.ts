import type { SubCommandData, SubCommandGroupData } from '../../typings'
import { validateDescription, validateName } from '../../utils/validate'
import SubCommand from './SubCommand'

export default class SubCommandGroup {
  protected name?: string
  protected description?: string
  protected options: SubCommandData[] = []

  setName (name: string) {
    this.name = validateName(name)
    return this
  }

  setDescription (description: string) {
    this.description = validateDescription(description)
    return this
  }

  addSubCommand (subCommandData: (sub: SubCommand) => SubCommand | SubCommandData) {
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

  toJSON (): SubCommandGroupData {
    return {
      name: validateName(this.name),
      description: validateName(this.description),
      type: 'SUB_COMMAND_GROUP',
      options: this.options
    }
  }
}
