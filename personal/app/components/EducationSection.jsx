import React from 'react';
import EducationCards from './EducationCards';

const educationData = [
    {
        id: 1,
        title: "UC Irvine",
        image: "/Images/uci2.png",
        degree: 'Computer Science B.S',
    },
    {
        id: 2,
        title: "Orange Coast College",
        image: "/Images/occ2.png",
        degree: 'Computer Science A.S',

    },
    {
        id: 3,
        title: "Muffles High School",
        image: '/Images/muffles2.png',
        degree: 'High School Diploma',
    },
];

const EducationSection = () => {
  return (
    <>
    <div className='grid md:grid-cols-3 gap-6 md:gap-8 '>
        {educationData.map((school) => (
        <EducationCards key={school.id} title={school.title} imgUrl={school.image} degree={school.degree}/>
        ))}
    </div>
    </>
  );
};

export default EducationSection