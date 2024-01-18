export default function Title({ content, titleSize }: { content: string, titleSize?: string }) {
    return (
        <h2 className={"w-full text-center text-indigo-800 font-black font-['Playfair Display'] " + (titleSize ? titleSize : "text-4xl")}>
            {content}
        </h2>
    );
}
