import type { SubCommandData, SubCommandOptionsData } from '../../typings'
import { validateDescription, validateDescriptionLocalizations, validateName, validateNameLocalizations } from '../../utils/validate'
import CommandBase from '../CommandBase'

export default class SubCommand extends CommandBase {
  protected options: SubCommandOptionsData = []

  toJSON (): SubCommandData {
    return {
      name: validateName(this.name),
      nameLocalizations: validateNameLocalizations(this.nameLocalizations),
      description: validateDescription(this.description),
      descriptionLocalizations: validateDescriptionLocalizations(this.descriptionLocalizations),
      type: 'SUB_COMMAND',
      options: this.options
    }
  }
}
