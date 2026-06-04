import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCarousel } from "../hooks/useCarousel";
import { useBreakpoint } from "../hooks/useBreakpoint";

export function Carousel({
  items,
  renderItem,
  itemsPerView = 1,
  className = "",
  gridClassName = "",
}) {
  const breakpoint = useBreakpoint();

  const resolvedItemsPerView = (() => {
    if (typeof itemsPerView === "number") {
      return itemsPerView;
    }

    switch (breakpoint) {
      case "lg":
        return itemsPerView.lg ?? itemsPerView.md ?? itemsPerView.sm ?? itemsPerView.base ?? 1;

      case "md":
        return itemsPerView.md ?? itemsPerView.sm ?? itemsPerView.base ?? 1;

      case "sm":
        return itemsPerView.sm ?? itemsPerView.base ?? 1;

      default:
        return itemsPerView.base ?? 1;
    }
  })();

  const { currentIndex, next, prev, goTo, totalSlides, handleMouseEnter, handleMouseLeave } =
    useCarousel(items.length, resolvedItemsPerView);

  const itemGroups = Array.from({ length: totalSlides }, (_, groupIndex) => {
    const start = groupIndex * resolvedItemsPerView;

    return items.slice(start, start + resolvedItemsPerView);
  });

  if (!items?.length) return null;

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {itemGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`min-w-full grid gap-4 sm:gap-6 ${gridClassName}`}
              style={{
                gridTemplateColumns:
                  resolvedItemsPerView > 1
                    ? `repeat(${resolvedItemsPerView}, minmax(0, 1fr))`
                    : "1fr",
              }}
            >
              {group.map((item, itemIndex) => (
                <div key={groupIndex * resolvedItemsPerView + itemIndex} className="min-w-0">
                  {renderItem(item, groupIndex * resolvedItemsPerView + itemIndex)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        <>
          <button
            onClick={prev}
            className="
              hidden sm:flex
              absolute
              left-2 lg:-left-4
              top-1/2
              -translate-y-1/2
              z-10
              rounded-full
              bg-emerald-700
              p-2
              text-white
              shadow-lg
              hover:scale-110
              transition
            "
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={next}
            className="
              hidden sm:flex
              absolute
              right-2 lg:-right-4
              top-1/2
              -translate-y-1/2
              z-10
              rounded-full
              bg-emerald-700
              p-2
              text-white
              shadow-lg
              hover:scale-110
              transition
            "
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 h-2 bg-emerald-700" : "w-2 h-2 bg-zinc-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
