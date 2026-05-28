import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Users, Heart, Target, Eye, CheckCircle2, Flame, Building2, Calendar } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hot Flame Biogas" },
      { name: "description", content: "We are a clean-energy startup transforming organic waste into sustainable biogas solutions across Kenya." },
    ],
  }),
  component: About,
});

const journey = [
  { year: "2019", text: "The idea was born in Narok Town — turning waste into clean energy." },
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

const testimonials = [
  { name: "Sr. Faith Wanjiku", role: "School Administrator", text: "Hotflame Biogas has improved our sanitation and saved us on energy costs. Their system is reliable and easy to use." },
  { name: "Joseph Leparan", role: "Farmer, Narok County", text: "We now cook with clean biogas and use the slurry in our farm. This is real transformation for our family." },
  { name: "Grace N.", role: "Business Owner", text: "Professional team, quality work, and great support. I highly recommend Hotflame Biogas." },
];

function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 bg-[oklch(0.25_0.05_150)] text-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold">About Hotflame Biogas</h1>
            <p className="text-brand italic mt-3 text-lg">The Energy That Heals the Planet</p>
            <p className="mt-5 text-white/85 max-w-xl">
              We are a clean-energy startup based in Narok Town, Kenya, transforming organic waste into affordable, sustainable biogas solutions for homes, institutions, and communities.
            </p>
            <div className="mt-6 flex flex-wrap gap-6 text-sm">
              {[
                { i: Leaf, t: "Clean Energy", s: "from Organic Waste" },
                { i: Users, t: "Sustainable", s: "for Generations" },
                { i: Heart, t: "Empowering", s: "Homes & Communities" },
              ].map((x) => (
                <div key={x.t} className="flex items-center gap-2">
                  <x.i className="w-5 h-5 text-brand" />
                  <div>
                    <div className="font-semibold">{x.t}</div>
                    <div className="text-xs text-white/75">{x.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/15" />
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 aspect-[3/4] rounded-2xl bg-surface-muted border border-border" />
            <div className="self-end aspect-square rounded-xl bg-surface border border-border" />
          </div>
          <div>
            <p className="text-brand text-sm font-semibold tracking-widest">OUR STORY</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">From a Vision to a Movement</h2>
            <p className="mt-4 text-muted-foreground">
              Hotflame Biogas was founded with a simple belief: clean energy should be accessible, affordable, and locally made. Starting in Narok Town, Kenya, we saw the challenge of waste and the opportunity to turn it into energy that transforms lives.
            </p>
            <p className="mt-3 text-muted-foreground">
              Today, we design and build high-quality biogas systems that help families, institutions, and communities save money, improve health, and protect our environment.
            </p>
            <div className="mt-6">
              <div className="font-display text-2xl italic text-brand">Mary M.</div>
              <div className="text-sm"><span className="font-semibold">Mary Mwami,</span> <span className="text-muted-foreground">Founder & CEO</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          {[
            { i: Target, t: "Our Mission", d: "To provide innovative biogas solutions that convert organic waste into clean energy, empowering communities and protecting the planet." },
            { i: Eye, t: "Our Vision", d: "A world where every home and institution has access to affordable, renewable energy for a healthier, sustainable future." },
            { i: Heart, t: "Our Core Values", d: "Sustainability, Integrity, Innovation, Quality, and Community. These values guide everything we do." },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-border bg-card p-6">
              <div className="w-11 h-11 rounded-lg bg-accent text-brand grid place-items-center mb-3">
                <x.i className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-brand">{x.t}</h3>
              <p className="text-sm text-muted-foreground mt-2">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-16 bg-[oklch(0.3_0.07_150)] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm tracking-widest text-white/90 mb-8">IMPACT AT A GLANCE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { i: Flame, n: "120+", l: "Installations Completed" },
              { i: Users, n: "800+", l: "Families Empowered" },
              { i: Building2, n: "25+", l: "Institutions Served" },
              { i: Calendar, n: "5+", l: "Years of Experience" },
            ].map((s) => (
              <div key={s.l}>
                <s.i className="w-7 h-7 mx-auto mb-2 text-brand" />
                <div className="text-3xl font-bold">{s.n}</div>
                <div className="text-xs text-white/80 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY + JOURNEY */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-brand text-sm font-semibold tracking-widest">WHY CHOOSE US?</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Quality. Reliability. Sustainability.</h2>
            <ul className="mt-6 space-y-3">
              {why.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand mt-0.5" /> {w}
                </li>
              ))}
            </ul>
            <div className="mt-8 aspect-[16/9] rounded-2xl bg-surface-muted border border-border max-w-md" />
          </div>
          <div>
            <p className="text-brand text-sm font-semibold tracking-widest">OUR JOURNEY</p>
            <ol className="mt-6 space-y-5 border-l-2 border-brand/30 pl-6">
              {journey.map((j) => (
                <li key={j.year} className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-brand" />
                  <div className="font-bold text-brand">{j.year}</div>
                  <div className="text-sm text-muted-foreground">{j.text}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-brand text-sm font-semibold tracking-widest">WHAT OUR CLIENTS SAY</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-card p-6">
                <p className="text-muted-foreground italic mb-5">“{t.text}”</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-surface-muted" />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[oklch(0.3_0.07_150)] text-white">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">Be Part of the Clean Energy Movement</h2>
            <p className="text-white/85 mt-1">Let's build a sustainable future — together.</p>
          </div>
          <a href="tel:+254792934102" className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-3 text-sm font-semibold hover:bg-brand-dark">
            Call Us Now
          </a>
        </div>
      </section>
    </>
  );
}
