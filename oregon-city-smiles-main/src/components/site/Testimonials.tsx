import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Mom of two, Oregon City",
    quote:
      "The friendliest staff I've ever encountered at a dental office. My kids actually look forward to their cleanings — that says everything. The office is spotless and scheduling is incredibly fast.",
  },
  {
    name: "James R.",
    role: "Patient since 2019",
    quote:
      "I used to dread the dentist, but the team here is so gentle and patient. They explained everything, never rushed, and made me feel completely at ease. Truly a great experience.",
  },
  {
    name: "Emily T.",
    role: "Local resident",
    quote:
      "From the welcoming front desk to the kind dentists, every visit feels personal. They got us in same-day for an emergency and treated my daughter like she was their own. Highly recommend.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Loved by families across Oregon City</h2>
          <p className="mt-4 text-muted-foreground">Real stories from patients who trust us with their smiles.</p>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="h-full rounded-2xl bg-card border border-border/60 p-7 shadow-soft hover:shadow-elegant transition-shadow relative">
                <Quote className="absolute top-5 right-5 h-8 w-8 text-secondary/20" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="mt-4 text-foreground/80 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-border/60">
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
