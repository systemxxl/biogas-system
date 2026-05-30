import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from '../hooks/useCarousel';

export function TestimonialCarousel({ testimonials, itemsPerView = 3 }) {
  const {
    currentIndex,
    next,
    prev,
    goTo,
    totalSlides,
    handleMouseEnter,
    handleMouseLeave,
  } = useCarousel(testimonials.length, itemsPerView);

  const testimonialGroups = Array.from({ length: totalSlides }, (_, groupIndex) => {
    const start = groupIndex * itemsPerView;
    return testimonials.slice(start, start + itemsPerView);
  });

  return (
    <div
      className="relative"
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
          {testimonialGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="grid min-w-full gap-6"
              style={{
                gridTemplateColumns: `repeat(${itemsPerView}, minmax(0, 1fr))`,
              }}
            >
              {group.map((item) => (
                <article
                  key={item.name}
                  className="rounded-xl bg-white/85 p-7 text-zinc-900 shadow-xl backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <p className="text-5xl font-black leading-none text-emerald-700">
                    "
                  </p>

                  <p className="-mt-5 text-sm font-medium leading-7 text-zinc-700">
                    {item.text}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <img
                      src="/assets/520757073_2951050318419308_839469618729031390_n.jpg"
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />

                    <div>
                      <p className="font-black">{item.name}</p>
                      <p className="text-xs font-medium text-zinc-600">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute -left-5 top-1/2 -translate-y-1/2 rounded-full bg-emerald-700 p-2 text-white shadow-lg transition-all duration-300 hover:scale-125 hover:bg-emerald-800 md:left-0"
        aria-label="Previous testimonials"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={next}
        className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full bg-emerald-700 p-2 text-white shadow-lg transition-all duration-300 hover:scale-125 hover:bg-emerald-800 md:right-0"
        aria-label="Next testimonials"
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
            aria-label={`Go to testimonial group ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}