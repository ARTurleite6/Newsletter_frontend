"use client";

import Button from '@/components/Button'
import InputText from '@/components/InputText'
import SubTitle from '@/components/SubTitle'
import Title from '@/components/Title'
import { SUBTITLES, TITLES } from '@/lib/content'
import { useState } from 'react';

export default function Home() {
    const [email, setEmail] = useState("");

    const onSubscribe = () => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subscriptions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                subscription: {
                    email
                }
            }),
        }).then((response) => {
            console.log(response);
            if (response.ok) {
            } else {
                alert("Something went wrong");
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <main className="h-full w-full flex justify-center items-center flex-col">
            <div className="h-1/3 flex flex-col items-center bg-zinc-100 w-1/3 rounded-lg py-8 gap-8">
                <Title content={TITLES.mainPage} />
                <div className="w-3/5">
                    <SubTitle content={SUBTITLES.mainPage} />
                </div>
                <div className="flex flex-row w-4/5">
                    <div className="w-full md:w-3/4">
                        <InputText content={email} onChange={(value) => setEmail(value)} />
                    </div>
                    <div className="w-full md:w-1/4">
                        <Button message="SUBSCRIBE" onClick={() => { onSubscribe() }} />
                    </div>
                </div>
            </div>

            <footer className="absolute bottom-12 text-xs font-normal text-black">
                Are you a restaurante owner? <a className="text-indigo-800 text-xs font-bold underline" href="/specialty" >Click here </a> to add your daily specialties.
            </footer >
        </main >
    )
}
