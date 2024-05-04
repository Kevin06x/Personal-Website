"use client"
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const ProjectsData = [
    {
        id: 1,
        image: "/Images/savor.png",
        title: "Savor",
        description: "App built at LA Hacks 2024",
    },
    {
        id: 2,
        image: "/Images/insightfullanterns.png",
        title: "Insightfullanterns",
        description: "App built at Irvine Hacks 2024",
    },
    {
        id: 3,
        image: "/Images/web_logo.png",
        title: "Kevin's Web Blog Post",
        description: "A Web Blog Post built for Kevin K Kevin Kevin Kevin Kevin Kevinevin Kevin Kevin Kevin",
    },
]

const ProjectCards = () => {
  return (
    <div className='container mx-auto'>
        <h1 className='text-center text-white font-bold text-3xl mb-14 mt-5 sm:mt-0'>Projects Section</h1>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 place-items-center gap-6'>
            { ProjectsData.map(({ id, image, title, description}) => {
                return(
                    <div key={id} className='text-white shadow-md rounded-lg overflow-hidden relative group'>
                        <img src={image} alt={title} className='w-full max-w-[450px] h-[350px] rounded-lg'/>
                        <div className='absolute left-0 top-[-100%] text-white opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 backdrop-blur-sm duration-500'>
                            <div className='space-y-4'>
                                <Slide cascade>
                                    <h1 className='text-3xl font-bold'>{title}</h1>
                                        <div className="description-container">
                                          {description}
                                        </div>
                                    <div>
                                        <button className='border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300'>Repository</button>
                                        <button className='border border-white px-4 py-2 ml-4 rounded-lg hover:bg-black/20 duration-300'>Demo</button>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProjectCards
