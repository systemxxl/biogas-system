import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  MessageCircle,
  X,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { Carousel } from "../components/Carousel";
import { projectsGallery, projectCategories } from "../lib/projects";

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
  const [selectedProject, setSelectedProject] = useState(null);
  const visible = active === "all" ? projectsGallery : projectsGallery.filter((item) => item.cat === active);

  return (
    <>
      <section className="relative overflow-hidden bg-zinc-950 py-16 text-white md:py-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/projects-hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:w-2/3" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start text-left">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl uppercase">
                Projects / Gallery
              </h1>
              <p className="mt-6 text-lg font-medium leading-8 text-white/90">
                Real projects. Real impact. From biogas plant installations and restorations to training, appliance setups, and media outreach — see how we're turning organic waste into clean energy and stronger communities across Narok County.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap justify-start gap-4">
              {[
                { i: projectCategories.find(c => c.id === 'all').icon, n: "120+", l: "Biogas Systems Installed" },
                { i: projectCategories.find(c => c.id === 'training').icon, n: "800+", l: "Happy Households" },
                { i: projectCategories.find(c => c.id === 'installations').icon, n: "25+", l: "Institutions Served" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-700 text-white">
                    <s.i className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-black text-white">{s.n}</div>
                    <div className="text-xs font-medium text-white/80">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-6">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {projectCategories.map((filter) => {
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
              <article 
                key={item.id} 
                className="group cursor-pointer overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.13)] transition-all hover:scale-[1.02]"
                onClick={() => setSelectedProject(item)}
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="p-5">
                  <span className="relative z-10 -mt-12 mb-3 grid h-10 w-10 place-items-center rounded-full border-4 border-white bg-white text-emerald-700 shadow-md">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-black text-zinc-950 group-hover:text-emerald-700">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-zinc-600 line-clamp-2">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog.Root open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-[101] w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] p-4 focus:outline-none">
            <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl animate-in zoom-in-95 fade-in duration-300 text-left">
              <Dialog.Close className="absolute right-6 top-6 z-20 rounded-full bg-white/90 p-2 text-zinc-900 shadow-lg backdrop-blur transition-all hover:scale-110 hover:bg-emerald-700 hover:text-white">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Dialog.Close>

              <div className="grid lg:grid-cols-[1fr_0.8fr]">
                {/* Image Carousel Side */}
                <div className="bg-zinc-100">
                  <Carousel
                    items={selectedProject?.images || []}
                    renderItem={(img, idx) => (
                      <div key={idx} className="h-[300px] w-full lg:h-[500px]">
                        <img src={img} alt="" className="h-full w-full object-cover" />
                      </div>
                    )}
                    className="h-full"
                  />
                </div>

                {/* Content Side */}
                <div className="flex flex-col p-8 lg:p-10">
                  <div className="flex items-center gap-3 text-emerald-700 mb-4">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-50 border border-emerald-100">
                      {selectedProject && <selectedProject.icon className="h-5 w-5" />}
                    </span>
                    <span className="text-xs font-black uppercase tracking-widest">{selectedProject?.cat}</span>
                  </div>
                  
                  <Dialog.Title className="text-3xl font-black tracking-tight text-zinc-950">
                    {selectedProject?.title}
                  </Dialog.Title>
                  
                  <div className="mt-6 flex-1">
                    <h4 className="text-sm font-black uppercase text-zinc-400 tracking-wider mb-2 text-left">Project Overview</h4>
                    <Dialog.Description className="text-sm font-medium leading-relaxed text-zinc-600 text-left">
                      {selectedProject?.description}
                    </Dialog.Description>
                  </div>

                  <div className="mt-8 pt-8 border-t border-zinc-100">
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                            <img src={`/assets/520757073_2951050318419308_839469618729031390_n.jpg`} alt="" />
                          </div>
                        ))}
                      </div>
                      <p className="text-xs font-bold text-zinc-500">Impacting hundreds of lives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      
      <SuccessStorySection />

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

function SuccessStorySection() {
  const { Flame, Coins, Sprout } = {
    Flame: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
    Coins: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18.1"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>,
    Sprout: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5 1.5-12.5 4-15.5"/><path d="M14 20c-5.5-2.5-1.5-12.5-4-15.5"/><path d="M12 20V10"/></svg>
  }

  return (
    <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-8 rounded-2xl border-2 border-emerald-700 bg-emerald-50/50 p-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-emerald-700 text-left">Featured Success Story</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-zinc-950 md:text-4xl text-left">From Waste to Clean Energy</h2>
              <p className="mt-5 text-sm font-medium leading-7 text-zinc-700 text-left">
                A household in Narok County transformed their daily routine with Hot Flame Biogas. From smoky fires and high fuel costs to clean, affordable energy and organic fertilizer for their farm.
              </p>
              <div className="mt-7 grid gap-5 sm:grid-cols-3">
                {[
                  { icon: Flame, title: "Cleaner Cooking", text: "No more smoke, healthier homes." },
                  { icon: Coins, title: "Saves Money", text: "Up to 60% savings on energy costs." },
                  { icon: Sprout, title: "Organic Fertilizer", text: "Boosts soil health and crop yields." },
                ].map((item) => (
                  <div key={item.title}>
                    <span className="grid h-14 w-14 place-items-center rounded-lg border border-emerald-200 bg-white text-emerald-700 mx-auto sm:mx-0">
                      <item.icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-3 text-sm font-black text-emerald-700 text-left">{item.title}</h3>
                    <p className="mt-1 text-xs font-medium leading-5 text-zinc-600 text-left">{item.text}</p>
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
  )
}
