import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  Settings, 
  LogOut, 
  ChevronRight,
  Menu,
  X,
  Bell,
  User,
  Wrench
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

const menuItems = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/admin/services", label: "Manage Services", icon: Wrench },
  { to: "/admin/projects", label: "Manage Projects", icon: ImageIcon },
  { to: "/admin/blogs", label: "Manage Blogs", icon: FileText },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

import { AdminProvider } from "../components/admin/AdminContext";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <AdminProvider>
      <div className="min-h-screen bg-zinc-50 flex">
        {/* Sidebar */}
        <aside 
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-zinc-900 text-white transition-transform duration-300 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:translate-x-0`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="h-20 flex items-center px-6 border-b border-white/10">
              <Link to="/" className="flex items-center gap-3 no-underline group">
                <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center font-black text-white group-hover:bg-emerald-500 transition-colors">
                  H
                </div>
                <span className="font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  HotFlame <span className="text-emerald-500">Admin</span>
                </span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 px-4 space-y-1">
              {menuItems.map((item) => {
                const isActive = item.exact 
                  ? location.pathname === item.to 
                  : location.pathname.startsWith(item.to);
                
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all no-underline ${
                      isActive 
                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/20" 
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <item.icon className={`h-5 w-5 ${isActive ? "text-white" : "text-emerald-500"}`} />
                    <span className="text-sm font-bold">{item.label}</span>
                    {isActive && <ChevronRight className="ml-auto h-4 w-4 opacity-50" />}
                  </Link>
                );
              })}
            </nav>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-white/10">
              <button className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-red-500/5 transition-all">
                <LogOut className="h-5 w-5" />
                <span className="text-sm font-bold">Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Header */}
          <header className="h-20 bg-white border-b border-zinc-200 flex items-center justify-between px-6 sticky top-0 z-40">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-zinc-100 text-zinc-600"
            >
              {sidebarOpen ? <X /> : <Menu />}
            </button>

            <div className="hidden lg:block">
              <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Dashboard</h2>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2.5 rounded-full hover:bg-zinc-100 text-zinc-500 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 h-2 w-2 bg-emerald-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="h-8 w-px bg-zinc-200 mx-2"></div>
              <div className="flex items-center gap-3 pl-2">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-black text-zinc-950">Mary Mwami</p>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Administrator</p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center border-2 border-emerald-50 shadow-sm overflow-hidden">
                  <User className="h-6 w-6" />
                </div>
              </div>
            </div>
          </header>

          {/* Viewport */}
          <main className="p-6 md:p-10 max-w-7xl w-full mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </AdminProvider>
  );
}
