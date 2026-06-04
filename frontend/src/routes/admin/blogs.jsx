import { createFileRoute } from "@tanstack/react-router";
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  X,
  FileText,
  Calendar,
  Loader2,
  Upload,
  Image as ImageIcon
} from "lucide-react";
import { useState } from "react";
import { useAdmin } from "../../components/admin/AdminContext";
import { blogCategories } from "../../lib/blogs";
import * as Dialog from "@radix-ui/react-dialog";
import { uploadImage } from "../../lib/api/supabase.api";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/blogs")({
  component: AdminBlogs,
});

function AdminBlogs() {
  const { blogs, addBlog, updateBlog, deleteBlog } = useAdmin();
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "technology",
    author: "Mary Mwami",
    excerpt: "",
    content: "",
    image: "",
    tags: ["Biogas"]
  });

  const handleOpenCreate = () => {
    setEditingBlog(null);
    setFormData({
      title: "",
      slug: "",
      category: "technology",
      author: "Mary Mwami",
      excerpt: "",
      content: "",
      image: "",
      tags: ["Biogas"]
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({ 
      ...blog,
      slug: blog.slug || ""
    });
    setIsModalOpen(true);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const url = await uploadImage(file, 'blogs');
      setFormData(prev => ({ ...prev, image: url }));
      toast.success("Image uploaded successfully");
    } catch (error) {
      toast.error("Upload failed: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.image) {
      toast.error("Please upload a featured image first");
      return;
    }

    const dataToSave = {
      ...formData,
      slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
    };
    
    if (editingBlog) {
      updateBlog(editingBlog.id, dataToSave);
    } else {
      addBlog(dataToSave);
    }
    setIsModalOpen(false);
  };

  const filteredPosts = blogs.filter(post => 
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    (post.author || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-zinc-950 tracking-tight">Manage Blogs</h1>
          <p className="mt-1 text-zinc-500 font-medium text-sm">Create, edit and remove articles.</p>
        </div>
        <button 
          onClick={handleOpenCreate}
          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-black text-sm transition-all"
        >
          <Plus size={18} />
          Create New Post
        </button>
      </div>

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
      </div>

      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-zinc-50 border-b border-zinc-100">
            <tr>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Article</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Category</th>
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
                      <p className="text-sm font-black text-zinc-950 truncate">{post.title}</p>
                      <p className="text-xs font-bold text-zinc-400 mt-0.5 uppercase tracking-tighter">By {post.author || 'Admin'}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-tighter border border-emerald-100">
                    {post.category}
                  </span>
                </td>
                <td className="px-6 py-5 text-xs font-bold text-zinc-500">{post.date}</td>
                <td className="px-6 py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => handleOpenEdit(post)}
                      className="p-2 rounded-lg hover:bg-emerald-50 text-emerald-600 transition-colors"
                    >
                      <Edit3 size={18} />
                    </button>
                    <button 
                      onClick={() => deleteBlog(post.id)}
                      className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create/Edit Modal */}
      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-[101] w-full max-w-3xl translate-x-[-50%] translate-y-[-50%] p-4 focus:outline-none">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden text-left">
              <div className="p-8 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
                <h2 className="text-2xl font-black text-zinc-950">{editingBlog ? 'Edit' : 'Create'} Blog Post</h2>
                <Dialog.Close className="p-2 rounded-full hover:bg-zinc-200 text-zinc-400">
                  <X size={24} />
                </Dialog.Close>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto no-scrollbar">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Featured Image</label>
                  <div className="relative group">
                    <div className="h-56 w-full rounded-2xl bg-zinc-50 border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center overflow-hidden relative transition-all group-hover:border-emerald-300">
                      {formData.image ? (
                        <>
                          <img src={formData.image} alt="Preview" className="h-full w-full object-cover" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Upload className="text-white h-8 w-8" />
                          </div>
                        </>
                      ) : (
                        <div className="text-center p-6">
                          <ImageIcon className="h-12 w-12 text-zinc-300 mx-auto mb-2" />
                          <p className="text-sm font-bold text-zinc-400">Click to upload blog cover</p>
                          <p className="text-[10px] text-zinc-400 mt-1">Recommended: 1200x800px</p>
                        </div>
                      )}
                      {uploading && (
                        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                          <Loader2 className="h-8 w-8 animate-spin text-emerald-700" />
                        </div>
                      )}
                      <input 
                        type="file" 
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer" 
                        onChange={handleImageUpload}
                        disabled={uploading}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Title</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none font-bold text-zinc-950"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Category</label>
                    <select 
                      className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none font-bold text-zinc-950 bg-white"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      {blogCategories.filter(c => c.id !== 'all').map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Author</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none font-bold text-zinc-950"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Excerpt</label>
                  <textarea 
                    required
                    rows={2}
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none font-bold text-zinc-950 resize-none"
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Content</label>
                  <textarea 
                    required
                    rows={6}
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none font-bold text-zinc-950 resize-none"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  />
                </div>

                <div className="flex items-center gap-4 pt-4 sticky bottom-0 bg-white pb-2">
                  <button 
                    type="submit" 
                    disabled={uploading}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black shadow-lg shadow-emerald-900/10 transition-all disabled:opacity-50"
                  >
                    {editingBlog ? 'Save Changes' : 'Publish Article'}
                  </button>
                </div>
              </form>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
