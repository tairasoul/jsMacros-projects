module.exports = class MappedInventory {
    constructor() {
        this.slots = {
            armor: {
                helmet: {},
                chestplate: {},
                leggings: {},
                boots: {}
            },
            crafting: [],
            inventory: [],
            hotbar: [],
            container: [],
            all: [],
            offhand: null
        };
    }
    addInventory(item) {
        this.slots.inventory.push(item);
        this.slots.all.push(item)
    }
    addArmor(item, slot) {
        this.slots.armor[slot] = item;
    }
    addCrafting(item) {
        this.slots.crafting.push(item);
        this.slots.all.push(item)
    }
    addHotbar(item) {
        this.slots.hotbar.push(item);
        this.slots.all.push(item)
    }
    addContainer(item) {
        this.slots.container.push(item);
        this.slots.all.push(item);
    }
    setOffhand(item) {
        this.slots.offhand = item
    }
}
