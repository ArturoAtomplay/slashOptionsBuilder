import { ApplicationCommandOptionData, ChatInputApplicationCommandData, ExcludeEnum } from "discord.js";
import { ChannelTypes } from "discord.js/typings/enums";
import { BaseCommandOptionsData, CommandChoicesData, numberAndChoicesOptions } from "../types";

class Chat_Input {
  private name!: string;
  private description!: string;
  private defaultPermission: boolean = true;
  private options: ApplicationCommandOptionData[] = [];

  setName(name: string): this {
    if (!name) throw new Error("Name cannot be empty");
    if (typeof name !== "string") throw new Error("Name must be a string");

    this.name = name;
    return this;
  }

  setDescription(description: string): this {
    if (!description) throw new Error("Description cannot be empty");
    if (typeof description !== "string") throw new Error("Description must be a string");

    this.description = description;
    return this;
  }

  setDefaultPermission(permission: boolean): this {
    if (typeof permission !== "boolean") throw new Error("Permission must be a boolean");

    this.defaultPermission = permission;
    return this;
  }

  addBooleanOption(booleanOptions: BaseCommandOptionsData): this {
    const { name, description, required = false } = booleanOptions;

    if (!name) throw new Error("Name is required");
    if (typeof name !== "string") throw new Error("Name must be a string");

    if (!description) throw new Error("Description is required");
    if (typeof description !== "string") throw new Error("Description must be a string");

    if (required && typeof required !== "boolean") throw new Error("Required must be a boolean");

    this.options.push({ name, description, type: "BOOLEAN", required });

    return this;
  }

  addChannelOption(channelOptions: {
    name: string;
    description: string;
    channelTypes?: ExcludeEnum<typeof ChannelTypes, "UNKNOWN">[];
    required?: boolean;
  }): this {
    const { name, description, channelTypes, required = false } = channelOptions;

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
    const data: any = { name, description, type: "INTEGER", required };
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
    const { name, description, required = false } = mentionableOptions;

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
    const { name, description, required = false } = roleOption;

    if (!name) throw new Error("Name is required");
    if (typeof name !== "string") throw new Error("Name must be a string");

    if (!description) throw new Error("Description is required");
    if (typeof description !== "string") throw new Error("Description must be a string");

    if (required && typeof required !== "boolean") throw new Error("Required must be a boolean");

    this.options.push({ name, description, type: "ROLE", required });

    return this;
  }

  addStringOption(stringOption: CommandChoicesData): this {
    const { name, description, required = false, choices } = stringOption;

    if (!name) throw new Error("Name is required");
    if (typeof name !== "string") throw new Error("Name must be a string");

    if (!description) throw new Error("Description is required");
    if (typeof description !== "string") throw new Error("Description must be a string");

    if (required && typeof required !== "boolean") throw new Error("Required must be a boolean");

    if (choices && !Array.isArray(choices)) throw new Error("Choices must be an array");

    const data: ApplicationCommandOptionData = { name, description, type: "STRING", required };

    if (choices) data.choices = choices;

    this.options.push(data);

    return this;
  }

  toJSON(): ChatInputApplicationCommandData {
    return {
      name: this.name,
      description: this.description,
      defaultPermission: this.defaultPermission,
      options: this.options,
      type: "CHAT_INPUT",
    };
  }
}

export default Chat_Input;
