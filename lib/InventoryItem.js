module.exports = class InventoryItem {
    constructor(num) {
        this.slot = num;
        this.itemHelper = Player.openInventory().getSlot(num)
    }
}
