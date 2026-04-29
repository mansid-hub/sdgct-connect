import { Link, useParams } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import { getTrustee, trustees } from "@/data/trustees";
import { ArrowLeft, ArrowRight, CheckCircle2, Quote, Sparkles, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

const TrusteeDetail = () => {
  const { slug = "" } = useParams();
  const trustee = getTrustee(slug);
  if (!trustee) return <NotFound />;

  const idx = trustees.findIndex((t) => t.slug === slug);
  const next = trustees[(idx + 1) % trustees.length];

  return (
    <Layout>
      <section className="bg-secondary/40 border-b border-border/60">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Trustees", to: "/trustees" },
              { label: trustee.name },
            ]}
          />
        </div>
      </section>

      <section className="section-y">
        <div className="container grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border/60 shadow-card">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img
                  src={trustee.image}
                  alt={trustee.name}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {trustee.designation}
                </div>
                <h1 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-foreground">
                  {trustee.name}
                </h1>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {trustee.summary}
                </p>
                <Button asChild variant="default" size="default" className="mt-6 w-full">
                  <Link to="/donate">Support our work</Link>
                </Button>
              </div>
            </div>
          </aside>

          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Biography</h2>
              <div className="mt-5 space-y-4 text-base text-muted-foreground leading-relaxed">
                {trustee.biography.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
                <HandHeart className="text-accent" /> Contributions to the trust
              </h2>
              <ul className="mt-6 space-y-3">
                {trustee.contributions.map((c, i) => (
                  <li key={i} className="flex gap-3 items-start bg-secondary/50 rounded-2xl p-4">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                    <span className="text-foreground">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {trustee.achievements.length > 0 && (
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
                  <Sparkles className="text-accent" /> Achievements
                </h2>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {trustee.achievements.map((a, i) => (
                    <div key={i} className="bg-card border border-border/60 rounded-2xl p-5 shadow-soft">
                      <div className="text-foreground font-medium">{a}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {trustee.message && (
              <div className="relative gradient-primary text-primary-foreground rounded-3xl p-8 sm:p-10 shadow-elegant overflow-hidden">
                <Quote className="absolute top-6 right-6 text-accent/40 fill-current" size={64} />
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">A message</div>
                <p className="mt-4 font-display text-xl sm:text-2xl leading-relaxed text-balance max-w-2xl">
                  "{trustee.message}"
                </p>
                <div className="mt-6 text-sm text-primary-foreground/75">— {trustee.name}</div>
              </div>
            )}

            <div className="flex items-center justify-between border-t border-border/60 pt-8">
              <Button asChild variant="ghost">
                <Link to="/trustees">
                  <ArrowLeft size={16} /> All trustees
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to={`/trustees/${next.slug}`}>
                  Next: {next.name.split(" ").slice(-2).join(" ")} <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TrusteeDetail;