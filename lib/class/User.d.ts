import type { LocalizationMap } from 'discord-api-types/v10';
export default class Message {
    protected name: string;
    protected description: string;
    protected nameLocalizations?: LocalizationMap;
    protected defaultPermission?: boolean;
    setName(name: string): this;
    setNameByLocales(locales: LocalizationMap): this;
    setDefaultPermission(permission: boolean): this;
    toJSON(): {
        name: string;
        nameLocalizations?: LocalizationMap;
        defaultPermission?: boolean;
        type: 'USER';
    };
}
