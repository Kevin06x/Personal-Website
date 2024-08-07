import React from 'react';
import EducationCards from './EducationCards';

const educationData = [
    {
        id: 1,
        title: "UC Santa Cruz",
        image: "/Images/ucsc2.png",
        degree: 'Computer Science B.S',
        time: '2024 - 2026',
        link: "https://www.ucsc.edu/",
    },
    {
        id: 2,
        title: "Orange Coast College",
        image: "/Images/occ2.png",
        degree: 'Computer Science A.S',
        time: '2022 - 2024',
        link: "https://orangecoastcollege.edu/",
    },
    {
        id: 3,
        title: "Muffles High School",
        image: '/Images/muffles2.png',
        degree: 'High School Diploma',
        time: '2018 - 2022',
        link: "https://www.mufflescollege.com/",
    },
];

const EducationSection = () => {
  return (
    <>
    <div className='grid md:grid-cols-3 gap-6 md:gap-8 '>
        {educationData.map((school) => (
        <EducationCards key={school.id} title={school.title} imgUrl={school.image} degree={school.degree} time={school.time} link={school.link}/>
        ))}
    </div>
    </>
  );
};

export default EducationSection