declare function getBlocksInArea(block: BlockDataHelper): {
    px: {
        block: BlockDataHelper,
        state: JavaMap<string, string>
    }, 
    mx: {
        block: BlockDataHelper,
        state: JavaMap<string, string>
    },
    py: {
        block: BlockDataHelper,
        state: JavaMap<string, string>
    },
    my: {
        block: BlockDataHelper,
        state: JavaMap<string, string>
    }, 
    pz: {
        block: BlockDataHelper,
        state: JavaMap<string, string>
    }, 
    mz: {
        block: BlockDataHelper,
        state: JavaMap<string, string>
    }
}

export = getBlocksInArea
