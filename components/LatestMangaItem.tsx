import Image from "next/image"
import {    GiSpellBook, GiCutDiamond } from 'react-icons/gi'

export default function LatestMangaItem() {
    return (
        <div>
            <div className="flex gap-2">
                <div className="">
                    <Image src={"/cover.jpg"} height={200} width={200} alt={"cover image"} className="rounded-lg h-40 w-auto object-cover" /> 
                </div>
                <div className=" grid-cols-3">
                    <h1 className="text-white font-semibold text-2xl">Saikin Haitta Shiro Madoushi ga Party Crusher</h1>
                    <div className="flex justify-between text-white font-normal text-1xl">
                        <h1>Vol.4 Ch.980</h1>
                        <h1><GiSpellBook /></h1>
                    </div>
                    <div>
                        <h1><GiCutDiamond />scangroup</h1>
                        <h1>time</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}