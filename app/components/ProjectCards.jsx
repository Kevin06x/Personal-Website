"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Slide } from 'react-awesome-reveal';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const ProjectsData = [
  {
    id: 1,
    image: "/Images/savor2.png",
    title: "Savor",
    description: "An AI recipe-generating app, leveraging the use of Gemini API, Firebase, and React Native to build an application that promotes eco-friendliness and prevent food waste anywhere, anytime.",
    repo: "https://github.com/Kevin06x/Savor",
    demo: "https://www.youtube.com/watch?v=KScPfhTnDr8",
  },
  {
    id: 2,
    image: "/Images/insightfullanterns3.png",
    title: "Insightfullanterns",
    description: "A theraupeutic environment for annonymous users to share and speak about their hardships. Built with React, Firebase, and Google Entity & Sentiment analysis API.",
    repo: "https://github.com/Kevin06x/InsightfulLantern",
    demo: "https://insightfullantern.vercel.app/",
  },
  {
    id: 3,
    image: "/Images/web_logo2.png",
    title: "Kevin's Web Blog Post",
    description: "The Website was built through DJango, which allows seamless customization, data authorization, and design. It was built to record my journey as a programmer!",
    repo: "https://github.com/Kevin06x/Web-Blog-Post",
    demo: "https://kevin06x.pythonanywhere.com/",
  },
];

const FutureProjectsData = [
  {
    id: 4,
    image: "/Images/pocket2.png",
    title: "Pocket Monsters",
    description: "TBD",
    repo: "https://github.com/Kevin06x/Pocket-Monsters",
  },
  {
    id: 5,
    image: "/Images/chat2.png",
    title: "Community",
    description: "TBD",
    repo: "https://github.com/Kevin06x",
  },
  {
    id: 6,
    image: "/Images/minecraft2.png",
    title: "LOTM Mod",
    description: "TBD",
    repo: "https://github.com/Kevin06x/Web-Blog-Post",
  },
];

const ProjectCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const typingRef = useRef(null);

  const [isFutureVisible, setIsFutureVisible] = useState(false);
  const [startFutureTyping, setStartFutureTyping] = useState(false);
  const futureTypingRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsFutureVisible(true);
        }
      });
    });

    observer.observe(futureTypingRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isFutureVisible) {
      const timer = setTimeout(() => {
        setStartFutureTyping(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isFutureVisible]);

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const headerStyle = {
    color: 'white',
    fontWeight: 600,
    fontSize: '2.5rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'end',
    gap: '1rem',
    justifyContent: 'center',
    fontFamily:'Rowdies, sans-serif'
  };

  const lineStyle = {
    content: '""',
    height: '4px',
    width: '50%',
    maxWidth: '500px',
    backgroundColor: 'white',
    display: 'block'
  };
  

  return (
    <>
      <motion.div
            id='projects'
            initial={{ opacity: 0, scale: 0.5}}
            animate={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.5}} 
            className='container mx-auto'
            >
        <div className='text-center text-white font-bold mb-14 mt-5 sm:mt-0 text-xl' >
        <div className='mb-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
          <div style={lineStyle}></div><h3 style={headerStyle}>Projects</h3> <div style={lineStyle}></div>
        </div>
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
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-center gap-6'>
          {ProjectsData.map(({ id, image, title, description, demo, repo }) => {
            return (
              <div key={id} className='text-white shadow-md rounded-lg overflow-hidden relative group'>
                <img src={image} alt={title} className='rounded-lg w-[400px] h-[300px]' />
                <div className='absolute left-0 top-[-100%] text-white opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 backdrop-blur-sm duration-500'>
                  <div className='space-y-4'>
                    <Slide cascade>
                      <h1 className='text-2xl font-bold' style={{ fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal' }}>{title}</h1>
                      <div className="description-container sm:overflow-y-auto max-w-[300px] max-h-[200px]" style={{ fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal' }}>
                        {description}
                      </div>
                      <div style={{ fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal' }}>
                        <a href={repo} target="_blank">
                          <button className={`border border-white px-4 py-2 rounded-lg hover:bg-black/20  transition-transform duration-300 transform hover:scale-105 ${
                              isHovered ? 'shadow-lg' : ''
                            }`}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}>
                              Repository
                              </button></a>
                        <a href={demo} target="_blank">
                          <button className={`border border-white px-4 py-2 ml-4 rounded-lg hover:bg-black/20 transition-transform duration-300 transform hover:scale-105 ${
                              isHovered ? 'shadow-lg' : ''
                            }`}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}>
                            Demo
                            </button></a>
                      </div>
                    </Slide>
                    </div>
                </div>
              </div>
            );
          })}
        </div>

        <div ref={futureTypingRef} className='text-center text-white font-bold mb-14 pt-5 sm:mt-0 text-xl'>
          <span>
            {isFutureVisible && startFutureTyping && (
              <TypeAnimation
                sequence={[
                  "Things that I'm doing.",
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

        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-center gap-6'>
          {FutureProjectsData.map(({ id, image, title, description, repo }) => {
            return (
              <div key={id} className='text-white shadow-md rounded-lg overflow-hidden relative group'>
                <img src={image} alt={title} className='h-[300px] rounded-lg w-[400px]' />
                <div className='absolute left-0 top-[-100%] text-white opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 backdrop-blur-sm duration-500'>
                  <div className='space-y-4'>
                    <Slide cascade>
                      <h1 className='text-2xl font-bold' style={{ fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal' }}>{title}</h1>
                      <div className="description-container sm:overflow-y-auto max-w-[300px] max-h-[200px]" style={{ fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal' }}>
                        {description}
                      </div>
                      <div style={{ fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal' }}>
                        <a href={repo} target="_blank">
                          <button className={`border border-white px-4 py-2 rounded-lg hover:bg-black/20  transition-transform duration-300 transform hover:scale-105 ${
                              isHovered ? 'shadow-lg' : ''
                            }`}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}>
                              Repository
                              </button></a>
                      </div>
                    </Slide>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCards;
