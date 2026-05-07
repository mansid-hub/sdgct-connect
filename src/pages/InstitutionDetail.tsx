import { Link, useParams, Navigate } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Sparkles,
} from "lucide-react";
import { allInstitutions, getInstitutionBySlug } from "@/data/institutions";
import InstitutionGallery from "@/components/site/InstitutionGallery";

const buildWebsiteUrl = (inst: { name: string; location?: string; website?: string }) => {
  if (inst.website) return inst.website;
  const query = encodeURIComponent(
    `${inst.name}${inst.location ? " " + inst.location : ""} official website`
  );
  return `https://www.google.com/search?q=${query}&btnI=1`;
};

const InstitutionDetail = () => {
  const { parent = "", slug = "" } = useParams();

  if (!["schools", "colleges", "hospitals"].includes(parent)) {
    return <Navigate to="/institution" replace />;
  }

  const inst = getInstitutionBySlug(parent, slug);
  if (!inst) return <Navigate to="/institution" replace />;

  const siblings = allInstitutions(inst.parent).filter(
    (i) => i.categorySlug === inst.categorySlug
  );
  const idx = siblings.findIndex((i) => i.slug === inst.slug);
  const next = siblings[(idx + 1) % siblings.length];

  const parentLabel =
    inst.parent === "schools" ? "Schools" : inst.parent === "colleges" ? "Colleges" : "Healthcare";
  const parentPath = `/institution/${inst.parent}`;

  return (
    <Layout>
      <section className="bg-secondary/40 border-b border-border/60">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Institution", to: "/institution" },
              { label: parentLabel, to: parentPath },
              { label: inst.categoryTitle, to: `/institution/${inst.parent}/${inst.categorySlug}` },
              { label: inst.name },
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
                  src={inst.image}
                  alt={inst.name}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {inst.categoryTitle}
                </div>
                <h1 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-foreground leading-snug">
                  {inst.name}
                </h1>
                <div className="mt-4 space-y-2.5 text-sm">
                  {inst.location && (
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <MapPin size={14} className="mt-0.5 shrink-0 text-accent" />
                      <span>{inst.location}</span>
                    </div>
                  )}
                </div>
                <Button asChild variant="default" size="default" className="mt-6 w-full">
                  <a
                    href={buildWebsiteUrl(inst)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website <ExternalLink size={14} />
                  </a>
                </Button>
              </div>
            </div>
          </aside>

          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">About</h2>
              <div className="mt-5 space-y-4 text-base text-muted-foreground leading-relaxed">
                {(inst.about ?? []).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {inst.highlights && inst.highlights.length > 0 && (
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
                  <Sparkles className="text-accent" /> Highlights
                </h2>
                <ul className="mt-6 space-y-3">
                  {inst.highlights.map((c, i) => (
                    <li
                      key={i}
                      className="flex gap-3 items-start bg-secondary/50 rounded-2xl p-4"
                    >
                      <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                      <span className="text-foreground">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {inst.gallery && inst.gallery.length > 0 && (
              <InstitutionGallery images={inst.gallery} name={inst.name} />
            )}

            <div className="flex items-center justify-between border-t border-border/60 pt-8 gap-3 flex-wrap">
              <Button asChild variant="ghost">
                <Link to={`/institution/${inst.parent}/${inst.categorySlug}`}>
                  <ArrowLeft size={16} /> All {inst.categoryTitle}
                </Link>
              </Button>
              {next && next.slug !== inst.slug && (
                <Button asChild variant="outline">
                  <Link to={`/institution/${inst.parent}/${next.slug}`}>
                    Next institution <ArrowRight size={16} />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InstitutionDetail;
