import { ApplicationCommandOptionData, ChatInputApplicationCommandData, ExcludeEnum } from "discord.js";
import { ChannelTypes } from "discord.js/typings/enums";
import { BaseCommandOptionsData, numberAndChoicesOptions, stringOption } from "../types";
import subCommand from "./sub/subCommand";
import subCommandGroup from "./sub/subCommandGroup";
declare class Chat_Input {
    protected name: string;
    protected description: string;
    protected defaultPermission: boolean | undefined;
    protected options: ApplicationCommandOptionData[];
    setName(name: string): this;
    setDescription(description: string): this;
    setDefaultPermission(permission: boolean): this;
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
    addSubCommandOption(subCommandOption: (sub: subCommand) => subCommand): this;
    addSubCommandGroupOption(subCommandGroupOption: (sub: subCommandGroup) => subCommandGroup): this;
    addUserOption(userOption: BaseCommandOptionsData): this;
    toJSON(): ChatInputApplicationCommandData;
}
export default Chat_Input;
