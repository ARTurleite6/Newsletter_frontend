export default function Button({ message, onClick }: { message: string, onClick: () => void }) {
    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClick();
    }

    return (
        <button className="w-full h-full bg-indigo-800 rounded-t rounded-b text-white text-center" onClick={handleOnClick}>
            <span className="w-5/6 tex-white text-sm font-bold tracking-wide">
                {message}
            </span>
        </button>
    );
}
