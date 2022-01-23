class User {
  protected name!: string;
  protected defaultPermission!: boolean;

  setName(name: string) {
    if (!name) throw new Error("Name cannot be empty");
    if (typeof name !== "string") throw new Error("Name must be a string");

    this.name = name;
    return this;
  }

  setDefaultPermission(permission: boolean): this {
    if (typeof permission !== "boolean") throw new Error("Permission must be a boolean");

    this.defaultPermission = permission;
    return this;
  }

  toJSON(): {
    name: string;
    defaultPermission: boolean;
    type: "USER";
  } {
    return {
      name: this.name,
      defaultPermission: this.defaultPermission,
      type: "USER",
    };
  }
}

export default User;
