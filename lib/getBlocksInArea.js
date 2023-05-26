/**
 * 
 * @param {BlockDataHelper} block 
 */

module.exports = (block) => {
    const pos = block.getBlockPos();
    const x = pos.getX(), y = pos.getY(), z = pos.getZ()
    return {
        px: {
            block: World.getBlock(x + 1, y, z),
            state: World.getBlock(x + 1, y, z).getBlockState()
        },
        mx: {
            block: World.getBlock(x - 1, y, z),
            state: World.getBlock(x - 1, y, z).getBlockState()
        },
        py: {
            block: World.getBlock(x, y + 1, z),
            state: World.getBlock(x, y + 1, z).getBlockState()
        },
        my: {
            block: World.getBlock(x, y - 1, z),
            state: World.getBlock(x, y - 1, z).getBlockState()
        },
        pz: {
            block: World.getBlock(x, y, z + 1),
            state: World.getBlock(x, y, z + 1).getBlockState()
        },
        mz: {
            block: World.getBlock(x, y, z - 1),
            state: World.getBlock(x, y, z - 1).getBlockState()
        }
    }
}
