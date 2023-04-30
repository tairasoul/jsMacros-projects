let ArmorItem;
let method1;
let method2;

const armors = ["helmet", "chestplate", "leggings", "boots"]

if (Client.mcVersion().includes("fabric")) {
    Chat.log("Using Fabric mappings.")
    ArmorItem = Java.type("net.minecraft.class_1738")
    method1 = "method_7909";
    method2 = "method_7687";
} else {   
    Chat.log("Using Forge mappings.")
    ArmorItem = Java.type("net.minecraft.world.item.ArmorItem");
    method1 = "m_41720_";
    method2 = "m_40404_"
}

module.exports = (/** @type {number} */ slot) => {
    const ItemStackHelper = Player.openInventory().getSlot(slot);
    if (!ItemStackHelper.isEmpty()) {
        const raw = ItemStackHelper.getRaw()
        const item = raw[method1]();
        if (item instanceof ArmorItem && item[method2]) {
            const defense = item[method2]();
            return defense
        }
    }
    else if (armors.includes(Player.openInventory().getLocation(slot))) {
        return 0
    }
}
