function Controls({ scoreVisible, setScoreVisible, reset, textSize, padding }) {
    return (
        <div className="flex justify-center items-center gap-1 md:gap-5">
            <button
                onClick={() => setScoreVisible((current) => !current)}
                className={`${textSize} font-extrabold font-[Tiny5] border md:border-8 border-black ${padding} cursor-pointer hover:bg-amber-400 transition`}
            >
                <input
                    className={"hidden md:inline-block mr-3 h-8 w-8 cursor-pointer transition-all appearance-none border-8 border-black checked:bg-black"}
                    type="checkbox"
                    id="scoreVisible"
                    name="scoreVisible"
                    checked={!scoreVisible}
                    onChange={() => setScoreVisible((current) => !current)}
                />Nie martw się
            </button>
            <button
                onClick={reset}
                className={`${textSize} font-extrabold font-[Tiny5] border md:border-8 border-black ${padding} cursor-pointer hover:bg-amber-400 transition`}
            >
                Zresetować
            </button>
        </div>
    );
}

export default Controls;
