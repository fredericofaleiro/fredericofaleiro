import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Award, GraduationCap, Sparkles } from "lucide-react";
import { doctorImages } from "@/lib/dental-images";

export const Route = createFileRoute("/doctors")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Meet the Doctors — Oregon City Family Dental" },
      { name: "description", content: "Board-certified dentists at Oregon City Family Dental — experienced, gentle, and family-focused." },
    ],
  }),
});

const doctors = [
  {
    name: "Dr. Jonathan Reyes, DDS",
    role: "Founding Dentist",
    photo: doctorImages[0],
    bio: "With over 18 years of clinical experience, Dr. Reyes leads our team with a focus on restorative and cosmetic dentistry.",
    certs: ["DDS, Oregon Health & Science University", "American Dental Association"],
    specialties: ["Cosmetic Dentistry", "Implants", "CEREC Crowns"],
  },
  {
    name: "Dr. Emily Chen, DMD",
    role: "Family & Pediatric Dentist",
    photo: doctorImages[1],
    bio: "Dr. Chen has a special gift for making kids feel safe and excited about their dental visits.",
    certs: ["DMD, Tufts School of Dental Medicine", "American Academy of Pediatric Dentistry"],
    specialties: ["Pediatric Care", "Preventive Dentistry", "Family Care"],
  },
  {
    name: "Dr. Marcus Hall, DDS",
    role: "Orthodontics & Invisalign",
    photo: doctorImages[2],
    bio: "An Invisalign Diamond Provider, Dr. Hall blends precision orthodontics with a warm chairside manner.",
    certs: ["DDS, University of Washington", "Invisalign Diamond Provider"],
    specialties: ["Invisalign", "Orthodontics", "Bite Correction"],
  },
  {
    name: "Dr. Priya Anand, DMD",
    role: "Endodontics & Sedation",
    photo: doctorImages[3],
    bio: "Dr. Anand specializes in gentle, comfortable root canals and IV sedation for anxious patients.",
    certs: ["DMD, Oregon Health & Science University", "Certified in IV Sedation"],
    specialties: ["Root Canals", "Sedation Dentistry", "Emergency Care"],
  },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Meet the Doctors"
        title="Compassionate dentists who treat you like family"
        subtitle="Our board-certified doctors combine advanced training with the warmth of a neighborhood practice."
      />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 gap-7">
          {doctors.map((d, i) => (
            <Reveal key={d.name} delay={i * 80}>
              <article className="group h-full rounded-3xl bg-card border border-border/60 overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 flex flex-col sm:flex-row">
                <div className="sm:w-2/5 aspect-[4/5] sm:aspect-auto relative bg-muted overflow-hidden">
                  <img src={d.photo} alt={d.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col">
                  <div className="text-xs font-semibold tracking-widest uppercase text-secondary">{d.role}</div>
                  <h3 className="mt-1 text-xl font-bold text-primary">{d.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.bio}</p>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-start gap-2 text-xs text-foreground/80">
                      <GraduationCap className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{d.certs.join(" · ")}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-foreground/80">
                      <Sparkles className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{d.specialties.join(", ")}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-foreground/80">
                      <Award className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>Board-Certified · Continuing Education</span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/about" className="text-sm text-secondary hover:text-primary">← Back to About</Link>
        </div>
      </section>
    </>
  );
}
