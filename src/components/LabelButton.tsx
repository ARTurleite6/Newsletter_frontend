export default function LabelInput({ children, message }: { message: string, children: React.ReactNode }) {

    return (
        <div className="w-full flex flex-col items-center gap-3">
            <p className="text-indigo-800 text-base font-bold tracking-wide">{message}</p>
            {children}
        </div>
    );
}
