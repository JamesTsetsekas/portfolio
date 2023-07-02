import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const Konami = () => {
  const [konamiCode, setKonamiCode] = useState('');
  const konamiPattern = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';
  const [showConfetti, setShowConfetti] = useState(false);

  const handleKeyDown = (event) => {
    const { key } = event;
    setKonamiCode((prevCode) => prevCode + key);
  };

  const handleDeviceMotion = (event) => {
    const { accelerationIncludingGravity } = event;
    const accelerationX = accelerationIncludingGravity.x || 0;
    const accelerationY = accelerationIncludingGravity.y || 0;
    const accelerationZ = accelerationIncludingGravity.z || 0;

    // Adjust these threshold values as needed for your specific device
    const shakeThreshold = 15;
    const shakeTimeout = 1000;

    if (
      Math.abs(accelerationX) > shakeThreshold ||
      Math.abs(accelerationY) > shakeThreshold ||
      Math.abs(accelerationZ) > shakeThreshold
    ) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, shakeTimeout);
    }
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
    window.addEventListener('devicemotion', handleDeviceMotion);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('devicemotion', handleDeviceMotion);
    };
  }, []);

  return (
    <div>
      {showConfetti && <Confetti />}
    </div>
  );
};

console.log('Wow, look at you checking the console! You must be a 1337 H4x0r! For fun, try entering the Konami Code on my page or shake your iPhone. (Konami Code: ↑ ↑ ↓ ↓ ← → ← → b a Enter)');

export default Konami;
