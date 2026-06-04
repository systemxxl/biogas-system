import { Carousel } from "./Carousel";

export function TestimonialCarousel({ testimonials, itemsPerView = { base: 1, md: 2, lg: 3 } }) {
  const renderTestimonial = (item) => (
    <article
      key={item.name}
      className="rounded-xl bg-white/85 p-4 sm:p-7 text-zinc-900 shadow-xl backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <p className="text-4xl sm:text-5xl font-black leading-none text-emerald-700">"</p>

      <p className="-mt-4 sm:-mt-5 text-sm font-medium leading-7 text-zinc-700">{item.text}</p>
export function TestimonialCarousel({
  testimonials,
  itemsPerView = {
    base: 1,
    sm: 1,
    md: 2,
    lg: 3,
  },
}) {
  const renderTestimonial = (item) => (
    <article
      className="
        h-full
        min-w-0
        rounded-xl
        bg-white/85
        p-4 sm:p-6 lg:p-7
        text-zinc-900
        shadow-xl
        backdrop-blur
        transition-all
        duration-300
        hover:shadow-2xl
      "
    >
      <p className="text-4xl sm:text-5xl font-black leading-none text-emerald-700">"</p>

      <p
        className="
          -mt-3 sm:-mt-4
          text-sm sm:text-base
          leading-6 sm:leading-7
          text-zinc-700
          break-words
        "
      >
        {item.text}
      </p>

      <div className="mt-4 sm:mt-6 flex items-center gap-3">
        <img
          src="/assets/520757073_2951050318419308_839469618729031390_n.jpg"
          alt={item.name}
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover shrink-0"
        />
        <div>
          <p className="font-black text-sm sm:text-base">{item.name}</p>
          <p className="text-xs font-medium text-zinc-600">{item.role}</p>
          className="
            h-10 w-10
            sm:h-12 sm:w-12
            rounded-full
            object-cover
            shrink-0
          "
        />

        <div className="min-w-0">
          <p className="font-black text-sm sm:text-base break-words">{item.name}</p>

          <p className="text-xs sm:text-sm text-zinc-600 break-words">{item.role}</p>
        </div>
      </div>
    </article>
  );

  return (
    <Carousel items={testimonials} renderItem={renderTestimonial} itemsPerView={itemsPerView} />
    <Carousel
      items={testimonials}
      renderItem={renderTestimonial}
      itemsPerView={itemsPerView}
      className="px-2 sm:px-0"
    />
  );
}
