import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";
import { toast } from "sonner";

export function ContactSection() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Appointment request from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:info@ocfamilydentistry.net?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email app to send your request.");
      setSending(false);
      form.reset();
    }, 500);
  };

  const cards = [
    { icon: MapPin, label: "Visit", value: "602 Monroe Street, Oregon City, OR", href: "https://maps.app.goo.gl/WeaGn7jbrWF3vu118" },
    { icon: Phone, label: "Call", value: "503-656-8250", href: "tel:+15036568250" },
    { icon: Mail, label: "Email", value: "info@ocfamilydentistry.net", href: "mailto:info@ocfamilydentistry.net" },
    { icon: Clock, label: "Hours", value: "Mon 8–5 · Tue–Thu 7–5 · Fri 7–1" },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-3xl bg-card border border-border/60 p-8 shadow-elegant">
              <h2 className="text-2xl font-semibold text-primary">Send us a message</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">We typically respond within one business day.</p>
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Full name" required className="rounded-xl h-12" />
                  <Input name="phone" placeholder="Phone" type="tel" className="rounded-xl h-12" />
                </div>
                <Input name="email" type="email" placeholder="Email address" required className="rounded-xl h-12" />
                <Textarea name="message" placeholder="How can we help you?" required rows={5} className="rounded-xl" />
                <Button type="submit" disabled={sending} size="lg" className="w-full rounded-xl shadow-glow">
                  <Send className="mr-2 h-4 w-4" />
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                {cards.map((c) => {
                  const Inner = (
                    <>
                      <div className="h-10 w-10 rounded-lg gradient-accent flex items-center justify-center text-white">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-secondary">{c.label}</div>
                      <div className="mt-1 text-sm text-foreground/85">{c.value}</div>
                    </>
                  );
                  return c.href ? (
                    <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                      className="rounded-2xl bg-card p-5 border border-border/60 shadow-soft hover:shadow-elegant transition-shadow block">
                      {Inner}
                    </a>
                  ) : (
                    <div key={c.label} className="rounded-2xl bg-card p-5 border border-border/60 shadow-soft">
                      {Inner}
                    </div>
                  );
                })}
              </div>
              <div className="rounded-2xl overflow-hidden border border-border/60 shadow-soft h-80">
                <iframe
                  title="Oregon City Family Dental location"
                  src="https://www.google.com/maps?q=602+Monroe+Street,+Oregon+City,+OR&output=embed"
                  width="100%" height="100%" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0 w-full h-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
