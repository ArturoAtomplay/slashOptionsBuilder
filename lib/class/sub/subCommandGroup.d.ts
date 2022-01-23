import { ApplicationCommandSubCommandData } from "discord.js";
import subCommand from "./subCommand";
declare class subCommandGroup {
    protected name: string;
    protected description: string;
    protected options: ApplicationCommandSubCommandData[];
    setName(name: string): this;
    setDescription(description: string): this;
    addSubCommand(subCommandOption: (sub: subCommand) => subCommand): this;
    toJSON(): {
        name: string;
        description: string;
        options: ApplicationCommandSubCommandData[];
        type: string;
    };
}
export default subCommandGroup;
