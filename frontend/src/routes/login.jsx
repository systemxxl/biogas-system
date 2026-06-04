import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/admin/AuthContext";
import { LogIn, Mail, Lock, Loader2, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: LoginComponent,
});

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { session, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate({ to: "/admin" });
    }
  }, [session, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      navigate({ to: "/admin" });
    } catch (err) {
      setError(err.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-zinc-50">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-700" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-zinc-200">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <LogIn className="h-6 w-6" />
          </div>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-zinc-900">
            Admin Login
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Secure access for Hotflame Biogas administrators
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {error && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-700">
              <AlertCircle className="h-4 w-4" />
              <p>{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-zinc-700"
              >
                Email Address
              </label>
              <div className="relative mt-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-lg border border-zinc-300 py-3 pl-10 pr-3 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm"
                  placeholder="admin@hotflamebiogas.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold text-zinc-700"
              >
                Password
              </label>
              <div className="relative mt-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-lg border border-zinc-300 py-3 pl-10 pr-3 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full justify-center rounded-lg bg-emerald-700 px-4 py-3 text-sm font-black text-white hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
