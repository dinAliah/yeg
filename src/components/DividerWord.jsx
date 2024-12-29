import React from 'react';

const DividerWord = ({ words }) => {
  return (
    <div className="flex flex-row items-center">
      {words.map((word, index) => (
        <React.Fragment key={index}>
          {word}
          {index !== words.length - 1 && <span className="relative inline-block h-0.5 w-20 bg-gray-500 mx-2"></span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DividerWord;
