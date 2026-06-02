import { createFileRoute } from "@tanstack/react-router";
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  X,
  ImageIcon,
  Loader2,
  Upload,
  PlusCircle
} from "lucide-react";
import { useState } from "react";
import { useAdmin } from "../../components/admin/AdminContext";
import { projectCategories } from "../../lib/projects";
import * as Dialog from "@radix-ui/react-dialog";
import { iconMap } from "../../lib/icons";
import { uploadImage } from "../../lib/api/supabase.api";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/projects")({
  component: AdminProjects,
});

function AdminProjects() {
  const { projects, addProject, updateProject, deleteProject } = useAdmin();
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    cat: "installations",
    text: "",
    description: "",
    icon: "Leaf",
    image: "",
    images: []
  });

  const handleOpenCreate = () => {
    setEditingProject(null);
    setFormData({
      title: "",
      cat: "installations",
      text: "",
      description: "",
      icon: "Leaf",
      image: "",
      images: []
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (project) => {
    setEditingProject(project);
    setFormData({ 
      ...project,
      icon: typeof project.icon === 'string' ? project.icon : (project.icon?.name || "Leaf"),
      cat: project.category || project.cat,
      text: project.excerpt || project.text,
      image: project.main_image || project.image,
      images: project.images || []
    });
    setIsModalOpen(true);
  };

  const handleMainImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const url = await uploadImage(file, 'projects/main');
      setFormData(prev => ({ ...prev, image: url }));
      toast.success("Main image uploaded");
    } catch (error) {
      toast.error("Upload failed: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleGalleryUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    try {
      setUploading(true);
      toast.loading(`Uploading ${files.length} images...`);
      
      const uploadPromises = files.map(file => uploadImage(file, 'projects/gallery'));
      const urls = await Promise.all(uploadPromises);
      
      setFormData(prev => ({
        ...prev,
        images: [...(prev.images || []), ...urls]
      }));
      
      toast.dismiss();
      toast.success(`${files.length} images added to gallery`);
    } catch (error) {
      toast.dismiss();
      toast.error("Gallery upload failed: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const removeGalleryImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.image) {
      toast.error("Please upload a main thumbnail image");
      return;
    }

    if (editingProject) {
      updateProject(editingProject.id, formData);
    } else {
      addProject(formData);
    }
    setIsModalOpen(false);
  };

  const filteredProjects = projects.filter(project => {
    const title = project.title || "";
    const category = project.category || project.cat || "";
    return title.toLowerCase().includes(search.toLowerCase()) ||
           category.toLowerCase().includes(search.toLowerCase());
  });

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
              <img src={project.main_image || project.image} alt="" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
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
                {project.category || project.cat}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-black text-zinc-950 text-sm truncate">{project.title}</h3>
              <p className="text-xs font-medium text-zinc-500 mt-2 line-clamp-2 leading-relaxed">{project.excerpt || project.text}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-[101] w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] p-4 focus:outline-none">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden text-left">
              <div className="p-8 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
                <h2 className="text-2xl font-black text-zinc-950">{editingProject ? 'Edit' : 'Add'} Project</h2>
                <Dialog.Close className="p-2 rounded-full hover:bg-zinc-200 text-zinc-400">
                  <X size={24} />
                </Dialog.Close>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[75vh] overflow-y-auto no-scrollbar">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column: Images */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Main Thumbnail</label>
                      <div className="relative group h-48 rounded-2xl bg-zinc-50 border-2 border-dashed border-zinc-200 flex items-center justify-center overflow-hidden transition-all hover:border-emerald-300">
                        {formData.image ? (
                          <>
                            <img src={formData.image} alt="Preview" className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Upload className="text-white h-8 w-8" />
                            </div>
                          </>
                        ) : (
                          <div className="text-center">
                            <ImageIcon className="h-10 w-10 text-zinc-300 mx-auto mb-2" />
                            <p className="text-[10px] font-bold text-zinc-400">Main cover image</p>
                          </div>
                        )}
                        <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleMainImageUpload} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Gallery Images ({formData.images.length})</label>
                      <div className="grid grid-cols-3 gap-2">
                        {formData.images.map((img, idx) => (
                          <div key={idx} className="relative h-20 rounded-lg overflow-hidden border border-zinc-100 group">
                            <img src={img} alt="" className="h-full w-full object-cover" />
                            <button 
                              type="button"
                              onClick={() => removeGalleryImage(idx)}
                              className="absolute top-1 right-1 h-5 w-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        ))}
                        <label className="h-20 rounded-lg border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-50 hover:border-emerald-300 transition-all">
                          <PlusCircle size={20} className="text-zinc-300" />
                          <span className="text-[8px] font-bold text-zinc-400 mt-1">Add</span>
                          <input type="file" multiple accept="image/*" className="hidden" onChange={handleGalleryUpload} />
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Details */}
                  <div className="space-y-4">
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

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Category</label>
                        <select 
                          className="w-full px-4 py-3.5 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none font-bold text-zinc-950 bg-white text-sm"
                          value={formData.cat}
                          onChange={(e) => setFormData({ ...formData, cat: e.target.value })}
                        >
                          {projectCategories.filter(c => c.id !== 'all').map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.label}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Icon</label>
                        <select 
                          className="w-full px-4 py-3.5 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none font-bold text-zinc-950 bg-white text-sm"
                          value={formData.icon}
                          onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                        >
                          {Object.keys(iconMap).map(iconName => (
                            <option key={iconName} value={iconName}>{iconName}</option>
                          ))}
                        </select>
                      </div>
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
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 sticky bottom-0 bg-white pb-2">
                  <button 
                    type="submit" 
                    disabled={uploading}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black transition-all shadow-lg shadow-emerald-900/10 disabled:opacity-50"
                  >
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
