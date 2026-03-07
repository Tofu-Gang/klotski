import { useGameEngine } from "../context/gameEngine.jsx";
import ScoreDisplay from "./ScoreDisplay.jsx";
import WorryButton from "./WorryButton.jsx";
import ResetButton from "./ResetButton.jsx";

function Navbar() {
    const { score, scoreVisible } = useGameEngine();

    return (
        <nav className="
            flex md:hidden justify-center items-stretch text-center sticky top-0 z-50
            divide-x-5 divide-navbarBorder border-5 border-navbarBorder bg-navbar"
        >
            <div className="bg-navbarItem">
                <div className={`${!scoreVisible && "opacity-50"} px-2`}>
                    <ScoreDisplay value={`${scoreVisible ? score : "-"}/81`} label="Wynik" inline={true} />
                </div>
            </div>
            <WorryButton />
            <ResetButton />
        </nav>
    );
}

export default Navbar;
