import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Filter,
  Leaf,
  MessageCircle,
  Search,
  Tag,
  User,
  X,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs & Insights - Hot Flame Biogas" },
      {
        name: "description",
        content: "Stay updated with the latest news, guides, and insights on biogas technology and sustainable energy in Kenya.",
      },
    ],
  }),
  component: Blogs,
});

const categories = [
  { id: "all", label: "All Posts" },
  { id: "technology", label: "Technology" },
  { id: "guides", label: "How-To Guides" },
  { id: "sustainability", label: "Sustainability" },
  { id: "news", label: "Company News" },
];

const blogPosts = [
  {
    id: 1,
    category: "technology",
    title: "How Modern Biogas Digesters Work",
    excerpt: "Understanding the science behind turning organic waste into clean, combustible gas for your home.",
    content: "Biogas technology is a remarkably simple yet powerful way to manage waste. At its core, a biogas digester is an airtight container where bacteria break down organic matter—such as cow dung, kitchen waste, or crop residues—in the absence of oxygen. This process, called anaerobic digestion, produces a gas composed mainly of methane and carbon dioxide. \n\nModern digesters, like the fixed-dome models we install, are designed to maintain optimal temperatures and pressure. As the waste decomposes, the gas rises to the top of the dome, where it is piped directly to your kitchen. The remaining slurry, now odorless and free of pathogens, is automatically pushed out into a collection tank, ready to be used as a potent organic fertilizer.",
    author: "Mary Mwami",
    date: "May 15, 2026",
    readTime: "5 min read",
    image: "/assets/biogas plant.jpeg",
    tags: ["Biogas", "Clean Energy", "Technology"],
  },
  {
    id: 2,
    category: "guides",
    title: "Maintaining Your Biogas System: A Checklist",
    excerpt: "Simple daily and weekly steps to ensure your system continues to produce high-quality gas for years.",
    content: "A well-maintained biogas system can last for over 25 years. To ensure your system performs at its peak, follow this simple maintenance checklist:\n\n1. **Daily Feeding**: Consistency is key. Feed your digester a consistent mix of waste and water (usually 1:1 ratio). Avoid overloading it one day and leaving it empty the next.\n2. **Check for Leaks**: Periodically use soapy water on pipe joints to check for gas leaks. If you see bubbles, tighten the connection.\n3. **Slurry Management**: Ensure the overflow point is clear so the bio-slurry can flow out freely. This prevents pressure build-up that could damage the dome.\n4. **Keep it Warm**: Digesters work best in warm conditions. If you live in a colder area, ensure the dome is well-insulated with soil or a greenhouse structure.\n\nBy following these steps, you guarantee a steady flame and a healthy digester ecosystem.",
    author: "Technical Team",
    date: "May 10, 2026",
    readTime: "8 min read",
    image: "/assets/service-1.jpg",
    tags: ["Maintenance", "DIY", "Safety"],
  },
  {
    id: 3,
    category: "sustainability",
    title: "The Environmental Impact of Bio-Slurry",
    excerpt: "Why the liquid by-product of your digester is just as valuable as the gas it produces.",
    content: "While most people install biogas systems for the free cooking gas, the real 'gold' is often the bio-slurry. During the digestion process, the nutrients in the organic waste (Nitrogen, Phosphorus, and Potassium) are preserved and converted into a form that plants can easily absorb.\n\nUnlike raw manure, bio-slurry is liquid and can be applied directly to crops or mixed with irrigation water. It improves soil structure, increases water retention, and—most importantly—replaces expensive chemical fertilizers. Farmers using our systems have reported up to a 40% increase in crop yields, particularly with leafy greens like kale and spinach. By using slurry, you're not just saving money; you're building a truly circular and sustainable farm.",
    author: "Ronald Mwau",
    date: "May 02, 2026",
    readTime: "6 min read",
    image: "/assets/kale.jpeg",
    tags: ["Organic Farming", "Bio-Slurry", "Soil Health"],
  },
  {
    id: 4,
    category: "news",
    title: "Hot Flame Biogas Expands to Bomet County",
    excerpt: "Celebrating our new regional office and first 10 installations in the South Rift region.",
    content: "We are thrilled to announce that Hot Flame Biogas has officially opened its doors in Bomet County! This expansion is part of our commitment to making clean energy accessible to every household in the South Rift region. \n\nIn our first month of operation in Bomet, we have already completed 10 successful installations for dairy farmers who were previously struggling with high wood-fuel costs. Our new local team, led by experienced technicians, will provide site assessments, construction, and training for residents. We look forward to transforming more lives and protecting the beautiful forests of Bomet through sustainable energy solutions.",
    author: "Mary Mwami",
    date: "April 20, 2026",
    readTime: "3 min read",
    image: "/assets/project-1.jpg",
    tags: ["Growth", "Community", "Milestones"],
  },
  {
    id: 5,
    category: "technology",
    title: "Fixed Dome vs. Floating Drum: Which is Right for You?",
    excerpt: "A comprehensive comparison of the two most popular digester designs in East Africa.",
    content: "Choosing the right biogas design is crucial for long-term success. The two most common designs are the Fixed Dome and the Floating Drum. \n\n**Fixed Dome**: Built underground using bricks and cement. It has no moving parts, making it extremely durable and long-lasting (20+ years). It is also space-efficient as the top can be used for other farm activities. This is our preferred design at Hot Flame Biogas due to its low maintenance.\n\n**Floating Drum**: Features a steel or fiberglass drum that rises and falls with gas production. While it provides a constant gas pressure, the metal drum is prone to rusting and requires frequent painting and eventual replacement. \n\nFor most Kenyan households and institutions, the durability and 'build-and-forget' nature of the Fixed Dome system makes it the superior choice for ROI.",
    author: "Technical Team",
    date: "April 12, 2026",
    readTime: "10 min read",
    image: "/assets/finished doom installed.png",
    tags: ["Design", "Comparison", "Efficiency"],
  },
  {
    id: 6,
    category: "guides",
    title: "Optimizing Feedstock for Maximum Gas Output",
    excerpt: "What to put in (and keep out) of your digester for the best gas production rates.",
    content: "Not all waste is created equal when it comes to gas production. To get the most 'bang for your buck,' you need to understand your feedstock. \n\n**The Best Inputs**: Cow dung is the gold standard because it already contains the bacteria needed for digestion. Pig waste and poultry droppings are also high-energy but require more careful water mixing. Kitchen waste (fruit peels, leftover food) is excellent for a quick gas boost.\n\n**What to Avoid**: Never put plastic, glass, or chemicals (like bleach or detergents) into your digester, as these will kill the helpful bacteria. Also, avoid large amounts of citrus peels or highly acidic waste, which can drop the pH level and stop gas production. \n\nA balanced diet for your digester ensures a bright, blue flame every single day.",
    author: "Ronald Mwau",
    date: "March 28, 2026",
    readTime: "7 min read",
    image: "/assets/cowss.jpeg",
    tags: ["Feedstock", "Optimization", "Gas Production"],
  },
];

