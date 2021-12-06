import { ChatInputApplicationCommandData, ApplicationCommandOptionData, BaseApplicationCommandOptionsData } from "discord.js";
import { ApplicationCommandChannelOption, ApplicationCommandChoicesOption } from "../types";
import SubCommand from "./command/SubCommand";
import SubCommandGroup from "./command/SubCommandGroup";

export default class CHAT_INPUT {
  private name!: string;
  private description!: string;
  private defaultPermission!: boolean;
  private options: ApplicationCommandOptionData[] = [];

  private readonly type = "CHAT_INPUT";

  setName(name: string) {
    if (typeof name !== "string") throw new Error("Name must be a string");
    this.name = name;
    return this;
  }

  setDescription(description: string) {
    if (typeof description !== "string") throw new Error("Description must be a string");
    this.description = description;
    return this;
  }

  setDefaultPermission(defaultPermission: boolean) {
    if (typeof defaultPermission !== "boolean") throw new Error("Default Permission must be a boolean");
    this.defaultPermission = defaultPermission;
    return this;
  }

  addBooleanOption(booleanOptions: BaseApplicationCommandOptionsData) {
    const { name, description, required, autocomplete } = booleanOptions;
    const data: ApplicationCommandOptionData = { name, description, type: "BOOLEAN" };

    if (required) data.required = true;
    if (autocomplete) data.autocomplete = true;

    this.options.push(data);
    return this;
  }

  addChannelOption(channelOptions: ApplicationCommandChannelOption) {
    const { name, description, channelTypes, required, autocomplete } = channelOptions;
    const data: ApplicationCommandOptionData = { name, description, type: "CHANNEL" };

    if (required) data.required = true;
    if (autocomplete) data.autocomplete = true;
    if (channelTypes && channelTypes.length > 0) data.channelTypes = channelTypes;

    this.options.push(data);
    return this;
  }

  addIntegerOption(integerOptions: ApplicationCommandChoicesOption) {
    const { name, description, choices, required, autocomplete } = integerOptions;
    const data: ApplicationCommandOptionData = { name, description, type: "INTEGER" };

    if (required) data.required = true;
    if (autocomplete) data.autocomplete = true;
    if (choices && choices.length > 0) data.choices = choices;

    this.options.push(data);
    return this;
  }

  addMentionableOption(mentionableOptions: BaseApplicationCommandOptionsData) {
    const { name, description, required, autocomplete } = mentionableOptions;
    const data: ApplicationCommandOptionData = { name, description, type: "MENTIONABLE" };

    if (required) data.required = true;
    if (autocomplete) data.autocomplete = true;

    this.options.push(data);
    return this;
  }

  addNumberOption(numberOptions: ApplicationCommandChoicesOption) {
    const { name, description, choices, required, autocomplete } = numberOptions;
    const data: ApplicationCommandOptionData = { name, description, type: "NUMBER" };

    if (required) data.required = true;
    if (autocomplete) data.autocomplete = true;
    if (choices && choices.length > 0) data.choices = choices;

    this.options.push(data);
    return this;
  }

  addRoleOption(roleOptions: BaseApplicationCommandOptionsData) {
    const { name, description, required, autocomplete } = roleOptions;
    const data: ApplicationCommandOptionData = { name, description, type: "ROLE" };

    if (required) data.required = true;
    if (autocomplete) data.autocomplete = true;

    this.options.push(data);
    return this;
  }

  addStringOption(stringOptions: ApplicationCommandChoicesOption) {
    const { name, description, choices, required, autocomplete } = stringOptions;
    const data: ApplicationCommandOptionData = { name, description, type: "STRING" };

    if (required) data.required = true;
    if (autocomplete) data.autocomplete = true;
    if (choices && choices.length > 0) data.choices = choices;

    this.options.push(data);
    return this;
  }

  addUserOption(userOptions: BaseApplicationCommandOptionsData) {
    const { name, description, required, autocomplete } = userOptions;
    const data: ApplicationCommandOptionData = { name, description, type: "USER" };

    if (required) data.required = true;
    if (autocomplete) data.autocomplete = true;

    this.options.push(data);
    return this;
  }

  addSubcommand(subcommand: (sub: SubCommand) => SubCommand) {
    const sub = subcommand(new SubCommand());
    this.options.push(sub.toJSON());
    return this;
  }

  addSubcommandGroup(commandsGroup: (group: SubCommandGroup) => SubCommandGroup) {
    const subCommandsGroup = commandsGroup(new SubCommandGroup());
    this.options.push(subCommandsGroup.toJSON());
    return this;
  }

  toJSON() {
    const data: ChatInputApplicationCommandData = {
      name: this.name,
      description: this.description,
      type: this.type,
    };

    if (this.options.length > 0) data.options = this.options;
    if (this.defaultPermission === false) data.defaultPermission = false;

    return data;
  }
}
