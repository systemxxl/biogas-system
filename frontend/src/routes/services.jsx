import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Loader2
} from "lucide-react";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { mainServices as initialServices, workSteps, serviceBenefits } from "../lib/services";
import { getServices, getTestimonials } from "../lib/api/supabase.api";
import { getIcon } from "../lib/icons";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Hot Flame Biogas" },
      {
        name: "description",
        content:
          "End-to-end biogas services for homes, farms, schools and communities.",
      },
    ],
  }),
  component: Services,
});

const staticTestimonials = [
  {
    name: "Mary N.",
    role: "Homeowner, Narok",
    text: "Our cooking is now smoke-free and faster. Hotflame Biogas did a great job. We are saving money and our kitchen is so much cleaner.",
  },
  {
    name: "Joseph K.",
    role: "Farmer, Narok",
    text: "Reliable system, excellent installation and great follow-up support. The slurry has improved our farm yields significantly.",
  },
  {
    name: "Grace M.",
    role: "School Administrator",
    text: "Hotflame Biogas is professional, knowledgeable and passionate about clean energy. Highly recommended!",
  },
  {
    name: "Peter O.",
    role: "Dairy Farmer, Narok",
    text: "The system has reduced smoke in our kitchen and the slurry is helping our vegetables grow better than before.",
  },
  {
    name: "Ann W.",
    role: "Mother, Narok County",
    text: "We spend less on charcoal now. The team explained everything clearly and checked on us after installation.",
  },
  {
    name: "David K.",
    role: "Institution Manager",
    text: "Their work was organized from site assessment to training. The system is practical for our daily cooking needs.",
  },
  {
    name: "Mercy L.",
    role: "Smallholder Farmer",
    text: "Hotflame Biogas gave us a clean solution for waste and energy. It has made the compound cleaner and more useful.",
  },
  {
    name: "Samuel M.",
    role: "Community Leader",
    text: "The training helped our group understand biogas safety, maintenance and the value of organic fertilizer.",
  },
  {
    name: "Beatrice N.",
    role: "Homeowner, Narok",
    text: "We wanted something affordable and reliable. Their after-sales support has made the whole experience easier.",
  },
];

function Services() {
  const { data: dbServices, isLoading: servicesLoading } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
  });

  const { data: dbTestimonials } = useQuery({
    queryKey: ['testimonials'],
    queryFn: getTestimonials,
  });

  // Use DB data if available, otherwise fallback to static for a smooth first-time experience
  const services = dbServices?.length > 0 ? dbServices : initialServices;
  const testimonials = dbTestimonials?.length > 0 ? dbTestimonials : staticTestimonials;

  const processedServices = services.map(s => ({
    ...s,
    Icon: typeof s.icon === 'string' ? getIcon(s.icon) : s.icon
  }));

  return (
    <>
      <section className="relative min-h-[72vh] overflow-hidden text-white md:min-h-[76vh]">
        <img
          src="/assets/service-3.jpg"
          alt="Biogas digester construction"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-5 py-20 md:min-h-[76vh] md:px-8">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-[2px] w-12 rounded-full bg-emerald-700" />

              <p className="text-sm font-bold uppercase tracking-[0.35em] text-bg-emerald-700 drop-shadow-lg">
                Our Services
              </p>
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
              Biogas Solutions for{" "}
              <span className="font-bold" style={{ color: '#007957' }}>Homes, Farms</span> &
              Communities
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/90 drop-shadow-xl sm:text-lg">
              End-to-end biogas design, installation, appliance setup,
              restoration, training, and maintenance built for lasting local
              impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/+254715613635"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-black text-zinc-950 shadow-xl transition hover:scale-105 hover:bg-emerald-700"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-center text-sm font-black uppercase tracking-[0.3em] text-zinc-700">
            What We Offer
          </p>

          <h2 className="mt-2 text-center text-3xl font-black text-zinc-950 md:text-4xl">
            End-to-End Biogas Solutions
          </h2>

          {servicesLoading && services.length === 0 ? (
            <div className="mt-12 flex justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-emerald-700" />
            </div>
          ) : (
            <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {processedServices.map((item) => (
                <article
                    key={item.id || item.title}
                    className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                >
                    <div className="relative">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-40 w-full object-cover"
                    />

                    <span className="absolute left-4 top-4 grid h-14 w-14 place-items-center rounded-full border-4 border-white bg-emerald-700 text-white shadow-lg">
                        {item.Icon && <item.Icon className="h-6 w-6" />}
                    </span>
                    </div>

                    <div className="p-5">
                    <h3 className="font-black text-zinc-950">{item.title}</h3>

                    <p className="mt-2 text-sm font-medium leading-6 text-zinc-600">
                        {item.text}
                    </p>
                    </div>
                </article>
                ))}
            </div>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-emerald-950 py-16 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/assets/terrain.jpeg')" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="mb-10 text-center text-sm font-black uppercase tracking-[0.3em]">
            How We Work
          </h2>

          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {workSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-xl bg-white p-4 text-zinc-900 shadow-xl"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-700 text-sm font-black text-white">
                  {index + 1}
                </span>

                <h3 className="mt-3 text-sm font-black">{step.title}</h3>

                <p className="mt-2 min-h-14 text-xs font-medium leading-5 text-zinc-600">
                  {step.text}
                </p>

                <img
                  src={step.image}
                  alt={step.title}
                  className="mt-4 h-28 w-full rounded-lg object-cover"
                />
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-4 rounded-xl border border-white/25 bg-white/20 p-4 backdrop-blur md:grid-cols-2 lg:grid-cols-4">
            {serviceBenefits.map((item) => (
              <div
                key={item.title}
                className="rounded-lg bg-white/90 p-5 text-zinc-900"
              >
                <item.icon className="mb-3 h-10 w-10 text-emerald-700" />

                <h3 className="font-black text-emerald-700">{item.title}</h3>

                <p className="mt-2 text-sm font-medium leading-6 text-zinc-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-14 text-center text-sm font-black uppercase tracking-[0.3em]">
            What Our Clients Say
          </p>

          <div className="mt-8">
            <TestimonialCarousel testimonials={testimonials} itemsPerView={3} />
          </div>

          <div className="mt-10 grid items-center gap-6 rounded-xl border border-white/40 bg-emerald-900/80 p-6 md:grid-cols-[0.6fr_1.4fr_1fr]">
            <img
              src="/assets/650836646_122161105478958675_3445836754463755117_n.jpg"
              alt="Hotflame Biogas team member"
              className="hidden h-40 w-full rounded-lg object-cover object-top md:block"
            />

            <div>
              <h2 className="text-3xl font-black">
                Ready to Switch to Clean Energy?
              </h2>

              <p className="mt-1 text-2xl font-black text-emerald-300">
                Let's Build a Greener Future Together.
              </p>

              <p className="mt-2 text-sm text-white/80">
                Get a free consultation today and discover the power of biogas.
              </p>
            </div>

            <div className="space-y-3 text-sm font-bold text-white/85">
              <p>
                <MessageCircle className="mr-2 inline h-4 w-4" />
                +254 715 613 635
              </p>

              <p>
                <Mail className="mr-2 inline h-4 w-4" />
                hotflamebiogas@gmail.com
              </p>

              <a
                href="https://wa.me/+254715613635"
                className="inline-flex items-center gap-2 rounded-md border border-white px-5 py-3 font-black transition hover:bg-white hover:text-emerald-900"
              >
                Chat on WhatsApp <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
