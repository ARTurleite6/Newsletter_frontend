export default function SubTitle({ content }: { content: string }) {
    return (
        <p className={"w-full text-center text-black text-lg font-normal font-['Roboto']"}>
            {content}
        </p>
    );
}
