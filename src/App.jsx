import FinishPopup from "./components/FinishPopup.jsx";
import PuzzleBox from "./components/PuzzleBox.jsx";
import ScoreDisplay from "./components/ScoreDisplay.jsx";
import { useGameEngine } from "./context/gameEngine.jsx";
import Navbar from "./components/Navbar.jsx";
import Controls from "./components/Controls.jsx";
import Title from "./components/Title.jsx";

function App() {
    const { score, reset, scoreVisible, setScoreVisible } = useGameEngine();

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
                    <div className="grow basis-1 hidden md:block"><ScoreDisplay value={81} label="Rekord świata" inline={false} /></div>
                </div>
                <div className="hidden md:block my-10 ">
                    <Controls scoreVisible={scoreVisible} setScoreVisible={setScoreVisible} reset={reset} textSize="text-5xl" padding="p-3" />
                </div>
            </div>
            <FinishPopup/>
        </>
    );
}

export default App;
