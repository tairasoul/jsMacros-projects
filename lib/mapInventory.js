const invmap = require('./mappedInventory');
const InventoryItem = require('./InventoryItem');

const armors = ["helmet", "chestplate", "leggings", "boots"]

module.exports = function() {
    const inventory = new invmap()
    for (let i = 0; i <= 45; i++) {
        const name = Player.openInventory().getLocation(i)
        if (name.includes("craft")) {
            inventory.addCrafting(new InventoryItem(i))
        }
        else if (armors.includes(name)) {
            inventory.addArmor(new InventoryItem(i), name)
        }
        else if (name == "main") {
            inventory.addInventory(new InventoryItem(i))
        }
        else if (name == "offhand") {
            inventory.setOffhand(new InventoryItem(i))
        }
        else if (name == "hotbar") {
            inventory.addHotbar(new InventoryItem(i))
        }
    }
    return inventory
}
