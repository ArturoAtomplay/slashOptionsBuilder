import {
  ApplicationCommandChannelOptionData,
  ApplicationCommandChoicesData,
  ApplicationCommandNonOptionsData,
  ApplicationCommandOptionData,
  ApplicationCommandSubCommandData,
  BaseApplicationCommandOptionsData,
} from "discord.js";
import { ApplicationCommandChannelOption, ApplicationCommandChoicesOption } from "../../types";

export default class SubCommand {
  private name!: string;
  private description!: string;
  private autocomplete!: boolean;
  private options: (ApplicationCommandChoicesData | ApplicationCommandNonOptionsData | ApplicationCommandChannelOptionData)[] =
    [];

  private readonly type = "SUB_COMMAND";

  setName(name: string) {
    if (typeof name !== "string") throw new Error("Name must be a string");
    if (name.length === 0) throw new Error("Name cannot be empty");
    this.name = name;
    return this;
  }

  setDescription(description: string) {
    if (typeof description !== "string") throw new Error("Description must be a string");
    if (description.length === 0) throw new Error("Description cannot be empty");
    this.description = description;
    return this;
  }

  setAutoComplete() {
    this.autocomplete = true;
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

  toJSON() {
    const data: ApplicationCommandSubCommandData = {
      name: this.name,
      description: this.description,
      type: this.type,
    };

    if (this.autocomplete) data.autocomplete = true;
    if (this.options && this.options.length > 0) data.options = this.options;

    return data;
  }
}
