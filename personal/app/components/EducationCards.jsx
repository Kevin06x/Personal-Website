import React from 'react';

const EducationCards = ({ imgUrl, title, degree }) => {
  return (
    <div className='p-4 rounded-xl'>
      <div className="h-30 flex items-center justify-center rounded-t-xl overflow-hidden">
        <img src={imgUrl} alt={title} className="object-cover" style={{ maxHeight: '100%', maxWidth: '100%' }} />
      </div>
      <div className='pt-1 text-[#BFBABA] font-bold rounded-b-xl text-center md:text-lg' style={{ fontFamily: 'Source Code Pro, monospace', fontWeight: 900, fontStyle: 'normal' }}>
        <h5 className='pt-1 md:pt-4 text-lg'>{title}</h5>
        <h6 className='text-sm' style={{fontStyle:"italic"}}>{degree}</h6>
      </div>
    </div>
  );
};

export default EducationCards;