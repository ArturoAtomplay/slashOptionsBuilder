import { ApplicationCommandSubCommandData, ApplicationCommandSubGroupData } from "discord.js";
import SubCommand from "./SubCommand";

export default class SubCommandGroup {
  private name!: string;
  private description!: string;
  private autocomplete!: boolean;
  private options: ApplicationCommandSubCommandData[] = [];

  private readonly type = "SUB_COMMAND_GROUP";

  setName(name: string) {
    this.name = name;
    return this;
  }

  setDescription(description: string) {
    this.description = description;
    return this;
  }

  setAutocomplete() {
    this.autocomplete = true;
    return this;
  }

  addSubcommand(subcommand: (sub: SubCommand) => SubCommand) {
    const sub = subcommand(new SubCommand());
    this.options.push(sub.toJSON());
    return this;
  }

  toJSON() {
    const data: ApplicationCommandSubGroupData = {
      name: this.name,
      description: this.description,
      type: this.type,
    };

    if (this.autocomplete == true) data.autocomplete = true;
    if (this.options.length > 0) data.options = this.options;

    return data;
  }
}
