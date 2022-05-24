"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = require("../utils/validate");
class Message {
    setName(name) {
        this.name = (0, validate_1.validateName)(name);
        return this;
    }
    setNameByLocales(locales) {
        this.nameLocalizations = (0, validate_1.validateNameLocalizations)(locales);
        return this;
    }
    setDefaultPermission(permission) {
        this.defaultPermission = (0, validate_1.validatePermission)(permission);
        return this;
    }
    toJSON() {
        return {
            name: (0, validate_1.validateName)(this.name),
            nameLocalizations: (0, validate_1.validateNameLocalizations)(this.nameLocalizations),
            defaultPermission: this.defaultPermission,
            type: 'MESSAGE'
        };
    }
}
exports.default = Message;
