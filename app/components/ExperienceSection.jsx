import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './ExperienceCard';
import { FaDatabase, FaBook  } from "react-icons/fa";
import { GiChicken } from "react-icons/gi";

const experiences = [
  {
    title: "Data Analyst - Orange Coast College",
    icon: <FaDatabase/>,
    iconBg: "black",
    date: "October 2023 - Present",
    description: "I Worked as a Data Analyst",
  },
  {
    title: "Cashier - Chicciety",
    icon: <GiChicken />,
    iconBg: "black",
    date: "November 2022 - July 2023",
    description: "I worked as a Cashier",
  },
  {
    title: "Bookseller - Barnes & Nobles",
    icon: <FaBook />,
    iconBg: "black",
    date: "August - September 2022/2023",
    description: "I worked as a Bookseller",
  },
];

const ExperienceSection = () => {
  return (
    <>
    <div className='flex flex-col items-start '>
        <VerticalTimeline layout="1-column-left">
        {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
    </div>
    </>
  );
};

export default ExperienceSection;