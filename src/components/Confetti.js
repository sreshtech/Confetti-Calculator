import React from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

const Confetti = ({ isExploding }) => {
  return isExploding ? <ConfettiExplosion /> : null;
};

export default Confetti;
