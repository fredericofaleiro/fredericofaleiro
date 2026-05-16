import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import {
  Calendar, ClipboardList, Smile, Stethoscope, FileText, CreditCard,
  ShieldCheck, HelpCircle,
} from "lucide-react";

export const Route = createFileRoute("/first-visit")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Your First Visit — Oregon City Family Dental" },
      { name: "description", content: "What to expect, insurance, forms, and payment options for your first dental visit in Oregon City, OR." },
    ],
  }),
});

const steps = [
  { icon: Calendar, title: "Book Your Appointment", desc: "Call us at 503-656-8250 or use our online form — we'll find a time that works for you." },
  { icon: ClipboardList, title: "Complete Your Forms", desc: "Download new-patient forms ahead of time or fill them out in our lobby — both are quick and easy." },
  { icon: Smile, title: "Warm Welcome", desc: "Our front desk team will greet you, verify insurance, and walk you back to a comfortable suite." },
  { icon: Stethoscope, title: "Comprehensive Exam", desc: "Digital X-rays, oral cancer screening, and a one-on-one consultation with your dentist." },
  { icon: FileText, title: "Personalized Plan", desc: "We'll review findings, answer questions, and build a treatment plan that fits your budget." },
  { icon: CreditCard, title: "Easy Checkout", desc: "Clear pricing, insurance billed for you, and flexible financing if you need it." },
];

const faqs = [
  { q: "How long is the first visit?", a: "Plan for about 60–90 minutes — this gives us time for a complete exam, cleaning, and a no-pressure conversation about your goals." },
  { q: "What insurance do you accept?", a: "We accept most major PPO plans including Delta Dental, Cigna, Aetna, MetLife, Guardian, and more. Call us to confirm." },
  { q: "What if I don't have insurance?", a: "We offer our in-house Dental Savings Plan with discounts on cleanings, exams, X-rays, and most treatments — no waiting periods." },
  { q: "Do you see kids?", a: "Yes! We're a true family practice and love seeing children of every age, starting with their first tooth." },
  { q: "What should I bring?", a: "Bring a photo ID, your insurance card (if you have one), and a list of any medications you take." },
  { q: "I'm nervous about the dentist — can you help?", a: "Absolutely. We offer noise-canceling headphones, blankets, nitrous oxide, and sedation options for a truly calm experience." },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Your First Visit"
        title="What to expect, every step of the way"
        subtitle="No surprises — just a warm welcome, a thorough exam, and a plan that fits your life and budget."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center">Your visit, step by step</h2>
          </Reveal>
          <ol className="mt-12 relative space-y-8 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-border">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <li className="relative pl-20">
                  <div className="absolute left-0 top-0 h-12 w-12 rounded-2xl gradient-accent text-white flex items-center justify-center shadow-glow">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="rounded-2xl bg-card border border-border/60 p-6 shadow-soft">
                    <div className="text-xs font-semibold tracking-widest uppercase text-secondary">Step {i + 1}</div>
                    <h3 className="mt-1 text-lg font-bold text-primary">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="text-center">
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase">FAQ</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-primary">Common questions from new patients</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <div className="rounded-2xl bg-card border border-border/60 p-6 shadow-soft h-full">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary">{f.q}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            HIPAA-compliant · Insurance billed for you · Transparent estimates
          </div>
          <Reveal className="mt-10 text-center">
            <Button asChild size="lg" className="rounded-full shadow-glow">
              <Link to="/contact"><Calendar className="mr-2 h-5 w-5" /> Schedule Your First Visit</Link>
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
