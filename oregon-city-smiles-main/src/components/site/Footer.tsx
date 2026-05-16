import { Facebook, Instagram, Twitter, ShieldCheck, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">OC</span>
            <span>Oregon City<br/>Family Dental</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Compassionate, modern dental care for families in Oregon City, Oregon.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 text-xs text-primary-foreground/80">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            HIPAA-compliant · Licensed
          </div>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-secondary/80 flex items-center justify-center transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold mb-4">Explore</div>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/forms", "Forms"],
              ["/testimonials", "Testimonials"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-secondary transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" /> 602 Monroe Street, Oregon City, OR</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-secondary" /> <a href="tel:+15036568250" className="hover:text-secondary">503-656-8250</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-secondary" /> <a href="mailto:info@ocfamilydentistry.net" className="hover:text-secondary break-all">info@ocfamilydentistry.net</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-4 flex items-center gap-2"><Clock className="h-4 w-4" /> Hours</div>
          <ul className="space-y-1.5 text-sm text-primary-foreground/75">
            <li className="flex justify-between gap-3"><span>Monday</span><span>8am – 5pm</span></li>
            <li className="flex justify-between gap-3"><span>Tue – Thu</span><span>7am – 5pm</span></li>
            <li className="flex justify-between gap-3"><span>Friday</span><span>7am – 1pm</span></li>
            <li className="flex justify-between gap-3"><span>Sat – Sun</span><span>Closed</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Oregon City Family Dental. All rights reserved.</span>
          <span>Caring for Oregon City smiles, one family at a time.</span>
        </div>
      </div>
    </footer>
  );
}
