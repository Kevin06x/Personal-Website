import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './ExperienceCard';
import { FaDatabase, FaBook  } from "react-icons/fa";
import { GiChicken } from "react-icons/gi";
import { HiDesktopComputer } from "react-icons/hi";

const experiences = [
  {
    title: "SWE Fellow - Headstarter AI",
    icon: <HiDesktopComputer />,
    iconBg: "black",
    date: "July 2024 - September 2024",
    description: "Software Engineering Fellowship at Headstarter AI",
  },
  {
    title: "Data Analyst - Orange Coast College",
    icon: <FaDatabase/>,
    iconBg: "black",
    date: "October 2023 - Present",
    description: "Data Analyst for AIM Program under Orange Coast College",
  },
  {
    title: "Cashier - Chicciety",
    icon: <GiChicken />,
    iconBg: "black",
    date: "November 2022 - July 2023",
    description: "Cashier, Customer Service, and Stock Management at Chicciety",
  },
  {
    title: "Bookseller - Barnes & Nobles",
    icon: <FaBook />,
    iconBg: "black",
    date: "August - September 2022/2023",
    description: "Cashier, Bookseller, and Organizer at College Bookstore",
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