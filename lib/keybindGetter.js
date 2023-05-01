let method

if (Client.mcVersion().includes("fabric")) {
    Chat.log("Using Fabric mappings.")
    method = 'method_1428';
} else {   
    Chat.log("Using Forge mappings.")
    method = 'm_90865';
}

module.exports = () => {
    const keybinds = Client.getGameOptions().control
    const kbobject = {}
    for (const prop in keybinds.getKeys()) {
        kbobject[keybinds.getKeys()[prop]] = keybinds.getRawKeys()[prop][method]()
    }
    return kbobject
}
