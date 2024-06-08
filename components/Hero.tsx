"use client";
import { sponsored } from "@/data";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import { ArrowUpRight } from "@phosphor-icons/react";
import {motion} from "framer-motion"
function Hero() {
  return (
    <section className="bg-[#EDF2FF] min-h-[100vh] items-center justify-center flex">
      <motion.div  initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:false,amount:.5}} transition={{duration:.5,delay:.2}} className="flex flex-col justify-start items-center relative gap-8">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-[17px] py-[9px] rounded-md bg-[#3552fd]/10 border border-[#bcc6ff]">
          <p className="flex-grow-0 flex-shrink-0 text-[13.453125px] font-bold text-center text-[#04050f]">
            🎯 Performance &amp; Design Agency
          </p>
        </div>
        <h1  className="self-stretch flex-grow-0 flex-shrink-0 font-bold  text-[75px] text-center text-[#04050f] tracking-tightest">
        Dijital Dönüşüm İle İşinizi Büyütün
 <motion.span animate= {{ y: [0, 20, 0] }} transition={{duration: 2,ease:'easeInOut',repeat:Infinity,repeatType:'loop'}} className="inline-flex" >🚀</motion.span>
        </h1>
        <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-[#38393b] max-w-[800px]">
          Düşük maliyetli web tasarım hizmetleri, işletmenizin büyümesine
          yardımcı olmak için £399+KDV‘den başlayan fiyatlarla.
        </p>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
          <CustomButton className="bg-[#1a1a1a] self-center text-[#fafafa] font-semibold text-[17px] rounded-[12px] min-h-[70px] min-w-[240px] hover:bg-black transition ease-linear delay-150">
            Teklif Al
            <ArrowUpRight size={20} />
          </CustomButton>
          <CustomButton className="bg-[#fafafa] self-center text-[#1a1a1a] border border-[#1a1a1a] font-semibold text-[17px] rounded-[12px] min-h-[70px] min-w-[240px] hover:bg-black hover:text-white transition ease-linear delay-150">
            Teklif Al
            <ArrowUpRight size={20} />
          </CustomButton>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
          <p className="flex-grow-0 flex-shrink-0  h-4 text-base font-semibold text-center text-[#4f515b]">
            + 20 nin üzerinde 😊 mutlu müşteri
          </p>
        </div>
        <div className="flex items-center gap-10 md:mt-12">
          {sponsored.map((item, index) => (
            <Image
              src={item.img}
              key={index}
              alt={item.img}
              width={item.width}
              height={item.height}
              objectFit="contain"
            ></Image>
          ))}
        </div>
      </motion.div>
      ;
    </section>
  );
}

export default Hero;