function Blogs() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-950 py-16 text-white md:py-24">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/projects-hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent lg:w-2/3" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl uppercase">
              Insights & News
            </h1>
            <p className="mt-6 text-lg font-medium leading-8 text-white/90">
              Discover the latest in biogas technology, sustainable farming tips, and community stories from across Kenya. Empowering you with knowledge for a greener future.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {/* Controls: Category Filter & Search */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-5 py-2 text-sm font-black transition ${
                    activeCategory === cat.id
                      ? "bg-emerald-700 text-white shadow-md"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full rounded-full border border-zinc-200 bg-zinc-50 py-3 pl-12 pr-6 text-sm font-medium outline-none transition focus:border-emerald-700 focus:bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Blog Grid */}
          <div className="mt-12">
            {filteredPosts.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="group flex flex-col cursor-pointer overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-700 backdrop-blur">
                        {post.category}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-4 flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-black leading-tight text-zinc-950 transition group-hover:text-emerald-700">
                        {post.title}
                      </h3>
                      
                      <p className="mt-3 line-clamp-2 text-sm font-medium leading-relaxed text-zinc-600">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto pt-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-emerald-50 p-1 text-emerald-700">
                              <User className="h-full w-full" />
                            </div>
                            <span className="text-xs font-bold text-zinc-700">{post.author}</span>
                          </div>
                          
                          <button 
                            className="flex items-center gap-1 text-sm font-black text-emerald-700 transition hover:gap-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedPost(post);
                            }}
                          >
                            Read More <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="mb-4 rounded-full bg-zinc-100 p-6">
                  <BookOpen className="h-12 w-12 text-zinc-300" />
                </div>
                <h3 className="text-xl font-black text-zinc-950">No articles found</h3>
                <p className="mt-2 text-zinc-600">Try adjusting your search or category filter.</p>
                <button 
                  onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                  className="mt-6 font-black text-emerald-700 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Detail Modal */}
      <Dialog.Root open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-[101] w-full max-w-3xl translate-x-[-50%] translate-y-[-50%] p-4 focus:outline-none">
            <div className="relative max-h-[90vh] overflow-y-auto rounded-[2rem] bg-white shadow-2xl animate-in zoom-in-95 fade-in duration-300 no-scrollbar">
              <Dialog.Close className="absolute right-6 top-6 z-20 rounded-full bg-white/90 p-2 text-zinc-900 shadow-lg backdrop-blur transition-all hover:scale-110 hover:bg-emerald-700 hover:text-white">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Dialog.Close>

              <div className="flex flex-col">
                <div className="h-64 w-full md:h-80">
                  <img src={selectedPost?.image} alt={selectedPost?.title} className="h-full w-full object-cover" />
                </div>

                <div className="p-8 md:p-12">
                  <div className="mb-6 flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-widest text-emerald-700">
                    <span className="rounded-lg bg-emerald-50 px-3 py-1.5 border border-emerald-100">{selectedPost?.category}</span>
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {selectedPost?.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <Clock className="h-3.5 w-3.5" />
                      {selectedPost?.readTime}
                    </span>
                  </div>

                  <Dialog.Title className="text-3xl font-black leading-tight text-zinc-950 md:text-4xl">
                    {selectedPost?.title}
                  </Dialog.Title>

                  <div className="mt-8 space-y-6">
                    {selectedPost?.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-base font-medium leading-relaxed text-zinc-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-12 flex flex-wrap gap-2">
                    {selectedPost?.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 text-[10px] font-bold text-zinc-500">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex items-center gap-4 border-t border-zinc-100 pt-8">
                    <div className="h-12 w-12 rounded-full bg-emerald-700 flex items-center justify-center text-white font-black text-xl">
                      {selectedPost?.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-black text-zinc-950">{selectedPost?.author}</p>
                      <p className="text-xs font-bold text-zinc-400">Contributor, Hot Flame Biogas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Newsletter / CTA Section */}
      <section className="bg-emerald-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-700 mb-6">
            <MessageCircle className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-black md:text-4xl">Subscribe to Our Newsletter</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-white/80">
            Get the latest guides, project updates, and sustainability tips delivered straight to your inbox once a month. No spam, just pure biogas value.
          </p>
          
          <form className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-md border border-white/20 bg-white/10 px-6 py-4 text-sm font-medium outline-none transition focus:bg-white/20 sm:w-80"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-black text-emerald-950 transition hover:bg-emerald-50"
            >
              Join the Movement <Leaf className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-4 text-[10px] font-medium text-white/40">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </section>

      {/* Ready to start CTA (reusable) */}
      <section className="relative overflow-hidden bg-emerald-900 py-12 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/assets/terrain.jpeg')" }} />
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 md:px-8">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">Ready to Start Your Biogas Journey?</h2>
            <p className="mt-2 max-w-2xl text-sm font-medium text-white/85">Join hundreds of families and institutions already enjoying clean energy and lower costs.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/254792934102" className="inline-flex items-center gap-2 rounded-md bg-emerald-700 px-6 py-3 text-sm font-black text-white transition hover:bg-emerald-800">
              Request a Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
