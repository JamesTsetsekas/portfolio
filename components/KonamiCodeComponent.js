import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const KonamiCodeComponent = () => {
  const [konamiCode, setKonamiCode] = useState('');
  const konamiPattern = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';
  const [showConfetti, setShowConfetti] = useState(false);

  const handleKeyDown = (event) => {
    const { key } = event;
    setKonamiCode((prevCode) => prevCode + key);
  };

  useEffect(() => {
    const checkKonamiCode = () => {
      if (konamiCode === konamiPattern) {
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 3000); // Show confetti for 3 seconds
      }
    };

    if (konamiCode.length >= konamiPattern.length) {
      setKonamiCode('');
    }

    checkKonamiCode();
  }, [konamiCode]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      {showConfetti && <Confetti />}
    </div>
  );
};

export default KonamiCodeComponent;
