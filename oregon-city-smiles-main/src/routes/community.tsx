import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Heart, School, Users, HandHeart } from "lucide-react";
import { communityImages } from "@/lib/dental-images";

export const Route = createFileRoute("/community")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Community Involvement — Oregon City Family Dental" },
      { name: "description", content: "Local events, school programs, and charity work — how Oregon City Family Dental gives back to our neighbors." },
    ],
  }),
});

const initiatives = [
  { icon: School, title: "School Programs", desc: "Free oral health visits and toothbrush drives at Oregon City elementary schools." },
  { icon: HandHeart, title: "Charity Care", desc: "Pro-bono dental work for local families through our annual Give-Back Day." },
  { icon: Heart, title: "Local Sponsorships", desc: "Proud sponsors of youth sports, the County Fair, and the Pioneer Festival." },
  { icon: Users, title: "Family Events", desc: "Smile Saturdays, holiday food drives, and community wellness fairs." },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Community Involvement"
        title="Proud to call Oregon City home"
        subtitle="Beyond the office, our team is dedicated to giving back to the neighbors and families who make this community special."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((it, i) => (
              <Reveal key={it.title} delay={i * 80}>
                <div className="group h-full rounded-2xl bg-card border border-border/60 p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="mx-auto h-12 w-12 rounded-xl gradient-accent flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform">
                    <it.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {communityImages.map((src, i) => (
              <Reveal key={src} delay={(i % 4) * 60}>
                <figure className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500">
                  <img src={src} alt="Community event" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="rounded-3xl gradient-hero p-10 border border-border/60 shadow-soft text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">Have a community event you'd like us to support?</h3>
              <p className="mt-3 text-muted-foreground">We're always looking for new ways to give back. Reach out and let's talk.</p>
              <Link to="/contact" className="mt-6 inline-block text-sm font-bold tracking-widest uppercase text-secondary hover:text-primary">Get in Touch →</Link>
            </div>
          </Reveal>

          <div className="mt-12 text-center">
            <Link to="/about" className="text-sm text-secondary hover:text-primary">← Back to About</Link>
          </div>
        </div>
      </section>
    </>
  );
}
