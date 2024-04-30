"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-0">
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
        <div className="col-span-7 lg:col-span-7 flex flex-col justify-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold">
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-400'>Hello, I'm{" "}</span>
                <br></br>
                <TypeAnimation
                    sequence={[
                        "Kevin",
                        1000,
                        "Computer Science Student",
                        1000,
                        "a Software Engineer",
                        1000,
                        "an Avid Programmer",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg text-lg mb-6 lg:text-xl'>
           Welcome to my Portfolio Website! Here you can see all of my Projects, Experiences, and Skills that I've built as a Programmer. However, if you want to know about me more as a person, then there's that too! 
           If you feel the need to contact me or want more information then feel free to click on one of the links below.
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-600 hover:bg-slate-600 text-black'>
                <strong>Github</strong>
            </button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-600 hover:bg-slate-100 text-black mt-3 '>
                <span className='block bg-[#12121] hover:bg-slate-800 rounded-full px-5 py-2'><strong>LinkedIn</strong></span>
            </button>
          </div>
        </div>
        <div className='col-span-5 lg:col-span-5 flex justify-center lg:justify-end'>
          <div className="rounded-full w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
                <Image
                  src="/Images/main.jpg"
                  alt="Main Image"
                  width={400}
                  height={400}
                  style = {{borderRadius:"50%", paddingTop: "15px"}}
                />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
