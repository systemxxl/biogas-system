import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Plus, 
  ArrowUpRight, 
  Users, 
  Wrench, 
  ImageIcon, 
  FileText, 
  TrendingUp,
  Clock
} from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminOverview,
});

const stats = [
  { label: "Total Services", value: "8", icon: Wrench, color: "bg-blue-50 text-blue-600", trend: "+2 this month" },
  { label: "Project Gallery", value: "124", icon: ImageIcon, color: "bg-emerald-50 text-emerald-600", trend: "+12 new photos" },
  { label: "Blog Posts", value: "42", icon: FileText, color: "bg-amber-50 text-amber-600", trend: "+3 pending review" },
  { label: "Service Inquiries", value: "12", icon: Users, color: "bg-purple-50 text-purple-600", trend: "from WhatsApp" },
];

const recentActivity = [
  { action: "Updated", target: "Biogas Plant Installation", type: "Service", time: "2 hours ago" },
  { action: "Added", target: "How Modern Biogas Digesters Work", type: "Blog", time: "5 hours ago" },
  { action: "Uploaded", target: "Community Training Gallery", type: "Project", time: "Yesterday" },
  { action: "Modified", target: "Fixed Dome vs. Floating Drum", type: "Blog", time: "2 days ago" },
];

function AdminOverview() {
  return (
    <div className="space-y-10">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-black text-zinc-950 tracking-tight">Welcome back, Mary</h1>
        <p className="mt-2 text-zinc-500 font-medium">Manage your site content and track your impact from here.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm transition-hover hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase tracking-tighter">
                <TrendingUp size={10} />
                Live
              </div>
            </div>
            <div className="mt-5">
              <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-3xl font-black text-zinc-950 mt-1">{stat.value}</h3>
              <p className="mt-2 text-xs font-bold text-zinc-500">{stat.trend}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-zinc-950 tracking-tight">Quick Actions</h2>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { to: "/admin/services", label: "Add New Service", icon: Wrench, color: "emerald" },
              { to: "/admin/projects", label: "Upload Project Photo", icon: ImageIcon, color: "emerald" },
              { to: "/admin/blogs", label: "Write Blog Post", icon: FileText, color: "emerald" },
              { to: "/admin/settings", label: "Edit Site Info", icon: TrendingUp, color: "emerald" },
            ].map((action) => (
              <Link
                key={action.label}
                to={action.to}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all no-underline shadow-sm"
              >
                <div className="h-12 w-12 rounded-xl bg-zinc-100 group-hover:bg-emerald-100 flex items-center justify-center text-zinc-500 group-hover:text-emerald-700 transition-colors">
                  <action.icon size={22} />
                </div>
                <div className="flex-1">
                  <p className="font-black text-zinc-950 group-hover:text-emerald-950">{action.label}</p>
                  <p className="text-xs font-bold text-zinc-400">Update section</p>
                </div>
                <Plus className="h-5 w-5 text-zinc-300 group-hover:text-emerald-500 transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-zinc-950 tracking-tight text-left">Recent Activity</h2>
            <Link to="/admin" className="text-xs font-black text-emerald-700 hover:underline uppercase tracking-widest no-underline">View Log</Link>
          </div>

          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
            <div className="divide-y divide-zinc-100">
              {recentActivity.map((activity, i) => (
                <div key={i} className="p-4 flex items-start gap-4 hover:bg-zinc-50 transition-colors">
                  <div className="h-9 w-9 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 leading-tight">
                      {activity.action} <span className="text-emerald-700">{activity.target}</span>
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-black uppercase text-zinc-400 tracking-tighter">{activity.type}</span>
                      <span className="h-1 w-1 bg-zinc-200 rounded-full"></span>
                      <span className="text-[10px] font-bold text-zinc-400">{activity.time}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-zinc-300" />
                </div>
              ))}
            </div>
            <button className="w-full py-4 bg-zinc-50 border-t border-zinc-100 text-sm font-black text-zinc-500 hover:text-zinc-900 transition-colors">
              Load More History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
