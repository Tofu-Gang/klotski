import Draggable from "react-draggable";
import { useRef } from "react";
import { PuzzleBoxConfig } from "../lib/config.js";
import { useState } from "react";

function Tile({ index, x, y, bounds, isGoal, disabled, width, height, bgColor, borderColor, updatePosition, updateScore }) {
    const ref = useRef(null);
    const [onDragStartPos, setOnDragStartPos] = useState({x, y});

    function onStart(event, data) {
        const { x, y } = data;
        setOnDragStartPos({ x, y });
    }

    function onDrag(event, data) {
        updatePosition(index, data.x, data.y);
    }

    function onStop(event, data) {
        const { x: startX, y: startY } = onDragStartPos;
        const { x: stopX, y: stopY } = data;

        if( startX !== stopX || startY !== stopY) {
            updateScore();
        }
    }

    return (
        <Draggable
            nodeRef={ref}
            position={{ x, y }}
            bounds={bounds}
            disabled={disabled}
            onStart={onStart}
            onDrag={onDrag}
            onStop={onStop}
            grid={[PuzzleBoxConfig.Dimensions.width / 4, PuzzleBoxConfig.Dimensions.height / 5]}
        >
            <div
                ref={ref}
                className={`${bgColor} absolute border ${borderColor} ${!disabled && "cursor-pointer"} ${isGoal && disabled && "invisible"}`}
                style={{
                    width,
                    height,
                    marginTop: isGoal && disabled && "100px",
                    opacity: isGoal && disabled ? "0" : "1",
                    transition: isGoal && disabled ? "all 1s ease-out": "all 0.2s ease-out"
                }}
            />
        </Draggable>
    );
}

export default Tile;
