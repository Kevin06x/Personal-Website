import React from 'react';

const TabButton = ({active, selectTab, children}) => {
const buttonClasses = active ? 'text-white border-b border-gray-600' : 'text-[#ADB7BE]'    
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 text-2xl font-semibold hover:text-white ${buttonClasses}`}>
        {children}
        </p>
    </button>
    );
};

export default TabButton