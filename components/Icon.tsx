import Image from 'next/image'

export default function Icon() {
    return (
        <div className="flex ml-4 space-x-2">
            <Image src={"/mangadex-logo.svg"} height={"30"} width={"20"} alt={""}/>
            <Image src={"/mangadex-wordmark.svg"} height={"30"} width={"100"} alt={""}/>
        </div>
    )
}