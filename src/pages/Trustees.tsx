import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { trustees } from "@/data/trustees";
import { ArrowUpRight } from "lucide-react";

const Trustees = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Leadership"
        title="Meet the trustees behind our work"
        description="A small board of trusted leaders, advocates and professionals who give their time, skill and conscience to this Trust."
        crumbs={[{ label: "Home", to: "/" }, { label: "Trustees" }]}
      />

      <section className="section-y">
        <div className="container">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {trustees.map((t, i) => (
              <Link
                key={t.slug}
                to={`/trustees/${t.slug}`}
                style={{ animationDelay: `${i * 70}ms` }}
                className="group relative bg-card rounded-3xl p-6 border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth animate-fade-up flex flex-col text-center"
              >
                <div className="absolute top-5 right-5 h-9 w-9 rounded-full bg-secondary text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-base z-10">
                  <ArrowUpRight size={16} />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <img
                    src={t.image}
                    alt={t.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 font-display font-bold text-xl text-foreground">{t.name}</h3>
                <div className="mt-1 text-sm text-accent font-semibold uppercase tracking-wider">
                  {t.designation}
                </div>
                <span className="mt-5 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-base">
                  View profile <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trustees;
