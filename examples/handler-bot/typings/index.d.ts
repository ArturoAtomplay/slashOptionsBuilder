import type { ApplicationCommandDataResolvable, CommandInteraction } from 'discord.js'
import Bot from '../structures/Bot'

export interface BotCommand {
    data: ApplicationCommandDataResolvable[]
    run(interaction: CommandInteraction, client: Bot): Promise<any>
}

export interface BotSubCommand {
    (interaction: CommandInteraction, client: Bot): Promise<any>
}

export interface BotEvent {
    once?: boolean
    run(...event: any, client: Bot): any
}
