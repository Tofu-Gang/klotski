function NumberDisplay({ value, label }) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center items-center text-5xl font-extrabold font-[Tiny5] select-none">{label}</div>
            <div className="flex justify-center items-center text-9xl font-extrabold font-[Tiny5] select-none">{value}</div>
        </div>
    );
}

export default NumberDisplay;
