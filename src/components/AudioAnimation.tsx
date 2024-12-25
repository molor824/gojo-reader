import React, { useState } from "react";
import { speak } from "../speech/speech";
import '../animation/animation.css'; 

interface AudioAnimationProps {
  word: string;

}

const AudioAnimation: React.FC<AudioAnimationProps> = ({ word }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    speak(word);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className={`hover:text-blue-300 hover:cursor-pointer ${isAnimating ? 'animate' : ''}`}>
      <h2 className={`text-3xl font-semibold`} onClick={handleClick}>
        🔊{word}
      </h2>
    </div>
  );
};

export default AudioAnimation; 