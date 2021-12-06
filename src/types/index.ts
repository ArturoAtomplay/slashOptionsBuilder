import { ApplicationCommandOptionChoice, BaseApplicationCommandOptionsData } from "discord.js";

export interface ApplicationCommandChannelOption {
  name: string;
  description: string;
  channelTypes?: (
    | "GUILD_TEXT"
    | "DM"
    | "GUILD_VOICE"
    | "GROUP_DM"
    | "GUILD_CATEGORY"
    | "GUILD_NEWS"
    | "GUILD_STORE"
    | "GUILD_NEWS_THREAD"
    | "GUILD_PUBLIC_THREAD"
    | "GUILD_PRIVATE_THREAD"
    | "GUILD_STAGE_VOICE"
  )[];
  required?: boolean;
  autocomplete?: boolean;
}

export interface ApplicationCommandChoicesOption extends BaseApplicationCommandOptionsData {
  choices?: ApplicationCommandOptionChoice[];
}
