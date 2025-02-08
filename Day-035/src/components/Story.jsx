import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import "./Story.css";

const Story = ({ stories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);

  // ✅ Moves to next story every 3 seconds
  const nextStory = useCallback(() => {
    setProgress(0); // Reset progress
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  }, [stories.length]);

  // ✅ Moves to previous story on left-click
  const prevStory = () => {
    setProgress(0); // Reset progress
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  // ✅ Handles auto-play and progress bar
  useEffect(() => {
    setProgress(0); // Reset progress on new story

    progressRef.current = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30); // Progress bar increases every 30ms

    const timer = setTimeout(nextStory, 3000); // Moves to next story in 3 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(progressRef.current);
    };
  }, [currentIndex, nextStory]);

  return (
    <div className="story-container">
      {/* 🔹 Progress Bar at Top */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      {/* 🔹 Image Display */}
      <img src={stories[currentIndex].image} alt="story" className="story-image" />

      {/* 🔹 Click areas for left (prev) & right (next) navigation */}
      <div className="click-area left" onClick={prevStory}></div>
      <div className="click-area right" onClick={nextStory}></div>
    </div>
  );
};

// ✅ Add PropTypes for validation
Story.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Story;
