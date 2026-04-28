import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { categories } from "@/data/institutions";

interface Props {
  parent: "schools" | "colleges";
  title: string;
  eyebrow: string;
  description: string;
}

const InstitutionHub = ({ parent, title, eyebrow, description }: Props) => {
  const items = categories.filter((c) => c.parent === parent);
  const parentLabel = parent === "schools" ? "Schools" : "Colleges";
  return (
    <Layout>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Institution", to: "/institution" },
          { label: parentLabel },
        ]}
      />
      <section className="py-20 sm:py-24">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => (
            <Link
              key={c.slug}
              to={`/institution/${parent}/${c.slug}`}
              style={{ animationDelay: `${i * 60}ms` }}
              className="group relative rounded-3xl border border-border/60 bg-card p-7 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth animate-fade-up"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-accent">
                  {c.items.length} institutions
                </span>
                <span className="h-9 w-9 rounded-full bg-secondary text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-base">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-base">
                View list <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default InstitutionHub;