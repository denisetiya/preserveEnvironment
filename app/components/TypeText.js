import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      setStart(true)
    },1100)

    if (currentIndex < text.length && start) {
      const intervalId = setInterval(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [currentIndex, text,start]);

  return <div>{displayText}</div>;
};

export default TypingEffect;