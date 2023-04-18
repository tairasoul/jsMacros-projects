export = class MappedInventory {
    slots: Array<{slot: number, itemHelper: $ItemStackHelper}>;
    addItem(item: {slot: number, itemHelper: $ItemStackHelper}): void
}
