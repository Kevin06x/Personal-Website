"use client";
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import SkillsList from './SkillsList';

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <SkillsList />
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className= 'text-lg md:text-xl text-white font-bold'>
               <li>UC</li>
               <li>Orange Coast College</li>
               <li>Muffles College High School</li>
            </ul>
        )
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <ul className= 'text-lg md:text-xl text-white font-bold'>
                <li>Data Analyst - Orange Coast College</li>
                <li>Bookseller - Barnes & Nobles</li>
                <li>Cashier - Chicciety</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-[auto,1fr] gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
        <div className="relative w-full h-[400px] sm:w-80 md:h-[500px]" style={{ paddingBottom: '75%' }}>
        <Image src='/Images/pfpbig.jpg' layout="fill" style={{borderRadius:'15px', objectFit: "cover"}} />       
             </div>
            <div className='mt-4 md:mt-0 text-l flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4 pt-5' style={{fontFamily: 'Work Sans, sans-serif', fontWeight: 600, fontStyle: 'normal'}}>About Me</h2>
                <p className='md:text-lg text-[#ADB7BE] sm:text-lg text-lg mb-6 lg:text-xl font-bold' style={{fontFamily: 'Work Sans, sans-serif', fontWeight: 600, fontStyle: 'normal'}}> I am a undergraduate Computer Science Student that is graduating in 2026 with a burning passion to learn
                    more about programming and love the process of creating/designing. I have experience working with React, React Native, JavaScript, Node.js,
                    Express.js, HTML, CSS, Git, Python, Java, C++, and many other technologies. I am a quick learner and I am always looking to expand
                    my knowledge and skill set through practical experiences and collabrations. If you have any cool ideas or want to collaberate then 
                    definitely let me know!
                </p>
                <div className='flex sm:flex-row flex-col mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        Skills
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        Education
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                        Experience
                    </TabButton>
                </div>
                <div className='mt-8' style={{ minHeight: '300px' }}>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;