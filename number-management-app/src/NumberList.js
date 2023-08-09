import React from 'react';

const NumberList = ({ numbers }) => {
  return (
    <div>
      <h2>Merged Numbers</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
