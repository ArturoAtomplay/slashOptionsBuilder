"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    setName(name) {
        if (!name)
            throw new Error("Name cannot be empty");
        if (typeof name !== "string")
            throw new Error("Name must be a string");
        this.name = name;
        return this;
    }
    setDefaultPermission(permission) {
        if (typeof permission !== "boolean")
            throw new Error("Permission must be a boolean");
        this.defaultPermission = permission;
        return this;
    }
    toJSON() {
        return {
            name: this.name,
            defaultPermission: this.defaultPermission,
            type: "MESSAGE",
        };
    }
}
exports.default = Message;
