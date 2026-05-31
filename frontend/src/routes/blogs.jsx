import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  MessageCircle,
  Search,
  User,
  Leaf,
} from "lucide-react";
import { blogPosts, blogCategories } from "../lib/blogs";

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

function Blogs() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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
              {blogCategories.map((cat) => (
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
                    className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                  >
                    <Link 
                      to="/blogs/$slug" 
                      params={{ slug: post.slug }}
                      className="relative h-56 w-full overflow-hidden block"
                    >
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-700 backdrop-blur">
                        {post.category}
                      </div>
                    </Link>

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

                      <Link 
                        to="/blogs/$slug" 
                        params={{ slug: post.slug }}
                        className="no-underline block"
                      >
                        <h3 className="text-xl font-black leading-tight text-zinc-950 transition group-hover:text-emerald-700">
                          {post.title}
                        </h3>
                      </Link>
                      
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
                          
                          <Link 
                            to="/blogs/$slug" 
                            params={{ slug: post.slug }}
                            className="flex items-center gap-1 text-sm font-black text-emerald-700 transition hover:gap-2 no-underline"
                          >
                            Read More <ArrowRight className="h-4 w-4" />
                          </Link>
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
