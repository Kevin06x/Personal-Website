import React, { useState } from 'react';

const ExperienceCard = ({ experience }) => {
  const { title, icon, iconBg, date, description } = experience;

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className={`vertical-timeline-element`}>
      <div className={`transition-transform duration-300 transform hover:scale-105 ${
          isHovered ? 'shadow-lg' : ''
        }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover} >
          <div className="vertical-timeline-element-icon" style={{ background: iconBg }}>
            {icon}
          </div>
          <div className="vertical-timeline-element-content text-black" style={{backgroundColor: '#BFBABA', fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal'}}>
            <h3 className="vertical-timeline-element-title text-xl" >{title}</h3>
            <h5 className = "text-lg" style = {{ fontStyle:"italic" }}>{date}</h5>
            <p>{description}</p>
          </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
