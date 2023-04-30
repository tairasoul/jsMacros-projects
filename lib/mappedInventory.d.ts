interface ArmorSlot {
    slot: number;
    itemHelper: $ItemStackHelper;
}

export = class MappedInventory {
    slots:{
        armor: {helmet: ArmorSlot, chestplate: ArmorSlot, leggings: ArmorSlot, boots: ArmorSlot},
        crafting: Array<{slot: number, itemHelper: $ItemStackHelper}>,
        inventory: Array<{slot: number, itemHelper: $ItemStackHelper}>,
        hotbar: Array<{slot: number, itemHelper: $ItemStackHelper}>,
        offhand: null | $ItemStackHelper
        all: Array<{slot: number, itemHelper: $ItemStackHelper}>
    };
    addInventory(item: {slot: number, itemHelper: $ItemStackHelper}): void
    addArmor(item: {slot: number, itemHelper: $ItemStackHelper}): void
    addCrafting(item: {slot: number, itemHelper: $ItemStackHelper}): void
    setOffhand(item: {slot: number, itemHelper: $ItemStackHelper}): void
    addHotbar(item: {slot: number, itemHelper: $ItemStackHelper}): void
}
