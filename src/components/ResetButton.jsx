import { useGameEngine } from "../context/gameEngine.jsx";

function ResetButton() {
    const { reset } = useGameEngine();

    return (
        <div
            onClick={reset}
            className="
                flex items-center
                text-xl md:text-5xl font-extrabold font-[Tiny5] text-textColor
                md:border-solid md:border-8 md:border-black 
                px-2 md:p-3 cursor-pointer bg-navbarItem md:bg-none hover:bg-controlHoverChecked transition
            "
        >
            <div>Zresetować</div>
        </div>
    );
}

export default ResetButton;
