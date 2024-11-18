import React, { useState } from 'react';
import BoxColor from './BoxColor';

const MyFormChallenge = () => {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase().trim());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Write a colour..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="container">
        {colors.map((color) => (
          <BoxColor key={color} color={color} inputValue={inputValue} />
        ))}
      </div>
    </div>
  );
};

export default MyFormChallenge;
