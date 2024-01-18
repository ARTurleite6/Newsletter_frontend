export default function InputDate({ content, onChange }: { content: string, onChange: (value: string) => void }) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        onChange(event.target.value);
    }

    return (
        <input value={content} onChange={handleChange} className="w-full h-12 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200" type="date" />
    );
}
