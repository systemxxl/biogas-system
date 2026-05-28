import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects/Gallery" },
  { to: "/about", label: "About Us" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center hover:opacity-80 transition" aria-label="Hot Flame Biogas home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="border-b-2 border-transparent pb-1 text-sm font-bold text-zinc-900 transition hover:text-emerald-700"
              activeProps={{ className: "border-emerald-700 text-emerald-700" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/+254715613635"
          className="hidden items-center gap-2 rounded-md bg-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 md:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          Chat on WhatsApp
        </a>

        <details className="group relative md:hidden">
          <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-md border border-zinc-200 text-zinc-900 marker:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </summary>
          <div className="absolute right-0 top-12 w-56 rounded-xl border border-zinc-200 bg-white p-3 shadow-xl">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block rounded-lg px-3 py-2 text-sm font-bold text-zinc-900 hover:bg-emerald-50 hover:text-emerald-700"
                activeProps={{ className: "bg-emerald-50 text-emerald-700" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="+254715613635"
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-emerald-700 px-4 py-3 text-sm font-bold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Call Us
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
