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
        description="A small board of trusted leaders, advocates and professionals who give their time, skill and conscience to this trust."
        crumbs={[{ label: "Home", to: "/" }, { label: "Trustees" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {trustees.map((t, i) => (
              <Link
                key={t.slug}
                to={`/trustees/${t.slug}`}
                style={{ animationDelay: `${i * 70}ms` }}
                className="group relative bg-card rounded-3xl p-7 border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth animate-fade-up flex flex-col items-center text-center"
              >
                <div className="absolute top-5 right-5 h-9 w-9 rounded-full bg-secondary text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-base">
                  <ArrowUpRight size={16} />
                </div>
                <div className="relative">
                  <div className="absolute inset-0 -z-10 gradient-primary blur-xl opacity-30 group-hover:opacity-50 transition-base rounded-full" />
                  <img
                    src={t.image}
                    alt={t.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-32 w-32 sm:h-36 sm:w-36 rounded-full object-cover ring-4 ring-background shadow-elegant"
                  />
                </div>
                <h3 className="mt-5 font-display font-bold text-xl text-foreground">{t.name}</h3>
                <div className="mt-1 text-sm text-accent font-semibold uppercase tracking-wider">
                  {t.designation}
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {t.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-base">
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