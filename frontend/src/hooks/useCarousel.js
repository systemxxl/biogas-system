import { useState, useEffect } from 'react';

/**
 * Custom hook for carousel functionality
 * @param {number} itemsPerView - Number of items visible at once (default: 3)
 * @param {number} autoPlayDuration - Duration in ms before auto-play rotates (default: 5000)
 * @returns {Object} - { currentIndex, next, prev, goTo, totalSlides }
 */
export function useCarousel(totalItems, itemsPerView = 3, autoPlayDuration = 4000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  
  const totalSlides = Math.ceil(totalItems / itemsPerView);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, autoPlayDuration);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides, autoPlayDuration]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlay(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlay(false);
  };

  const goTo = (index) => {
    setCurrentIndex(index % totalSlides);
    setIsAutoPlay(false);
  };

  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  return {
    currentIndex,
    next,
    prev,
    goTo,
    totalSlides,
    handleMouseEnter,
    handleMouseLeave,
  };
}
