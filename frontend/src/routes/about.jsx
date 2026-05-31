import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Calendar,
  CheckCircle2,
  Eye,
  Flame,
  HandHeart,
  Heart,
  Leaf,
  MessageCircle,
  Target,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us - Hot Flame Biogas" },
      {
        name: "description",
        content:
          "About Hotflame Biogas, a clean energy startup transforming organic waste into sustainable biogas solutions.",
      },
    ],
  }),
  component: About,
});

const journey = [
  { year: "2019", text: "The idea was born in Narok Town, turning waste into clean energy." },
  { year: "2020", text: "First pilot project completed for a local household." },
  { year: "2021", text: "Expanded to schools and small institutions in Narok County." },
  { year: "2022", text: "Reached over 100 installations and growing community impact." },
  { year: "2023", text: "Strengthened our team, systems, and outreach across the region." },
  { year: "2024+", text: "Scaling sustainable energy solutions for a brighter future." },
];

const why = [
  "Locally designed systems for local needs",
  "High-quality materials built to last",
  "Expert installation & after-sales support",
  "Affordable solutions with lasting impact",
  "Committed to a cleaner, greener planet",
];

const media = [
  "/assets/653370674_122161808180958675_2027784688729312152_n.jpg",
  "/assets/525235684_122105325746958675_8978318613629820094_n.jpg",
  "/assets/525562475_122105325824958675_2183548524119828192_n.jpg",
  "/assets/525607100_122105325632958675_1745228413023663076_n.jpg",
];

const testimonials = [
  {
    name: "Sr. Faith Wanjiku",
    role: "School Administrator",
    text: "Hotflame Biogas has improved our sanitation and saved us on energy costs. Their system is reliable and easy to use.",
  },
  {
    name: "Joseph Leparan",
    role: "Farmer, Narok County",
    text: "We now cook with clean biogas and use the slurry in our farm. This is real transformation for our family.",
  },
  {
    name: "Grace N.",
    role: "Business Owner",
    text: "Professional team, quality work, and great support. I highly recommend Hotflame Biogas.",
  },
];

