import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Coins, Recycle, Users, ArrowRight, ShieldCheck, Wrench, Flame, GraduationCap, Settings2, Sprout } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hot Flame Biogas — Clean Energy for a Better Tomorrow" },
      { name: "description", content: "We design and install modern biogas systems for homes, farms and institutions in Kenya." },
    ],
  }),
  component: Home,
});

const benefits = [
  { icon: Leaf, title: "Clean Energy", desc: "Biogas is a clean-burning fuel that keeps your home and environment safe." },
  { icon: Coins, title: "Saves Money", desc: "Reduce energy bills and save on firewood, charcoal and cooking costs." },
  { icon: Recycle, title: "Eco Friendly", desc: "Converts waste to energy and fertilizer, reducing pollution and emissions." },
  { icon: Users, title: "Sustainable Future", desc: "Empowering communities with renewable energy for generations to come." },
];

const services = [
  { icon: Flame, title: "Biogas Plant Installation", desc: "We design and install high-quality biogas digesters for homes, farms, institutions and communities." },
  { icon: Settings2, title: "Appliance Setup", desc: "Installation and configuration of biogas cookers, lamps, water heaters and generators." },
  { icon: Wrench, title: "Dormant System Restoration", desc: "We restore inactive or underperforming biogas systems to full working capacity safely." },
  { icon: Sprout, title: "Gas Value Addition", desc: "Maximize biogas value through purification, compression and innovative utilization." },
  { icon: GraduationCap, title: "Civic Education & Training", desc: "We empower communities with knowledge on clean energy, waste management and safe biogas use." },
  { icon: ShieldCheck, title: "Maintenance & Support", desc: "Regular maintenance, inspections and technical support for reliable, long-lasting performance." },
];

const howItWorks = [
  { n: 1, title: "Organic Waste", desc: "Animal waste, kitchen waste and other organic materials are collected." },
  { n: 2, title: "Digester Construction", desc: "Waste is fed into the airtight digester where bacteria break it down." },
  { n: 3, title: "Gas Production", desc: "Biogas is produced and stored in the dome as it rises." },
  { n: 4, title: "Clean Energy Use", desc: "The biogas is piped to your kitchen and used for clean cooking and heating." },
  { n: 5, title: "Organic Fertilizer", desc: "The leftover slurry is a rich organic fertilizer for your crops and soil." },
];

const projects = [
  { title: "Biogas Installation", desc: "Quality installations built to last for years." },
  { title: "Completed Digesters", desc: "Safe, durable and efficient biogas systems." },
  { title: "Digester Construction", desc: "From planning to completion, we deliver." },
  { title: "Inside Construction", desc: "Strong workmanship for maximum performance." },
  { title: "Media & Community", desc: "Educating and engaging communities for change." },
];

const testimonials = [
  { name: "Mary N.", role: "Homeowner, Narok", text: "Our cooking is now smoke-free and faster. Hot Flame Biogas did a great job. We are saving money and our kitchen is so much cleaner." },
  { name: "Joseph K.", role: "Farmer, Narok", text: "Reliable system, excellent installation and great follow-up support. The slurry has improved our farm yields significantly." },
  { name: "Grace M.", role: "School Administrator", text: "Hot Flame Biogas is professional, knowledgeable and passionate about clean energy. Highly recommended!" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
              Turning Organic Waste <br/>Into <span className="text-brand">Clean Energy</span> for <br/>a Better Tomorrow
            </h1>
            <p className="mt-5 text-brand italic text-lg font-medium">The Energy That Heals the Planet!</p>
            <p className="mt-4 text-muted-foreground max-w-xl">
              We design and install modern biogas systems, set up appliances, add value to biogas, educate communities, and restore biogas systems for reliable and affordable energy.
            </p>
            <div className="mt-7">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-md border-2 border-brand text-brand px-5 py-3 text-sm font-semibold hover:bg-brand hover:text-brand-foreground transition-colors">
                View Our Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-brand" /> Reliable. Clean. Sustainable.
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-surface border border-border" aria-hidden />
        </div>

        {/* Benefits */}
        <div className="mx-auto max-w-7xl px-6 mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-border bg-card p-5">
              <div className="w-11 h-11 rounded-lg bg-accent grid place-items-center text-brand mb-3">
                <b.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.2fr_1fr] gap-8 items-center">
          <div className="aspect-[3/4] rounded-2xl bg-surface-muted border border-border hidden lg:block" />
          <div>
            <p className="text-brand text-sm font-semibold tracking-widest mb-2">ABOUT HOTFLAME BIOGAS</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Powering Homes.<br/>Empowering Communities.</h2>
            <p className="mt-4 text-muted-foreground">
              Hotflame Biogas is a clean energy social enterprise based in Narok Town, Kenya. We provide end-to-end biogas solutions — from system design and installation to appliance setup, value addition, civic education and system restoration. Our mission is simple: to turn organic waste into clean energy, create healthier homes, and build a sustainable future for our communities.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              {[
                { t: "Quality", s: "You Can Trust" },
                { t: "Bioactive", s: "Solutions" },
                { t: "Community", s: "Focused" },
                { t: "After-Sales", s: "Support" },
              ].map((x) => (
                <div key={x.t}>
                  <div className="w-9 h-9 rounded-full bg-accent grid place-items-center text-brand mb-2">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div className="font-semibold">{x.t}</div>
                  <div className="text-muted-foreground">{x.s}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[3/4] rounded-2xl bg-surface-muted border border-border hidden lg:block" />
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-brand text-sm font-semibold tracking-widest">WHAT WE OFFER</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-brand text-brand-foreground grid place-items-center mb-4">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW BIOGAS WORKS */}
      <section className="py-20 bg-[oklch(0.35_0.08_150)] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-3xl md:text-4xl font-bold mb-12">How Biogas Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {howItWorks.map((step) => (
              <div key={step.n} className="rounded-xl bg-card text-card-foreground p-5">
                <div className="w-9 h-9 rounded-full bg-brand text-brand-foreground grid place-items-center font-bold mb-3">{step.n}</div>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{step.desc}</p>
                <div className="aspect-video rounded-lg bg-surface-muted border border-border" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS & IMPACT */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-brand text-sm font-semibold tracking-widest mb-2">OUR PROJECTS & IMPACT</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {projects.map((p) => (
              <div key={p.title} className="rounded-xl overflow-hidden border border-border bg-card">
                <div className="aspect-square bg-surface-muted" />
                <div className="p-4">
                  <h3 className="font-semibold text-sm">{p.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-3 text-sm font-semibold hover:bg-brand-dark">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-card p-6">
                <p className="text-muted-foreground italic mb-5">“{t.text}”</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-surface-muted border border-border" />
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

      {/* IMPACT BANNER */}
      <section className="py-16 bg-[oklch(0.3_0.07_150)] text-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Building a Cleaner,<br/>Healthier & Sustainable<br/>Narok County
            </h2>
            <p className="mt-4 text-brand italic">The Energy That Heals the Planet!</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { n: "120+", l: "Installations Completed" },
              { n: "800+", l: "Families Empowered" },
              { n: "25+", l: "Institutions Served" },
              { n: "5+", l: "Years of Experience" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-bold">{s.n}</div>
                <div className="text-xs text-white/80 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
