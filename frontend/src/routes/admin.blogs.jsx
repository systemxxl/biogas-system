import { createFileRoute } from "@tanstack/react-router";
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Edit3, 
  Trash2, 
  ExternalLink,
  Filter,
  Eye,
  FileText
} from "lucide-react";
import { useState } from "react";
import { blogPosts, blogCategories } from "../../lib/blogs";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export const Route = createFileRoute("/admin/blogs")({
  component: AdminBlogs,
});

function AdminBlogs() {
  const [search, setSearch] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 text-left">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-zinc-950 tracking-tight">Manage Blogs</h1>
          <p className="mt-1 text-zinc-500 font-medium text-sm">Create, edit and remove articles from your site.</p>
        </div>
        <button 
          onClick={() => setIsCreateModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-black text-sm transition-all shadow-lg shadow-emerald-900/10"
        >
          <Plus size={18} />
          Create New Post
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by title or author..." 
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-zinc-100 bg-zinc-50 focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-zinc-100 bg-zinc-50 hover:bg-white text-zinc-600 font-bold text-sm transition-all">
            <Filter size={16} />
            Category
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-zinc-100 bg-zinc-50 hover:bg-white text-zinc-600 font-bold text-sm transition-all">
            Latest First
          </button>
        </div>
      </div>

      {/* Blog Posts Table */}
      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-zinc-50 border-b border-zinc-100">
              <tr>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Article</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Category</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Stats</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Date</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-zinc-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-zinc-100 overflow-hidden shrink-0 border border-zinc-200">
                        <img src={post.image} alt="" className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-black text-zinc-950 truncate group-hover:text-emerald-700 transition-colors">{post.title}</p>
                        <p className="text-xs font-bold text-zinc-400 mt-0.5 uppercase tracking-tighter">By {post.author}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-tighter border border-emerald-100">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-zinc-400">
                        <Eye size={14} />
                        <span className="text-xs font-bold">1.2k</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-400">
                        <FileText size={14} />
                        <span className="text-xs font-bold">{post.readTime}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-zinc-500">{post.date}</p>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 rounded-lg hover:bg-emerald-50 text-emerald-600 transition-colors" title="Edit Post">
                        <Edit3 size={18} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" title="Delete Post">
                        <Trash2 size={18} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-zinc-100 text-zinc-600 transition-colors" title="View Public Post">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                    <div className="group-hover:hidden text-zinc-300">
                      <MoreVertical size={18} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between">
          <p className="text-xs font-bold text-zinc-500 tracking-tight">Showing {filteredPosts.length} of {blogPosts.length} posts</p>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs font-black text-zinc-400 cursor-not-allowed">Prev</button>
            <button className="px-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs font-black text-zinc-950 hover:bg-zinc-50 transition-colors">Next</button>
          </div>
        </div>
      </div>

      {/* Create Post Modal Placeholder */}
      <Dialog.Root open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-[101] w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] p-4 focus:outline-none">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300 text-left">
              <div className="p-8 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
                <div>
                  <h2 className="text-2xl font-black text-zinc-950 tracking-tight">Create New Article</h2>
                  <p className="text-sm font-medium text-zinc-500 mt-1">Draft your next insight for Hot Flame Biogas.</p>
                </div>
                <Dialog.Close className="p-2 rounded-full hover:bg-zinc-200 text-zinc-400 transition-colors">
                  <X size={24} />
                </Dialog.Close>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Blog Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 10 Benefits of Biogas for Smallholder Farmers" 
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all font-bold text-zinc-950"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Category</label>
                    <select className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none transition-all font-bold text-zinc-950 bg-white">
                      {blogCategories.filter(c => c.id !== 'all').map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Author</label>
                    <input 
                      type="text" 
                      defaultValue="Mary Mwami"
                      className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none transition-all font-bold text-zinc-950"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Article Content (Markdown supported)</label>
                  <textarea 
                    rows={6}
                    placeholder="Start writing your article here..." 
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none transition-all font-bold text-zinc-950 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black transition-all shadow-lg shadow-emerald-900/10">
                    Publish Article
                  </button>
                  <button className="flex-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 py-4 rounded-2xl font-black transition-all">
                    Save as Draft
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
