import { Carousel } from './Carousel';

export function TestimonialCarousel({ testimonials, itemsPerView = 3 }) {
  const renderTestimonial = (item) => (
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
  );

  return (
    <Carousel 
      items={testimonials} 
      renderItem={renderTestimonial} 
      itemsPerView={itemsPerView} 
    />
  );
}