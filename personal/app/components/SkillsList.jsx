import { FaReact, FaJs, FaJava, FaPython, FaNodeJs } from 'react-icons/fa';
import { TbBrandReactNative, TbBrandCpp } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiFlask, SiDjango, SiMongodb } from "react-icons/si";


const skills = [
    { name: 'React.js', icon: <FaReact size={32}/> },
    { name: 'JavaScript', icon: <FaJs size={32}/> },
    { name: 'Java', icon: <FaJava size={32}/> },
    { name: 'C++', icon: <TbBrandCpp size={32}/> },
    { name: 'Python', icon: <FaPython size={32}/> },
    { name: 'Firebase', icon: <IoLogoFirebase size={32}/> },
    { name: 'Express', icon: <SiExpress size={32}/> },
    { name: 'Next.js', icon: <RiNextjsFill size={32}/> },
    { name: 'Node.js', icon: <FaNodeJs size={32}/> },
    { name: 'React Native', icon: <TbBrandReactNative size={32}/> },
    { name: 'Flask', icon: <SiFlask size={32}/> },
    { name: 'DJango', icon: <SiDjango size={32}/> },
    { name: 'MongoDB', icon: <SiMongodb size={32}/> },
];

const SkillsList = () => (
    <div className="text-lg md:text-xl text-[#BFBABA] font-bold flex flex-wrap items-center">
        {skills.map(skill => (
            <div key={skill.name} className="flex items-center mr-4 mb-4">
                <div className='mr-2'>{skill.icon}</div>
                <span>{skill.name}</span>
            </div>
        ))}
    </div>
);

export default SkillsList;
