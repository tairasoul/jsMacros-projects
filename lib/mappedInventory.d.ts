export = class MappedInventory {
    slots:{
        armor: Array<{slot: number, itemHelper: $ItemStackHelper, defense: number}>,
        crafting: Array<{slot: number, itemHelper: $ItemStackHelper}>,
        inventory: Array<{slot: number, itemHelper: $ItemStackHelper}>,
        hotbar: Array<{slot: number, itemHelper: $ItemStackHelper}>,
        offhand: null | $ItemStackHelper
    };
    addInventory(item: {slot: number, itemHelper: $ItemStackHelper}): void
    addArmor(item: {slot: number, itemHelper: $ItemStackHelper}): void
    addCrafting(item: {slot: number, itemHelper: $ItemStackHelper}): void
    setOffhand(item: {slot: number, itemHelper: $ItemStackHelper}): void
    addHotbar(item: {slot: number, itemHelper: $ItemStackHelper}): void
}
