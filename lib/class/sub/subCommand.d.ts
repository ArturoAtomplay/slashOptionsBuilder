import { ApplicationCommandAutocompleteOption, ApplicationCommandChannelOptionData, ApplicationCommandChoicesData, ApplicationCommandNonOptionsData, ApplicationCommandNumericOptionData, ExcludeEnum } from "discord.js";
import { ChannelTypes } from "discord.js/typings/enums";
import { BaseCommandOptionsData, numberAndChoicesOptions, stringOption } from "../../types";
declare type SubCommandOptions = (ApplicationCommandChoicesData | ApplicationCommandNonOptionsData | ApplicationCommandChannelOptionData | ApplicationCommandAutocompleteOption | ApplicationCommandNumericOptionData)[];
export default class subCommand {
    protected name: string;
    protected description: string;
    protected options: SubCommandOptions;
    setName(name: string): this;
    setDescription(description: string): this;
    addBooleanOption(booleanOptions: BaseCommandOptionsData): this;
    addChannelOption(channelOptions: {
        name: string;
        description: string;
        channelTypes?: ExcludeEnum<typeof ChannelTypes, "UNKNOWN">[];
        required?: boolean;
    }): this;
    addIntegerOption(integerOptions: numberAndChoicesOptions): this;
    addMentionableOption(mentionableOptions: BaseCommandOptionsData): this;
    addNumberOption(numberOption: numberAndChoicesOptions): this;
    addRoleOption(roleOption: {
        name: string;
        description: string;
        required?: boolean;
    }): this;
    addStringOption(stringOption: stringOption): this;
    addUserOption(userOption: BaseCommandOptionsData): this;
    toJSON(): {
        name: string;
        description: string;
        options: SubCommandOptions;
        type: "SUB_COMMAND";
    };
}
export {};
