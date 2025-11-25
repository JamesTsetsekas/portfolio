import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const Konami = () => {
  const [konamiCode, setKonamiCode] = useState('');
  const konamiPattern = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';
  const [showConfetti, setShowConfetti] = useState(false);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [showBitcoinMessage, setShowBitcoinMessage] = useState(false);
  const [showBitcoinConfetti, setShowBitcoinConfetti] = useState(false);
  const [bitcoinFeatureEnabled, setBitcoinFeatureEnabled] = useState(true); // Toggle for Bitcoin feature

  const handleKeyDown = (event) => {
    const { key } = event;
    setKonamiCode((prevCode) => prevCode + key);
  };

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      setShowConfetti(false);
      setShowBitcoinMessage(false);
      setShowBitcoinConfetti(false);
    }
  };

  const handleModalClick = (event) => {
    if (event.target.id === 'bitcoin-modal') {
      setShowBitcoinMessage(false);
      setShowBitcoinConfetti(false);
    }
  };

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return (price / 1000000).toFixed(1) + 'M';
    } else if (price >= 1000) {
      return (price / 1000).toFixed(1) + 'K';
    }
    return price;
  };

  const fetchBitcoinPrice = async () => {
    if (!bitcoinFeatureEnabled) return; // Check if Bitcoin feature is enabled

    try {
      const response = await fetch('https://bitpay.com/rates');
      const data = await response.json();
      const usdRate = data.data.find(currency => currency.code === 'USD');
      const price = usdRate.rate;
      setBitcoinPrice(price);

      const lastDismissed = localStorage.getItem('btcDismissedTime');
      const lastAllTimeHigh = localStorage.getItem('btcAllTimeHigh') || 0;
      const now = new Date().getTime();
      const oneDay = 24 * 60 * 60 * 1000;

      if (price > 150000 && (!lastDismissed || now - lastDismissed > oneDay)) {
        setShowBitcoinMessage(true);
        setShowBitcoinConfetti(true);
      } else {
        setShowBitcoinMessage(false);
        setShowBitcoinConfetti(false);
      }

      if (price > lastAllTimeHigh) {
        localStorage.setItem('btcAllTimeHigh', price);
      }
    } catch (error) {
      console.error('Error fetching bitcoin price:', error);
    }
  };

  useEffect(() => {
    const checkKonamiCode = () => {
      if (konamiCode === konamiPattern && !showConfetti) {
        setShowConfetti(true);
        setShowBitcoinMessage(false); // Don't show Bitcoin message when Konami code is entered
        setShowBitcoinConfetti(false); // Don't show Bitcoin confetti when Konami code is entered
        setTimeout(() => {
          setShowConfetti(false);
        }, 30000); // Show confetti for 30 seconds
      }
    };

    if (konamiCode.length >= konamiPattern.length) {
      setKonamiCode('');
    }

    checkKonamiCode();
  }, [konamiCode, showConfetti]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleEscape); // Add event listener for Escape key
    window.addEventListener('click', handleModalClick); // Add event listener for outside click
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleEscape); // Remove event listener for Escape key
      window.removeEventListener('click', handleModalClick); // Remove event listener for outside click
    };
  }, []);

  useEffect(() => {
    fetchBitcoinPrice();
    const intervalId = setInterval(fetchBitcoinPrice, 60000); // Fetch every minute
    return () => clearInterval(intervalId);
  }, [bitcoinFeatureEnabled]); // Re-fetch if the feature is toggled

  const dismissBitcoinMessage = () => {
    setShowBitcoinMessage(false);
    setShowBitcoinConfetti(false);
    localStorage.setItem('btcDismissedTime', new Date().getTime());
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none', // Allow clicks to pass through
    }}>
      {showConfetti && <Confetti />} {/* confetti for Konami code */}
      {showBitcoinMessage && (
        <div
          id="bitcoin-modal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
            pointerEvents: 'auto', // Allow clicks to be detected
          }}
        >
          <div
            style={{
              position: 'relative',
              textAlign: 'center',
              fontSize: '36px', // Larger font size
              fontWeight: 'bold',
              color: 'white', // White text color
              backgroundColor: '#FFA500', // Orange background color
              padding: '40px 20px 20px 20px', // Added padding to the top
              borderRadius: '10px', // Rounded corners
            }}
          >
            <button
              onClick={dismissBitcoinMessage}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white background
                border: 'none',
                borderRadius: '50%', // Circular button
                width: '30px',
                height: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '24px',
                color: 'white',
                cursor: 'pointer',
                transition: 'background 0.3s', // Smooth transition for background
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)'} // Change background on hover
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'} // Revert background on mouse leave
            >
              &times;
            </button>
            <div>
              BTC = {formatPrice(bitcoinPrice)}{bitcoinPrice > localStorage.getItem('btcAllTimeHigh') ? ' New all time high!' : ''}
              <br />
              <small style={{ fontSize: '12px' }}>Press Escape to acknowledge and hide</small>
            </div>
          </div>
        </div>
      )}
      {showBitcoinConfetti && <Confetti colors={['#FFA500']} />} {/* Orange confetti for Bitcoin price over $150,000 */}
    </div>
  );
};

console.log('Wow, look at you checking the console you must be a 1337 H4x0r! For fun try entering the Konami Code on my page! Enter on your keyboard ↑ ↑ ↓ ↓ ← → ← → b a.');

export default Konami;
