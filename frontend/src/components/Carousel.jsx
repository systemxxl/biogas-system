import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCarousel } from "../hooks/useCarousel";
import { useBreakpoint } from "../hooks/useBreakpoint";

/**
 * @param {Object} props
 * @param {Array} props.items
 * @param {Function} props.renderItem
 * @param {number|{base?:number, sm?:number, md?:number, lg?:number}} props.itemsPerView
 * @param {string} props.className
 * @param {string} props.gridClassName
 */
export function Carousel({
  items,
  renderItem,
  itemsPerView = 1,
  className = "",
  gridClassName = "",
}) {
  const breakpoint = useBreakpoint(); // 'base' | 'sm' | 'md' | 'lg'

  // Resolve itemsPerView: number stays as-is; object picks the best match
  const resolvedItemsPerView = (() => {
    if (typeof itemsPerView === "number") return itemsPerView;
    const order = ["lg", "md", "sm", "base"];
    const priority = order.slice(order.indexOf(breakpoint));
    for (const bp of priority) {
      if (itemsPerView[bp] != null) return itemsPerView[bp];
    }
    return 1;
  })();

  const { currentIndex, next, prev, goTo, totalSlides, handleMouseEnter, handleMouseLeave } =
    useCarousel(items.length, resolvedItemsPerView);

  const itemGroups = Array.from({ length: totalSlides }, (_, groupIndex) => {
    const start = groupIndex * resolvedItemsPerView;
    return items.slice(start, start + resolvedItemsPerView);
  });

  if (!items || items.length === 0) return null;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {itemGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`grid min-w-full gap-4 sm:gap-6 ${gridClassName}`}
              style={{
                gridTemplateColumns:
                  resolvedItemsPerView > 1
                    ? `repeat(${resolvedItemsPerView}, minmax(0, 1fr))`
                    : "1fr",
              }}
            >
              {group.map((item, itemIndex) =>
                renderItem(item, groupIndex * resolvedItemsPerView + itemIndex),
              )}
            </div>
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-emerald-700 p-2 text-white shadow-lg transition-all duration-300 hover:scale-125 hover:bg-emerald-800 md:left-0"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-emerald-700 p-2 text-white shadow-lg transition-all duration-300 hover:scale-125 hover:bg-emerald-800 md:right-0"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-6 sm:mt-8 flex justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "h-2 w-8 bg-emerald-700 shadow-md"
                    : "h-2 w-2 bg-zinc-300 hover:bg-zinc-400"
                }`}
                aria-label={`Go to slide group ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
