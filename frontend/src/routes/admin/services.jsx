import { createFileRoute } from "@tanstack/react-router";
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  X,
  Wrench,
  Settings2,
  Loader2,
  Upload,
  Image as ImageIcon
} from "lucide-react";
import { useState } from "react";
import { useAdmin } from "../../components/admin/AdminContext";
import * as Dialog from "@radix-ui/react-dialog";
import { getIcon, iconMap } from "../../lib/icons";
import { uploadImage } from "../../lib/api/supabase.api";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/services")({
  component: AdminServices,
});

function AdminServices() {
  const { services, addService, updateService, deleteService } = useAdmin();
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    icon: "Wrench",
    image: ""
  });

  const handleOpenCreate = () => {
    setEditingService(null);
    setFormData({
      title: "",
      text: "",
      icon: "Wrench",
      image: ""
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (service) => {
    setEditingService(service);
    setFormData({ 
      ...service,
      icon: typeof service.icon === 'string' ? service.icon : (service.icon?.name || "Wrench")
    });
    setIsModalOpen(true);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const url = await uploadImage(file, 'services');
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
      toast.error("Please upload an image first");
      return;
    }
    
    if (editingService) {
      updateService(editingService.id, formData);
    } else {
      addService(formData);
    }
    setIsModalOpen(false);
  };

  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-zinc-950 tracking-tight">Manage Services</h1>
          <p className="mt-1 text-zinc-500 font-medium text-sm">Update your biogas service offerings.</p>
        </div>
        <button 
          onClick={handleOpenCreate}
          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-black text-sm transition-all"
        >
          <Plus size={18} />
          Add New Service
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input 
            type="text" 
            placeholder="Search services..." 
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-zinc-100 bg-zinc-50 focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredServices.map((service) => {
          const Icon = typeof service.icon === 'string' ? getIcon(service.icon) : service.icon;
          return (
            <div key={service.id} className="bg-white p-2 rounded-2xl border border-zinc-200 shadow-sm hover:border-emerald-200 transition-all group">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4">
                <div className="h-20 w-28 rounded-xl bg-zinc-100 overflow-hidden shrink-0 border border-zinc-100">
                  <img src={service.image} alt="" className="h-full w-full object-cover" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                      {Icon && <Icon size={16} />}
                    </div>
                    <h3 className="font-black text-zinc-950 truncate">{service.title}</h3>
                  </div>
                  <p className="text-xs font-medium text-zinc-500 mt-2 line-clamp-1">{service.text}</p>
                </div>

                <div className="flex items-center gap-2 border-t sm:border-t-0 pt-4 sm:pt-0 sm:pl-4 sm:border-l border-zinc-100">
                  <button 
                    onClick={() => handleOpenEdit(service)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-50 hover:bg-emerald-50 text-zinc-600 hover:text-emerald-700 font-bold text-xs transition-all"
                  >
                    <Edit3 size={14} /> Edit
                  </button>
                  <button 
                    onClick={() => deleteService(service.id)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-50 hover:bg-red-50 text-zinc-600 hover:text-red-600 font-bold text-xs transition-all"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-[101] w-full max-w-xl translate-x-[-50%] translate-y-[-50%] p-4 focus:outline-none">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden text-left">
              <div className="p-8 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
                <h2 className="text-2xl font-black text-zinc-950">{editingService ? 'Edit' : 'Create'} Service</h2>
                <Dialog.Close className="p-2 rounded-full hover:bg-zinc-200 text-zinc-400">
                  <X size={24} />
                </Dialog.Close>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Service Image</label>
                  <div className="relative group">
                    <div className="h-48 w-full rounded-2xl bg-zinc-50 border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center overflow-hidden relative transition-all group-hover:border-emerald-300">
                      {formData.image ? (
                        <>
                          <img src={formData.image} alt="Preview" className="h-full w-full object-cover" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Upload className="text-white h-8 w-8" />
                          </div>
                        </>
                      ) : (
                        <div className="text-center p-6">
                          <ImageIcon className="h-10 w-10 text-zinc-300 mx-auto mb-2" />
                          <p className="text-xs font-bold text-zinc-400">Click to upload featured image</p>
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
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Service Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none font-bold text-zinc-950"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Icon</label>
                  <select 
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none font-bold text-zinc-950 bg-white"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  >
                    {Object.keys(iconMap).map(iconName => (
                      <option key={iconName} value={iconName}>{iconName}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Description</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none font-bold text-zinc-950 resize-none"
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  />
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button 
                    type="submit" 
                    disabled={uploading}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black transition-all shadow-lg shadow-emerald-900/10 disabled:opacity-50"
                  >
                    {editingService ? 'Save Changes' : 'Create Service'}
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
