import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight, Stethoscope, ArrowLeft } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { allInstitutions } from "@/data/institutions";

const Hospitals = () => {
  const items = allInstitutions("hospitals");

  return (
    <Layout>
      <PageHeader
        eyebrow="Institution"
        title="Healthcare"
        description="Hospitals and healthcare centres associated with the trust."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Institution", to: "/institution" },
          { label: "Healthcare" },
        ]}
      />
      <section className="section-y">
        <div className="container">
          {items.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center rounded-3xl border border-border/60 bg-card p-10 sm:p-14 shadow-soft animate-fade-up">
              <div className="h-16 w-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Stethoscope size={28} />
              </div>
              <h2 className="mt-6 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Healthcare initiatives coming soon
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We are expanding our community work into healthcare. Details of hospitals and health
                centres under the trust will be published here.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild variant="default">
                  <Link to="/contact">Contact us</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link to="/institution">
                    <ArrowLeft size={14} /> Back to Institution
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((inst, i) => (
                <article
                  key={`${inst.slug}-${i}`}
                  style={{ animationDelay: `${i * 40}ms` }}
                  className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth animate-fade-up flex flex-col"
                >
                  <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <Building2 size={20} />
                  </div>
                  <Link
                    to={`/institution/hospitals/${inst.slug}`}
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
                  <div className="mt-auto pt-5 border-t border-border/60 flex flex-col gap-2">
                    <Button asChild variant="default" size="sm" className="w-full">
                      <Link to={`/institution/hospitals/${inst.slug}`}>
                        View details <ArrowUpRight size={14} />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Hospitals;
