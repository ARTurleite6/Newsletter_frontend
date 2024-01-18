export default function InputText({ content, onChange }: { content: string, onChange: (value: string) => void }) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        onChange(event.target.value);
    }

    return (
        <input className="w-full h-full px-3 py-2 rounded-t rounded-b border border-indigo-800 inline-flex" type="text" value={content} onChange={handleChange} />
    );
}
