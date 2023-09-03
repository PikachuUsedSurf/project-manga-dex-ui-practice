import Cover from "./Cover";
import Coverbg from "./Coverbg";
import Image from 'next/image';
import Manga from "./Manga";

export default function Title() {
    return (
        <div className="mx-8">
            <div className="flex items-center justify-start mb-4">
                <h1 className="text-2xl font-semibold text-white">Popular New Titles</h1>
            </div>
            <div className="h-[300px] overflow-hidden max-w-auto rounded-md">
                <div className="flex relative h-full overflow-hidden p-2">
                    <Coverbg />
                    <div className="flex gap-2 grid-cols-2">
                        <Cover />
                        <Manga />
                    </div>
                </div>
            </div>
        </div>
    )
}
