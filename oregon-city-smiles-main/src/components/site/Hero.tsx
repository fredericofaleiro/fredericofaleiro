import { Phone, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-family.jpg";

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden gradient-hero">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 shadow-soft border border-white">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span className="text-xs font-semibold text-primary">Trusted by 3,000+ families in Oregon City</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.05]">
            Healthy Smiles for the <span className="text-secondary">Whole Family</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Trusted family dentistry in Oregon City with compassionate care, advanced technology, and personalized
            treatment for every age.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full shadow-glow">
              <Link to="/contact"><Calendar className="mr-2 h-5 w-5" /> Book a Visit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary/20 text-primary">
              <a href="tel:+15036568250"><Phone className="mr-2 h-5 w-5" /> Call Now</a>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "10+", l: "Years of Care" },
              { n: "3k+", l: "Happy Patients" },
              { n: "4.9★", l: "Google Rating" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-primary font-display">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative animate-fade-up">
          <div className="absolute inset-0 -m-4 rounded-[2rem] gradient-accent opacity-30 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border-8 border-white">
            <img src={heroImg} alt="Smiling family at Oregon City Family Dental" width={1536} height={1280} className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-soft border border-white">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full gradient-accent flex items-center justify-center text-white font-bold">✓</div>
              <div>
                <div className="text-sm font-semibold text-primary">Same-day appointments</div>
                <div className="text-xs text-muted-foreground">Most insurance accepted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
