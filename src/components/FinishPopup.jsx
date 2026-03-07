import { useGameEngine } from "../context/gameEngine.jsx";

function FinishPopup() {
    const { isFinished } = useGameEngine();

    return (
        <div
            className={`
                absolute w-90 md:w-160 h-30 md:h-60
                border-10 border-finishPopupBorder ${isFinished ? "opacity-100" : "opacity-50"} bg-finishPopup
                font-[Tiny5] text-3xl md:text-7xl text-textColor select-none
                ${!isFinished && "invisible"}
                flex justify-center items-center
                duration-1000 ease-linear transition-opacity
            `}
        >
             Wygrałeś!!!
        </div>
    );
}

export default FinishPopup;
