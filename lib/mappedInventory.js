module.exports = class MappedInventory {
    constructor() {
        this.slots = {
            armor: [],
            crafting: [],
            inventory: [],
            hotbar: [],
            offhand: null
        };
    }
    addInventory(item) {
        this.slots.inventory.push(item);
    }
    addArmor(item) {
        this.slots.armor.push(item);
    }
    addCrafting(item) {
        this.slots.crafting.push(item);
    }
    addHotbar(item) {
        this.slots.hotbar.push(item);
    }
    setOffhand(item) {
        this.slots.offhand = item
    }
}
