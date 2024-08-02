import React from 'react';

const Cards = ({ children, bg = 'bg-gray-100' }) => {
  return (
    <div className={`${bg} flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl p-6 rounded-lg shadow-md space-x-4`}>
      {children}
    </div>
  );
};

export default Cards;
