function ScoreDisplay({ value, label, inline }) {
    return (
        <>
            {inline ?
                <div className="flex text-center justify-center items-center text-xl font-extrabold font-[Tiny5] text-textColor select-none">{label}: {value}</div> :
                <div className="flex flex-col">
                    <div className="flex text-center justify-center items-center text-5xl font-extrabold font-[Tiny5] text-textColor select-none">{label}</div>
                    <div className="flex text-center justify-center items-center text-9xl font-extrabold font-[Tiny5] text-textColor select-none">{value}</div>
                </div>
            }
        </>
    );
}

export default ScoreDisplay;
