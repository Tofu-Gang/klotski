import { useGameEngine } from "../context/gameEngine.jsx";
import { PuzzleBoxConfig } from "../lib/config.js";
import { StartConfig } from "../lib/config.js";
import Tile from "./Tile.jsx";

function PuzzleBox() {
    const { isFinished, goalTileIndex, positions, updatePosition, getBounds, setScore } = useGameEngine();

    return (
        <div
            className={`${PuzzleBoxConfig.Colors.bg} ${PuzzleBoxConfig.Colors.border}`}
            style={{
                width: `${PuzzleBoxConfig.Dimensions.width + PuzzleBoxConfig.Dimensions.borderWidth * 2}px`,
                height: `${PuzzleBoxConfig.Dimensions.height + PuzzleBoxConfig.Dimensions.borderWidth * 2}px`,
                borderWidth: `${PuzzleBoxConfig.Dimensions.borderWidth}px`
            }}
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
                    borderColor={StartConfig[index].type.Colors.border}
                    updatePosition={updatePosition}
                    updateScore={() => setScore((current) => current + 1)}
                />
            ))}
            <div
                className={`relative ${PuzzleBoxConfig.Colors.bg}`}
                style={{
                    width: `${PuzzleBoxConfig.Dimensions.width / 2}px`,
                    height: `${PuzzleBoxConfig.Dimensions.borderWidth}px`,
                    left: `${PuzzleBoxConfig.Dimensions.width / 4}px`,
                    top: `${PuzzleBoxConfig.Dimensions.height}px`
                }}
            />
        </div>
    );
}

export default PuzzleBox;
