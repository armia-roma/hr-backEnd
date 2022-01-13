module.exports = class Department {
    constructor(id, code, name, type) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.type = type;
    }
    getDisplayName() {
        return this.code + " - " + this.name 
    }
}