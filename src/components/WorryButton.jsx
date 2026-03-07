import { useGameEngine } from "../context/gameEngine.jsx";

function WorryButton() {
    const { scoreVisible, setScoreVisible } = useGameEngine();

    return (
        <div
            onClick={() => setScoreVisible((current) => !current)}
            className="
                text-xl md:text-5xl font-extrabold font-[Tiny5] text-textColor
                md:border-solid md:border-8 md:border-black
                px-2 md:p-3 cursor-pointer bg-navbarItem md:bg-none hover:bg-controlHoverChecked transition
            "
        >
            <div
                className={`
                    hidden md:inline-block mr-3 h-8 w-8 
                    border-8 border-worryCheckboxBorder ${!scoreVisible && "bg-worryCheckbox"} transition
                `}
            />Nie martw się
        </div>
    );
}

export default WorryButton;
