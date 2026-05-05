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
    <section className="py-10 sm:py-14 bg-secondary/40">
      <div className="container">
        <SectionHeader
          eyebrow="Our Institutions"
          title="A growing network shaping futures"
          description="Explore the schools, colleges and healthcare programmes run under SDGCT."
        />

        {/* tighter grid spacing */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Link
              key={i}
              to={card.to}
              className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-5 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth min-h-[200px]"
            >
              {/* Header row */}
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <card.icon size={20} />
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-base"
                />
              </div>

              {/* Content (compact + fills space better) */}
              <div className="mt-3 flex flex-col gap-2">
                <div className="text-2xl font-bold text-primary leading-none">
                  {card.count}+
                </div>

                <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                  {card.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-snug line-clamp-3">
                  {card.text}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline">
            <Link to="/institution">
              View all institutions <ArrowUpRight size={14} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstitutionsPreview;
