import { useState, useEffect } from "react";

export function useCarousel(
  totalItems,
  itemsPerView = 3,
  autoPlayDuration = 4000
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const totalSlides = Math.max(
    1,
    Math.ceil(totalItems / itemsPerView)
  );

  useEffect(() => {
    setCurrentIndex((prev) =>
      prev >= totalSlides ? 0 : prev
    );
  }, [totalSlides]);

  useEffect(() => {
    if (!isAutoPlay || totalSlides <= 1) return;

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
    setCurrentIndex(
      (prev) => (prev - 1 + totalSlides) % totalSlides
    );
    setIsAutoPlay(false);
  };

  const goTo = (index) => {
    setCurrentIndex(index);
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