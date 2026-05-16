import { Heart, Award, Clock, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const points = [
  { icon: Heart, title: "Compassionate Care", desc: "We take time to listen and treat every patient like family." },
  { icon: Award, title: "Modern Technology", desc: "Digital X-rays and advanced tools for safer, more accurate care." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Early, evening, and same-day appointments to fit your life." },
  { icon: Sparkles, title: "Beautiful Results", desc: "From healthy checkups to stunning cosmetic transformations." },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase">About Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Patient-focused dental care, rooted in Oregon City
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            At Oregon City Family Dental, we believe great dentistry starts with genuine relationships. Our team
            combines decades of experience with modern, evidence-based treatments to deliver care that's gentle,
            thorough, and truly personalized.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether it's your child's first visit, a routine cleaning, or a complete smile makeover, we're committed
            to making every appointment a calm and positive experience. Our welcoming office is designed for families
            and individuals who want a dentist they can trust for years to come.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="rounded-2xl bg-card p-6 shadow-soft border border-border/60 h-full">
                <div className="h-11 w-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-primary">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
