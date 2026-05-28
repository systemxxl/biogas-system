import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Leaf, Users, Building2, Flame, Wrench, GraduationCap, Settings2, CheckCircle2, Recycle, Mic2, Coins, Sprout, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Gallery — Hot Flame Biogas" },
      { name: "description", content: "Real projects, real impact: installations, restorations, training, appliances and fertilizer." },
    ],
  }),
  component: Projects,
});


const filters = [
  { id: "all", label: "All", icon: Leaf },
  { id: "installations", label: "Installations", icon: Wrench },
  { id: "restorations", label: "Restorations", icon: Settings2 },
  { id: "training", label: "Training", icon: Users },
  { id: "appliances", label: "Appliances", icon: Flame },
  { id: "fertilizer", label: "Fertilizer", icon: Leaf },
];


const items = [
  { cat: "installations", icon: Leaf, title: "Biogas Plant Installation", desc: "New household biogas plant installation for clean cooking and sustainable living." },
  { cat: "training", icon: Users, title: "Community Training", desc: "Training communities on biogas technology, operation and maintenance best practices." },
  { cat: "appliances", icon: Flame, title: "Appliance Setup", desc: "Installation of biogas stoves and appliances for efficient and safe energy use." },
  { cat: "installations", icon: CheckCircle2, title: "Completed Digester", desc: "Finished biogas digester ready for use, built to last and perform efficiently." },
  { cat: "installations", icon: Wrench, title: "Digester Construction", desc: "Ongoing construction of a durable biogas digester from start to finish." },
  { cat: "fertilizer", icon: Recycle, title: "Organic Fertilizer", desc: "High-quality organic fertilizer produced as a by-product of biogas systems." },
  { cat: "training", icon: Mic2, title: "Media & Awareness", desc: "Radio and media outreach to educate and inspire more communities to adopt biogas." },
  { cat: "installations", icon: Building2, title: "Institutional Project", desc: "Biogas solutions for schools, institutions and commercial establishments." },
];



const testimonials = [
  { name: "Mary N.", role: "Narok County, Kenya", text: "Hot Flame Biogas changed our lives. No more buying charcoal every week and our children no longer suffer from smoke in the kitchen." },
  { name: "Joseph K.", role: "Narok County, Kenya", text: "The biogas plant is reliable and easy to use. The organic fertilizer has improved our crops so much." },
  { name: "Grace M.", role: "School Administrator", text: "We installed a biogas system in our school and it has helped us save money and teach students about clean energy." },
];

function Projects() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? items : items.filter((i) => i.cat === active);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 bg-[oklch(0.25_0.05_150)] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-display text-4xl md:text-6xl font-bold">Projects / Gallery</h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Real projects. Real impact. From biogas plant installations and restorations to training, appliance setups, and media outreach – see how we're turning organic waste into clean energy and stronger communities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { i: Leaf, n: "120+", l: "Installations" },
              { i: Users, n: "800+", l: "Families Empowered" },
              { i: Building2, n: "25+", l: "Institutions Served" },
            ].map((s) => (
              <div key={s.l} className="inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/5 px-4 py-3">
                <s.i className="w-5 h-5 text-brand" />
                <div>
                  <div className="font-bold">{s.n}</div>
                  <div className="text-xs text-white/80">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((f) => {
              const isActive = active === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                    isActive
                      ? "bg-brand text-brand-foreground border-brand"
                      : "bg-card text-foreground border-border hover:border-brand hover:text-brand"
                  }`}
                >
                  <f.icon className="w-4 h-4" />
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((it) => (
              <div key={it.title} className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="aspect-[4/3] bg-surface-muted" />
                <div className="p-5">
                  <div className="w-9 h-9 rounded-full bg-accent text-brand grid place-items-center mb-3 -mt-10 border-4 border-card">
                    <it.icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{it.title}</h3>
                  <p className="text-xs text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border-2 border-brand/30 bg-card p-8 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-brand text-sm font-semibold tracking-widest mb-2">FEATURED SUCCESS STORY</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">From Waste to Clean Energy</h2>
              <p className="mt-4 text-muted-foreground">
                A household in Narok County transformed their daily routine with HOT FLAME BIOGAS. From smoky fires and high fuel costs to clean, affordable energy and organic fertilizer for their farm.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { i: Flame, t: "Cleaner Cooking", s: "No more smoke, healthier homes." },
                  { i: Coins, t: "Saves Money", s: "Up to 60% savings on energy costs." },
                  { i: Sprout, t: "Organic Fertilizer", s: "Boosts soil health and crop yields." },
                ].map((x) => (
                  <div key={x.t}>
                    <div className="w-10 h-10 rounded-full bg-accent text-brand grid place-items-center mb-2">
                      <x.i className="w-5 h-5" />
                    </div>
                    <div className="font-semibold text-sm text-brand">{x.t}</div>
                    <div className="text-xs text-muted-foreground">{x.s}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-[4/5] rounded-lg bg-surface-muted relative">
                <span className="absolute top-3 left-3 text-xs font-semibold bg-card px-2 py-1 rounded">Before</span>
              </div>
              <div className="aspect-[4/5] rounded-lg bg-surface-muted relative">
                <span className="absolute top-3 left-3 text-xs font-semibold bg-brand text-brand-foreground px-2 py-1 rounded">After</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-brand text-sm font-semibold tracking-widest">WHAT OUR CLIENTS SAY</p>
          <h2 className="text-center font-display text-3xl md:text-4xl font-bold mt-2 mb-12">Trusted by Families & Institutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
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
      <section className="py-16 bg-[oklch(0.3_0.07_150)] text-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to Start Your Biogas Journey?</h2>
            <p className="text-white/85 mt-2">Join 800+ families and institutions already enjoying clean energy, lower costs and a greener future.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href="tel:+254792934102" className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-3 text-sm font-semibold hover:bg-brand-dark">
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+254792934102" className="inline-flex items-center gap-2 rounded-md border-2 border-white text-white px-5 py-3 text-sm font-semibold hover:bg-white hover:text-foreground">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
