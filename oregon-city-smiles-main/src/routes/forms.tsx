import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { FileText, Download, ShieldCheck, CreditCard, Phone } from "lucide-react";

export const Route = createFileRoute("/forms")({
  component: FormsPage,
  head: () => ({
    meta: [
      { title: "Patient Forms — Oregon City Family Dental" },
      { name: "description", content: "Download new patient forms, review insurance information, and read our HIPAA privacy notice." },
      { property: "og:title", content: "Patient Forms — Oregon City Family Dental" },
      { property: "og:description", content: "Save time at your first visit by completing forms in advance." },
      { property: "og:url", content: "/forms" },
    ],
    links: [{ rel: "canonical", href: "/forms" }],
  }),
});

const forms = [
  { title: "New Patient Registration", desc: "Personal information and dental history form for first-time visitors." },
  { title: "Medical History", desc: "Help us provide safe, personalized care by sharing your medical history." },
  { title: "Consent for Treatment", desc: "Standard consent form required before treatment begins." },
  { title: "Child Patient Form", desc: "Registration form for patients under 18 years of age." },
];

function FormsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Patient Forms"
        title="Get a head start on your visit"
        subtitle="Download and complete your forms at home so we can spend your appointment focused on you, not paperwork."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-bold text-primary">New Patient Forms</h2>
              <p className="mt-2 text-muted-foreground">Click any form below to download. If you have trouble accessing them, please call us at <a href="tel:+15036568250" className="text-primary font-medium">503-656-8250</a>.</p>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {forms.map((f, i) => (
                <Reveal key={f.title} delay={i * 80}>
                  <div className="group h-full rounded-2xl bg-card border border-border/60 p-6 shadow-soft hover:shadow-elegant transition-all flex flex-col">
                    <div className="h-11 w-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-semibold text-primary">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground flex-1">{f.desc}</p>
                    <Button asChild variant="outline" size="sm" className="mt-5 rounded-full self-start">
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <Download className="mr-2 h-4 w-4" /> Download PDF
                      </a>
                    </Button>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12">
              <div className="rounded-2xl bg-card border border-border/60 p-7 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl gradient-accent flex items-center justify-center text-white shrink-0">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Insurance Information</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      We accept most major dental insurance plans and will gladly file claims on your behalf.
                      Our team will help you understand your benefits and out-of-pocket costs before treatment begins.
                      Don't have insurance? Ask about our in-house Dental Savings Plan.
                    </p>
                    <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-foreground/80">
                      {["Delta Dental", "Cigna", "MetLife", "Aetna", "Regence", "Pacific Source"].map((p) => (
                        <li key={p} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-secondary" /> {p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-6">
              <div className="rounded-2xl bg-card border border-border/60 p-7 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">HIPAA & Privacy Notice</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Your privacy matters to us. We follow all HIPAA guidelines to protect your health information.
                      Our Notice of Privacy Practices describes how medical information about you may be used and
                      disclosed and how you can access this information. A printed copy is available at the front desk.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <aside>
            <Reveal>
              <div className="rounded-3xl gradient-primary text-primary-foreground p-7 shadow-elegant sticky top-24">
                <h3 className="text-xl font-bold">Questions about forms?</h3>
                <p className="mt-2 text-primary-foreground/80 text-sm">Our team is happy to help — by phone or in person.</p>
                <div className="mt-5 space-y-3">
                  <Button asChild variant="secondary" className="w-full rounded-full">
                    <a href="tel:+15036568250"><Phone className="mr-2 h-4 w-4" /> 503-656-8250</a>
                  </Button>
                  <Button asChild variant="outline" className="w-full rounded-full bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
