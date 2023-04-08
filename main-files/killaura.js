const typelib = require('./customLib/type.js');
const etype = typelib.getType

let killPassive = false;
let killNeutral = false;
let killHostile = true;
let killPlayers = false;

Chat.createCommandBuilder("killPassive")
    .booleanArg("enable")
    .executes(JavaWrapper.methodToJava((context) => {
        killPassive = context.getArg("enable");
        if (killPassive) {
            Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
            .append("KA").withColor(0x5)
            .append("]").withColor(0x7).append(" Killing passive mobs.").withColor(10)
            .build());
        }
        else {
            Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
            .append("KA").withColor(0x5)
            .append("]").withColor(0x7).append(" No longer killing passive mobs.").withColor(10)
            .build());
        }
    }))
    .register();

Chat.createCommandBuilder("killNeutral")
    .booleanArg("enable")
    .executes(JavaWrapper.methodToJava((context) => {
        killNeutral = context.getArg("enable");
        if (killNeutral) {
            Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
            .append("KA").withColor(0x5)
            .append("]").withColor(0x7).append(" Killing neutral mobs.").withColor(10)
            .build());
        }
        else {
            Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
            .append("KA").withColor(0x5)
            .append("]").withColor(0x7).append(" No longer killing passive mobs.").withColor(10)
            .build());
        }
    }))
    .register();

Chat.createCommandBuilder("killHostile")
    .booleanArg("enable")
    .executes(JavaWrapper.methodToJava((context) => {
        killHostile = context.getArg("enable");
        if (killHostile) {
            Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
            .append("KA").withColor(0x5)
            .append("]").withColor(0x7).append(" Killing hostile mobs.").withColor(10)
            .build());
        }
        else {
            Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
            .append("KA").withColor(0x5)
            .append("]").withColor(0x7).append(" No longer killing hostile mobs.").withColor(10)
            .build());
        }
    }))
    .register();

Chat.createCommandBuilder("killPlayers")
    .booleanArg("enable")
    .executes(JavaWrapper.methodToJava((context) => {
        killPlayers = context.getArg("enable");
        if (killPlayers) {
            Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
            .append("KA").withColor(0x5)
            .append("]").withColor(0x7).append(" Killing players.").withColor(10)
            .build());
        }
        else {
            Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
            .append("KA").withColor(0x5)
            .append("]").withColor(0x7).append(" No longer killing players.").withColor(10)
            .build());
        }
    }))
    .register();

Chat.createCommandBuilder("KAStatus")
    .executes(JavaWrapper.methodToJava(() => {
        Chat.toast("Killaura Status", `killPassive: ${killPassive}, killNeutral: ${killNeutral}, killHostile: ${killHostile}, killPlayers: ${killPlayers}`)
    }))
    .register();

event.stopListener = JavaWrapper.methodToJava(() => {
    Chat.unregisterCommand('killPassive');
    Chat.unregisterCommand('killNeutral');
    Chat.unregisterCommand('killHostile');
    Chat.unregisterCommand('killPlayers');
    return Client;
});

while (true) {
    Time.sleep(100);
    if (GlobalVars.getBoolean("killAura")) {
        const entities = World.getEntities();
        const entitiesInRange = [];
        const range = 5;
        for (const index in entities) {
            const entity = entities[index];
            if (entity.getType() != "minecraft:item" && entity.getType() != "minecraft:experience_orb") {
                const playerPos = Player.getPlayer().getPos();
                const entityPos = entity.getPos();
                const dx = Math.abs(entityPos.getX() - playerPos.getX());
                const dy = Math.abs(entityPos.getY() - playerPos.getY());
                const dz = Math.abs(entityPos.getZ() - playerPos.getZ());
                const distance = Math.floor(dx + dy + dz);
                if (!isNaN(distance) && distance <= range && distance != 0) {
                    const type = etype(entity);
                    if (type.Hostile && killHostile) {
                        entitiesInRange.push(entity)
                    }
                    else if (type.Neutral && killNeutral) {
                        entitiesInRange.push(entity)
                    }
                    else if (type.Passive && killPassive) {
                        entitiesInRange.push(entity)
                    }
                    else if (type.Player && killPlayers) {
                        entitiesInRange.push(entity)
                    }
                }
            }
        }
        for (const entity of entitiesInRange) {
            Time.sleep(200);
            try {
                if (entity.isAlive() && entity.asLiving().getHealth() > 0) {
                    const playerPos = Player.getPlayer().getPos();
                    const blockBelowPlayer = World.getBlock(Math.floor(playerPos.getX()), Math.floor(playerPos.getY()) - 1, Math.floor(playerPos.getZ()));
                    const id = blockBelowPlayer.getId();
                    if (id != "minecraft:air" && id != "minecraft:cave_air" && id != "minecraft:tall_grass" && id != "minecraft:grass") {
                        const input = Player.createPlayerInput()
                        input.jumping = true;
                        input.yaw = Player.getPlayer().getYaw();
                        input.pitch = Player.getPlayer().getPitch();
                        Player.addInput(input)
                        Time.sleep(300)
                    }
                    Time.sleep(100)
                    Player.getPlayer().attack(entity);
                }
            } catch {}
        }
    }
}
