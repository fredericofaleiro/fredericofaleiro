import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactSection } from "@/components/site/ContactSection";
import { Reveal } from "@/components/Reveal";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Oregon City Family Dental" },
      { name: "description", content: "Visit us at 602 Monroe Street, Oregon City, OR. Call 503-656-8250 or send a message to book your appointment." },
      { property: "og:title", content: "Contact Oregon City Family Dental" },
      { property: "og:description", content: "Book a visit, call, or email our Oregon City office today." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const hours = [
  ["Monday", "8:00 am – 5:00 pm"],
  ["Tuesday – Thursday", "7:00 am – 5:00 pm"],
  ["Friday", "7:00 am – 1:00 pm"],
  ["Saturday – Sunday", "Closed"],
];

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Schedule your visit today"
        subtitle="We'd love to meet you. Reach out by phone, email, or our quick contact form — we'll be in touch right away."
      />
      <ContactSection />
      <section className="py-16 bg-muted/40">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="rounded-3xl bg-card border border-border/60 p-8 shadow-soft">
              <div className="flex items-center gap-3 text-primary">
                <Clock className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Working Hours</h2>
              </div>
              <ul className="mt-5 divide-y divide-border/60">
                {hours.map(([d, t]) => (
                  <li key={d} className="flex items-center justify-between py-3 text-sm">
                    <span className="text-foreground/80">{d}</span>
                    <span className="font-medium text-primary">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
