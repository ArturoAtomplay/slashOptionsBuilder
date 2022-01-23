import { ApplicationCommandSubCommandData } from "discord.js";
import subCommand from "./subCommand";

class subCommandGroup {
  protected name!: string;
  protected description!: string;
  protected options: ApplicationCommandSubCommandData[] = [];

  setName(name: string) {
    if (typeof name !== "string") throw new Error("subCommandGroup: Name must be a string");
    this.name = name;
    return this;
  }

  setDescription(description: string) {
    if (typeof description !== "string") throw new Error("subCommandGroup: Description must be a string");
    this.description = description;
    return this;
  }

  addSubCommand(subCommandOption: (sub: subCommand) => subCommand) {
    const sub = subCommandOption(new subCommand());
    const { name, description, options } = sub.toJSON();

    if (!name) throw new Error("subCommand: name is required");
    if (typeof name !== "string") throw new Error("subCommand must be a string");

    if (!description) throw new Error("subCommand: Description is required");
    if (typeof description !== "string") throw new Error("subCommand: Description must be a string");

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

export default subCommandGroup;
