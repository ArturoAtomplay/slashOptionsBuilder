"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subCommand_1 = require("./subCommand");
class subCommandGroup {
    constructor() {
        this.options = [];
    }
    setName(name) {
        if (typeof name !== "string")
            throw new Error("subCommandGroup: Name must be a string");
        this.name = name;
        return this;
    }
    setDescription(description) {
        if (typeof description !== "string")
            throw new Error("subCommandGroup: Description must be a string");
        this.description = description;
        return this;
    }
    addSubCommand(subCommandOption) {
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
    toJSON() {
        return {
            name: this.name,
            description: this.description,
            options: this.options,
            type: "SUB_COMMAND_GROUP",
        };
    }
}
exports.default = subCommandGroup;
