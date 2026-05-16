import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar } from "lucide-react";
import { serviceImages } from "@/lib/dental-images";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Oregon City Family Dental" },
      { name: "description", content: "Cleanings, Invisalign, implants, CEREC same-day crowns, teeth whitening, sedation dentistry & more in Oregon City, OR." },
      { property: "og:title", content: "Dental Services in Oregon City" },
      { property: "og:description", content: "Comprehensive dental care for your whole family." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  { title: "Dental Cleanings & Exams", desc: "Gentle hygiene visits and thorough exams to keep your smile healthy." },
  { title: "For the Kids!", desc: "Kid-friendly visits that build confidence and lifelong dental habits." },
  { title: "CEREC Same-Day Crowns", desc: "Custom crowns designed, milled, and placed in a single visit." },
  { title: "Sleep Apnea", desc: "Oral appliance therapy for better sleep and healthier mornings." },
  { title: "Dental Implants", desc: "Permanent tooth replacement that looks and feels completely natural." },
  { title: "Dental Crowns and Bridges", desc: "Durable restorations that strengthen teeth and restore your smile." },
  { title: "Invisalign", desc: "Clear aligner orthodontics that straighten teeth discreetly." },
  { title: "Porcelain Veneers", desc: "Custom veneers for a brighter, perfectly shaped smile." },
  { title: "Dentures", desc: "Comfortable, natural-looking full and partial dentures." },
  { title: "Common Dental Emergencies", desc: "Same-day relief for toothaches, broken teeth, and dental injuries." },
  { title: "Teeth Whitening", desc: "Professional whitening for visibly brighter results in one visit." },
  { title: "Tooth Bonding", desc: "Quick cosmetic fixes for chips, gaps, and discoloration." },
  { title: "Sleep / Sedation Dentistry", desc: "Relaxed, anxiety-free care with gentle sedation options." },
  { title: "Root Canal Treatment", desc: "Modern endodontics that saves teeth and relieves pain comfortably." },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Complete dental care, one trusted team"
        subtitle="From routine checkups to advanced cosmetic and restorative work, we offer everything your family needs under one roof."
      />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 6) * 60}>
                <article className="group h-full rounded-2xl bg-card border border-border/60 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={serviceImages[s.title]}
                      alt={s.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                    <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-xs font-bold tracking-widest uppercase text-secondary hover:text-primary transition-colors">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <div className="rounded-3xl gradient-hero p-10 border border-border/60 shadow-soft">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">Not sure which service you need?</h3>
              <p className="mt-3 text-muted-foreground">Book a consultation — we'll listen and recommend the right plan for you.</p>
              <Button asChild size="lg" className="mt-6 rounded-full shadow-glow">
                <Link to="/contact"><Calendar className="mr-2 h-5 w-5" /> Book a Visit</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
