import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/Reveal";
import { officeImages } from "@/lib/dental-images";

export const Route = createFileRoute("/tour")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Tour Our Office — Oregon City Family Dental" },
      { name: "description", content: "A modern, comfortable dental office in Oregon City, OR. Take a visual tour of our waiting room, treatment suites, and technology." },
    ],
  }),
});

const gallery = [
  { src: officeImages.waiting, title: "Welcoming Waiting Room", desc: "Calm, modern seating with refreshments and Wi-Fi.", span: "lg:col-span-2 lg:row-span-2 aspect-[4/3]" },
  { src: officeImages.reception, title: "Friendly Reception", desc: "Our front desk team greets you by name.", span: "aspect-[4/3]" },
  { src: officeImages.treatment, title: "Treatment Suites", desc: "Private, comfortable rooms with natural light.", span: "aspect-[4/3]" },
  { src: officeImages.equipment, title: "Modern Equipment", desc: "Digital imaging and CEREC same-day crowns.", span: "aspect-[4/3]" },
  { src: officeImages.hallway, title: "Calming Spaces", desc: "Thoughtful design from check-in to checkout.", span: "aspect-[4/3]" },
  { src: officeImages.exterior, title: "Convenient Location", desc: "Easy parking right in downtown Oregon City.", span: "lg:col-span-2 aspect-[16/9] lg:aspect-auto" },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Tour Our Office"
        title="A modern, calming space to care for your smile"
        subtitle="Step inside the Oregon City Family Dental experience — designed for comfort, privacy, and peace of mind."
      />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[minmax(0,1fr)]">
            {gallery.map((g, i) => (
              <Reveal key={g.title} delay={(i % 6) * 70} className={g.span}>
                <figure className="group h-full w-full rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 relative">
                  <img src={g.src} alt={g.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent text-white">
                    <div className="text-base font-semibold">{g.title}</div>
                    <div className="text-xs opacity-90">{g.desc}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <p className="text-muted-foreground">Want to see it in person? Schedule a quick visit — we'd love to show you around.</p>
            <Link to="/contact" className="mt-4 inline-block text-sm font-bold tracking-widest uppercase text-secondary hover:text-primary">Book a Tour →</Link>
            <div className="mt-4">
              <Link to="/about" className="text-sm text-secondary hover:text-primary">← Back to About</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
