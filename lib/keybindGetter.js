let method
let backupKeyNameMethod;
let backupField;

if (Client.mcVersion().includes("fabric")) {
    Chat.log("Using Fabric mappings.")
    method = 'method_1428';
    backupKeyNameMethod = 'method_1431'
    backupField = 'field_1839'
} else {   
    Chat.log("Using Forge mappings.")
    method = 'm_90865_';
    backupField = "f_92059_"
    backupKeyNameMethod = 'm_90860_'
}

module.exports = () => {
    if (Client.getGameOptions().control) {
        const keybinds = Client.getGameOptions().control
        const kbobject = {}
        for (const prop in keybinds.getKeys()) {
            kbobject[keybinds.getKeys()[prop]] = keybinds.getRawKeys()[prop][method]()
        }
        return kbobject
    }
    else {
        Chat.log("Control doesn't exist, using raw Options class.")
        const kbobject = {}
        const keybinds = Client.getGameOptions().getRaw()[backupField]
        for (const prop in Client.getGameOptions().getRaw()[backupField]) {
            kbobject[keybinds[prop][backupKeyNameMethod]()] = keybinds[prop][method]()
        }
        return kbobject
    }
}
