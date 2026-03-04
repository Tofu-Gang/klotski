import FinishPopup from "./components/FinishPopup.jsx";
import PuzzleBox from "./components/PuzzleBox.jsx";
import NumberDisplay from "./components/NumberDisplay.jsx";
import { useGameEngine } from "./context/gameEngine.jsx";
import { useState } from "react";

function App() {
    const { score, reset } = useGameEngine();
    const [ scoreVisible, setScoreVisible ] = useState(true);

    return (
        <>
            <div className="flex flex-col">
                <div className="my-12 flex justify-center items-center text-9xl font-extrabold font-[Tiny5] select-none">KLOTSKI</div>
                <div className="flex justify-around items-center">
                    <div className={`grow basis-1 ${!scoreVisible && "opacity-50"}`}><NumberDisplay value={scoreVisible ? score : "-"} label="Wynik" /></div>
                    <PuzzleBox />
                    <div className="grow basis-1"><NumberDisplay value={81} label="Rekord świata" /></div>
                </div>
                <div className="my-10 flex justify-center gap-5 items-center">
                    <button
                        onClick={() => setScoreVisible((current) => !current)}
                        className={`text-5xl font-extrabold font-[Tiny5] border-8 border-black p-3 cursor-pointer hover:bg-amber-400 transition`}
                    >
                        <input
                            className={"mr-3 h-8 w-8 cursor-pointer transition-all appearance-none border-8 border-black checked:bg-black"}
                            type="checkbox"
                            id="scoreVisible"
                            name="scoreVisible"
                            checked={!scoreVisible}
                            onChange={() => setScoreVisible((current) => !current)}
                        />Nie martw się
                    </button>
                    <button
                        onClick={reset}
                        className={`text-5xl font-extrabold font-[Tiny5] border-8 border-black p-3 cursor-pointer hover:bg-amber-400 transition`}
                    >
                        Zresetować
                    </button>
                </div>
            </div>
            <FinishPopup/>
        </>
    );
}

export default App;
