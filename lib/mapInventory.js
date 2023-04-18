const invmap = require('./mappedInventory');

module.exports = function() {
    const inventory = new invmap()
    for (let i = 0; i <= 45; i++) {
        inventory.addItem({
            slot: i,
            itemHelper: Player.openInventory().getSlot(i)
        });
    }
    return inventory
}
