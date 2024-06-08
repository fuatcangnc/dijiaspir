"use client"
import { Check, MagicWand } from '@phosphor-icons/react'
import React from 'react'
import PricingCard from './PricingCard'

function WorkPrice() {
  return (
    <section className="container mx-auto py-16 relative">
        <div className="heading flex flex-col items-center justify-center gap-3 mb-6 relative z-10">
        <div className="badge min-w-min h-[33px] p-2 bg-white rounded-[33px] shadow border border-gray-300 justify-center items-center gap-1 inline-flex">
          <MagicWand size={20} weight="fill" />
          <span className="text-slate-700 text-sm font-normal">KURUMSAL WEB TASARIM HİZMETLERİ

</span>
        </div>
        <h2 className="text-[48px] font-bold text-center">
        Fiyat Tablosu

        </h2>
        <p className="max-w-[628px] text-center text-slate-600 text-lg font-normal leading-[28.80px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='flex items-center gap-4 justify-center'>
        <PricingCard></PricingCard>
        <PricingCard></PricingCard>
        <PricingCard></PricingCard>
      </div>
      <div className="bg-[#2468FF] text-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Included with every plan</h2>
        <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
                <Check size={24} color='#fff' />
                <p>Unlimited design requests</p>
            </div>
            <div className="flex items-center gap-2">
                <Check size={24} color='#fff' />
                <p>Free & unlimited revisions</p>
            </div>
            <div className="flex items-center gap-2">
                <Check size={24} color='#fff' />
                <p>Stock photos via Shutterstock</p>
            </div>
            <div className="flex items-center gap-2">
                <Check size={24} color='#fff' />
                <p>Unlimited brands or businesses</p>
            </div>
            <div className="flex items-center gap-2">
                <Check size={24} color='#fff' />
                <p>Dedicated Project Manager & Designers</p>
            </div>
            <div className="flex items-center gap-2">
                <Check size={24} color='#fff' />
                <p>Deliverables in Figma, Canva & Adobe</p>
            </div>
            <div className="flex items-center gap-2">
                <Check size={24} color='#fff' />
                <p>Fast delivery in US, UK & AU time zones</p>
            </div>
            <div className="flex items-center gap-2">
                <Check size={24} color='#fff' />
                <p>White-label & agency-friendly</p>
            </div>
            <div className="flex items-center gap-2">
                <Check size={24} color='#fff' />
                <p>Real-time Slack collaboration</p>
            </div>
        </div>
    </div>
    <div className="text-center mt-6">
        <p>Need high-volume or custom solutions? <a href="#" className="text-blue-500 underline">Contact sales</a> <i className="fas fa-arrow-right"></i></p>
    </div>
    </section>
  )
}

export default WorkPrice