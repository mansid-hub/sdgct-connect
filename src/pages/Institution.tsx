import { Link } from "react-router-dom";
import { GraduationCap, School, Stethoscope, ArrowUpRight, Landmark, Coins } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { summaryCounts } from "@/data/institutions";

const tiles = [
  {
    to: "/institution/schools",
    title: "Schools",
    description: "Granted and non-granted schools offering primary, secondary and higher-secondary education.",
    icon: School,
  },
  {
    to: "/institution/colleges",
    title: "Colleges",
    description: "Senior colleges, junior colleges, polytechnics, technical institutes and ITIs under the trust.",
    icon: GraduationCap,
  },
  {
    to: "/institution/hospitals",
    title: "Hospitals",
    description: "Healthcare initiatives and affiliated hospitals advancing community well-being.",
    icon: Stethoscope,
  },
];

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
              className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-smooth block"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <School size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-base">Schools</h3>
                <ArrowUpRight size={16} className="ml-auto text-muted-foreground group-hover:text-primary transition-base" />
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
              className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-smooth block"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-base">Colleges</h3>
                <ArrowUpRight size={16} className="ml-auto text-muted-foreground group-hover:text-primary transition-base" />
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
              className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-smooth block"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Stethoscope size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-base">Hospitals</h3>
                <ArrowUpRight size={16} className="ml-auto text-muted-foreground group-hover:text-primary transition-base" />
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

      {/* Tiles */}
      <section className="section-y">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t, i) => (
            <Link
              key={t.to}
              to={t.to}
              style={{ animationDelay: `${i * 80}ms` }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth animate-fade-up"
            >
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-base" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <t.icon size={26} />
                </div>
                <span className="h-10 w-10 rounded-full bg-secondary text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-base">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <h2 className="relative mt-6 font-display text-2xl font-bold text-foreground">{t.title}</h2>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{t.description}</p>
              <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-base">
                Explore {t.title.toLowerCase()} <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Institution;
