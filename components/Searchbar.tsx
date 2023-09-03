import { BiSearchAlt2 } from "react-icons/bi";

export default function Searchbar() {
    return (
        <div className="flex h-8 w-auto bg-zinc-700 p-6 rounded-md items-center">
            <div className="flex">
                <p className="mr-36 text-white text-lg">search</p>
                <div className="flex space-x-2  ">
                    <p className="bg-gray-300 rounded-md px-1">ctrl</p>
                    <p className="bg-gray-300 rounded-md px-1">k</p>
                </div>
                <BiSearchAlt2 className="ml-2 text-white items-center" size="25"  />
            </div>
        </div>
    )

}
