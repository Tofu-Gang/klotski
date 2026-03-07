import FinishPopup from "./components/FinishPopup.jsx";
import PuzzleBox from "./components/PuzzleBox.jsx";
import ScoreDisplay from "./components/ScoreDisplay.jsx";
import { useGameEngine } from "./context/gameEngine.jsx";
import Navbar from "./components/Navbar.jsx";
import Title from "./components/Title.jsx";
import WorryButton from "./components/WorryButton.jsx";
import ResetButton from "./components/ResetButton.jsx";

function App() {
    const { score, scoreVisible } = useGameEngine();

    return (
        <>
            <Navbar />
            <div className="flex flex-col">
                <div className="my-6 md:my-12 text-7xl md:text-9xl">
                    <Title />
                </div>
                <div className="flex justify-around items-center">
                    <div className={`grow basis-1 hidden md:block ${!scoreVisible && "opacity-50"}`}>
                        <ScoreDisplay value={scoreVisible ? score : "-"} label="Wynik" inline={false} />
                    </div>
                    <PuzzleBox />
                    <FinishPopup/>
                    <div className="grow basis-1 hidden md:block"><ScoreDisplay value={81} label="Rekord świata" inline={false} /></div>
                </div>
                <div className="hidden md:flex my-10 justify-center items-center gap-5">
                    <WorryButton />
                    <ResetButton />
                </div>
            </div>
        </>
    );
}

export default App;
