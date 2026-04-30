import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { trustees, getTrustee } from "@/data/trustees";
import { ArrowUpRight, Sparkles } from "lucide-react";

const Trustees = () => {
  const kirti = getTrustee("kirtitai-arjun");
  return (
    <Layout>
      <PageHeader
        eyebrow="Leadership"
        title="Meet the trustees behind our work"
        description="A small board of trusted leaders, advocates and professionals who give their time, skill and conscience to this trust."
        crumbs={[{ label: "Home", to: "/" }, { label: "Trustees" }]}
      />

      {kirti && (
        <section className="section-y bg-secondary/40 border-b border-border/60">
          <div className="container grid lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-center">
            <div className="relative mx-auto">
              <div className="absolute inset-0 -z-10 gradient-primary blur-2xl opacity-30 rounded-full" />
              <img
                src={kirti.image}
                alt={kirti.name}
                width={800}
                height={800}
                className="h-64 w-64 sm:h-80 sm:w-80 rounded-3xl object-cover shadow-elegant ring-4 ring-background"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                <Sparkles size={14} /> Leadership Spotlight
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground">
                {kirti.name}
              </h2>
              <div className="mt-2 text-sm text-accent font-semibold uppercase tracking-wider">
                Progressive & Dynamic Leader
              </div>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Mrs. Kirtitai Rajesh Arjun is driving the trust's next chapter
                — modernising classrooms with digital learning, expanding
                pharmacy and research programmes, and building skill-development
                pathways that prepare students for the world ahead.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Digital Learning", "Pharmacy & Research", "Skill Programs", "Modernization"].map((t) => (
                  <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-card border border-border/60 text-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to={`/trustees/${kirti.slug}`}
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-base"
              >
                View full profile <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="section-y">
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