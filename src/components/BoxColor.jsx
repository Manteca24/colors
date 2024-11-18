import React, { useRef, useEffect } from 'react';

const BoxColor = ({ color, inputValue }) => {
  const boxRef = useRef(null); 

  useEffect(() => {
    if (boxRef.current) {
      const sameColor = inputValue === color;

      boxRef.current.style.backgroundColor = sameColor ? color : 'transparent';
      boxRef.current.style.color = sameColor ? (color === 'white' ? 'black' : 'white') : color;
      boxRef.current.textContent = sameColor
        ? `Yes, I'm ${color}`
        : `I'm not ${inputValue ? `${inputValue}` : ''}`;
    }
  }, [inputValue, color]); 

  return (
    <div
      ref={boxRef}
      className="box"
    />
  );
};

export default BoxColor;
