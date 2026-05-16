import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import {
  Heart, Cpu, Award, Sofa, Users, Siren, MapPin, Feather, DollarSign,
  ShieldCheck, Star, BadgeCheck, Calendar,
} from "lucide-react";

export const Route = createFileRoute("/why-choose-us")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Why Choose Us — Oregon City Family Dental" },
      { name: "description", content: "Personalized care, advanced technology, transparent pricing, and a trusted local team in Oregon City, OR." },
    ],
  }),
});

const reasons = [
  { icon: Heart, title: "Personalized Care", desc: "We listen first and design treatment around your goals, comfort, and timeline." },
  { icon: Cpu, title: "Advanced Technology", desc: "Digital X-rays, CEREC same-day crowns, and modern imaging for safer, faster visits." },
  { icon: Award, title: "Experienced Doctors", desc: "Board-certified dentists with decades of combined experience and ongoing training." },
  { icon: Sofa, title: "Comfortable Office", desc: "Calm, modern suites designed to put even nervous patients at ease." },
  { icon: Users, title: "Family-Friendly", desc: "One trusted office for every age — from a child's first cleaning to grandparents." },
  { icon: Siren, title: "Emergency Care", desc: "Same-day relief for toothaches, breaks, and urgent dental needs." },
  { icon: MapPin, title: "Trusted Locally", desc: "Hundreds of 5-star reviews from neighbors throughout Oregon City." },
  { icon: Feather, title: "Gentle Treatments", desc: "Soft-touch techniques and sedation options for a truly pain-free experience." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "Clear estimates up front, flexible financing, and no surprise charges." },
];

const badges = [
  { icon: ShieldCheck, label: "HIPAA Compliant" },
  { icon: Star, label: "5-Star Rated" },
  { icon: BadgeCheck, label: "Board Certified" },
  { icon: Award, label: "10+ Years Trusted" },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Why Choose Us"
        title="Premium dental care, built around you"
        subtitle="Nine reasons families across Oregon City trust us with their smiles — year after year."
      />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 6) * 60}>
                <div className="group h-full rounded-2xl bg-card border border-border/60 p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                  <div className="h-12 w-12 rounded-xl gradient-accent flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="rounded-3xl gradient-hero p-8 border border-border/60 shadow-soft">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {badges.map((b) => (
                  <div key={b.label} className="flex items-center gap-3 justify-center">
                    <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <b.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-primary">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full shadow-glow">
              <Link to="/contact"><Calendar className="mr-2 h-5 w-5" /> Book Your Visit</Link>
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
