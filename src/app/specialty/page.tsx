"use client";

import InputText from "@/components/InputText";
import InputDate from "@/components/InputDate";
import LabelButton from "@/components/LabelButton";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import { SUBTITLES, TITLES } from "@/lib/content";
import { useState } from "react";
import Button from "@/components/Button";
import classNames from "classnames";
import Confirmation from "@/components/Confirmation";

interface Specialty {
    date?: string;
    restaurant?: string;
    dish: string[];
}

export default function Specialty() {

    const [date, setDate] = useState("");
    const [restaurant, setRestaurant] = useState("");
    const [dishes, setDishes] = useState<string[]>([]);

    const [popUpOpen, setPopUpOpen] = useState(false);

    const initialContent = classNames("w-full h-full flex flex justify-center items-center", {
        "opacity-15 pointer-events-none": popUpOpen
    });

    const setDish = (dish: string, index: number) => {
        const copyDishes = [...dishes];
        copyDishes[index] = dish;
        setDishes(copyDishes);
    }

    const addMore = () => {
        setDishes([...dishes, ""]);
    }

    return (
        <main className="h-full w-full flex justify-center items-center flex-col">
            <div className={initialContent}>
                <div className="h-5/6 flex flex-col items-center bg-zinc-100 w-1/3 rounded-lg py-8 gap-8">
                    <Title content={TITLES.specialties} />
                    <div className="w-3/5">
                        <SubTitle content={SUBTITLES.specialties} />
                    </div>
                    <div className={"w-1/3"}>
                        <LabelButton message="DATE">
                            <InputDate content={date || ""} onChange={(date) => setDate(date)} />
                        </LabelButton>
                    </div>

                    <div>
                        <LabelButton message="RESTAURANT NAME">
                            <InputText content={restaurant || ""} onChange={(restaurant) => setRestaurant(restaurant)} />
                        </LabelButton>
                    </div>

                    <div className="h-40 overflow-scroll">
                        <LabelButton message="SPECIALTIES">

                            {
                                dishes.map((dish, idx) => {
                                    return (<div key={idx} className="h-1/3">
                                        <InputText content={dish || ""} onChange={(dish) => setDish(dish, idx)} />
                                    </div>);
                                })
                            }
                        </LabelButton>
                    </div>
                    <div className="w-1/3">
                        <Button message="ADD MORE" onClick={() => addMore()} />
                    </div>

                    <div className="h-1/5 w-1/3 flex flex-col items-center gap-5 justify-end">
                        <div className="h-1/3 w-full">
                            <Button message="SUBMIT" onClick={() => { setPopUpOpen(true) }} />
                        </div>
                        <a href="/" className="text-indigo-800">CANCEL</a>
                    </div>
                </div >
            </div>
            {
                popUpOpen &&
                <div className="absolute left-1/2 transform translate-x-[-50%] top-1/2 translate-y-[-50%] w-1/3">
                    <Confirmation restaurant={restaurant || ""} date={date || ""} dishes={dishes || []} />
                </div>
            }
        </main >
    );

}
