import { useGameEngine } from "../context/gameEngine.jsx";
import { PuzzleBoxConfig } from "../lib/config.js";

function FinishPopup() {
    const { isFinished } = useGameEngine();

    return (
        <div
            className={`
                relative mx-auto -mt-35
                ${!isFinished && "invisible"} ${PuzzleBoxConfig.Colors.bg} ${PuzzleBoxConfig.Colors.border} 
                flex justify-center items-center 
                duration-200 ease-out transition`}
            style={{
                width: `${PuzzleBoxConfig.Dimensions.width * 2}px`,
                height: `${PuzzleBoxConfig.Dimensions.height * 3 / 5}px`,
                borderWidth: `${PuzzleBoxConfig.Dimensions.borderWidth}px`,
                bottom: `${4 * PuzzleBoxConfig.Dimensions.height / 4.5}px`,
                fontFamily: "Tiny5, sans-serif",
                fontSize: "80px",
                opacity: isFinished? "1": "0",
                transition: "opacity 1s linear"
            }}
        >
            Wygrałeś!!!
        </div>
    );
}

export default FinishPopup;
