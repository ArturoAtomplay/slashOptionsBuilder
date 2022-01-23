import { ApplicationCommandOptionChoice } from "discord.js";

export interface BaseCommandOptionsData {
  name: string;
  description: string;
  required?: boolean;
}

interface CommandNumberData extends BaseCommandOptionsData {
  minValue?: number;
  maxValue?: number;
}

interface CommandChoicesAndNumberData extends CommandNumberData {
  choices?: ApplicationCommandOptionChoice[];
  autocomplete?: false;
}

interface CommandAutocompleteOption extends BaseCommandOptionsData {
  autocomplete: true;
}

export interface CommandChoicesData extends BaseCommandOptionsData {
  choices?: ApplicationCommandOptionChoice[];
  autocomplete?: false;
}

export type stringOption = CommandChoicesData | CommandAutocompleteOption;

export type numberAndChoicesOptions = CommandChoicesAndNumberData | CommandAutocompleteOption;
