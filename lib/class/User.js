"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
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
            type: "USER",
        };
    }
}
exports.default = User;
