import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/Reveal";
import { teamImages } from "@/lib/dental-images";

export const Route = createFileRoute("/team")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Meet the Team — Oregon City Family Dental" },
      { name: "description", content: "Friendly front desk, hygienists, and dental assistants who make every visit feel like home." },
    ],
  }),
});

const team = [
  { name: "Sarah Mitchell", role: "Office Manager", bio: "Sarah keeps everything running smoothly and is your go-to for insurance questions.", photo: teamImages[0] },
  { name: "Jasmine Lopez", role: "Front Desk Coordinator", bio: "The first smile you'll see — Jasmine makes scheduling effortless.", photo: teamImages[1] },
  { name: "Megan O'Connor, RDH", role: "Lead Dental Hygienist", bio: "Gentle, thorough cleanings with a patient-first approach.", photo: teamImages[2] },
  { name: "Aaliyah Brooks, RDH", role: "Dental Hygienist", bio: "Specializes in pediatric cleanings and nervous patients.", photo: teamImages[3] },
  { name: "David Kim", role: "Dental Assistant", bio: "Calm, kind, and incredibly efficient chairside.", photo: teamImages[4] },
  { name: "Olivia Tran", role: "Patient Care Coordinator", bio: "Helps you plan treatment, financing, and follow-ups.", photo: teamImages[5] },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Meet the Team"
        title="The friendly faces behind every visit"
        subtitle="From the front desk to the chairside, our team is here to make sure your experience feels welcoming, easy, and warm."
      />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={(i % 6) * 60}>
                <article className="group h-full rounded-2xl bg-card border border-border/60 overflow-hidden shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img src={t.photo} alt={t.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold tracking-widest uppercase text-secondary">{t.role}</div>
                    <h3 className="mt-1 text-lg font-bold text-primary">{t.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/about" className="text-sm text-secondary hover:text-primary">← Back to About</Link>
          </div>
        </div>
      </section>
    </>
  );
}
