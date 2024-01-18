import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import { SUBTITLES, TITLES } from "@/lib/content";

export default function ThankYou() {
    return (<main className="h-full w-full flex justify-center items-center flex-col">
        <div className="h-1/3 flex flex-col items-center justify-center bg-zinc-100 w-1/3 rounded-lg py-8 gap-8">
            <Title content={TITLES.thankYouPage} titleSize={"text-6xl"} />
            <div className="w-1/2">
                <SubTitle content={SUBTITLES.thankYouPage} />
            </div>
        </div>

        <footer className="absolute bottom-12 text-xs font-normal text-black">
            Are you a restaurante owner? <a className="text-indigo-800 text-xs font-bold underline" href="'#'" >Click here </a> to add your daily specialties.
        </footer >
    </main >
    );
}
