import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Coins,
  Flame,
  Leaf,
  Recycle,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react";
import { TestimonialCarousel } from "../components/TestimonialCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hot Flame Biogas - Clean Energy for a Better Tomorrow" },
      {
        name: "description",
        content:
          "Modern biogas systems, appliance setup, civic education, restoration and clean-energy support in Kenya.",
      },
    ],
  }),
  component: Home,
});

const heroBadges = [
  {
    icon: Leaf,
    title: "Clean Energy",
    text: "Biogas is a clean-burning fuel that keeps your home and environment safe.",
  },
  {
    icon: Coins,
    title: "Saves Money",
    text: "Reduce energy bills and save on firewood, charcoal and cooking costs.",
  },
  {
    icon: Recycle,
    title: "Eco Friendly",
    text: "Converts waste to energy and fertilizer, reducing pollution and emissions.",
  },
  {
    icon: Users,
    title: "Sustainable Future",
    text: "Empowering communities with renewable energy for generations to come.",
  },
];

const process = [
  {
    title: "Organic Waste",
    text: "Animal waste, kitchen waste and other organic materials are collected.",
    image: "/assets/cow.jpeg",
  },
  {
    title: "Digester Construction",
    text: "Waste is fed into the airtight digester where bacteria break it down.",
    image: "/assets/645432563_122159713526958675_8841646942470576377_n.jpg",
  },
  {
    title: "Gas Production",
    text: "Biogas is produced and stored in the dome as it rises.",
    image: "/assets/645415092_122159713724958675_2122180214002289931_n.jpg",
  },
  {
    title: "Clean Energy Use",
    text: "The biogas is piped to your kitchen and used for clean cooking and heating.",
    image: "/assets/biogas stove.png",
  },
  {
    title: "Organic Fertilizer",
    text: "The leftover slurry is a rich organic fertilizer for your crops and soil.",
    image: "/assets/kale.jpeg",
  },
];

