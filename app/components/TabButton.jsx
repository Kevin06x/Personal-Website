import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
}

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]';    
  return (
    <button onClick={selectTab} className='relative'>
      <p className={`mr-3 text-2xl font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div 
        animate={ active ? "active" : "default"}
        variants={variants}
        className='left-0 h-1 bg-gray-400 mt-1 mr-3'></motion.div>
    </button>
  );
};

export default TabButton;
