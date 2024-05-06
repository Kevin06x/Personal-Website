"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Slide } from 'react-awesome-reveal';
import { TypeAnimation } from 'react-type-animation';

const ProjectsData = [
  {
    id: 1,
    image: "/Images/savor.png",
    title: "Savor",
    description: "App built at LA Hacks 2024",
    repo: "https://github.com/Kevin06x/Savor",
    demo: "https://www.youtube.com/watch?v=KScPfhTnDr8",
  },
  {
    id: 2,
    image: "/Images/insightfullanterns.png",
    title: "Insightfullanterns",
    description: "App built at Irvine Hacks 2024",
    repo: "https://github.com/Kevin06x/InsightfulLantern",
    demo: "https://insightfullantern.vercel.app/",
  },
  {
    id: 3,
    image: "/Images/web_logo.png",
    title: "Kevin's Web Blog Post",
    description: "A Web Blog Post built for Kevin K Kevin Kevin Kevin",
    repo: "https://github.com/Kevin06x/Web-Blog-Post",
    demo: "https://kevin06x.pythonanywhere.com/",
  },
];

const ProjectCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const typingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(typingRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setStartTyping(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <>
      <div className='container mx-auto'>
        <div className='text-center text-white font-bold mb-14 mt-5 sm:mt-0 text-xl'>
          <h1 className=' text-4xl pb-5' style={{ fontFamily: 'Rowdies, sans-serif', fontWeight: 600, fontStyle: 'normal' }}>Projects Section</h1>
          <span ref={typingRef}>
            {isVisible && startTyping && (
              <TypeAnimation
                sequence={[
                  "Things that I've done.",
                  1000,
                ]}
                wrapper="span"
                speed={20}
                repeat={0}
                style={{ fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal' }}
              />
            )}
          </span>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 place-items-center gap-6'>
          {ProjectsData.map(({ id, image, title, description, demo, repo }) => {
            return (
              <div key={id} className='text-white shadow-md rounded-lg overflow-hidden relative group'>
                <img src={image} alt={title} className='w-full max-w-[350px] h-[300px] rounded-lg' />
                <div className='absolute left-0 top-[-100%] text-white opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 backdrop-blur-sm duration-500'>
                  <div className='space-y-4'>
                    <Slide cascade>
                      <h1 className='text-3xl font-bold' style={{ fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal' }}>{title}</h1>
                      <div className="description-container sm:overflow-y-auto sm:max-h-[85px]" style={{ fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal' }}>
                        {description}
                      </div>
                      <div style={{ fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal' }}>
                        <a href={repo} target="_blank"><button className='border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300'>Repository</button></a>
                        <a href={demo} target="_blank"><button className='border border-white px-4 py-2 ml-4 rounded-lg hover:bg-black/20 duration-300'>Demo</button></a>
                      </div>
                    </Slide>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectCards;