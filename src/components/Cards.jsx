import React from 'react';

const Cards = ({ children, bg = 'bg-gray-100' }) => {
  return (
    <div className={`${bg} p-16 rounded-lg shadow-md`}>
      {children}
    </div>
  );
};

export default Cards;
