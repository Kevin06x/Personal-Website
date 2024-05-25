"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <section className="container mx-auto px-4 lg:px-0">
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
        <motion.div 
            initial={{ opacity: 0, scale: 0.5}}
            animate={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.5}}
            className="col-span-7 lg:col-span-7 flex flex-col justify-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-3xl sm:text-5xl  lg:text-6xl font-extrabold ">
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-400' style={{fontFamily:'Rowdies, sans-serif', fontWeight: 600, fontStyle: 'normal'}}>Hello, I&apos;m Kevin,{" "}</span>
                <br></br>
                <span className="inline-block h-[100px] lg:h-[125px]">
                  <TypeAnimation
                      sequence={[
                          "a Computer Science Student",
                          1000,
                          "an Aspiring Software Engineer",
                          1000,
                          "an Avid & Productive Programmer",
                          1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      style={{fontFamily:'Rowdies, sans-serif', fontWeight: 600, fontStyle: 'normal'}}
                  />
                </span>
            </h1>
          <p className='text-[#ADB7BE] sm:text-lg text-lg mb-6 lg:text-xl' style={{fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal'}}>
           Welcome to my Portfolio Website!! Here you can see all of my Projects, Experiences, and Skills that I&apos;ve built as a Programmer. However, if you want to know about me more as a person, then there&apos;s that too! 
           If you feel the need to contact me or want more information then feel free to click on one of the links below.
          </p>
        <div>
          <a href="https://github.com/Kevin06x" target="_blank">
            <button className={`px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 hover:bg-slate-100 text-white mt-3 transition-transform duration-300 transform hover:scale-105 ${
          isHovered ? 'shadow-lg' : ''
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        >
                <span className='block bg-[#121212] rounded-full px-10 py-2'>
                  <strong className='text-lg' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal'}}><FaGithub className='mr-2'/>Github</strong></span>
            </button>
            </a>
            <a href="https://www.linkedin.com/in/kevin06x/" target='_blank'>
              <button className={`px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 hover:bg-slate-100 text-white mt-3 transition-transform duration-300 transform hover:scale-105 ${
          isHovered ? 'shadow-lg' : ''
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        >
                  <span className='block bg-[#121212] rounded-full px-10 py-2'>
                    <strong className='text-lg' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal'}}><FaLinkedin className='mr-2'/>LinkedIn</strong></span>
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5}}
          animate={{ opacity: 1, scale: 1}}
          transition={{ duration: 0.5}}
          className='col-span-5 lg:col-span-5 flex justify-center lg:justify-end'>
          <div className="rounded-full w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] relative pl-8 hidden lg:block overflow-hidden">
            <Image
              src="/Images/main3.jpg"
              alt="Main Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;