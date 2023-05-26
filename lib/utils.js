function writeHttp(path, gitfile) {
    const url = "https://raw.githubusercontent.com/fheahdythdr/jsMacros-projects/main/lib/" + gitfile;
    const http = Request.get(url);
    const text = http.text();
    FS.open(path).write(text);
}

function check(path) {
    if (!FS.exists(`customLib/${path}`)) {
        writeHttp(`customLib/${path}`, path);
    }
}

function checkMelonRindFork(path) {
    if (!FS.exists("aMelonRind/" + path)) {
        const url = "https://raw.githubusercontent.com/fheahdythdr/JsMacros-scripts/main/src/lib/" + path;
        const http = Request.get(url);
        const text = http.text();
        FS.open("aMelonRind/" + path).write(text);
    }
}

function ensureDirectoryExistence(directory) {
    const directories = directory.split('/');
    let currentPath = '';
  
    for (let dir of directories) {
      currentPath += dir + '/';
  
      if (!FS.exists(currentPath)) FS.makeDir(currentPath);
    }
}

check("InventoryItem.d.ts");
check("InventoryItem.js");
check("attackSpeed.js");
check("entityAggro.js");
check("getDefense.js");
check("getUsername.js");
check("keybindGetter.js");
check("mapInventory.js");
check("mappedInventory.d.ts");
check("mappedInventory.js");
check("getBlocksInArea.js");
check("getBlocksInArea.d.ts");

ensureDirectoryExistence('aMelonRind/backup');
ensureDirectoryExistence('aMelonRind/handlers')
checkMelonRindFork('util.js');
checkMelonRindFork('GLFW.js');
checkMelonRindFork('TraceLine.js');
checkMelonRindFork('DuplicateCheck.js');
checkMelonRindFork('AdvancedActionbar.js');
checkMelonRindFork('handlers/ClickPathTable.json');
checkMelonRindFork('handlers/Container.js');
checkMelonRindFork('handlers/Crafting.js');
checkMelonRindFork('handlers/Movement.js');
checkMelonRindFork('handlers/ShulkerMachine.js');
checkMelonRindFork('handlers/ShulkerMacro.js');
checkMelonRindFork('handlers/Storage.js');
checkMelonRindFork('handlers/World.js');
checkMelonRindFork('backup/CraftingHandler_complicatedRecipeParser.js')

const funcs = {
    getDistance: (x, y, z) => {
        return Player.getPlayer().getPos().toVector(x, y, z).getMagnitude()
    },
    getYaw: (x, z) => {
        return -(Math.atan2(x-Player.getPlayer().getPos().x, z-Player.getPlayer().getPos().z) * 180 / Math.PI)
    },
    getPitch: (x,y,z) => {
        const dist = Math.sqrt(Math.pow(x - Player.getPlayer().getX(), 2) + Math.pow(y - Player.getPlayer().getY(), 2) + Math.pow(z - Player.getPlayer().getZ(), 2));
        return -Math.atan2(y - Player.getPlayer().getY(), dist) * (180 / Math.PI)
    }
}

module.exports = {
    getDistance: funcs.getDistance,
    getYaw: funcs.getYaw,
    getPitch: funcs.getPitch,
    getAll: (x, y, z) => {
        const dist = funcs.getDistance(x, y, z);
        const yaw = funcs.getYaw(x, z);
        const pitch = funcs.getPitch(x, y, z);
        return {
            distance: dist,
            yaw: yaw,
            pitch: pitch
        }
    },
    getDistanceFromBlock: (x1, y1, z1, x2, y2, z2) => {
        const dx = x1 - x2;
        const dy = y1 - y2;
        const dz = z1 - z2;
        return Math.sqrt(dx*dx + dy*dy + dz*dz);
    },
    getBlocksInArea: require("./getBlocksInArea"),
    getAttackSpeed: require('./attackSpeed'),
    getDefense: require("./getDefense"),
    getKeybinds: require('./keybindGetter'),
    getUser: require('./getUsername'),
    getToughness: require("./getToughness"),
    getEntityHostility: require("./entityAggro"),
    mapInventory: require("./mapInventory"),
    melonUtils: require("../aMelonRind/util")
}