function About() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
              About Hot Flame Biogas
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Turning Organic Waste Into Clean Energy
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              We are a clean energy enterprise based in Narok Town, Kenya. We design and install
              biogas systems that improve health, lower costs, and protect the environment.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-[520px]">
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 shadow-lg">
              <img
                src="/assets/biogas plant.jpeg"
                alt="Biogas plant in the field"
                className="h-[440px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-[0.95fr_1fr]">
          <div className="relative">
            <img
              src="/assets/650836646_122161105478958675_3445836754463755117_n.jpg"
              alt="Mary Mwami, Founder and CEO"
              className="h-[470px] w-full rounded-xl object-cover object-top shadow-xl"
            />
            <div className="absolute bottom-8 right-[-10px] hidden max-w-48 rounded-lg bg-white p-3 shadow-xl md:block">
              <img
                src="/assets/645415092_122159713724958675_2122180214002289931_n.jpg"
                alt="Biogas dome"
                className="h-24 w-full rounded object-cover"
              />
              <p className="mt-2 text-xs font-black text-zinc-700">
                Building sustainable solutions that power a cleaner tomorrow.
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-emerald-700">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-zinc-950 md:text-4xl">
              From a Vision to a Movement
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-zinc-700">
              Hotflame Biogas was founded with a simple belief: clean energy should be accessible,
              affordable, and locally made. Starting in Narok Town, Kenya, we saw the challenge of
              waste and the opportunity to turn it into energy that transforms lives.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-zinc-700">
              Today, we design and build high-quality biogas systems that help families,
              institutions, and communities save money, improve health, and protect our environment.
            </p>
            <p className="mt-7 text-4xl font-black italic text-emerald-700">Mary M.</p>
            <p className="mt-1 text-sm font-bold text-zinc-950">
              Mary Mwami, <span className="font-medium text-zinc-600">Founder & CEO</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3 md:px-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To provide innovative biogas solutions that convert organic waste into clean energy, empowering communities and protecting the planet.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "A world where every home and institution has access to affordable, renewable energy for a healthier, sustainable future.",
            },
            {
              icon: Heart,
              title: "Our Core Values",
              text: "Sustainability, Integrity, Innovation, Quality, and Community. These values guide everything we do.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-zinc-200 bg-white p-7 shadow-lg"
            >
              <item.icon className="mb-4 h-14 w-14 text-emerald-700" />
              <h3 className="font-black text-emerald-700">{item.title}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-zinc-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-emerald-950 py-12 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/assets/terrain.jpeg')" }}
        />
        <div className="relative mx-auto max-w-7xl rounded-xl border border-white/25 bg-white/10 px-5 py-8 backdrop-blur md:px-8">
          <p className="mb-8 text-center text-sm font-black uppercase tracking-[0.3em]">
            Impact at a Glance
          </p>
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {[
              { icon: Flame, number: "120+", label: "Installations Completed" },
              { icon: Users, number: "800+", label: "Families Empowered" },
              { icon: Building2, number: "25+", label: "Institutions Served" },
              { icon: Calendar, number: "5+", label: "Years of Experience" },
            ].map((item) => (
              <div key={item.label} className="md:border-r md:border-white/25 last:border-r-0">
                <item.icon className="mx-auto mb-2 h-9 w-9 text-white" />
                <p className="text-4xl font-black">{item.number}</p>
                <p className="mx-auto mt-1 max-w-28 text-xs font-bold text-white/85">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-emerald-700">
              Why Choose Us?
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-zinc-950 md:text-4xl">
              Quality. Reliability. Sustainability.
            </h2>
            <ul className="mt-6 space-y-3">
              {why.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-bold text-zinc-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                  {item}
                </li>
              ))}
            </ul>
            <img
              src="/assets/645415092_122159713724958675_2122180214002289931_n.jpg"
              alt="Completed biogas digester"
              className="mt-7 h-44 w-full max-w-md rounded-lg object-cover shadow-lg"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-emerald-700">
              Our Journey
            </p>
            <ol className="mt-6 space-y-5 border-l-2 border-emerald-700 pl-7">
              {journey.map((item) => (
                <li key={item.year} className="relative grid gap-3 sm:grid-cols-[80px_1fr]">
                  <span className="absolute -left-[35px] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-emerald-700 bg-white" />
                  <p className="font-black text-zinc-950">{item.year}</p>
                  <p className="text-sm font-medium leading-6 text-zinc-600">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        className="bg-cover bg-center py-14"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.82), rgba(255,255,255,.82)), url('/assets/terrain.jpeg')",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-sm font-black uppercase tracking-widest text-emerald-700">
            Media & Community Outreach
          </p>
          <h2 className="mt-2 text-3xl font-black text-zinc-950">
            Sharing Knowledge. Building Communities.
          </h2>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-zinc-700">
            We engage, educate, and collaborate with communities through media, trainings, and
            partnerships to promote clean energy solutions.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {media.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Media outreach ${index + 1}`}
                className="h-44 w-full rounded-lg object-cover shadow-lg"
              />
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-xl border border-white/70 bg-white/85 p-7 shadow-lg backdrop-blur"
              >
                <p className="text-5xl font-black leading-none text-emerald-700">“</p>
                <p className="-mt-5 text-sm font-medium leading-7 text-zinc-700">{item.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src="/assets/520757073_2951050318419308_839469618729031390_n.jpg"
                    alt=""
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-black text-zinc-950">{item.name}</p>
                    <p className="text-xs font-medium text-zinc-600">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 px-5 py-8 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 rounded-xl border border-white/30 bg-emerald-900 px-6 py-7">
          <div>
            <h2 className="text-2xl font-black md:text-3xl">
              Be Part of the Clean Energy Movement
            </h2>
            <p className="mt-1 text-sm font-medium text-white/85">
              Let's build a sustainable future, together.
            </p>
          </div>
          <a
            href="https://wa.me/254792934102"
            className="inline-flex items-center gap-2 rounded-md border border-white bg-emerald-700 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-emerald-900"
          >
            Chat on WhatsApp Now <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
