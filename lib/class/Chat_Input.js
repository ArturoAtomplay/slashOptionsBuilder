"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subCommand_1 = require("./sub/subCommand");
const subCommandGroup_1 = require("./sub/subCommandGroup");
class Chat_Input {
    constructor() {
        this.name = undefined;
        this.description = undefined;
        this.defaultPermission = undefined;
        this.options = [];
    }
    setName(name) {
        if (!name)
            throw new Error("Name cannot be empty");
        if (typeof name !== "string")
            throw new Error("Name must be a string");
        this.name = name;
        return this;
    }
    setDescription(description) {
        if (!description)
            throw new Error("Description cannot be empty");
        if (typeof description !== "string")
            throw new Error("Description must be a string");
        this.description = description;
        return this;
    }
    setDefaultPermission(permission) {
        if (typeof permission !== "boolean")
            throw new Error("Permission must be a boolean");
        this.defaultPermission = permission;
        return this;
    }
    addBooleanOption(booleanOptions) {
        const { name, description, required } = booleanOptions;
        if (!name)
            throw new Error("Name is required");
        if (typeof name !== "string")
            throw new Error("Name must be a string");
        if (!description)
            throw new Error("Description is required");
        if (typeof description !== "string")
            throw new Error("Description must be a string");
        if (required && typeof required !== "boolean")
            throw new Error("Required must be a boolean");
        this.options.push({ name, description, type: "BOOLEAN", required });
        return this;
    }
    addChannelOption(channelOptions) {
        const { name, description, channelTypes, required } = channelOptions;
        if (!name)
            throw new Error("Name is required");
        if (typeof name !== "string")
            throw new Error("Name must be a string");
        if (!description)
            throw new Error("Description is required");
        if (typeof description !== "string")
            throw new Error("Description must be a string");
        if (channelTypes && !Array.isArray(channelTypes))
            throw new Error("ChannelTypes must be an array");
        if (typeof required !== "boolean")
            throw new Error("Required must be a boolean");
        this.options.push({
            name,
            description,
            type: "CHANNEL",
            channelTypes,
            required,
        });
        return this;
    }
    addIntegerOption(integerOptions) {
        const { name, description, required, autocomplete } = integerOptions;
        const data = { name, description, type: "INTEGER", required };
        if (!autocomplete) {
            const { choices, minValue, maxValue } = integerOptions;
            if (choices)
                data.choices = choices;
            if (minValue)
                data.minValue = minValue;
            if (maxValue)
                data.maxValue = maxValue;
        }
        else if (autocomplete === true)
            data.autocomplete = true;
        this.options.push(data);
        return this;
    }
    addMentionableOption(mentionableOptions) {
        const { name, description, required } = mentionableOptions;
        if (!name)
            throw new Error("Name is required");
        if (typeof name !== "string")
            throw new Error("Name must be a string");
        if (!description)
            throw new Error("Description is required");
        if (typeof description !== "string")
            throw new Error("Description must be a string");
        if (required && typeof required !== "boolean")
            throw new Error("Required must be a boolean");
        this.options.push({ name, description, type: "MENTIONABLE", required });
        return this;
    }
    addNumberOption(numberOption) {
        const { name, description, required, autocomplete } = numberOption;
        const data = { name, description, type: "NUMBER", required };
        if (!autocomplete) {
            const { choices, minValue, maxValue } = numberOption;
            if (choices)
                data.choices = choices;
            if (minValue)
                data.minValue = minValue;
            if (maxValue)
                data.maxValue = maxValue;
        }
        else if (autocomplete === true)
            data.autocomplete = true;
        this.options.push(data);
        return this;
    }
    addRoleOption(roleOption) {
        const { name, description, required } = roleOption;
        if (!name)
            throw new Error("Name is required");
        if (typeof name !== "string")
            throw new Error("Name must be a string");
        if (!description)
            throw new Error("Description is required");
        if (typeof description !== "string")
            throw new Error("Description must be a string");
        if (required && typeof required !== "boolean")
            throw new Error("Required must be a boolean");
        this.options.push({ name, description, type: "ROLE", required });
        return this;
    }
    addStringOption(stringOption) {
        const { name, description, autocomplete, required } = stringOption;
        const data = { name, description, autocomplete, required, type: "STRING" };
        if (!autocomplete) {
            if (stringOption.choices)
                data.choices = stringOption.choices;
        }
        else
            data.autocomplete = true;
        this.options.push(data);
        return this;
    }
    addSubCommandOption(subCommandOption) {
        const sub = subCommandOption(new subCommand_1.default());
        const { name, description, options } = sub.toJSON();
        if (!name)
            throw new Error("subCommand: name is required");
        if (typeof name !== "string")
            throw new Error("subCommand must be a string");
        if (!description)
            throw new Error("subCommand: Description is required");
        if (typeof description !== "string")
            throw new Error("subCommand: Description must be a string");
        this.options.push({ name, description, type: "SUB_COMMAND", options });
        return this;
    }
    addSubCommandGroupOption(subCommandGroupOption) {
        const sub = subCommandGroupOption(new subCommandGroup_1.default());
        const { name, description, options } = sub.toJSON();
        if (!name)
            throw new Error("subCommandGroup: name is required");
        if (typeof name !== "string")
            throw new Error("subCommandGroup must be a string");
        if (!description)
            throw new Error("subCommandGroup: Description is required");
        if (typeof description !== "string")
            throw new Error("subCommandGroup: Description must be a string");
        this.options.push({
            name,
            description,
            type: "SUB_COMMAND_GROUP",
            options,
        });
        return this;
    }
    addUserOption(userOption) {
        const { name, description, required } = userOption;
        if (!name)
            throw new Error("Name is required");
        if (typeof name !== "string")
            throw new Error("Name must be a string");
        if (!description)
            throw new Error("Description is required");
        if (typeof description !== "string")
            throw new Error("Description must be a string");
        if (required && typeof required !== "boolean")
            throw new Error("Required must be a boolean");
        this.options.push({ name, description, type: "USER", required });
        return this;
    }
    toJSON() {
        return {
            name: this.name,
            description: this.description,
            defaultPermission: this.defaultPermission,
            options: this.options,
            type: "CHAT_INPUT",
        };
    }
}
exports.default = Chat_Input;
