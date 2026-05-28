import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Leaf, ShieldCheck, ArrowRight, Flame, Settings2, Wrench, Sprout, GraduationCap, Recycle, Coins, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Hot Flame Biogas" },
      { name: "description", content: "End-to-end biogas solutions: installation, appliance setup, restoration, training and maintenance." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Flame, title: "Biogas Plant Installation", desc: "We design and install high-quality biogas digesters for homes, farms, institutions and communities." },
  { icon: Settings2, title: "Appliance Setup", desc: "We install and configure biogas appliances including cookers, lamps, water heaters and generators." },
  { icon: Wrench, title: "Dormant System Restoration", desc: "We restore inactive or underperforming biogas systems to full working capacity safely and efficiently." },
  { icon: Sprout, title: "Gas Value Addition", desc: "We help you maximize biogas value through purification, compression and innovative utilization." },
  { icon: GraduationCap, title: "Civic Education & Training", desc: "We empower communities with knowledge on clean energy, waste management and safe biogas use." },
  { icon: ShieldCheck, title: "Maintenance & Support", desc: "We offer regular maintenance, inspections and technical support for reliable and long-lasting performance." },
];

const steps = [
  { n: 1, title: "Consultation", desc: "We understand your needs and recommend the best biogas solution." },
  { n: 2, title: "Site Assessment", desc: "We evaluate your site, waste availability and energy needs." },
  { n: 3, title: "Installation", desc: "Our team installs your system with quality and safety in mind." },
  { n: 4, title: "User Training", desc: "We train users on safe operation and efficient usage." },
  { n: 5, title: "After-Sales Support", desc: "We provide ongoing support, maintenance and system check-ups." },
];

const why = [
  { icon: Leaf, title: "Clean Energy", desc: "Biogas is a clean-burning fuel that reduces smoke, pollution and deforestation." },
  { icon: Coins, title: "Saves Money", desc: "Lower energy bills and less reliance on firewood, charcoal and LPG." },
  { icon: Recycle, title: "Sustainable Future", desc: "Converts waste to energy, improves sanitation and protects our environment." },
  { icon: ShieldCheck, title: "Reliable Systems", desc: "Built for durability with expert support you can always count on." },
];

function Services() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
              Our <span className="text-brand">Services</span>
            </h1>
            <h2 className="mt-4 font-display text-2xl md:text-3xl font-semibold">Clean Energy Solutions for Homes, Farms and Communities.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              We design, install and maintain biogas systems that turn organic waste into clean, affordable energy. From installation and appliance setup to training, restoration and ongoing support — we're with you every step of the way.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-md border-2 border-brand text-brand px-5 py-3 text-sm font-semibold hover:bg-brand hover:text-brand-foreground">
                View Our Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {[ { i: Leaf, t: "Sustainable" }, { i: ShieldCheck, t: "Reliable" }].map((c) => (
                <span key={c.t} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5">
                  <c.i className="w-3.5 h-3.5 text-brand" /> {c.t}
                </span>
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-surface border border-border" />
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-sm tracking-widest">WHAT WE OFFER</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">End-to-End Biogas Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="aspect-[16/9] bg-surface-muted relative">
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-brand text-brand-foreground grid place-items-center">
                    <s.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 bg-[oklch(0.35_0.08_150)] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-3xl md:text-4xl font-bold mb-12">How We Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl bg-card text-card-foreground p-5">
                <div className="w-9 h-9 rounded-full bg-brand text-brand-foreground grid place-items-center font-bold mb-3">{s.n}</div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">{s.desc}</p>
                <div className="aspect-video rounded-lg bg-surface-muted" />
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {why.map((w) => (
              <div key={w.title} className="rounded-xl bg-card text-card-foreground p-5">
                <div className="w-10 h-10 rounded-lg bg-accent text-brand grid place-items-center mb-3">
                  <w.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm text-brand">{w.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 bg-[oklch(0.3_0.07_150)] text-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to Switch to Clean Energy?</h2>
            <p className="text-brand italic mt-2">Let's Build a Greener Future Together.</p>
            <p className="text-white/80 mt-3">Get a free consultation today and discover the power of biogas.</p>
          </div>
          <div className="rounded-xl bg-card text-card-foreground p-6 grid gap-3 text-sm">
            <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-brand" /> +254 799 813 185</div>
            <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-brand" /> info@hotflamebiogas.co.ke</div>
            <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-brand" /> Narok Town, Kenya</div>
          </div>
        </div>
      </section>
    </>
  );
}
