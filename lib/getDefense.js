let ArmorItem;
let method1;
let method2;

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

module.exports = (/** @type {$ItemStackHelper} */ItemStackHelper) => {
    const raw = ItemStackHelper.getRaw()
    const item = raw[method1]();
    const defense = item[method2]();
    return defense
}
