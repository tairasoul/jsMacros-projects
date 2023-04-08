const neutralMob = Java.type("net.minecraft.class_5354");
const passiveMob = Java.type("net.minecraft.class_1429");
const passiveWaterMob = Java.type("net.minecraft.class_1480")
const monster = Java.type("net.minecraft.class_1588")

module.exports = {
    getType: function(entity) {
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
