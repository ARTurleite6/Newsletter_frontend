import { TITLES } from "@/lib/content";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Button from "./Button";

export default function Confirmation({ restaurant, date, dishes }: { restaurant: string, date: string, dishes: string[] }) {

    const sendRequest = () => {
        const requestOptions = {
            "specialty": {
                restaurant,
                date,
                dishes: dishes.map(dish => ({ name: dish }))
            }
        }

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/specialties`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(requestOptions)
        }).then((response) => {
            if (response.ok) {
                alert("Specialty added successfully");
            } else {
                alert("Something went wrong");
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="h-full w-full flex justify-center items-center flex-col">
            <div className="flex flex-col items-center bg-zinc-100 rounded-lg py-8 gap-8">
                <Title content={TITLES.confirmationPage} />
                <div className="w-3/5">
                    <SubTitle content={`Your specialties for ${restaurant} at ${date} are:`} />
                </div>
                <div className="flex flex-row w-4/5 justify-center items-center">
                    {
                        dishes.map((dish, index) => {
                            return (
                                <p key={index}>{dish}</p>
                            )
                        })
                    }
                </div>
                <div className="w-1/3 flex flex-col items-center gap-5 justify-end">
                    <div className="h-1/3 w-full">
                        <Button message="SUBMIT" onClick={() => sendRequest()} />
                    </div>
                    <a href="/specialty" className="text-indigo-800">CANCEL</a>
                </div>
            </div>
        </div>
    );

}
