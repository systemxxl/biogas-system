import { createFileRoute } from "@tanstack/react-router";
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  X,
  ImageIcon
} from "lucide-react";
import { useState } from "react";
import { useAdmin } from "../../components/admin/AdminContext";
import { projectCategories } from "../../lib/projects";
import * as Dialog from "@radix-ui/react-dialog";

export const Route = createFileRoute("/admin/projects")({
  component: AdminProjects,
});

function AdminProjects() {
  const { projects, addProject, updateProject, deleteProject } = useAdmin();
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    cat: "installations",
    text: "",
    description: "",
    image: "/assets/project-3.jpg",
    images: ["/assets/project-3.jpg"]
  });

  const handleOpenCreate = () => {
    setEditingProject(null);
    setFormData({
      title: "",
      cat: "installations",
      text: "",
      description: "",
      image: "/assets/project-3.jpg",
      images: ["/assets/project-3.jpg"]
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (project) => {
    setEditingProject(project);
    setFormData({ ...project });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProject) {
      updateProject(editingProject.id, formData);
    } else {
      addProject(formData);
    }
    setIsModalOpen(false);
  };

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.cat.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-zinc-950 tracking-tight">Manage Projects</h1>
          <p className="mt-1 text-zinc-500 font-medium text-sm">Update your gallery and showcases.</p>
        </div>
        <button 
          onClick={handleOpenCreate}
          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-black text-sm transition-all"
        >
          <Plus size={18} />
          Add New Project
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-zinc-100 bg-zinc-50 focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden group">
            <div className="relative h-48 bg-zinc-100 overflow-hidden">
              <img src={project.image} alt="" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button 
                  onClick={() => handleOpenEdit(project)}
                  className="h-10 w-10 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  <Edit3 size={18} />
                </button>
                <button 
                  onClick={() => deleteProject(project.id)}
                  className="h-10 w-10 rounded-full bg-white text-red-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
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
            </div>
          </div>
        ))}
      </div>

      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-[101] w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] p-4 focus:outline-none">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden text-left">
              <div className="p-8 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
                <h2 className="text-2xl font-black text-zinc-950">{editingProject ? 'Edit' : 'Add'} Project</h2>
                <Dialog.Close className="p-2 rounded-full hover:bg-zinc-200 text-zinc-400">
                  <X size={24} />
                </Dialog.Close>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto no-scrollbar">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Project Title</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none font-bold text-zinc-950"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Category</label>
                  <select 
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none font-bold text-zinc-950 bg-white"
                    value={formData.cat}
                    onChange={(e) => setFormData({ ...formData, cat: e.target.value })}
                  >
                    {projectCategories.filter(c => c.id !== 'all').map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Short Summary</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none font-bold text-zinc-950"
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Full Description</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none font-bold text-zinc-950 resize-none"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black transition-all shadow-lg shadow-emerald-900/10">
                    {editingProject ? 'Save Changes' : 'Create Project'}
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
