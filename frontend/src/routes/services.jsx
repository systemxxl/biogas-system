import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Coins,
  Flame,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Recycle,
  RotateCcw,
  Settings2,
  ShieldCheck,
  Sprout,
  Users,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Hot Flame Biogas" },
      {
        name: "description",
        content: "End-to-end biogas services for homes, farms, schools and communities.",
      },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Flame, title: "Biogas Plant Installation", text: "We design and install high-quality biogas digesters for homes, farms, institutions and communities.", image: "/assets/645415092_122159713724958675_2122180214002289931_n.jpg" },
  { icon: Settings2, title: "Appliance Setup", text: "We install and configure biogas appliances including cookers, lamps, water heaters and generators.", image: "/assets/biogas stove.png" },
  { icon: RotateCcw, title: "Dormant System Restoration", text: "We restore inactive or underperforming biogas systems to full working capacity safely and efficiently.", image: "/assets/project-3.jpg" },
  { icon: Sprout, title: "Gas Value Addition", text: "We help you maximize biogas value through purification, compression and innovative utilization.", image: "/assets/chuff cutter biogas powerd.png" },
  { icon: Users, title: "Civic Education & Training", text: "We empower communities with knowledge on clean energy, waste management and safe biogas use.", image: "/assets/653370674_122161808180958675_2027784688729312152_n.jpg" },
  { icon: Wrench, title: "Maintenance & Support", text: "We offer regular maintenance, inspections and technical support for reliable and long-lasting performance.", image: "/assets/565137370_122134110734958675_5886927147664881699_n.jpg" },
];

const steps = [
  { title: "Consultation", text: "We understand your needs and recommend the best biogas solution.", image: "/assets/525235684_122105325746958675_8978318613629820094_n.jpg" },
  { title: "Site Assessment", text: "We evaluate your site, waste availability and energy needs.", image: "/assets/645415092_122159713724958675_2122180214002289931_n.jpg" },
  { title: "Installation", text: "Our team installs your system with quality and safety in mind.", image: "/assets/644338450_122159713730958675_2879931428597694725_n.jpg" },
  { title: "User Training", text: "We train users on safe operation and efficient usage.", image: "/assets/653370674_122161808180958675_2027784688729312152_n.jpg" },
  { title: "After-Sales Support", text: "We provide ongoing support, maintenance and system check-ups.", image: "/assets/565137370_122134110734958675_5886927147664881699_n.jpg" },
];

const benefits = [
  { icon: Leaf, title: "Clean Energy", text: "Biogas is a clean-burning fuel that reduces smoke, pollution and deforestation." },
  { icon: Coins, title: "Saves Money", text: "Lower energy bills and less reliance on firewood, charcoal and LPG." },
  { icon: Recycle, title: "Sustainable Future", text: "Converts waste to energy, improves sanitation and protects our environment." },
  { icon: ShieldCheck, title: "Reliable Systems", text: "Built for durability with expert support you can always count on." },
];

const testimonials = [
  { name: "Mary N.", role: "Narok Town", text: "Hotflame Biogas installed our system professionally and trained us well. Cooking is now easy and clean." },
  { name: "Joseph K.", role: "Ololulunga, Narok", text: "We had a dormant system for years. They restored it completely. Excellent service!" },
  { name: "Grace W.", role: "Narok County", text: "Their training sessions on clean energy are eye-opening. Our community is now more informed." },
];

function Services() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Our Services</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Biogas Solutions for Homes, Farms & Communities
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              End-to-end biogas design, installation, appliance setup, restoration, training, and maintenance built for lasting local impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://wa.me/+254715613635" className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-black text-white shadow-lg transition hover:bg-emerald-800">
                Get a Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-[520px]">
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 shadow-lg">
              <img src="/assets/645432563_122159713526958675_8841646942470576377_n.jpg" alt="Biogas digester construction" className="h-[440px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-center text-sm font-black uppercase tracking-[0.3em] text-zinc-700">What We Offer</p>
          <h2 className="mt-2 text-center text-3xl font-black text-zinc-950 md:text-4xl">End-to-End Biogas Solutions</h2>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
                  <span className="absolute left-4 top-4 grid h-14 w-14 place-items-center rounded-full border-4 border-white bg-emerald-700 text-white shadow-lg">
                    <item.icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-zinc-950">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-zinc-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-emerald-950 py-16 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/assets/terrain.jpeg')" }} />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="mb-10 text-center text-sm font-black uppercase tracking-[0.3em]">How We Work</h2>
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-xl bg-white p-4 text-zinc-900 shadow-xl">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-700 text-sm font-black text-white">{index + 1}</span>
                <h3 className="mt-3 text-sm font-black">{step.title}</h3>
                <p className="mt-2 min-h-14 text-xs font-medium leading-5 text-zinc-600">{step.text}</p>
                <img src={step.image} alt={step.title} className="mt-4 h-28 w-full rounded-lg object-cover" />
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-4 rounded-xl border border-white/25 bg-white/20 p-4 backdrop-blur md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-lg bg-white/90 p-5 text-zinc-900">
                <item.icon className="mb-3 h-10 w-10 text-emerald-700" />
                <h3 className="font-black text-emerald-700">{item.title}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-14 text-center text-sm font-black uppercase tracking-[0.3em]">What Our Clients Say</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-xl bg-white/85 p-7 text-zinc-900 shadow-xl backdrop-blur">
                <p className="text-5xl font-black leading-none text-emerald-700">“</p>
                <p className="-mt-5 text-sm font-medium leading-7 text-zinc-700">{item.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src="/assets/520757073_2951050318419308_839469618729031390_n.jpg" alt="" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-black">{item.name}</p>
                    <p className="text-xs font-medium text-zinc-600">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid items-center gap-6 rounded-xl border border-white/40 bg-emerald-900/80 p-6 md:grid-cols-[0.6fr_1.4fr_1fr]">
            <img src="/assets/650836646_122161105478958675_3445836754463755117_n.jpg" alt="Hotflame Biogas team member" className="hidden h-40 w-full rounded-lg object-cover object-top md:block" />
            <div>
              <h2 className="text-3xl font-black">Ready to Switch to Clean Energy?</h2>
              <p className="mt-1 text-2xl font-black text-emerald-300">Let's Build a Greener Future Together.</p>
              <p className="mt-2 text-sm text-white/80">Get a free consultation today and discover the power of biogas.</p>
            </div>
            <div className="space-y-3 text-sm font-bold text-white/85">
              <p><MessageCircle className="mr-2 inline h-4 w-4" /> +254 715 613 635</p>
              <p><Mail className="mr-2 inline h-4 w-4" /> info@hotflamebiogas.co.ke</p>
              <p><MapPin className="mr-2 inline h-4 w-4" /> Narok Town, Kenya</p>
              <a href="https://wa.me/+254715613635" className="inline-flex items-center gap-2 rounded-md border border-white px-5 py-3 font-black transition hover:bg-white hover:text-emerald-900">
                Chat on WhatsApp <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
