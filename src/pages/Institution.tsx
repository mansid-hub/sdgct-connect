import { Link } from "react-router-dom";
import { GraduationCap, School, ArrowUpRight } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";

const tiles = [
  {
    to: "/institution/schools",
    title: "Schools",
    description:
      "Granted and non-granted schools offering primary, secondary and higher-secondary education across our campuses.",
    icon: School,
  },
  {
    to: "/institution/colleges",
    title: "Colleges",
    description:
      "Senior colleges, junior colleges, polytechnics, technical institutes and ITIs under the trust.",
    icon: GraduationCap,
  },
];

const Institution = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Our Institutions"
        title="A network of schools and colleges shaping futures"
        description="From primary schools to technical institutes, our campuses serve thousands of students across the Amravati region."
        crumbs={[{ label: "Home", to: "/" }, { label: "Institution" }]}
      />
      <section className="py-20 sm:py-24">
        <div className="container grid gap-7 sm:grid-cols-2">
          {tiles.map((t, i) => (
            <Link
              key={t.to}
              to={t.to}
              style={{ animationDelay: `${i * 80}ms` }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 sm:p-10 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth animate-fade-up"
            >
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-base" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <t.icon size={28} />
                </div>
                <span className="h-10 w-10 rounded-full bg-secondary text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-base">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <h2 className="relative mt-8 font-display text-3xl font-bold text-foreground">{t.title}</h2>
              <p className="relative mt-3 text-muted-foreground leading-relaxed">{t.description}</p>
              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-base">
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