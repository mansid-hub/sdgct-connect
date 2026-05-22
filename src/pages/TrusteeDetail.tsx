import { Link, useParams } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import { getTrustee, trustees } from "@/data/trustees";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

const TrusteeDetail = () => {
  const { slug = "" } = useParams();
  const trustee = getTrustee(slug);
  if (!trustee) return <NotFound />;

  const idx = trustees.findIndex((t) => t.slug === slug);
  const next = trustees[(idx + 1) % trustees.length];

  const formatShortName = (fullName: string) => {
    const tokens = fullName.split(/\s+/).filter(Boolean);
    if (tokens.length <= 2) return fullName;
    const honorifics = new Set(["Sau.", "Smt.", "Shri.", "Sri.", "Mr.", "Mrs.", "Ms.", "Dr."]);
    const prefix = tokens[0];
    const last = tokens[tokens.length - 1];
    const first = tokens.slice(1, -1).find((t) => !honorifics.has(t) && !/^[A-Z]\.$/.test(t)) ?? tokens[1];
    return `${prefix} ${first} ${last}`;
  };

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
                  className={`h-full w-full object-cover ${
                    trustee.slug === "kirtitai-arjun"
                      ? "object-[center_20%]"
                      : trustee.slug === "rajendra-gawai"
                      ? "object-[center_35%]"
                      : trustee.slug === "kamlakar-payas"
                      ? "object-[center_65%]"
                      : "object-center"
                  }`}
                />
              </div>
              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {trustee.designation}
                </div>
                <h1 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-foreground">
                  {trustee.name}
                </h1>
              </div>
            </div>
          </aside>

          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                About {trustee.name}
              </h2>
              <div className="mt-5 space-y-4 text-base text-muted-foreground leading-relaxed">
                {trustee.biography.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>


            <div className="flex items-center justify-between border-t border-border/60 pt-8">
              <Button asChild variant="ghost">
                <Link to="/trustees">
                  <ArrowLeft size={16} /> All trustees
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to={`/trustees/${next.slug}`}>
                  Next: {formatShortName(next.name)} <ArrowRight size={16} />
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