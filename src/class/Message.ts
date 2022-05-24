import type { LocalizationMap } from 'discord-api-types/v10'
import { validateName, validateNameLocalizations, validatePermission } from '../utils/validate'

export default class Message {
  protected name!: string
  protected description!: string
  protected nameLocalizations?: LocalizationMap
  protected defaultPermission?: boolean

  setName (name: string) {
    this.name = validateName(name)
    return this
  }

  setNameByLocales (locales: LocalizationMap) {
    this.nameLocalizations = validateNameLocalizations(locales)
    return this
  }

  setDefaultPermission (permission: boolean) {
    this.defaultPermission = validatePermission(permission)
    return this
  }

  toJSON (): {
    name: string
    nameLocalizations?: LocalizationMap
    defaultPermission?: boolean
    type: 'MESSAGE'
    } {
    return {
      name: validateName(this.name),
      nameLocalizations: validateNameLocalizations(this.nameLocalizations),
      defaultPermission: this.defaultPermission,
      type: 'MESSAGE'
    }
  }
}
