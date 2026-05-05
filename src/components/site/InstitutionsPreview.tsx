import { Link } from "react-router-dom";
import { ArrowUpRight, GraduationCap, School, Stethoscope } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { summaryCounts } from "@/data/institutions";

const InstitutionsPreview = () => {
  const c = summaryCounts();
  const cards = [
    {
      to: "/institution/schools",
      icon: School,
      title: "Schools",
      count: c.schools.total,
      text: "Marathi & English-medium primary, secondary and aided schools across Vidarbha.",
    },
    {
      to: "/institution/colleges",
      icon: GraduationCap,
      title: "Colleges & Institutes",
      count: c.colleges.total,
      text: "Junior, senior, technical, pharmacy, law, B.Ed., D.Ed., polytechnic and ITI institutes.",
    },
    {
      to: "/institution/hospitals",
      icon: Stethoscope,
      title: "Healthcare",
      count: c.hospitals.total,
      text: "Healthcare initiatives and community health programmes for those who need it most.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-secondary/40">
      <div className="container">
        <SectionHeader
          eyebrow="Our Institutions"
          title="A growing network shaping futures"
          description="Explore the schools, colleges and healthcare programmes run under SDGCT."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Link
              key={i}
              to={card.to}
              className="group rounded-3xl border border-border/60 bg-card p-7 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth"
            >
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <card.icon size={22} />
                </div>
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-base" />
              </div>
              <div className="mt-5 font-display text-3xl font-bold text-primary">{card.count}+</div>
              <h3 className="mt-2 font-display text-xl font-bold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card.text}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline">
            <Link to="/institution">View all institutions <ArrowUpRight size={14} /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstitutionsPreview;
