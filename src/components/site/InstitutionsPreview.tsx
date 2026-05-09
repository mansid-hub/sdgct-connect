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
      text: "Marathi & English-medium primary, secondary and schools across Vidarbha.",
    },
    {
      to: "/institution/colleges",
      icon: GraduationCap,
      title: "Colleges & Institutes",
      count: c.colleges.total,
      text: "Engineering, pharmacy, ayurvedic, polytechnic, law, ITI institues, junior and senior colleges.",
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Link
              key={i}
              to={card.to}
              className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-5 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth min-h-[190px]"
            >
              {/* TOP ROW: icon + count + title */}
<div className="flex items-center gap-3">
  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
    <card.icon size={20} />
  </div>

  <div className="flex flex-col leading-tight">
    {/* BIG COUNT */}
    <div className="text-2xl sm:text-3xl font-bold text-primary">
      {card.count}+
    </div>

    {/* TITLE */}
    <div className="text-sm sm:text-base font-semibold text-foreground">
      {card.title}
    </div>
  </div>

  <ArrowUpRight
    size={18}
    className="ml-auto text-muted-foreground group-hover:text-primary transition-base"
  />
</div>
              {/* DESCRIPTION */}
              <p className="mt-3 text-sm text-muted-foreground leading-snug line-clamp-3">
                {card.text}
              </p>
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
