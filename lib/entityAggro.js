const neutralMob = Java.type("net.minecraft.world.entity.NeutralMob");
const passiveMob = Java.type("net.minecraft.world.entity.animal.Animal");
const passiveWaterMob = Java.type("net.minecraft.world.entity.animal.WaterAnimal")
const monster = Java.type("net.minecraft.world.entity.monster.Monster")

module.exports = {
    getType: function(mob) {
        if (mob instanceof passiveMob || mob instanceof passiveWaterMob) {
            return {
                Passive: true,
                Neutral: false,
                Hostile: false,
                Player: false
            }
        } else if (mob instanceof neutralMob && !(mob instanceof monster)) {
            return {
                Passive: false,
                Neutral: true,
                Hostile: false,
                Player: false
            }
        } else if (mob.getType() == "minecraft:player") {
            return {
                Passive: false,
                Neutral: false,
                Hostile: false,
                Player: true
            }
        } else if (mob instanceof monster && !(mob instanceof neutralMob)) {
            return {
                Passive: false,
                Neutral: false,
                Hostile: true,
                Player: false
            }
        }
    }
}
