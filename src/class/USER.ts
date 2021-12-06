export default class USER {
  private name!: string;
  private defaultPermission!: boolean;

  setName(name: string) {
    if (typeof name !== "string") throw new Error("name must be a string");
    if (name.length < 1) throw new Error("name must be at least 1 character");

    this.name = name;
    return this;
  }

  setDefaultPermission(permission: boolean) {
    if (typeof permission !== "boolean") throw new Error("permission must be a boolean");

    this.defaultPermission = permission;
    return this;
  }

  toJSON() {
    const data: {
      name: string;
      defaultPermission?: boolean;
    } = {
      name: this.name,
    };

    if (this.defaultPermission == true) data.defaultPermission = true;

    return data;
  }
}
