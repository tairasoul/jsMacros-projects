let monster
let passiveWaterMob
let passiveMob
let neutralMob

if (Client.mcVersion().includes("fabric")) {
    Chat.log("Using Fabric mappings.")
    neutralMob = Java.type("net.minecraft.class_5354");
    passiveMob = Java.type("net.minecraft.class_1429");
    passiveWaterMob = Java.type("net.minecraft.class_1480")
    monster = Java.type("net.minecraft.class_1588")
} else {   
    Chat.log("Using Forge mappings.")
    neutralMob = Java.type("net.minecraft.world.entity.NeutralMob");
    passiveMob = Java.type("net.minecraft.world.entity.animal.Animal");
    passiveWaterMob = Java.type("net.minecraft.world.entity.animal.WaterAnimal")
    monster = Java.type("net.minecraft.world.entity.monster.Monster")
}

module.exports = {
    getType: function(/** @type {EntityHelper<any>} */entity) {
        const mob = entity.getRaw();
        if (mob instanceof passiveMob || mob instanceof passiveWaterMob) {
            return {
                Passive: true,
                Neutral: false,
                Hostile: false,
                Player: false
            }
        } else if (mob instanceof neutralMob) {
            return {
                Passive: false,
                Neutral: true,
                Hostile: false,
                Player: false
            }
        }
        else if (mob instanceof monster && !(mob instanceof neutralMob)) {
            return {
                Passive: false,
                Neutral: false,
                Hostile: true,
                Player: false
            }
        } else if (entity.getType() == "minecraft:player") {
            return {
                Passive: false,
                Neutral: false,
                Hostile: false,
                Player: true
            }
        }
    }
}
