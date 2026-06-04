import { createFileRoute, Link, Outlet, redirect } from "@tanstack/react-router";
import { 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  Settings, 
  LogOut, 
  User,
  Wrench
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/admin/AuthContext";

export const Route = createFileRoute("/admin")({
  beforeLoad: async ({ location }) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: AdminLayout,
});

const menuItems = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/admin/services", label: "Manage Services", icon: Wrench },
  { to: "/admin/projects", label: "Manage Projects", icon: ImageIcon },
  { to: "/admin/blogs", label: "Manage Blogs", icon: FileText },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

import { AdminProvider } from "../../components/admin/AdminContext";

function AdminLayout() {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <AdminProvider>
      <div className="min-h-screen bg-zinc-50 flex flex-col">
        {/* Top Header */}
        <header className="h-20 bg-zinc-900 border-b border-white/10 flex items-center justify-between px-6 sticky top-0 z-40 text-white">
          <div className="flex items-center gap-10">
            <Link to="/admin" className="flex items-center gap-3 no-underline group">
              <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center font-black text-white group-hover:bg-emerald-500 transition-colors">
                H
              </div>
              <span className="font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                HotFlame <span className="text-emerald-500">Admin</span>
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-white leading-none">
                  {user?.email?.split('@')[0] || "Admin"}
                </p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Administrator</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-emerald-600/20 text-emerald-500 flex items-center justify-center border border-emerald-500/20 shadow-sm overflow-hidden">
                <User className="h-6 w-6" />
              </div>
              <button 
                onClick={handleSignOut}
                className="ml-2 p-2 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-400/10 transition-all"
                title="Sign Out"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </AdminProvider>
  );
}
