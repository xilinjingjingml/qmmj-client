
export const CELL_TYPE = {
    
    EMPTY:0,
    A:1,
    B:2,
    C:3,
    D:4,
    E:5,
    BIRD:6
}

export const CELL_BASENUM = 5;
export const CELL_STATUS = {
    COMMON:0,
    CLICK:"click",
    LINE:"line",
    COLUMN:"column",
    WRAP:"wrap",
    BIRD:"bird"
}

export const NUM_ARRAY1 = [0,500]
export const NUM_ARRAY2 = [0,500,1000,2000,5000]
export const NUM_ARRAY3 = [0,500,1000,2000,5000,10000,20000]

export const GRID_WIDTH = 8;
export const GRID_HEIGHT = 8;

export const CELL_WIDTH = 77;
export const CELL_HEIGHT = 77;

export const GRID_PIXEL_WIDTH = GRID_WIDTH * CELL_WIDTH;
export const GRID_PIXEL_HEIGHT = GRID_HEIGHT * CELL_HEIGHT;

let sizeWidth = 594/8;
let sizeHeight = 564/8
let widthScale = sizeWidth/134
let heightScale = sizeHeight/134
let bigScale = Math.max(widthScale,heightScale)

export const BIG_SCALE = bigScale;

// ********************   时间表  animation time **************************
export const ANITIME = {
    TOUCH_MOVE: 0.3,
    DIE: 0.2,
    DOWN: 0.5,
    BOMB_DELAY: 0.3,
    BOMB_BIRD_DELAY: 0.7,
    DIE_SHAKE: 0.4 // 死前抖动
    // TOUCH_MOVE: 0,
    // DIE: 0,
    // DOWN: 0,
    // BOMB_DELAY: 0,
    // BOMB_BIRD_DELAY: 0,
    // DIE_SHAKE: 0 // 死前抖动
}