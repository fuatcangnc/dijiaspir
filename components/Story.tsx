import { client_logos } from '@/data'
import Marquee from './ui/marquee'
import { MarqueeDemo } from './Marquee'
import Image from 'next/image'
function Story() {
    const {first_row,second_row}=client_logos
  return (
    <section className='bg-[#000F20] rounded-md py-20 flex flex-col gap-12'>
        <div className="container mx-auto flex justify-between items-center">
            <div className='uppercase text-white tracking-wide flex items-center gap-2'><div className='w-3 h-3 bg-blue-600 rounded-full '>  </div> MÜŞTERİLER</div>
            <p className='font-bold text-white text-[24px] max-w-[700px]'>We partner with modern eCommerce brands who want to grow quickly and sustainably.
            </p>
        </div>
        <div className="client-logos flex gap-8 flex-col mt-12 opacity-50">
        
        <Marquee pauseOnHover  className='gap-3'>{
                first_row.map((i,index)=>(
                    <div  key={index} className='bg-blue-950 p-4 rounded-md'><Image src={i} alt={i} width={170} height={30} ></Image></div>
                ))
            }</Marquee>
        
        <Marquee pauseOnHover reverse  className='gap-3'>{
                second_row.map((i,index)=>(
                    <Image src={i} alt={i} width={170} height={30}  key={index}></Image>
                ))
            }</Marquee>
        </div>
    </section>
  )
}

export default Story