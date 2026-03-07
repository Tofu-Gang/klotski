import { useGameEngine } from "../context/gameEngine.jsx";
import ScoreDisplay from "./ScoreDisplay.jsx";
import Controls from "./Controls.jsx";

function Navbar() {
    const { score, reset, scoreVisible, setScoreVisible } = useGameEngine();

    return (
        <nav
            className="
                flex md:hidden justify-center items-center divide-x
                bg-amber-200 border-b border-yellow-950 sticky top-0 z-50"
        >
            <div className={`${!scoreVisible && "opacity-50"} px-2 border-s`}>
                <ScoreDisplay value={`${scoreVisible ? score : "-"}/81`} label="Wynik" inline={true} />
            </div>
            <div className="border-e">
                <Controls scoreVisible={scoreVisible} setScoreVisible={setScoreVisible} reset={reset} textSize="text-xl" padding="px-2" />
            </div>
        </nav>
    );
}

export default Navbar;
