declare class Message {
    protected name: string;
    protected defaultPermission: boolean;
    setName(name: string): this;
    setDefaultPermission(permission: boolean): this;
    toJSON(): {
        name: string;
        defaultPermission: boolean;
        type: "MESSAGE";
    };
}
export default Message;
