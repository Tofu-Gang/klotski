import { useGameEngine } from "../context/gameEngine.jsx";
import ScoreDisplay from "./ScoreDisplay.jsx";
import Controls from "./Controls.jsx";
import Title from "./Title.jsx";

function Navbar() {
    const { score, reset, scoreVisible, setScoreVisible } = useGameEngine();

    return (
        <nav className="bg-amber-200 border-b border-yellow-950 sticky top-0 z-50 flex md:hidden justify-center items-center gap-5">
            <ScoreDisplay value={`${scoreVisible ? score : "-"}/81`} label="Wynik" inline={true} />
            <Controls scoreVisible={scoreVisible} setScoreVisible={setScoreVisible} reset={reset} textSize="text-sm" padding="p-1" />
        </nav>
    );
}

export default Navbar;
