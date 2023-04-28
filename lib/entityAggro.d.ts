declare function getType(entity: EntityHelper<any>): { Passive: boolean, Neutral: boolean, Hostile: boolean, Player: boolean }

exports = getType
