import Image from 'next/image'
 
function Cover() {
  return (
      <div className=''>
              <Image
                src="/cover1.jpg"
                alt="Landscape picture"
                width={200}
                height={200}
                className="rounded-lg h-72 w-96 object-cover select-none"
                />
        </div>
  )
}
export default Cover


