import { BiMenuAltLeft } from "react-icons/bi";
import Icon from "@/components/Icon";
import Searchbar from "@/components/Searchbar"
import Avatar from "./avatar";


export default function Navbar() {
    return (
        <nav className="h-20 w-full flex relative justify-between items-center mx-auto px-8">
            <div className={"flex"}>
                <BiMenuAltLeft className="text-white h-8 w-8"/>
                <Icon/>
            </div>
            <div className="flex space-x-8">
                <Searchbar />
                <Avatar />
            </div>
        </nav>
    )
}