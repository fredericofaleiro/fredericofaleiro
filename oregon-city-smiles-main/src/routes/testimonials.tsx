import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Star, Quote, Calendar } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Testimonials — Oregon City Family Dental" },
      { name: "description", content: "Read 5-star reviews from Oregon City families about our friendly staff, gentle dentists, and welcoming office." },
      { property: "og:title", content: "Patient Testimonials" },
      { property: "og:description", content: "Real stories from families who trust us with their smiles." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
});

const reviews = [
  { name: "Sarah M.", role: "Mom of two, Oregon City", quote: "The friendliest staff I've ever encountered at a dental office. My kids actually look forward to their cleanings — that says everything. The office is spotless and scheduling is incredibly fast." },
  { name: "James R.", role: "Patient since 2019", quote: "I used to dread the dentist, but the team here is so gentle and patient. They explained everything, never rushed, and made me feel completely at ease. Truly a great experience." },
  { name: "Emily T.", role: "Local resident", quote: "From the welcoming front desk to the kind dentists, every visit feels personal. They got us in same-day for an emergency and treated my daughter like she was their own." },
  { name: "Marcus L.", role: "New patient", quote: "Beautiful office, modern equipment, and the most thorough cleaning I've had in years. I appreciated how they walked me through everything on the screen." },
  { name: "Priya K.", role: "Family of four", quote: "We switched our whole family here and never looked back. Booking is easy, the kids love the staff, and the doctors take time to actually listen." },
  { name: "Daniel W.", role: "Invisalign patient", quote: "Halfway through Invisalign and the results are already amazing. Every appointment runs on time and the team is so encouraging through the process." },
  { name: "Jenna B.", role: "Mom of three", quote: "My youngest was nervous, and they made her first cleaning fun. We left with stickers, a clean smile, and a kid who can't wait to come back." },
  { name: "Robert S.", role: "Long-time patient", quote: "I've been coming here for years. Honest recommendations, no upselling, and great work every time. Highly recommend to anyone in Oregon City." },
  { name: "Alicia N.", role: "Cosmetic patient", quote: "My veneers turned out beyond what I imagined. The doctor really took time to understand my goals. I smile in pictures again — thank you!" },
];

function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Loved by families across Oregon City"
        subtitle="Real stories from patients who trust us with their smiles. We're honored to be part of your family's care."
      />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-bold text-primary">4.9 out of 5</span> · 100+ verified reviews
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((t, i) => (
              <Reveal key={t.name} delay={(i % 6) * 70}>
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

          <Reveal className="mt-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">Ready to experience the difference?</h3>
            <Button asChild size="lg" className="mt-6 rounded-full shadow-glow">
              <Link to="/contact"><Calendar className="mr-2 h-5 w-5" /> Book a Visit</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
