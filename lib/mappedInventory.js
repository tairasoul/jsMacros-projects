module.exports = class MappedInventory {
    constructor() {
        this.slots = [];
    }
    addItem(item) {
        this.slots.push(item);
    }
}
