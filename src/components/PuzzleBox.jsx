import { useGameEngine } from "../context/gameEngine.jsx";
import { StartConfig } from "../lib/config.js";
import Tile from "./Tile.jsx";

function PuzzleBox() {
    const { isFinished, goalTileIndex, positions, updatePosition, getBounds, setScore } = useGameEngine();

    return (
        <div
            className="w-85 h-105 bg-puzzleBox border-10 border-puzzleBoxBorder"
        >
            {positions.map((tile, index) => (
                <Tile
                    key={index}
                    index={index}
                    x={tile.left}
                    y={tile.top}
                    bounds={getBounds(index)}
                    isGoal={index === goalTileIndex}
                    disabled={isFinished}
                    width={StartConfig[index].type.Dimensions.width}
                    height={StartConfig[index].type.Dimensions.height}
                    bgColor={StartConfig[index].type.Colors.bg}
                    updatePosition={updatePosition}
                    updateScore={() => setScore((current) => current + 1)}
                />
            ))}
            {/* the bottom opening */}
            <div
                className="relative w-40 h-2.5 left-20 top-100 bg-puzzleBox"
            />
        </div>
    );
}

export default PuzzleBox;
