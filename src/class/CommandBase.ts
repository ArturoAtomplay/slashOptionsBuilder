import type { LocalizationMap } from 'discord-api-types/v10'
import type { ApplicationCommandOptionData } from 'discord.js'
import type { BaseCommandOptionsData, ChannelCommandOptionsData, /* CommandOptionsData, */ NumericCommandOptionsData, StringCommandOptionsData } from '../typings'
import { validateChannelTypes, validateChoices, validateDescription, validateDescriptionLocalizations, validateName, validateNameLocalizations, validateRequired } from '../utils/validate'

export default class CommandBase {
  protected name!: string
  protected description!: string
  //   protected defaultPermission?: boolean
  protected nameLocalizations?: LocalizationMap
  protected descriptionLocalizations?: LocalizationMap
  protected options: ApplicationCommandOptionData[] = []

  setName (name: string) {
    this.name = validateName(name)
    return this
  }

  setNameByLocales (locales: LocalizationMap) {
    this.nameLocalizations = validateNameLocalizations(locales)
    return this
  }

  setDescription (description: string) {
    this.description = validateName(description)
    return this
  }

  setDescriptionByLocales (locales: LocalizationMap) {
    this.descriptionLocalizations = validateDescriptionLocalizations(locales)
    return this
  }

  //   setDefaultPermission (permission: boolean = false) {
  //     this.defaultPermission = validatePermission(permission)
  //     return this
  //   }

  addAttachmentOption (attachmentData: BaseCommandOptionsData) {
    const { name, nameLocalizations, description, descriptionLocalizations, required } = attachmentData

    this.options.push({
      name: validateName(name),
      nameLocalizations: validateNameLocalizations(nameLocalizations),
      description: validateDescription(description),
      descriptionLocalizations: validateDescriptionLocalizations(descriptionLocalizations),
      type: 'ATTACHMENT',
      required: validateRequired(required)
    })
    return this
  }

  addBooleanOption (booleanData: BaseCommandOptionsData) {
    const { name, nameLocalizations, description, descriptionLocalizations, required } = booleanData

    this.options.push({
      name: validateName(name),
      nameLocalizations: validateNameLocalizations(nameLocalizations),
      description: validateDescription(description),
      descriptionLocalizations: validateDescriptionLocalizations(descriptionLocalizations),
      type: 'BOOLEAN',
      required: validateRequired(required)
    })
    return this
  }

  addChannelOption (channelData: ChannelCommandOptionsData) {
    const { name, nameLocalizations, description, descriptionLocalizations, channelTypes, required } = channelData

    this.options.push({
      name: validateName(name),
      nameLocalizations: validateNameLocalizations(nameLocalizations),
      description: validateDescription(description),
      descriptionLocalizations: validateDescriptionLocalizations(descriptionLocalizations),
      channelTypes: validateChannelTypes(channelTypes),
      type: 'CHANNEL',
      required: validateRequired(required)
    })
    return this
  }

  addIntegerOption (integerData: NumericCommandOptionsData) {
    const { name, nameLocalizations, description, descriptionLocalizations, autocomplete, required } = integerData

    if (autocomplete === true) {
      this.options.push({
        name: validateName(name),
        nameLocalizations: validateNameLocalizations(nameLocalizations),
        description: validateDescription(description),
        descriptionLocalizations: validateDescriptionLocalizations(descriptionLocalizations),
        autocomplete: true,
        type: 'INTEGER',
        required: validateRequired(required)
      })
    } else {
      this.options.push({
        name: validateName(name),
        nameLocalizations: validateNameLocalizations(nameLocalizations),
        description: validateDescription(description),
        descriptionLocalizations: validateDescriptionLocalizations(descriptionLocalizations),
        choices: validateChoices(integerData.choices),
        minValue: integerData.minValue,
        maxValue: integerData.maxValue,
        type: 'INTEGER',
        required: validateRequired(required)
      })
    }

    return this
  }

  addMentionableOption (mentionableData: BaseCommandOptionsData) {
    const { name, nameLocalizations, description, descriptionLocalizations, required } = mentionableData

    this.options.push({
      name: validateName(name),
      nameLocalizations: validateNameLocalizations(nameLocalizations),
      description: validateDescription(description),
      descriptionLocalizations: validateDescriptionLocalizations(descriptionLocalizations),
      type: 'MENTIONABLE',
      required: validateRequired(required)
    })
    return this
  }

  addNumberOption (numberData: NumericCommandOptionsData) {
    const { name, nameLocalizations, description, descriptionLocalizations, autocomplete, required } = numberData

    if (autocomplete === true) {
      this.options.push({
        name: validateName(name),
        nameLocalizations: validateNameLocalizations(nameLocalizations),
        description: validateDescription(description),
        descriptionLocalizations: validateDescriptionLocalizations(descriptionLocalizations),
        autocomplete: true,
        type: 'NUMBER',
        required: validateRequired(required)
      })
    } else {
      this.options.push({
        name: validateName(name),
        nameLocalizations: validateNameLocalizations(nameLocalizations),
        description: validateDescription(description),
        descriptionLocalizations: validateDescriptionLocalizations(descriptionLocalizations),
        choices: validateChoices(numberData.choices),
        minValue: numberData.minValue,
        maxValue: numberData.maxValue,
        type: 'NUMBER',
        required: validateRequired(required)
      })
    }

    return this
  }

  addRoleOption (roleData: BaseCommandOptionsData) {
    const { name, nameLocalizations, description, descriptionLocalizations, required } = roleData

    this.options.push({
      name: validateName(name),
      nameLocalizations: validateNameLocalizations(nameLocalizations),
      description: validateDescription(description),
      descriptionLocalizations: validateDescriptionLocalizations(descriptionLocalizations),
      type: 'ROLE',
      required: validateRequired(required)
    })
    return this
  }

  addStringOption (stringData: StringCommandOptionsData) {
    const { name, nameLocalizations, description, descriptionLocalizations, autocomplete, required } = stringData

    if (autocomplete === true) {
      this.options.push({
        name: validateName(name),
        nameLocalizations: validateNameLocalizations(nameLocalizations),
        description: validateDescription(description),
        descriptionLocalizations: validateDescriptionLocalizations(descriptionLocalizations),
        autocomplete: true,
        type: 'STRING',
        required: validateRequired(required)
      })
    } else {
      this.options.push({
        name: validateName(name),
        nameLocalizations: validateNameLocalizations(nameLocalizations),
        description: validateDescription(description),
        descriptionLocalizations: validateDescriptionLocalizations(descriptionLocalizations),
        choices: validateChoices(stringData.choices),
        autocomplete: false,
        required: validateRequired(required),
        type: 'STRING'
      })
    }

    return this
  }

  addUserOption (userData: BaseCommandOptionsData) {
    const { name, nameLocalizations, description, descriptionLocalizations, required } = userData

    this.options.push({
      name: validateName(name),
      nameLocalizations: validateNameLocalizations(nameLocalizations),
      description: validateDescription(description),
      descriptionLocalizations: validateDescriptionLocalizations(descriptionLocalizations),
      type: 'USER',
      required: validateRequired(required)
    })
    return this
  }
}
