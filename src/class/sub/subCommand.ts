import {
  ApplicationCommandAutocompleteOption,
  ApplicationCommandChannelOptionData,
  ApplicationCommandChoicesData,
  ApplicationCommandNonOptionsData,
  ApplicationCommandNumericOptionData,
  ApplicationCommandOptionData,
  ExcludeEnum,
} from "discord.js";
import { ChannelTypes } from "discord.js/typings/enums";
import { BaseCommandOptionsData, CommandChoicesData, numberAndChoicesOptions, stringOption } from "../../types";

type SubCommandOptions = (
  | ApplicationCommandChoicesData
  | ApplicationCommandNonOptionsData
  | ApplicationCommandChannelOptionData
  | ApplicationCommandAutocompleteOption
  | ApplicationCommandNumericOptionData
)[];

export default class subCommand {
  protected name!: string;
  protected description!: string;
  protected options: SubCommandOptions = [];

  setName(name: string) {
    if (typeof name !== "string") throw new Error("subCommand: Name must be a string");
    this.name = name;
    return this;
  }

  setDescription(description: string) {
    if (typeof description !== "string") throw new Error("subCommand: Description must be a string");
    this.description = description;
    return this;
  }

  addBooleanOption(booleanOptions: BaseCommandOptionsData): this {
    const { name, description, required } = booleanOptions;

    if (!name) throw new Error("subCommand: Name is required");
    if (typeof name !== "string") throw new Error("subCommand: Name must be a string");

    if (!description) throw new Error("subCommand: Description is required");
    if (typeof description !== "string") throw new Error("subCommand: Description must be a string");

    if (required && typeof required !== "boolean") throw new Error("subCommand: Required must be a boolean");

    this.options.push({ name, description, type: "BOOLEAN", required });

    return this;
  }

  addChannelOption(channelOptions: {
    name: string;
    description: string;
    channelTypes?: ExcludeEnum<typeof ChannelTypes, "UNKNOWN">[];
    required?: boolean;
  }): this {
    const { name, description, channelTypes, required } = channelOptions;

    if (!name) throw new Error("Name is required");
    if (typeof name !== "string") throw new Error("Name must be a string");

    if (!description) throw new Error("Description is required");
    if (typeof description !== "string") throw new Error("Description must be a string");
    if (channelTypes && !Array.isArray(channelTypes)) throw new Error("ChannelTypes must be an array");
    if (typeof required !== "boolean") throw new Error("Required must be a boolean");

    this.options.push({ name, description, type: "CHANNEL", channelTypes, required });

    return this;
  }

  addIntegerOption(integerOptions: numberAndChoicesOptions): this {
    const { name, description, required, autocomplete } = integerOptions;
    const data: any = {
      name,
      description,
      type: "INTEGER",
      required,
    };
    if (!autocomplete) {
      const { choices, minValue, maxValue } = integerOptions;
      if (choices) data.choices = choices;
      if (minValue) data.minValue = minValue;
      if (maxValue) data.maxValue = maxValue;
    } else if (autocomplete === true) data.autocomplete = true;

    this.options.push(data);
    return this;
  }

  addMentionableOption(mentionableOptions: BaseCommandOptionsData): this {
    const { name, description, required } = mentionableOptions;

    if (!name) throw new Error("Name is required");
    if (typeof name !== "string") throw new Error("Name must be a string");

    if (!description) throw new Error("Description is required");
    if (typeof description !== "string") throw new Error("Description must be a string");

    if (required && typeof required !== "boolean") throw new Error("Required must be a boolean");

    this.options.push({ name, description, type: "MENTIONABLE", required });

    return this;
  }

  addNumberOption(numberOption: numberAndChoicesOptions): this {
    const { name, description, required, autocomplete } = numberOption;
    const data: any = { name, description, type: "NUMBER", required };
    if (!autocomplete) {
      const { choices, minValue, maxValue } = numberOption;
      if (choices) data.choices = choices;
      if (minValue) data.minValue = minValue;
      if (maxValue) data.maxValue = maxValue;
    } else if (autocomplete === true) data.autocomplete = true;

    this.options.push(data);
    return this;
  }

  addRoleOption(roleOption: { name: string; description: string; required?: boolean }): this {
    const { name, description, required } = roleOption;

    if (!name) throw new Error("Name is required");
    if (typeof name !== "string") throw new Error("Name must be a string");

    if (!description) throw new Error("Description is required");
    if (typeof description !== "string") throw new Error("Description must be a string");

    if (required && typeof required !== "boolean") throw new Error("Required must be a boolean");

    this.options.push({ name, description, type: "ROLE", required });

    return this;
  }

  addStringOption(stringOption: stringOption): this {
    const { name, description, autocomplete, required } = stringOption;

    const data: any = { name, description, autocomplete, required, type: "STRING" };

    if (!autocomplete) {
      if (stringOption.choices) data.choices = stringOption.choices;
    } else data.autocomplete = true;

    this.options.push(data);

    return this;
  }

  addUserOption(userOption: BaseCommandOptionsData): this {
    const { name, description, required } = userOption;

    if (!name) throw new Error("Name is required");
    if (typeof name !== "string") throw new Error("Name must be a string");

    if (!description) throw new Error("Description is required");
    if (typeof description !== "string") throw new Error("Description must be a string");

    if (required && typeof required !== "boolean") throw new Error("Required must be a boolean");

    this.options.push({ name, description, type: "USER", required });

    return this;
  }

  toJSON(): {
    name: string;
    description: string;
    options: SubCommandOptions;
    type: "SUB_COMMAND";
  } {
    return {
      name: this.name,
      description: this.description,
      options: this.options,
      type: "SUB_COMMAND",
    };
  }
}
