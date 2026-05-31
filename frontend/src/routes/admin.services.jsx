import { createFileRoute } from "@tanstack/react-router";
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  ExternalLink,
  Wrench,
  Settings2,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { mainServices } from "../../lib/services";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export const Route = createFileRoute("/admin/services")({
  component: AdminServices,
});

function AdminServices() {
  const [search, setSearch] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const filteredServices = mainServices.filter(service => 
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 text-left">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-zinc-950 tracking-tight">Manage Services</h1>
          <p className="mt-1 text-zinc-500 font-medium text-sm">Define and update your core biogas service offerings.</p>
        </div>
        <button 
          onClick={() => setIsCreateModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-black text-sm transition-all shadow-lg shadow-emerald-900/10"
        >
          <Plus size={18} />
          Add New Service
        </button>
      </div>

      {/* Services List */}
      <div className="grid gap-4">
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-white p-2 rounded-2xl border border-zinc-200 shadow-sm hover:border-emerald-200 transition-all group">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4">
              <div className="h-20 w-28 rounded-xl bg-zinc-100 overflow-hidden shrink-0 border border-zinc-100">
                <img src={service.image} alt="" className="h-full w-full object-cover" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <service.icon size={16} />
                  </div>
                  <h3 className="font-black text-zinc-950 truncate">{service.title}</h3>
                </div>
                <p className="text-xs font-medium text-zinc-500 mt-2 line-clamp-1">{service.text}</p>
              </div>

              <div className="flex items-center gap-2 border-t sm:border-t-0 pt-4 sm:pt-0 sm:pl-4 sm:border-l border-zinc-100">
                <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-50 hover:bg-emerald-50 text-zinc-600 hover:text-emerald-700 font-bold text-xs transition-all">
                  <Edit3 size={14} />
                  Edit
                </button>
                <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-50 hover:bg-red-50 text-zinc-600 hover:text-red-600 font-bold text-xs transition-all">
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Service Modal Placeholder */}
      <Dialog.Root open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-[101] w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] p-4 focus:outline-none">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300 text-left">
              <div className="p-8 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
                <div>
                  <h2 className="text-2xl font-black text-zinc-950 tracking-tight">Create New Service</h2>
                  <p className="text-sm font-medium text-zinc-500 mt-1">Add a new specialized biogas solution to your menu.</p>
                </div>
                <Dialog.Close className="p-2 rounded-full hover:bg-zinc-200 text-zinc-400 transition-colors">
                  <X size={24} />
                </Dialog.Close>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Service Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Industrial Biogas Maintenance" 
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none transition-all font-bold text-zinc-950"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Service Icon</label>
                  <div className="grid grid-cols-4 gap-3">
                    {[Wrench, Settings2, Plus, X].map((Icon, i) => (
                      <button key={i} className={`p-4 rounded-xl border flex items-center justify-center transition-all ${i === 0 ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-zinc-50 border-zinc-100 text-zinc-400 hover:bg-zinc-100'}`}>
                        <Icon size={20} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Description</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe what this service entails..." 
                    className="w-full px-5 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 outline-none transition-all font-bold text-zinc-950 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black transition-all shadow-lg shadow-emerald-900/10">
                    Create Service
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
