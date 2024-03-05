import { useState, useEffect } from 'react';

const ColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    // Generate random colors on component mount
    generateRandomColors();

    // Function to generate random colors
    function generateRandomColors() {
      const randomBackgroundColor = getRandomColor();
      const randomTextColor = getRandomColor();
      setBackgroundColor(randomBackgroundColor);
      setTextColor(randomTextColor);
    }

    // Function to get a random color
    function getRandomColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    // Add event listener to handle color change on window refresh
    const handleRefresh = () => {
      generateRandomColors();
    };
    window.addEventListener('beforeunload', handleRefresh);

    // Cleanup event listener
    return () => window.removeEventListener('beforeunload', handleRefresh);
  }, []);

  return (
    <div style={{ backgroundColor, color: textColor, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Hello, Alan!</h1>
    </div>
  );
};

export default ColorChanger;