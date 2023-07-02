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
        }, 30000); // Show confetti for 30 seconds
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

console.log('Wow, look at you checking the console you must be a 1337 H4x0r! For fun try entering the Konami Code on my page! Enter on your keyboard ↑ ↑ ↓ ↓ ← → ← → b a.')

export default KonamiCodeComponent;
