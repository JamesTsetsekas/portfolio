import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const konamiPattern = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter',
];

const Konami = () => {
  const [step, setStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowConfetti(false);
        setStep(0);
        return;
      }

      const nextStep = event.key === konamiPattern[step] ? step + 1 : 0;

      if (nextStep === konamiPattern.length) {
        setShowConfetti(true);
        setStep(0);
        return;
      }

      setStep(nextStep);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step]);

  useEffect(() => {
    if (!showConfetti) return undefined;

    const timeout = window.setTimeout(() => setShowConfetti(false), 8000);
    return () => window.clearTimeout(timeout);
  }, [showConfetti]);

  if (!showConfetti) return null;

  return (
    <div className="konami-layer" aria-hidden="true">
      <Confetti colors={['#a84e0c', '#f4f0e7', '#1b1b18']} recycle={false} numberOfPieces={360} />
    </div>
  );
};

export default Konami;
