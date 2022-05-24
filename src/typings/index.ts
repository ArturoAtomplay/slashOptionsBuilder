import { LocalizationMap } from 'discord-api-types/v10'
import { ApplicationCommandAutocompleteOption, ApplicationCommandChannelOptionData, ApplicationCommandChoicesData, ApplicationCommandNonOptionsData, ApplicationCommandNumericOptionData, ApplicationCommandOptionChoiceData, ApplicationCommandOptionData, ExcludeEnum } from 'discord.js'
import { ChannelTypes } from 'discord.js/typings/enums'

export interface BaseCommandOptionsData {
    name: string
    description: string
    descriptionLocalizations?: LocalizationMap
    nameLocalizations?: LocalizationMap
    required?: boolean
}

export type channelType = ExcludeEnum<typeof ChannelTypes, 'UNKNOWN'>

export interface ChannelCommandOptionsData extends BaseCommandOptionsData {
    channelTypes?: channelType[]
}

export type OptionChoiceData = ApplicationCommandOptionChoiceData

export interface IntegerCommandOptions extends BaseCommandOptionsData {
    minValue?: number
    maxValue?: number
    choices?: OptionChoiceData[]
    autocomplete?: false
}

export interface AutocompleteCommandOptionsData extends BaseCommandOptionsData {
    autocomplete: true
}

interface StringCommandOptions extends BaseCommandOptionsData {
    choices?: OptionChoiceData[]
    autocomplete?: false
}

export type NumericCommandOptionsData = IntegerCommandOptions | AutocompleteCommandOptionsData
export type StringCommandOptionsData = StringCommandOptions | AutocompleteCommandOptionsData
export type SubCommandOptionsData = (
    | ApplicationCommandChoicesData
    | ApplicationCommandNonOptionsData
    | ApplicationCommandChannelOptionData
    | ApplicationCommandAutocompleteOption
    | ApplicationCommandNumericOptionData
)[];

export interface SubCommandData extends Omit<BaseCommandOptionsData, 'required'> {
    type: 'SUB_COMMAND';
    options?: SubCommandOptionsData;
}

export interface SubCommandGroupData {
    name: string
    description: string
    type: 'SUB_COMMAND_GROUP';
    options: SubCommandData[];
}

export interface ChatInputData {
    name: string
    nameLocalizations?: LocalizationMap
    description: string
    descriptionLocalizations?: LocalizationMap
    defaultPermission?: boolean
    type: 'CHAT_INPUT'
    options: ApplicationCommandOptionData[]
}
