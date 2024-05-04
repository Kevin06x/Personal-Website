import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './ExperienceCard';
import { FaDatabase, FaBook  } from "react-icons/fa";
import { GiChicken } from "react-icons/gi";

const experiences = [
  {
    title: "Data Analyst",
    company_name: "Orange Coast College",
    icon: <FaDatabase/>,
    iconBg: "black",
    date: "October 2023 - Present",
    points: [
      "Analyzing Data",
      "Collaberating with team",
      "Troubleshooting systems",
      "Coding a web pages",
    ],
  },
  {
    title: "Cashier",
    company_name: "Chicciety",
    icon: <GiChicken />,
    iconBg: "black",
    date: "November 2022 - September 2023",
    points: [
      "Communicated Efficiently with team members and customers",
      "Provided excellent service",
      "Worked in a stressful environment",
      "Regularly cooked food and helped inventory",
    ],
  },
  {
    title: "Bookseller",
    company_name: "Barnes & Nobles",
    icon: <FaBook />,
    iconBg: "black",
    date: "August-September 2022/2023",
    points: [
      "Trouble Shooting Systems",
      "Inputting, Outputting and Managing databases",
      "Worked as customer Service",
      "Quick on my feet",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <>
    <div className='flex flex-col items-start '>
        <VerticalTimeline>
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