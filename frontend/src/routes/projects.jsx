import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Coins,
  Flame,
  Leaf,
  MessageCircle,
  Mic2,
  Recycle,
  Settings2,
  Sprout,
  Users,
  Wrench,
} from "lucide-react";
import { TestimonialCarousel } from "../components/TestimonialCarousel";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects / Gallery - Hot Flame Biogas" },
      {
        name: "description",
        content: "Hot Flame Biogas projects, installations, restorations, training, appliances and organic fertilizer work.",
      },
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

const gallery = [
  { cat: "installations", icon: Leaf, title: "Biogas Plant Installation", text: "New household biogas plant installation for clean cooking and sustainable living.", image: "/assets/645415092_122159713724958675_2122180214002289931_n.jpg" },
  { cat: "training", icon: Users, title: "Community Training", text: "Training communities on biogas technology, operation and maintenance best practices.", image: "/assets/653370674_122161808180958675_2027784688729312152_n.jpg" },
  { cat: "appliances", icon: Flame, title: "Appliance Setup", text: "Installation of biogas stoves and appliances for efficient and safe energy use.", image: "/assets/biogas stove.png" },
  { cat: "installations", icon: CheckCircle2, title: "Completed Digester", text: "Finished biogas digester ready for use, built to last and perform efficiently.", image: "/assets/project-3.jpg" },
  { cat: "installations", icon: Wrench, title: "Digester Construction", text: "Ongoing construction of a durable biogas digester from start to finish.", image: "/assets/645432563_122159713526958675_8841646942470576377_n.jpg" },
  { cat: "fertilizer", icon: Recycle, title: "Organic Fertilizer", text: "High-quality organic fertilizer produced as a by-product of biogas systems.", image: "/assets/kale.jpeg" },
  { cat: "training", icon: Mic2, title: "Media & Awareness", text: "Radio and media outreach to educate and inspire more communities to adopt biogas.", image: "/assets/525562475_122105325824958675_2183548524119828192_n.jpg" },
  { cat: "installations", icon: Building2, title: "Institutional Project", text: "Biogas solutions for schools, institutions and commercial establishments.", image: "/assets/565137370_122134110734958675_5886927147664881699_n.jpg" },
];

const testimonials = [
  { name: "Mary N.", role: "Homeowner, Narok", text: "Our cooking is now smoke-free and faster. Hotflame Biogas did a great job. We are saving money and our kitchen is so much cleaner." },
  { name: "Joseph K.", role: "Farmer, Narok", text: "Reliable system, excellent installation and great follow-up support. The slurry has improved our farm yields significantly." },
  { name: "Grace M.", role: "School Administrator", text: "Hotflame Biogas is professional, knowledgeable and passionate about clean energy. Highly recommended!" },
  { name: "Peter O.", role: "Dairy Farmer, Narok", text: "The system has reduced smoke in our kitchen and the slurry is helping our vegetables grow better than before." },
  { name: "Ann W.", role: "Mother, Narok County", text: "We spend less on charcoal now. The team explained everything clearly and checked on us after installation." },
  { name: "David K.", role: "Institution Manager", text: "Their work was organized from site assessment to training. The system is practical for our daily cooking needs." },
  { name: "Mercy L.", role: "Smallholder Farmer", text: "Hotflame Biogas gave us a clean solution for waste and energy. It has made the compound cleaner and more useful." },
  { name: "Samuel M.", role: "Community Leader", text: "The training helped our group understand biogas safety, maintenance and the value of organic fertilizer." },
  { name: "Beatrice N.", role: "Homeowner, Narok", text: "We wanted something affordable and reliable. Their after-sales support has made the whole experience easier." },
];


function Projects() {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? gallery : gallery.filter((item) => item.cat === active);

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Projects</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Real Biogas Projects That Change Lives
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Explore our installations, restorations, training sessions, media outreach, and appliance setups across Narok and the surrounding region.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 shadow-lg">
              <img src="/assets/645415092_122159713724958675_2122180214002289931_n.jpg" alt="Biogas installation" className="h-[340px] w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 shadow-lg">
              <img src="/assets/653370674_122161808180958675_2027784688729312152_n.jpg" alt="Community training" className="h-[340px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-6">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => {
              const activeFilter = active === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActive(filter.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-black shadow-sm transition ${
                    activeFilter
                      ? "border-emerald-700 bg-emerald-700 text-white"
                      : "border-zinc-200 bg-white text-zinc-700 hover:border-emerald-700 hover:text-emerald-700"
                  }`}
                >
                  <filter.icon className="h-4 w-4" />
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.13)]">
                <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <span className="-mt-12 mb-3 grid h-10 w-10 place-items-center rounded-full border-4 border-white bg-emerald-50 text-emerald-700 shadow">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-black text-zinc-950">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-zinc-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-8 rounded-2xl border-2 border-emerald-700 bg-emerald-50/50 p-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-emerald-700">Featured Success Story</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-zinc-950 md:text-4xl">From Waste to Clean Energy</h2>
              <p className="mt-5 text-sm font-medium leading-7 text-zinc-700">
                A household in Narok County transformed their daily routine with Hot Flame Biogas. From smoky fires and high fuel costs to clean, affordable energy and organic fertilizer for their farm.
              </p>
              <div className="mt-7 grid gap-5 sm:grid-cols-3">
                {[
                  { icon: Flame, title: "Cleaner Cooking", text: "No more smoke, healthier homes." },
                  { icon: Coins, title: "Saves Money", text: "Up to 60% savings on energy costs." },
                  { icon: Sprout, title: "Organic Fertilizer", text: "Boosts soil health and crop yields." },
                ].map((item) => (
                  <div key={item.title}>
                    <span className="grid h-14 w-14 place-items-center rounded-lg border border-emerald-200 bg-white text-emerald-700">
                      <item.icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-3 text-sm font-black text-emerald-700">{item.title}</h3>
                    <p className="mt-1 text-xs font-medium leading-5 text-zinc-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid overflow-hidden rounded-xl md:grid-cols-2">
              <div className="relative h-80">
                <img src="/assets/cow.jpeg" alt="Before clean biogas" className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded bg-zinc-700 px-3 py-1 text-xs font-black text-white">Before</span>
              </div>
              <div className="relative h-80">
                <img src="/assets/project-3.jpg" alt="After biogas installation" className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded bg-emerald-700 px-3 py-1 text-xs font-black text-white">After</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-center text-sm font-black uppercase tracking-[0.3em] text-emerald-700">What Our Clients Say</p>
          <h2 className="mt-2 text-center text-3xl font-black text-zinc-950 md:text-4xl">Trusted by Families & Institutions</h2>
          
          <div className="mt-8">
            <TestimonialCarousel testimonials={testimonials} itemsPerView={3} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-emerald-950 py-12 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/assets/biogas plant.jpeg')" }} />
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 md:px-8">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">Ready to Start Your Biogas Journey?</h2>
            <p className="mt-2 max-w-2xl text-sm font-medium text-white/85">Join 800+ families and institutions already enjoying clean energy, lower costs and a greener future.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/254792934102" className="inline-flex items-center gap-2 rounded-md bg-emerald-700 px-6 py-3 text-sm font-black text-white transition hover:bg-emerald-800">
              Request a Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/254792934102" className="inline-flex items-center gap-2 rounded-md border border-white px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-emerald-900">
              Chat on WhatsApp <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
