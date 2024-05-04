import React, { useState } from 'react';
import Image from "next/image";

const EducationCards = ({ imgUrl, title, degree, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
      <div
        className={`p-4 rounded-xl transition-transform duration-300 transform hover:scale-105 ${
          isHovered ? 'shadow-lg' : ''
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className="h-30 flex items-center justify-center rounded-t-xl overflow-hidden">
          <Image src={imgUrl} alt={title} className="object-cover" width={300} height={300} style={{ maxHeight: '100%', maxWidth: '100%' }} />
        </div>
        <div className='pt-1 text-[#BFBABA] font-bold rounded-b-xl text-center md:text-lg' style={{ fontFamily: 'Source Code Pro, monospace', fontWeight: 900, fontStyle: 'normal' }}>
          <h5 className='pt-1 md:pt-4 text-lg'>{title}</h5>
          <h6 className='text-sm' style={{fontStyle:"italic"}}>{degree}</h6>
        </div>
      </div>
    </a>
  );
};

export default EducationCards;
