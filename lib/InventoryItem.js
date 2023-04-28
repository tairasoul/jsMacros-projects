const getDefense = require('./getDefense')

module.exports = class InventoryItem {
    constructor(num) {
        this.slot = num;
        this.itemHelper = Player.openInventory().getSlot(num)
        if (num <= 8 && num >= 5) {
            this.defense = getDefense(Player.openInventory().getSlot(num))
        }
    }
}
