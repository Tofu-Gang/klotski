export const GRID_SIZE = 80;

export const PuzzleBoxConfig = {
    Dimensions: {
        width: GRID_SIZE * 4,
        height: GRID_SIZE * 5
    }
}

export const Tiles = {
    Vertical: {
        Colors: {
            bg: "bg-tileLong"
        },
        Dimensions: {
            width: GRID_SIZE,
            height: GRID_SIZE * 2
        }
    },
    Horizontal: {
        Colors: {
            bg: "bg-tileLong"
        },
        Dimensions: {
            width: GRID_SIZE * 2,
            height: GRID_SIZE
        }
    },
    Square: {
        Colors: {
            bg: "bg-tileSquare"
        },
        Dimensions: {
            width: GRID_SIZE,
            height: GRID_SIZE
        }
    },
    Goal: {
        Colors: {
            bg: "bg-goalSquare"
        },
        Dimensions: {
            width: GRID_SIZE * 2,
            height: GRID_SIZE * 2
        }
    }
}

export const StartConfig = [
    {
        type: Tiles.Vertical,
        position: { x: 0, y: 0 }
    },
    {
        type: Tiles.Vertical,
        position: { x: GRID_SIZE * 3, y: 0 }
    },
    {
        type: Tiles.Vertical,
        position: { x: 0, y: GRID_SIZE * 2 }
    },
    {
        type: Tiles.Vertical,
        position: { x: GRID_SIZE * 3, y: GRID_SIZE * 2 }
    },
    {
        type: Tiles.Horizontal,
        position: { x: GRID_SIZE, y: GRID_SIZE * 2 }
    },
    {
        type: Tiles.Goal,
        position: { x: GRID_SIZE, y: 0 }
    },
    {
        type: Tiles.Square,
        position: { x: 0, y: GRID_SIZE * 4 }
    },
    {
        type: Tiles.Square,
        position: { x: GRID_SIZE * 3, y: GRID_SIZE * 4 }
    },
    {
        type: Tiles.Square,
        position: { x: GRID_SIZE, y: GRID_SIZE * 3 }
    },
    {
        type: Tiles.Square,
        position: { x: GRID_SIZE * 2, y: GRID_SIZE * 3 }
    }
];
