import Image from 'next/image';

export default function Avatar() {
    return (
        <div>
            <Image src={"/avatar.png"} width={50} height={50} alt={""} className='rounded-full'/>
        </div>
    )
}