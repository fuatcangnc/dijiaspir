"use client"
import { expert_cards } from "@/data";
import { space_grotesk } from "@/fonts";
import Image from "next/image";
import CustomButton from "./CustomButton";
import {motion,useInView} from "framer-motion"
import { useRef } from "react";

function ExpertCard() {
  const ref=useRef(null)
  const isInView=useInView(ref,{once:false})
  return (
    <div className="flex justify-start items-end w-[1140] gap-4 py-32 flex-wrap mx-auto container">
      <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-[346px]" ref={ref}>
        <p className="flex-grow-0 flex-shrink-0 w-[795.58px] h-[126px] text-[42px] font-medium text-left text-black">
          <span className="flex-grow-0 flex-shrink-0 w-[795.58px] h-[126px] text-[42px] font-medium text-left text-black">
            Hazır mısın, zorluğa karşı koyacak mısın?
          </span>
          <br />
          <span className="flex-grow-0 flex-shrink-0 w-[795.58px] h-[126px] text-[42px] font-medium text-left text-black">
            İşte buradan başla.
          </span>
        </p>
        <p className="flex-grow-0 flex-shrink-0 w-[280.92px] h-[72px] text-2xl text-left text-black">
          <span className="flex-grow-0 flex-shrink-0 w-[280.92px] h-[72px] text-2xl text-left text-black">
            Dijiflow da geniş bir
          </span>
          <br />
          <span className="flex-grow-0 flex-shrink-0 w-[280.92px] h-[72px] text-2xl text-left text-black">
            uzmanlık yelpazemiz var.
          </span>
        </p>
      </div>
      <motion.div className="flex justify-start items-end gap-4" initial={{opacity:0,x:-200}} animate={{opacity:1,x:0}} transition={{ duration: 1, ease: "easeOut" }} >
        {
            expert_cards.map(({img,gradient,title,description},index)=>(

                <motion.div
                key={index}
                className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[469.33px] relative overflow-hidden gap-4 p-[29px] rounded-lg border border-[#afafaf]/[0.14]"
                style={{ background: gradient }}
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}
              >
                <div className="logo">
                    <Image src={img} alt={title} width={100} height={20}/>
                </div>
                <h3 className={`text-gray-950 text-[27.89px] font-bold leading-7 font-space-grotesk ${space_grotesk.className}`}>
                {title}
                </h3>
                <p className="text-zinc-600 text-base font-normal leading-normal">
                {
                    description
                }
                </p>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                 
                  <CustomButton className="rounded-full bg-[#92003B] hover:bg-opacity-80 text-white">Teklif Al </CustomButton>
                  <CustomButton className="rounded-full hover:bg-black hover:text-white border border-black">Konuşalım 👋</CustomButton>
                </div>
              </motion.div>
            ))
        }
</motion.div>
    </div>
  );
}

export default ExpertCard;
