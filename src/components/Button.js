// Example Button component
import React from 'react';

const Button = ({ onClick, value }) => {
  return (
    <button className="button" onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
