import { createFileRoute } from "@tanstack/react-router";
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Edit3, 
  Trash2, 
  ExternalLink,
  Filter,
  ImageIcon,
  Grid
} from "lucide-react";
import { useState } from "react";
import { projectsGallery, projectCategories } from "../../lib/projects";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export const Route = createFileRoute("/admin/projects")({
  component: AdminProjects,
});

function AdminProjects() {
  const [search, setSearch] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const filteredProjects = projectsGallery.filter(project => 
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.cat.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 text-left">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-zinc-950 tracking-tight">Manage Projects</h1>
          <p className="mt-1 text-zinc-500 font-medium text-sm">Update your gallery and showcase your recent impact.</p>
        </div>
        <button 
          onClick={() => setIsCreateModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-black text-sm transition-all shadow-lg shadow-emerald-900/10"
        >
          <Plus size={18} />
          Add New Project
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input 
            type="text" 
            placeholder="Search projects..." 
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
            <Grid size={16} />
            Grid View
          </button>
        </div>
      </div>

      {/* Projects Grid/Table */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden group">
            <div className="relative h-48 bg-zinc-100 overflow-hidden">
              <img src={project.image} alt="" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button className="h-10 w-10 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Edit3 size={18} />
                </button>
                <button className="h-10 w-10 rounded-full bg-white text-red-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Trash2 size={18} />
                </button>
              </div>
              <div className="absolute left-3 top-3 px-2 py-1 rounded-md bg-white/90 text-emerald-700 text-[9px] font-black uppercase tracking-tighter backdrop-blur shadow-sm">
                {project.cat}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-black text-zinc-950 text-sm truncate">{project.title}</h3>
              <p className="text-xs font-medium text-zinc-500 mt-2 line-clamp-2 leading-relaxed">{project.text}</p>
              <div className="mt-4 pt-4 border-t border-zinc-50 flex items-center justify-between">
                <div className="flex items-center gap-1 text-zinc-300">
                  <ImageIcon size={12} />
                  <span className="text-[10px] font-bold">{project.images?.length || 1} photos</span>
                </div>
                <button className="text-[10px] font-black text-emerald-700 hover:underline uppercase tracking-widest">
                  View Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Project Modal Placeholder */}
      <Dialog.Root open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-[101] w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] p-4 focus:outline-none">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300 text-left text-left">
              <div className="p-8 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
                <div>
                  <h2 className="text-2xl font-black text-zinc-950 tracking-tight">Add New Project</h2>
                  <p className="text-sm font-medium text-zinc-500 mt-1">Upload photos and details for your latest work.</p>
                </div>
                <Dialog.Close className="p-2 rounded-full hover:bg-zinc-200 text-zinc-400 transition-colors">
                  <X size={24} />
                </Dialog.Close>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Project Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 10m³ Industrial Digester in Narok" 
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none transition-all font-bold text-zinc-950"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Category</label>
                    <select className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none transition-all font-bold text-zinc-950 bg-white">
                      {projectCategories.filter(c => c.id !== 'all').map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Location</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Narok County"
                      className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none transition-all font-bold text-zinc-950"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Short Summary</label>
                  <input 
                    type="text" 
                    placeholder="Brief description for the gallery card" 
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none transition-all font-bold text-zinc-950"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Upload Images</label>
                  <div className="border-2 border-dashed border-zinc-200 rounded-2xl p-10 flex flex-col items-center justify-center bg-zinc-50 hover:bg-emerald-50/50 hover:border-emerald-200 transition-all cursor-pointer">
                    <ImageIcon className="h-10 w-10 text-zinc-300 mb-3" />
                    <p className="text-sm font-bold text-zinc-500">Drop files here or <span className="text-emerald-700">click to browse</span></p>
                    <p className="text-[10px] font-medium text-zinc-400 mt-1 uppercase tracking-tighter italic">Supports JPG, PNG up to 10MB</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black transition-all shadow-lg shadow-emerald-900/10">
                    Create Project
                  </button>
                  <button className="flex-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 py-4 rounded-2xl font-black transition-all">
                    Cancel
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
