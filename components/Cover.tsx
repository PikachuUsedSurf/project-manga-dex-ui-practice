import Image from 'next/image'
 
function Cover() {
  return (
      <div className=''>
              <Image
                src="/cover.jpg"
                alt="Landscape picture"
                width={200}
                height={200}
                className="rounded-lg h-full w-[300px]"
                />
        </div>
  )
}
export default Cover


