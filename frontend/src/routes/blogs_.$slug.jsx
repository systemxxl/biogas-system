import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  User,
  ArrowRight,
} from "lucide-react";
import { blogPosts } from "../lib/blogs";

export const Route = createFileRoute("/blogs_/$slug")({
  head: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: `${post?.title || "Blog"} - Hot Flame Biogas` },
        {
          name: "description",
          content: post?.excerpt || "Read our latest blog post on biogas and sustainability.",
        },
      ],
    };
  },
  component: BlogDetail,
});

function BlogDetail() {
  const { slug } = Route.useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <h1 className="text-4xl font-black text-zinc-950">Post Not Found</h1>
        <p className="mt-4 text-zinc-600">The article you are looking for doesn't exist or has been moved.</p>
        <Link to="/blogs" className="mt-8 font-black text-emerald-700 hover:underline">
          Back to all blogs
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      {/* Blog Header */}
      <section className="bg-white pt-12 pb-8">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-sm font-black text-emerald-700 hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-widest text-emerald-700">
            <span className="rounded-lg bg-emerald-50 px-3 py-1.5 border border-emerald-100">{post.category}</span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl font-black leading-tight text-zinc-950 md:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <div className="mt-10 flex items-center gap-4 border-y border-zinc-100 py-6">
            <div className="h-12 w-12 rounded-full bg-emerald-700 flex items-center justify-center text-white font-black text-xl">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-black text-zinc-950">{post.author}</p>
              <p className="text-xs font-bold text-zinc-400">Contributor, Hot Flame Biogas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="overflow-hidden shadow-2xl">
            <img src={post.image} alt={post.title} className="h-[400px] w-full object-cover md:h-[550px]" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="prose prose-zinc prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-lg font-medium leading-relaxed text-zinc-700 mb-8 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-2 border-t border-zinc-100 pt-10">
            {post.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1 rounded-full bg-zinc-100 px-4 py-2 text-xs font-bold text-zinc-500">
                <Tag className="h-3.5 w-3.5" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <h2 className="text-3xl font-black text-zinc-950 mb-10">Related Articles</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedPosts.map((rp) => (
                <Link 
                  key={rp.id}
                  to="/blogs/$slug"
                  params={{ slug: rp.slug }}
                  className="group block bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={rp.image} alt={rp.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black text-zinc-950 group-hover:text-emerald-700 transition-colors">
                      {rp.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium text-zinc-600 line-clamp-2">
                      {rp.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-black text-emerald-700">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="bg-emerald-950 py-16 text-white text-center">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">Did you find this helpful?</h2>
          <p className="mt-4 text-sm font-medium text-white/70">
            Share this article with your community or contact us for professional biogas advice.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/254792934102" 
              className="inline-flex items-center gap-2 rounded-md bg-emerald-700 px-8 py-4 text-sm font-black text-white transition hover:bg-emerald-800"
            >
              Consult with Experts
            </a>
            <Link 
              to="/blogs" 
              className="inline-flex items-center gap-2 rounded-md border border-white px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-emerald-950"
            >
              Browse More Topics
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
