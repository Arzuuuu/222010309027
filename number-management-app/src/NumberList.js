import React from 'react';

const NumberList = ({ numbers }) => {
  const mergedNumbersString = numbers.join(', ');
  return (
    <div>
      <h2>Merged Numbers</h2>
      <p>{'{ "numbers :' + mergedNumbersString + '}'}</p>
    </div>
  );
};

export default NumberList;
