import { Sparkles, Smile, Stethoscope, Siren, Users, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const services = [
  { icon: Stethoscope, title: "Dental Cleanings", desc: "Gentle, thorough hygiene visits that keep your smile bright and gums healthy." },
  { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Veneers, bonding, and smile makeovers tailored to your unique features." },
  { icon: Siren, title: "Emergency Dental Care", desc: "Same-day relief for toothaches, broken teeth, and urgent dental needs." },
  { icon: Smile, title: "Teeth Whitening", desc: "Professional whitening that delivers visibly brighter smiles in one visit." },
  { icon: Users, title: "Family Dentistry", desc: "Kid-friendly care and comprehensive treatment for every member of your family." },
  { icon: ShieldCheck, title: "Dental Exams", desc: "Comprehensive exams with digital imaging for accurate, preventive care." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase">Our Services</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Complete dental care, one trusted team</h2>
          <p className="mt-4 text-muted-foreground">From routine checkups to advanced cosmetic work, we offer everything your family needs under one roof.</p>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group h-full rounded-2xl bg-card border border-border/60 p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl gradient-accent flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
