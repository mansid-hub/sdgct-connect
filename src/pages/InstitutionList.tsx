import { useParams, Navigate, Link } from "react-router-dom";
import { ExternalLink, MapPin, Building2, ArrowUpRight } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { getCategory } from "@/data/institutions";

const buildWebsiteUrl = (inst: { name: string; location?: string; website?: string }) => {
  if (inst.website) return inst.website;
  const query = encodeURIComponent(
    `${inst.name}${inst.location ? " " + inst.location : ""} official website`
  );
  // Google's "I'm Feeling Lucky" redirects straight to the top result,
  // which is almost always the institution's official site.
  return `https://www.google.com/search?q=${query}&btnI=1`;
};

const InstitutionList = () => {
  const { parent, slug } = useParams();
  const category = slug ? getCategory(slug) : undefined;

  if (!category || (parent && category.parent !== parent)) {
    return <Navigate to="/institution" replace />;
  }

  const parentLabel = category.parent === "schools" ? "Schools" : "Colleges";
  const parentPath = `/institution/${category.parent}`;

  return (
    <Layout>
      <PageHeader
        eyebrow={parentLabel}
        title={category.title}
        description={category.description}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Institution", to: "/institution" },
          { label: parentLabel, to: parentPath },
          { label: category.title },
        ]}
      />
      <section className="py-20 sm:py-24">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((inst, i) => (
              <article
                key={`${inst.name}-${i}`}
                style={{ animationDelay: `${i * 40}ms` }}
                className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth animate-fade-up flex flex-col"
              >
                <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Building2 size={20} />
                </div>
                <Link
                  to={`/institution/${category.parent}/${inst.slug}`}
                  className="mt-5 font-display text-lg font-bold text-foreground leading-snug hover:text-primary transition-base inline-flex items-start gap-1.5"
                >
                  {inst.name}
                  <ArrowUpRight size={14} className="mt-1 shrink-0" />
                </Link>
                {inst.location && (
                  <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} className="mt-0.5 shrink-0 text-accent" />
                    <span>{inst.location}</span>
                  </div>
                )}
                <div className="mt-6 pt-5 border-t border-border/60 flex flex-col gap-2 mt-auto">
                  <Button asChild variant="default" size="sm" className="w-full">
                    <Link to={`/institution/${category.parent}/${inst.slug}`}>
                      View details <ArrowUpRight size={14} />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a
                      href={buildWebsiteUrl(inst)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit website of ${inst.name}`}
                    >
                      Visit Website <ExternalLink size={14} />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InstitutionList;