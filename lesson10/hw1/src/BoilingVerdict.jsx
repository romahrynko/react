import React from 'react';

const BoilingVerdict = ({ celcius }) => {
  if (celcius >= 100) {
    return <p>The water would boil.</p>;
  }

  return <p>The water would not boil.</p>;
};

export default BoilingVerdict;
