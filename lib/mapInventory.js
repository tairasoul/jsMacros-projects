const invmap = require('./mappedInventory');
const InventoryItem = require('./InventoryItem');

module.exports = function() {
    const inventory = new invmap();
    const inventorymap = Player.openInventory().getMap();
    if (inventorymap.get('container')) {
        for (const item of inventorymap.get("container")) {
            inventory.addContainer(new InventoryItem(item));
        }
        for (const item of inventorymap.get("main")) {
            inventory.addInventory(new InventoryItem(item));
        }
        for (const item of inventorymap.get('hotbar')) {
            inventory.addHotbar(new InventoryItem(item));
        }
    }
    else {
        inventory.addArmor(new InventoryItem(inventorymap.get('helmet')[0]), "helmet")
        inventory.addArmor(new InventoryItem(inventorymap.get('chestplate')[0]), "chestplate")
        inventory.addArmor(new InventoryItem(inventorymap.get('leggings')[0]), "leggings")
        inventory.addArmor(new InventoryItem(inventorymap.get('boots')[0]), "boots")
        for (const item of inventorymap.get("main")) {
            inventory.addInventory(new InventoryItem(item));
        }
        for (const item of inventorymap.get('hotbar')) {
            inventory.addHotbar(new InventoryItem(item));
        }
        inventory.setOffhand(new InventoryItem(inventorymap.get('offhand')[0]));
        for (const item of inventorymap.get('crafting_in')) {
            inventory.addCrafting(new InventoryItem(item));
        }
        inventory.addCrafting(new InventoryItem(inventorymap.get('craft_out')[0]));
    }
    /*for (let i = 0; i <= 45; i++) {
        const name = Player.openInventory().getLocation(i)
        if (name && name.includes("craft")) {
            inventory.addCrafting(new InventoryItem(i))
        }
        else if (armors.includes(name)) {
            inventory.addArmor(new InventoryItem(i))
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
    }*/
    return inventory
}
