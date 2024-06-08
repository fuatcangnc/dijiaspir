import { Check, Circle } from '@phosphor-icons/react'
import React from 'react'

function PricingCard() {
  return (
    <div className="w-80 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-2">Advanced</h2>
        <p className="text-gray-700 mb-4">Create all of your everyday designs.</p>
        <p className="text-2xl font-bold text-blue-500 mb-4">USD $549/mo</p>
        <hr className="my-4"/>
        <h3 className="text-lg font-semibold mb-2">Features</h3>
        <ul className="mb-6">
            <li className="flex items-center text-gray-700 mb-2 gap-2"><Check size={24} color='#2468FF' />1 Daily Output </li>
            <li className="flex items-center text-gray-700 mb-2 gap-2"><Check size={24} color='#2468FF' />1-2 Day Delivery</li>
            <li className="flex items-center text-gray-400 gap-2"><i className="fas fa-lock mr-2"></i>Real Time Slack Communication</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Design Services</h3>
        <ul className="mb-6">
            <li className="flex items-center text-gray-700 mb-2 gap-2"><Check size={24} color='#2468FF' />Graphic Design </li>
            <li className="flex items-center text-gray-700 mb-2 gap-2"><Check size={24} color='#2468FF' />Web Design</li>
            <li className="flex items-center text-gray-700 mb-2 gap-2"><Check size={24} color='#2468FF' />Illustrations</li>
            <li className="flex items-center text-gray-400 gap-2"><i className="fas fa-lock mr-2"></i>Motion Graphics</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Tools</h3>
        <div className="flex space-x-2">
            <img src="https://placehold.co/40x40?text=Ps" alt="Adobe Photoshop icon" className="w-10 h-10" />
            <img src="https://placehold.co/40x40?text=Ai" alt="Adobe Illustrator icon" className="w-10 h-10" />
            <img src="https://placehold.co/40x40?text=Id" alt="Adobe InDesign icon" className="w-10 h-10" />
            <img src="https://placehold.co/40x40?text=Figma" alt="Figma icon" className="w-10 h-10" />
            <img src="https://placehold.co/40x40?text=Canva" alt="Canva icon" className="w-10 h-10" />
        </div>
    </div>
  )
}

export default PricingCard