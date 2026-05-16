import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Calendar } from "lucide-react";

export const Route = createFileRoute("/savings-plan")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Dental Savings Plan — Oregon City Family Dental" },
      { name: "description", content: "Affordable in-house dental membership with cleanings, exams, X-rays, and treatment discounts — no insurance needed." },
    ],
  }),
});

const plans = [
  {
    name: "Child",
    price: 249,
    period: "/year",
    desc: "Ages 13 and under",
    features: [
      "2 routine cleanings",
      "2 comprehensive exams",
      "Bitewing X-rays included",
      "Fluoride treatment",
      "15% off all other treatments",
    ],
    featured: false,
  },
  {
    name: "Adult",
    price: 349,
    period: "/year",
    desc: "Most popular — best value",
    features: [
      "2 routine cleanings",
      "2 comprehensive exams",
      "All routine X-rays",
      "Oral cancer screening",
      "20% off all other treatments",
      "Emergency exam included",
    ],
    featured: true,
  },
  {
    name: "Perio",
    price: 499,
    period: "/year",
    desc: "Periodontal maintenance",
    features: [
      "4 periodontal cleanings",
      "2 comprehensive exams",
      "All routine X-rays",
      "Oral cancer screening",
      "20% off all other treatments",
    ],
    featured: false,
  },
];

const perks = [
  "No insurance hassle — instant savings at every visit",
  "No deductibles, no maximums, no claim forms",
  "No waiting periods — benefits start day one",
  "Family discounts available",
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Dental Savings Plan"
        title="Affordable dental care, no insurance required"
        subtitle="Our in-house membership gives you preventive care plus generous discounts — designed to make great dentistry easy and affordable."
      />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-7">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className={`relative h-full rounded-3xl border p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 ${
                  p.featured
                    ? "bg-primary text-primary-foreground border-primary shadow-elegant"
                    : "bg-card border-border/60 hover:shadow-elegant"
                }`}>
                  {p.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-accent text-white text-xs font-bold tracking-widest uppercase shadow-glow">
                      Most Popular
                    </div>
                  )}
                  <div className={`text-xs font-semibold tracking-widest uppercase ${p.featured ? "text-secondary-foreground/90" : "text-secondary"}`}>{p.name} Plan</div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-5xl font-bold">${p.price}</span>
                    <span className={`text-sm ${p.featured ? "opacity-80" : "text-muted-foreground"}`}>{p.period}</span>
                  </div>
                  <p className={`mt-2 text-sm ${p.featured ? "opacity-90" : "text-muted-foreground"}`}>{p.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-secondary" : "text-secondary"}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={p.featured ? "secondary" : "default"}
                    className="mt-7 w-full rounded-full"
                  >
                    <Link to="/contact">Enroll Now</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="rounded-3xl gradient-hero p-8 border border-border/60 shadow-soft">
              <div className="flex items-center gap-2 text-secondary text-xs font-bold tracking-widest uppercase">
                <Sparkles className="h-4 w-4" /> Member Perks
              </div>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground/85">
                    <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full shadow-glow">
              <Link to="/contact"><Calendar className="mr-2 h-5 w-5" /> Talk to Our Team</Link>
            </Button>
            <div className="mt-4">
              <Link to="/about" className="text-sm text-secondary hover:text-primary">← Back to About</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
