import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, GraduationCap, School, Stethoscope } from "lucide-react";
import Layout from "@/components/site/Layout";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { allInstitutions, summaryCounts } from "@/data/institutions";

const Institution = () => {
  const counts = summaryCounts();

  const previewCards = [
    {
      to: "/institution/schools",
      icon: School,
      title: "Schools",
      count: counts.schools.total,
      text: "Marathi and English-medium primary to higher secondary schools across Vidarbha.",
    },
    {
      to: "/institution/colleges",
      icon: GraduationCap,
      title: "Colleges & Institutes",
      count: counts.colleges.total,
      text: "Engineering, pharmacy, ayurved, polytechnic, law, ITI institues, junior, and senior colleges.",
    },
    {
      to: "/institution/hospitals",
      icon: Stethoscope,
      title: "Healthcare",
      count: counts.hospitals.total,
      text: "Healthcare initiatives and community health programmes for those who need it most.",
    },
  ];

  const groups = [
    { parent: "schools" as const, title: "Schools", items: allInstitutions("schools") },
    { parent: "colleges" as const, title: "Colleges", items: allInstitutions("colleges") },
    { parent: "hospitals" as const, title: "Healthcare", items: allInstitutions("hospitals") },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden gradient-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary-glow blur-3xl" />
        </div>
        <div className="container relative py-10 sm:py-12 lg:py-16">
          <div className="mb-6 [&_*]:!text-primary-foreground/70 [&_a:hover]:!text-accent [&_.text-foreground]:!text-primary-foreground">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Institution" }]} />
          </div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            <span className="h-px w-6 bg-accent" />
            Our Institutions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance max-w-3xl animate-fade-up">
            A network of schools and colleges shaping futures
          </h1>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {previewCards.map((card, i) => (
              <Link
                key={i}
                to={card.to}
                className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-5 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth min-h-[190px]"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <card.icon size={20} />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">{card.count}</div>
                    <div className="text-sm sm:text-base font-semibold text-foreground">{card.title}</div>
                  </div>
                  <ArrowUpRight size={18} className="ml-auto text-muted-foreground group-hover:text-primary transition-base" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-snug line-clamp-3">{card.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full list by category */}
      <section className="section-y">
        <div className="container">
          <div className="space-y-12">
            {groups
              .filter((g) => g.items.length > 0)
              .map((g) => (
                <div key={g.parent}>
                  <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border/60 pb-4">
                    <h3 className="font-display text-2xl font-bold text-foreground">{g.title}</h3>
                    <span className="text-xs font-semibold tracking-[0.18em] uppercase text-accent">
                      {g.items.length} institutions
                    </span>
                  </div>
                  <ul className="mt-4 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-2">
                    {g.items
                      .slice()
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((inst, i) => (
                        <li
                          key={inst.slug + i}
                          className="border-b border-border/40 py-3"
                        >
                          <Link
                            to={`/institution/${g.parent}/${inst.slug}`}
                            className="group flex items-baseline justify-between gap-3 text-sm text-foreground hover:text-primary transition-base"
                          >
                            <span className="font-medium">
                              {inst.name}
                              {inst.location && (
                                <span className="text-muted-foreground font-normal">
                                  {" "}— <span className="text-xs">{inst.location}</span>
                                </span>
                              )}
                            </span>
                            <ArrowUpRight
                              size={14}
                              className="shrink-0 opacity-0 group-hover:opacity-100 transition-base"
                            />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Button asChild variant="outline">
              <Link to="/contact">
                Get in touch for admissions <ExternalLink size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Institution;
