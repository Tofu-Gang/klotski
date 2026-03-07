import Draggable from "react-draggable";
import { useRef } from "react";
import { useState } from "react";
import { GRID_SIZE } from "../lib/config.js";

function Tile({ index, x, y, bounds, isGoal, disabled, width, height, bgColor, updatePosition, updateScore }) {
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
            grid={[GRID_SIZE, GRID_SIZE]}
        >
            <div
                ref={ref}
                className={`
                    absolute ${isGoal && disabled && "invisible mt-25"} 
                    ${bgColor} border border-amber-400 
                    ${!disabled && "cursor-pointer"} ${isGoal && disabled ? "opacity-0" : "opacity-100"}
                    transition-all ease-out ${isGoal && disabled ? "duration-1000" : "duration-200"}`}
                style={{ width, height }}
            />
        </Draggable>
    );
}

export default Tile;
