import { Link } from "react-router-dom";
import { GraduationCap, School, Stethoscope, ArrowUpRight, MapPin, ExternalLink, Landmark, Coins } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { categories, summaryCounts } from "@/data/institutions";

const Institution = () => {
  const counts = summaryCounts();
  const totalSchools = counts.schools.total;
  const totalColleges = counts.colleges.total;
  const totalHospitals = counts.hospitals.total;

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
              to="/institution/schools"
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
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Landmark size={14} className="text-accent" /> Government-aided
                  </span>
                  <span className="font-semibold text-foreground">{counts.schools.granted}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Coins size={14} className="text-accent" /> Self-financed
                  </span>
                  <span className="font-semibold text-foreground">{counts.schools.selfFinanced}</span>
                </div>
              </div>
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
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Landmark size={14} className="text-accent" /> Government-aided
                  </span>
                  <span className="font-semibold text-foreground">{counts.colleges.granted}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Coins size={14} className="text-accent" /> Self-financed
                  </span>
                  <span className="font-semibold text-foreground">{counts.colleges.selfFinanced}</span>
                </div>
              </div>
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
                <h3 className="font-display text-xl font-bold text-foreground">Hospitals</h3>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-base" />
              </div>
              <div className="mt-5 text-4xl font-display font-bold text-primary">{totalHospitals}</div>
              <div className="mt-4 text-sm text-muted-foreground">
                {totalHospitals === 0
                  ? "Healthcare initiatives coming soon — details will be published here."
                  : "Hospitals and healthcare centres under the trust."}
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
              All schools and colleges
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Click any institution to learn more about its location, focus areas and official website.
            </p>
          </div>

          <div className="mt-10 space-y-14">
            {categories
              .filter((c) => c.items.length > 0)
              .map((cat) => (
                <div key={cat.slug}>
                  <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border/60 pb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">{cat.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
                    </div>
                    <span className="text-xs font-semibold tracking-[0.18em] uppercase text-accent">
                      {cat.items.length} institutions
                    </span>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cat.items.map((inst, i) => (
                      <Link
                        key={inst.slug + i}
                        to={`/institution/${cat.parent}/${inst.slug}`}
                        style={{ animationDelay: `${i * 30}ms` }}
                        className="group rounded-2xl border border-border/60 bg-card p-5 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-smooth animate-fade-up flex flex-col"
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-[10px] font-semibold tracking-[0.16em] uppercase px-2 py-1 rounded-full ${
                              inst.type === "granted"
                                ? "bg-primary/10 text-primary"
                                : "bg-accent/10 text-accent"
                            }`}
                          >
                            {inst.type === "granted" ? "Govt. Aided" : "Self-Financed"}
                          </span>
                          <ArrowUpRight
                            size={14}
                            className="text-muted-foreground group-hover:text-primary transition-base"
                          />
                        </div>
                        <h4 className="mt-4 font-display text-base font-bold text-foreground leading-snug group-hover:text-primary transition-base">
                          {inst.name}
                        </h4>
                        {inst.location && (
                          <div className="mt-2 flex items-start gap-1.5 text-xs text-muted-foreground">
                            <MapPin size={12} className="mt-0.5 shrink-0 text-accent" />
                            <span>{inst.location}</span>
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
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
