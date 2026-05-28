import { Link } from "@tanstack/react-router";
import { Flame } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects/Gallery" },
  { to: "/about", label: "About Us" },
] ;

export function SiteHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid place-items-center w-10 h-10 rounded-md bg-brand text-brand-foreground">
            <Flame className="w-5 h-5" />
          </span>
          <span className="font-display font-bold leading-tight">
            <span className="block text-lg">HOT FLAME</span>
            <span className="block text-xs text-brand tracking-widest">BIOGAS</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors"
              activeProps={{ className: "text-brand border-b-2 border-brand pb-1" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+254792934102"
          className="hidden md:inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-4 py-2.5 text-sm font-semibold hover:bg-brand-dark transition-colors"
        >
          +254 792 934 102
        </a>
      </div>
    </header>
  );
}
