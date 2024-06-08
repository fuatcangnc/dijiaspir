"use client";
import { bento_card } from "@/data";
import Image from "next/image";
import { MagicWand } from "@phosphor-icons/react";
import BentoBG from "@/public/bento-bg.svg"
function Bento() {
  return (
    <section className="container mx-auto py-16 relative">
        <div className="line-bg absolute top-5 left-1/2 -translate-x-1/2 -z-0">
        <div style={{position:'relative',minWidth:'1140px',minHeight:'100px'}}>
            <Image src={BentoBG} alt={BentoBG} loading="lazy" fill={true}/>
        </div>
        </div>
      <div className="heading flex flex-col items-center justify-center gap-3 mb-6 relative z-10">
        <div className="badge w-[132px] h-[33px] p-2 bg-white rounded-[33px] shadow border border-gray-300 justify-center items-center gap-1 inline-flex">
          <MagicWand size={20} weight="fill" />
          <span className="text-slate-700 text-sm font-normal">Neden Biz?</span>
        </div>
        <h2 className="text-[48px] font-bold text-center">
          Everything Design 5 steps
        </h2>
        <p className="max-w-[628px] text-center text-slate-600 text-lg font-normal leading-[28.80px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid auto-rows-min grid-cols-3 gap-4 auto-cols-min">
        {bento_card.map((item, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl border-2 border-slate-400/10 p-4 dark:bg-neutral-900 flex flex-col justify-center gap-3 ${item.className}`}
          >
            <Image
              src={item.backgroundImage}
              alt={item.title}
              width={item.width}
              height={item.height}
            />
            <div className="title text-black text-2xl font-medium">
              {item.title}
            </div>
            <p className="description text-slate-600 text-sm font-normal leading-snug">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bento;
