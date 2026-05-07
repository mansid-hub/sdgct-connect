import { Link } from "react-router-dom";
import { GraduationCap, School, Stethoscope, ArrowUpRight, ExternalLink } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { allInstitutions, summaryCounts } from "@/data/institutions";

const Institution = () => {
  const counts = summaryCounts();
  const totalSchools = counts.schools.total;
  const totalColleges = counts.colleges.total;
  const totalHospitals = counts.hospitals.total;

  const groups = [
    { parent: "schools" as const, title: "Schools", items: allInstitutions("schools") },
    { parent: "colleges" as const, title: "Colleges", items: allInstitutions("colleges") },
    { parent: "hospitals" as const, title: "Healthcare", items: allInstitutions("hospitals") },
  ];

  return (
    <Layout>
      <PageHeader
        eyebrow="Our Institutions"
        title="A network of schools and colleges shaping futures"
        description="From primary schools to technical institutes, our campuses serve thousands of students across the Amravati region."
        crumbs={[{ label: "Home", to: "/" }, { label: "Institution" }]}
      />

      {/* Summary / counts */}
      <section className="section-y border-b border-border/60 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">At a glance</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
              {totalSchools + totalColleges}+ institutions across the Amravati region
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The trust operates a diverse network spanning primary schools to professional colleges —
              combining government-aided institutions with self-financed campuses to serve students from every
              background.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Schools summary */}
            <Link
              to="/institution/schools/all-schools"
              className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <School size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Schools</h3>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-base" />
              </div>
              <div className="mt-5 text-4xl font-display font-bold text-primary">{counts.schools.total}</div>
              <p className="mt-3 text-sm text-muted-foreground">Primary, middle and secondary schools across the region.</p>
            </Link>

            {/* Colleges summary */}
            <Link
              to="/institution/colleges"
              className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Colleges</h3>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-base" />
              </div>
              <div className="mt-5 text-4xl font-display font-bold text-primary">{counts.colleges.total}</div>
              <p className="mt-3 text-sm text-muted-foreground">Senior, junior, technical, polytechnic and ITI institutes.</p>
            </Link>

            {/* Hospitals summary */}
            <Link
              to="/institution/hospitals"
              className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Stethoscope size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Healthcare</h3>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-base" />
              </div>
              <div className="mt-5 text-4xl font-display font-bold text-primary">{totalHospitals}</div>
              <div className="mt-4 text-sm text-muted-foreground">
                {totalHospitals === 0
                  ? "Healthcare initiatives coming soon — details will be published here."
                  : `${totalHospitals} hospital${totalHospitals === 1 ? "" : "s"} under the trust.`}
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Full list by category */}
      <section className="section-y">
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Complete directory</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
              All schools, colleges and healthcare
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Click any institution to learn more about its location, focus areas and official website.
            </p>
          </div>

          <div className="mt-10 space-y-12">
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
