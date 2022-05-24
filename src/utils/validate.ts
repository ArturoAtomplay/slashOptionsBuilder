import type { channelType, OptionChoiceData } from '../typings'

export function validateName (name: unknown): string {
  // console.log('validateName', name)
  if (!name) throw new Error('Name is required')
  if (typeof name !== 'string') throw new Error('Name must be a string')
  return name
}

export function validateDescription (description: unknown): string {
  if (!description) throw new Error('Description is required')
  if (typeof description !== 'string') throw new Error('Description must be a string')
  return description
}

export function validatePermission (permission: unknown): boolean {
  if (typeof permission !== 'boolean') throw new Error('Permission must be a boolean')
  return permission
}

export function validateRequired (required: unknown): boolean | undefined {
  if (required && typeof required !== 'boolean') throw new Error('Required must be a boolean')
  else if (typeof required === 'boolean') return required
}

export function validateNameLocalizations (nameLocalizations: unknown): object | undefined {
  if (nameLocalizations) {
    if (typeof nameLocalizations !== 'object') throw new Error('NameLocalizations must be an object')
    if (Object.keys(nameLocalizations).length === 0) throw new Error('NameLocalizations must not be empty')

    return nameLocalizations
  } else return undefined
}

export function validateDescriptionLocalizations (descriptionLocalizations: unknown): object | undefined {
  if (descriptionLocalizations) {
    if (typeof descriptionLocalizations !== 'object') throw new Error('DescriptionLocalizations must be an object')
    if (Object.keys(descriptionLocalizations).length === 0) throw new Error('DescriptionLocalizations must not be empty')

    return descriptionLocalizations
  } else return undefined
}

export function validateChannelTypes (channelTypes: unknown): channelType[] | undefined {
  if (channelTypes) {
    if (!Array.isArray(channelTypes)) throw new Error('channelTypes must be an array')
    if (channelTypes.length === 0) throw new Error('channelTypes must have at least one element')

    channelTypes.forEach((channelType, i) => {
      if (typeof channelType !== 'string') {
        const err = `channelTypes[\x1b[31m${i}\x1b[0m] must be a string`
        throw new Error(err)
      }
    })

    return channelTypes
  } else return undefined
}

export function validateChoices (choices: unknown): OptionChoiceData[] | undefined {
  if (choices) {
    if (!Array.isArray(choices)) throw new Error('Choices must be an array')
    if (choices.length === 0) throw new Error('Choices must have at least one element')

    if (choices.some(choice => typeof choice !== 'object')) throw new Error('Choices must be objects')

    choices.forEach((choice, i) => {
      if (!choice.name) throw new Error(`Choices[\x1b[31m${i}\x1b[0m].name must have a name`)
      if (typeof choice.name !== 'string') throw new Error(`Choices[\x1b[31m${i}\x1b[0m].name must be a string`)

      if (!choice.value) throw new Error(`Choices[\x1b[31m${i}\x1b[0m].value must have a value`)
      if (!(typeof choice.value === 'string' || typeof choice.value === 'number')) {
        const err = `Choices[\x1b[31m${i}\x1b[0m].value must be a string or number`
        throw new Error(err)
      }
    })

    return choices
  } else return undefined
}
