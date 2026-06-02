import { useState, useEffect } from 'react';

export function useCarousel(totalItems, itemsPerView = 3, autoPlayDuration = 4000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const totalSlides = Math.ceil(totalItems / itemsPerView);

  // Reset to slide 0 when itemsPerView changes (e.g. on resize),
  // clamping to avoid pointing at a now-nonexistent slide.
  useEffect(() => {
    setCurrentIndex((prev) => (prev >= totalSlides ? 0 : prev));
  }, [totalSlides]);

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