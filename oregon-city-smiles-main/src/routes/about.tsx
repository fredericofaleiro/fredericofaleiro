import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import {
  Heart, Users, Compass, Siren, Clock, Building2,
  ChevronRight, Award, Star, Smile,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Oregon City Family Dental" },
      { name: "description", content: "Meet the doctors and team behind Oregon City Family Dental — board-certified, compassionate, and family-focused." },
      { property: "og:title", content: "About Oregon City Family Dental" },
      { property: "og:description", content: "Compassionate doctors, modern facilities, and a welcoming team in Oregon City, OR." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const stats = [
  { num: 10, suffix: "+", label: "Years of Excellent Service" },
  { num: 4, suffix: "", label: "Professional & Board Certified Doctors" },
  { num: 100, suffix: "+", label: "5-Star Patient Reviews" },
  { num: 3000, suffix: "+", label: "Satisfied & Happy Patients" },
];

const values = [
  { icon: Heart, title: "Compassionate Doctors", desc: "Gentle, attentive dentists who listen first and treat every patient with kindness.", cta: "Meet the Doctors", to: "/doctors" as const },
  { icon: Users, title: "Caring Team", desc: "A welcoming staff that knows your name — and your family's smiles.", cta: "Meet the Team", to: "/team" as const },
  { icon: Compass, title: "Your Healthcare Journey", desc: "We make new-patient visits simple, transparent, and stress-free from day one.", cta: "Your First Visit", to: "/first-visit" as const },
  { icon: Siren, title: "Emergency Services", desc: "Same-day care for urgent dental needs — toothaches, breaks, and more.", cta: "View Our Services", to: "/services" as const },
  { icon: Clock, title: "Always There For You", desc: "Flexible scheduling, clear communication, and follow-through after every visit.", cta: "Why Choose Us?", to: "/why-choose-us" as const },
  { icon: Building2, title: "Premium Facilities", desc: "Modern, comfortable office with the latest dental technology and digital imaging.", cta: "Tour Our Office", to: "/tour" as const },
];

const sidebarLinks = [
  { label: "Why Choose Us?", to: "/why-choose-us" as const },
  { label: "Tour Our Office", to: "/tour" as const },
  { label: "Meet the Doctors", to: "/doctors" as const },
  { label: "Meet the Team", to: "/team" as const },
  { label: "Your First Visit", to: "/first-visit" as const },
  { label: "Our Dental Savings Plan", to: "/savings-plan" as const },
  { label: "Community Involvement", to: "/community" as const },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Patient-focused dentistry, rooted in Oregon City"
        subtitle="We've spent over a decade building a practice families trust — combining advanced dentistry with the warmth of a small-town team."
      />

      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="rounded-2xl bg-card border border-border/60 p-7 shadow-soft text-center h-full">
                <div className="font-display text-4xl sm:text-5xl font-bold text-primary">
                  <Counter to={s.num} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-xs font-semibold tracking-widest uppercase text-secondary">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase">Our Values</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">What We Stand For</h2>
            <p className="mt-4 text-muted-foreground">The principles that shape every visit at Oregon City Family Dental.</p>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="group h-full rounded-2xl bg-card border border-border/60 p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="h-12 w-12 rounded-xl gradient-accent flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{v.desc}</p>
                  <Link to={v.to} className="mt-5 inline-flex items-center gap-1 text-xs font-bold tracking-widest uppercase text-secondary hover:text-primary transition-colors">
                    {v.cta} <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-10">
          <aside className="lg:col-span-1">
            <Reveal>
              <div className="rounded-3xl bg-card border border-border/60 p-7 shadow-soft sticky top-24">
                <div className="text-xs font-semibold tracking-widest text-secondary uppercase">Learn More</div>
                <h3 className="mt-2 text-2xl font-bold text-primary">Why Choose Us?</h3>
                <ul className="mt-5 divide-y divide-border/60">
                  {sidebarLinks.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="flex items-center justify-between py-3 text-sm text-foreground/80 hover:text-primary transition-colors">
                        <span>{l.label}</span>
                        <ChevronRight className="h-4 w-4 text-secondary" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">A practice built around your family</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Oregon City Family Dental was founded with a simple goal: combine modern, evidence-based dentistry with
                the kind of personal care families deserve. Our doctors are board-certified and dedicated to ongoing
                education, so the treatment you receive reflects the latest in safe, comfortable dentistry.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From a child's first cleaning to a complete cosmetic transformation, every visit is built around your
                comfort. We take time to explain options, listen to your goals, and create a plan that fits your life
                and budget.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: Award, title: "Board-Certified", desc: "Our doctors hold advanced credentials and pursue continuing education year-round." },
                { icon: Star, title: "5-Star Care", desc: "Hundreds of patients have shared glowing reviews of their experiences with us." },
                { icon: Smile, title: "Family-First", desc: "We see patients of every age in one welcoming, easy-to-visit office." },
                { icon: Building2, title: "Modern Office", desc: "Digital X-rays, CEREC same-day crowns, and comfortable patient suites." },
              ].map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="rounded-2xl bg-card border border-border/60 p-6 shadow-soft h-full">
                    <div className="h-11 w-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 font-semibold text-primary">{p.title}</h4>
                    <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
