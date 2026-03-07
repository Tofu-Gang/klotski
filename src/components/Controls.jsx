function Controls({ scoreVisible, setScoreVisible, reset, textSize, padding }) {
    return (
        <div className="flex justify-center items-center md:gap-5 divide-x">
            <div
                onClick={() => setScoreVisible((current) => !current)}
                className={`
                    ${textSize} font-extrabold font-[Tiny5] 
                    md:border-solid md:border-8 md:border-black 
                    ${padding} cursor-pointer hover:bg-amber-400 transition
                `}
            >
                <div
                    className={`
                        hidden md:inline-block mr-3 h-8 w-8 
                        border-8 border-black ${!scoreVisible && "bg-black"} transition
                    `}
                />Nie martw się
            </div>
            <div
                onClick={reset}
                className={`
                    ${textSize} font-extrabold font-[Tiny5] 
                    md:border-solid md:border-8 md:border-black 
                    ${padding} cursor-pointer hover:bg-amber-400 transition
                `}
            >
                Zresetować
            </div>
        </div>
    );
}

export default Controls;
