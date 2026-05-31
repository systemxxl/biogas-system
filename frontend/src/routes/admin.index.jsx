import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Plus, 
  Users, 
  Wrench, 
  ImageIcon, 
  FileText, 
  TrendingUp,
  Edit3,
  Trash2,
  ExternalLink,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { useAdmin } from "../components/admin/AdminContext";

export const Route = createFileRoute("/admin/")({
  component: AdminOverview,
});

function AdminOverview() {
  const { 
    blogs, deleteBlog,
    projects, deleteProject,
    services, deleteService 
  } = useAdmin();

  return (
    <div className="space-y-12 text-left">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-zinc-950 tracking-tight">Admin Dashboard</h1>
          <p className="mt-2 text-zinc-500 font-medium italic">Manage HotFlame Biogas content from one place.</p>
        </div>
        <div className="flex gap-3">
           <Link to="/admin/blogs" className="bg-emerald-600 text-white px-5 py-3 rounded-xl font-black text-xs uppercase tracking-widest no-underline shadow-lg shadow-emerald-900/20 hover:bg-emerald-700 transition-all">Add Content</Link>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Active Services", value: services.length, icon: Wrench, color: "text-blue-600" },
          { label: "Gallery Projects", value: projects.length, icon: ImageIcon, color: "text-emerald-600" },
          { label: "Blog Articles", value: blogs.length, icon: FileText, color: "text-amber-600" },
        ].map((s) => (
          <div key={s.label} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm flex items-center gap-5">
            <div className="h-12 w-12 rounded-xl bg-zinc-50 flex items-center justify-center">
              <s.icon size={24} className={s.color} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{s.label}</p>
              <h3 className="text-2xl font-black text-zinc-950">{s.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Management Sections */}
      <div className="space-y-16">
        
        {/* Services Section */}
        <section>
          <div className="flex items-center justify-between mb-6 border-b border-zinc-100 pb-4">
            <h2 className="text-xl font-black text-zinc-950 flex items-center gap-2">
              <Wrench size={20} className="text-emerald-600" /> Services
            </h2>
            <Link to="/admin/services" className="text-xs font-black text-emerald-700 hover:underline uppercase tracking-widest no-underline flex items-center gap-1">
              Manage All <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid gap-4">
            {services.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm flex items-center justify-between group">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="h-10 w-10 rounded-lg bg-zinc-50 overflow-hidden shrink-0">
                    <img src={item.image} alt="" className="h-full w-full object-cover" />
                  </div>
                  <p className="font-bold text-zinc-900 truncate text-sm">{item.title}</p>
                </div>
                <div className="flex items-center gap-2">
                   <Link to="/admin/services" className="p-2 rounded-lg hover:bg-emerald-50 text-emerald-600 transition-colors"><Edit3 size={16} /></Link>
                   <button onClick={() => deleteService(item.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"><Trash2 size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <div className="flex items-center justify-between mb-6 border-b border-zinc-100 pb-4">
            <h2 className="text-xl font-black text-zinc-950 flex items-center gap-2">
              <ImageIcon size={20} className="text-emerald-600" /> Project Gallery
            </h2>
            <Link to="/admin/projects" className="text-xs font-black text-emerald-700 hover:underline uppercase tracking-widest no-underline flex items-center gap-1">
              Manage All <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projects.slice(0, 4).map((item) => (
              <div key={item.id} className="bg-white p-3 rounded-2xl border border-zinc-100 shadow-sm group">
                <div className="h-32 rounded-xl bg-zinc-50 overflow-hidden mb-3 relative">
                  <img src={item.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Link to="/admin/projects" className="h-8 w-8 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-lg"><Edit3 size={14} /></Link>
                    <button onClick={() => deleteProject(item.id)} className="h-8 w-8 rounded-full bg-white text-red-600 flex items-center justify-center shadow-lg"><Trash2 size={14} /></button>
                  </div>
                </div>
                <p className="font-bold text-zinc-900 text-xs truncate">{item.title}</p>
                <p className="text-[10px] font-black text-emerald-700 uppercase mt-1">{item.cat}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Blogs Section */}
        <section>
          <div className="flex items-center justify-between mb-6 border-b border-zinc-100 pb-4">
            <h2 className="text-xl font-black text-zinc-950 flex items-center gap-2">
              <FileText size={20} className="text-emerald-600" /> Blog Articles
            </h2>
            <Link to="/admin/blogs" className="text-xs font-black text-emerald-700 hover:underline uppercase tracking-widest no-underline flex items-center gap-1">
              Manage All <ChevronRight size={14} />
            </Link>
          </div>
          <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <tbody className="divide-y divide-zinc-50">
                {blogs.slice(0, 5).map((post) => (
                  <tr key={post.id} className="hover:bg-zinc-50/30 transition-colors group">
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-zinc-900 truncate">{post.title}</p>
                      <p className="text-[10px] font-black text-zinc-400 uppercase mt-0.5">{post.date} • {post.category}</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link to="/admin/blogs" className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50"><Edit3 size={16} /></Link>
                        <button onClick={() => deleteBlog(post.id)} className="p-2 rounded-lg text-red-600 hover:bg-red-50"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}
