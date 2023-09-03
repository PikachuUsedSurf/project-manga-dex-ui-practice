import Image from 'next/image'

function Coverbg() {
    return (
        <div>
            <Image
            src="/cover.jpg"
            alt="Landscape picture"
            width={200}
            height={200}
            className="absolute overflow-hidden top-0 h-[100%] w-[100%] object-cover blur-2xl opacity-20"
            />
        </div>
    )
}

export default Coverbg