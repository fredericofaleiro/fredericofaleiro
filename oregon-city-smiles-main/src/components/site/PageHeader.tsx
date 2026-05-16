import { Reveal } from "@/components/Reveal";

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 gradient-hero overflow-hidden">
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <Reveal className="relative mx-auto max-w-4xl px-6 text-center">
        {eyebrow && <span className="text-xs font-semibold tracking-widest text-secondary uppercase">{eyebrow}</span>}
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-primary leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      </Reveal>
    </section>
  );
}
