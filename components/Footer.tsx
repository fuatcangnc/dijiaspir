"use client";
import { ArrowUpRight, InstagramLogo, LinkedinLogo, MagicWand, TiktokLogo, YoutubeLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Logo from "@/public/logo.svg"
import Google from "@/public/google.png"
import Link from "next/link";
import CustomButton from "./CustomButton";
function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-10">
        <div className="container top-bar flex flex-col gap-3 justify-center my-4">
            <h2 className="uppercase text-3xl font-bold text-center">Hadi Hemen Başlayalım</h2>
            <p className="text-center">Bizimle iletişime geçerek teklifimize size sunabiliriz</p>
            <CustomButton className="bg-white self-center text-gray-950 font-semibold text-[17px] rounded-[12px] min-h-[60px] min-w-[200px] hover:bg-gray-200 transition ease-linear delay-150">Toplantı Planla<ArrowUpRight size={20} /></CustomButton>
        </div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-700/50 pt-8">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <Image src={Logo} alt="Logo" width={40} height={40} />
            <span className="ml-2 text-2xl font-bold">DIJIASPIR</span>
          </div>
          <p className="mb-4">
            UI UX DESIGN AGENCY FOR BETTER METRICS & ROIS.
          </p>
          <div className="flex space-x-4">
            <Image src={Google} alt="Clutch 1" width={170} height={50} />
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">KEŞFET</h3>
          <ul>
            <li className="mb-2"><Link href="/about" className="text-[13px] text-[#a3a3a3]">Hakkımızda</Link></li>
            <li className="mb-2"><Link href="/work" className="text-[13px] text-[#a3a3a3]">Çalışmalarımız</Link></li>
            <li className="mb-2"><Link href="/blog" className="text-[13px] text-[#a3a3a3]">BLOG</Link></li>
            <li className="mb-2"><Link href="/testimonials" className="text-[13px] text-[#a3a3a3]">Yorumlar</Link></li>
            <li className="mb-2"><Link href="/careers" className="text-[13px] text-[#a3a3a3]">Kariyer</Link></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">HİZMETLERİMİZ</h3>
          <ul>
            <li className="mb-2"><Link href="/about" className="text-[13px] text-[#a3a3a3]">Hakkımızda</Link></li>
            <li className="mb-2"><Link href="/work" className="text-[13px] text-[#a3a3a3]">Çalışmalarımız</Link></li>
            <li className="mb-2"><Link href="/blog" className="text-[13px] text-[#a3a3a3]">BLOG</Link></li>
            <li className="mb-2"><Link href="/testimonials" className="text-[13px] text-[#a3a3a3]">Yorumlar</Link></li>
            <li className="mb-2"><Link href="/careers" className="text-[13px] text-[#a3a3a3]">Kariyer</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">OR SEND US AN EMAIL AT</h3>
          <a href="mailto:hey@zensite.co" className="mb-4">HEY@ZENSITE.CO</a>
          <ul>
            <li className="mb-2">Circular Road, SINGAPORE</li>
            <li className="mb-2">Kuala Lumpur, MALAYSIA</li>
            <li className="mb-2">Jakarta, INDONESIA</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <Link href={'#'}><InstagramLogo size={24} weight="fill" className="opacity-100 hover:opacity-80" /></Link>
            <Link href={'#'}><LinkedinLogo  size={24} weight="fill" className="opacity-100 hover:opacity-80" /></Link>
            <Link href={'#'}><YoutubeLogo  size={24} weight="fill" className="opacity-100 hover:opacity-80" /></Link>
            <Link href={'#'}><TiktokLogo  size={24} weight="fill" className="opacity-100 hover:opacity-80" /></Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center border-t border-gray-700/50 pt-4">
        <p>©2024 ZENSITE, ALL RIGHTS RESERVED</p>
        <div className="mt-2">
          <a href="/sitemap" className="mx-2">SITEMAP</a>
          <a href="/privacy-policy" className="mx-2">PRIVACY POLICY</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