const projects = [
  {
    title: "Biogas Installation",
    text: "Quality installations built to last for years.",
    image: "/assets/644338450_122159713730958675_2879931428597694725_n.jpg",
  },
  {
    title: "Completed Digesters",
    text: "Safe, durable and efficient biogas systems.",
    image: "/assets/645415092_122159713724958675_2122180214002289931_n.jpg",
  },
  {
    title: "Digester Construction",
    text: "From planning to completion, we deliver.",
    image: "/assets/645432563_122159713526958675_8841646942470576377_n.jpg",
  },
  {
    title: "Inside Construction",
    text: "Strong workmanship for maximum performance.",
    image: "/assets/644007844_122159713376958675_7700649984692294465_n.jpg",
  },
  {
    title: "Media & Community",
    text: "Educating and engaging communities for change.",
    image: "/assets/653370674_122161808180958675_2027784688729312152_n.jpg",
  },
];
const services = [
  {
    title: "Biogas System Installation",
    text: "Professional design and installation of household, farm and institutional biogas systems.",
    icon: Flame,
  },
  {
    title: "Biogas Appliance Setup",
    text: "Installation of biogas stoves, lamps, water heaters and related equipment.",
    icon: Sprout,
  },
  {
    title: "System Maintenance",
    text: "Regular inspection, repairs and maintenance to keep your system running efficiently.",
    icon: ShieldCheck,
  },
  {
    title: "System Restoration",
    text: "Reviving old or non-functioning biogas plants and upgrading existing systems.",
    icon: Recycle,
  },
  {
    title: "Training & Civic Education",
    text: "Community education, user training and awareness programs on clean energy.",
    icon: Users,
  },
  {
    title: "Organic Fertilizer Solutions",
    text: "Helping farmers maximize the value of bio-slurry for healthier crops and soil.",
    icon: Leaf,
  },
];
const testimonials = [
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

const scrollingTestimonials = [...testimonials, ...testimonials];

const stats = [
  { number: "120+", label: "Installations Completed", icon: Flame },
  { number: "800+", label: "Families Empowered", icon: Users },
  { number: "25+", label: "Institutions Served", icon: ShieldCheck },
  { number: "5+", label: "Years of Experience", icon: CheckCircle2 },
];

function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Hot Flame Biogas
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Clean Biogas Systems for Homes and Communities
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600">
              We build trusted biogas solutions across Narok County, converting organic waste into
              affordable, smoke-free energy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/+254715613635"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-black text-white shadow-lg transition hover:bg-emerald-800"
              >
                Free Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-700 px-6 py-3 text-sm font-black text-emerald-700 transition hover:bg-emerald-50"
              >
                See Our Work
              </Link>
            </div>
          </div>

          <div className="relative mt-10 lg:mt-0 lg:w-[540px]">
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 shadow-lg">
              <img
                src="/assets/cow.jpeg"
                alt="Biogas farm installation"
                className="h-[440px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-xl max-w-[260px] border border-border -rotate-3">
              <p className="font-display text-base font-medium leading-snug mb-2">
                "We saved 70% on fuel costs in our first quarter."
              </p>
              <span className="text-xs opacity-50">— Farmer Joseph, Narok Central</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-4 bg-white pb-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-2 md:px-8 lg:grid-cols-4">
          {heroBadges.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
            >
              <item.icon className="mb-3 h-10 w-10 text-emerald-700" />
              <h3 className="font-black text-zinc-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f1e9]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 md:px-8 lg:grid-cols-[0.85fr_1.3fr_0.75fr]">
          <img
            src="/assets/525235684_122105325746958675_8978318613629820094_n.jpg"
            alt="Hotflame Biogas founder in radio studio"
            className="h-[360px] w-full rounded-tr-3xl object-cover object-top lg:rounded-none"
          />
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-emerald-700">
              About Hotflame Biogas
            </p>
            <h2 className="mt-2 max-w-xl text-3xl font-black leading-tight text-zinc-950 md:text-5xl">
              Powering Homes. Empowering Communities.
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-zinc-700">
              Hotflame Biogas is a clean energy social enterprise based in Narok Town, Kenya. We
              provide end-to-end biogas solutions from system design and installation to appliance
              setup, value addition, civic education and system restoration.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
              {[
                "Quality You Can Trust",
                "Bioactive Solutions",
                "Community Focused",
                "After-Sales Support",
              ].map((item) => (
                <div key={item}>
                  <Leaf className="mb-2 h-7 w-7 text-emerald-700" />
                  <p className="font-black text-zinc-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/assets/650836646_122161105478958675_3445836754463755117_n.jpg"
            alt="Hotflame Biogas founder"
            className="hidden h-[360px] w-full object-cover object-top lg:block"
          />
        </div>
      </section>
      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-700">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-black text-zinc-950 md:text-5xl">
              Our Biogas Solutions
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-zinc-600">
              We provide end-to-end biogas services from consultation and installation to
              maintenance, restoration and community training.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <service.icon className="mb-5 h-12 w-12 text-emerald-700 transition group-hover:scale-110" />

                <h3 className="text-xl font-black text-zinc-950">{service.title}</h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-emerald-950 py-16 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/assets/terrain.jpeg')" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="mb-10 text-center text-sm font-black uppercase tracking-[0.3em]">
            How Biogas Works
          </h2>
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {process.map((step, index) => (
              <div key={step.title} className="rounded-xl bg-white p-4 text-zinc-900 shadow-xl">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-700 text-xs font-black text-white">
                  {index + 1}
                </span>
                <h3 className="mt-3 font-black">{step.title}</h3>
                <p className="mt-2 min-h-14 text-xs font-medium leading-5 text-zinc-600">
                  {step.text}
                </p>
                <img
                  src={step.image}
                  alt={step.title}
                  className="mt-4 h-32 w-full rounded-lg object-cover"
                />
              </div>
            ))}
          </div>

          <h2 className="mb-8 mt-12 text-center text-sm font-black uppercase tracking-[0.3em]">
            Our Projects & Impact
          </h2>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-lg bg-white text-zinc-900 shadow-xl"
              >
                <img src={project.image} alt={project.title} className="h-36 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-black">{project.title}</h3>
                  <p className="mt-1 text-xs font-medium leading-5 text-zinc-600">{project.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-700 px-6 py-3 text-sm font-black text-white transition hover:bg-emerald-800"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-700">
              What Our Clients Say
            </p>
            <h2 className="mt-3 text-3xl font-black text-zinc-950 md:text-4xl">Testimonials</h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-zinc-600">
              Clients trust Hot Flame Biogas for reliable installations, clean cooking, and strong
              community support.
            </p>
          </div>
          
            <div className="mt-8">
              <TestimonialCarousel testimonials={testimonials} itemsPerView={3} />
            </div>

          
        </div>
      </section>

      <section className="relative overflow-hidden bg-emerald-950 py-12 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55"
          style={{ backgroundImage: "url('/assets/biogas plant.jpeg')" }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 rounded-2xl border border-white/25 bg-white/10 px-5 py-8 backdrop-blur md:grid-cols-[1fr_1.2fr] md:px-8">
          <div>
            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Building a Cleaner, Healthier & Sustainable across the country
            </h2>
            <p className="mt-3 text-xl font-black italic text-emerald-300">
              The Energy That Heals the Planet!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto mb-2 h-8 w-8 text-emerald-300" />
                <p className="text-3xl font-black">{stat.number}</p>
                <p className="mt-1 text-xs font-medium text-white/85">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
