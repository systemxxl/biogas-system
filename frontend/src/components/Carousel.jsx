import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from '../hooks/useCarousel';

/**
 * A general-purpose Carousel component.
 * 
 * @param {Object} props
 * @param {Array} props.items - Array of items to display.
 * @param {Function} props.renderItem - Function to render each item.
 * @param {number} props.itemsPerView - Number of items to show at once.
 * @param {string} props.className - Additional classes for the container.
 * @param {string} props.gridClassName - Classes for the grid layout of each slide.
 */
export function Carousel({ 
  items, 
  renderItem, 
  itemsPerView = 1, 
  className = "", 
  gridClassName = "" 
}) {
  const {
    currentIndex,
    next,
    prev,
    goTo,
    totalSlides,
    handleMouseEnter,
    handleMouseLeave,
  } = useCarousel(items.length, itemsPerView);

  const itemGroups = Array.from({ length: totalSlides }, (_, groupIndex) => {
    const start = groupIndex * itemsPerView;
    return items.slice(start, start + itemsPerView);
  });

  if (!items || items.length === 0) return null;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Window */}
      <div className="overflow-hidden">
        {/* Sliding Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {itemGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`grid min-w-full gap-6 ${gridClassName}`}
              style={{
                gridTemplateColumns: itemsPerView > 1 ? `repeat(${itemsPerView}, minmax(0, 1fr))` : '1fr',
              }}
            >
              {group.map((item, itemIndex) => renderItem(item, (groupIndex * itemsPerView) + itemIndex))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Only show if there's more than one slide */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 rounded-full bg-emerald-700 p-2 text-white shadow-lg transition-all duration-300 hover:scale-125 hover:bg-emerald-800 md:left-0"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 rounded-full bg-emerald-700 p-2 text-white shadow-lg transition-all duration-300 hover:scale-125 hover:bg-emerald-800 md:right-0"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dot Indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? 'h-2 w-8 bg-emerald-700 shadow-md'
                    : 'h-2 w-2 bg-zinc-300 hover:bg-zinc-400'
                }`}
                aria-label={`Go to slide group ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
