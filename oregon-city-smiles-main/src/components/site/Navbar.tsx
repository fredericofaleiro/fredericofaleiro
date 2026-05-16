import { useEffect, useState } from "react";
import { Phone, Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/forms", label: "Forms" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-primary">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-soft">
            OC
          </span>
          <span className="hidden sm:inline">Oregon City Family Dental</span>
        </Link>
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/75 hover:text-primary" }}
              className="text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+15036568250" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <Phone className="h-4 w-4" /> 503-656-8250
          </a>
          <Button asChild className="rounded-full shadow-glow">
            <Link to="/contact"><Calendar className="mr-1 h-4 w-4" /> Book a Visit</Link>
          </Button>
        </div>
        <button className="lg:hidden p-2 text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden glass border-t border-border px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/80" }}
              className="block text-sm font-medium"
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:+15036568250" className="block text-sm font-medium text-primary">
            <Phone className="inline h-4 w-4 mr-1" /> 503-656-8250
          </a>
          <Button asChild className="w-full rounded-full">
            <Link to="/contact" onClick={() => setOpen(false)}>Book a Visit</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
