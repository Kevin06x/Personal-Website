import React from 'react';

const ExperienceCard = ({ experience }) => {
  const { title, company_name, icon, iconBg, date, points } = experience;

  return (
    <div className="vertical-timeline-element">
      {/* Icon */}
      <div className="vertical-timeline-element-icon" style={{ background: iconBg }}>
        {icon}
      </div>
      {/* Content */}
      <div className="vertical-timeline-element-content text-black">
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{company_name}</h4>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
