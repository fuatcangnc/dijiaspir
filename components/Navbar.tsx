"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useAnimation, motion, useViewportScroll, useScroll, useMotionValueEvent, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import Logo from "@/public/logo.png";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 180) {
      setHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={hidden ? "hidden" : "visible"}
      initial="visible"
      whileHover={hidden ? "peeking" : "visible"}
      onFocusCapture={hidden ? () => setHidden(false) : undefined}
      variants={
        {
          visible: { y: "0%" },
          hidden: { y: "-90%" },
          peeking: { y: "0%", cursor: "pointer" },
        } as Variants
      }
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-10 flex w-full justify-center"
    >
      <div className="navbar-content  bg-white w-full shadow-md">
          <div className="top-bar bg-black py-4">
            <div className="container mx-auto">
              <span className="text-white text-sm">0553 080 5798</span>
            </div>
          </div>
          <div className="container mx-auto flex justify-between items-center py-4">
            <Image src={Logo} width={28} height={28} alt="logo" />
            <div className="block lg:hidden">
              <button onClick={toggleMenu} className="text-black focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
            <div className={`lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
              <div className="text-sm lg:flex-grow">
                <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-300 mr-4">
                  Home
                </a>
                <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-300 mr-4">
                  About
                </a>
                <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-300 mr-4">
                  Services
                </a>
                <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-300">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
    </motion.div>
  );
};


export default Navbar;
