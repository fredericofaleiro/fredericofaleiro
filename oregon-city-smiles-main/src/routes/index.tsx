import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { Calendar, Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Oregon City Family Dental — Dentist in Oregon City, OR" },
      { name: "description", content: "Trusted family dentistry in Oregon City offering cleanings, Invisalign, cosmetic & emergency dental care. Book a visit today." },
      { property: "og:title", content: "Oregon City Family Dental" },
      { property: "og:description", content: "Healthy smiles for the whole family in Oregon City, OR." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <section className="py-20 gradient-primary text-primary-foreground">
        <Reveal className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready for a healthier smile?</h2>
          <p className="mt-4 text-primary-foreground/80">Book a visit with our friendly Oregon City team — new patients always welcome.</p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link to="/contact"><Calendar className="mr-2 h-5 w-5" /> Book a Visit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white">
              <a href="tel:+15036568250"><Phone className="mr-2 h-5 w-5" /> 503-656-8250</a>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
