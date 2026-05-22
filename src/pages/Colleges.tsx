import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { allInstitutions } from "@/data/institutions";

const Colleges = () => {
  const items = allInstitutions("colleges");

  return (
    <Layout>
      <PageHeader
        eyebrow="Institution"
        title="Colleges"
        description="Junior colleges, senior colleges, and higher education institutes including engineering, pharmacy, law, polytechnic, ITI, and an Ayurvedic medical college."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Institution", to: "/institution" },
          { label: "Colleges" },
        ]}
      />
      <section className="section-y">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((inst, i) => (
              <article
                key={`${inst.slug}-${i}`}
                style={{ animationDelay: `${i * 40}ms` }}
                className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth animate-fade-up flex flex-col"
              >
                <Link
                  to={`/institution/colleges/${inst.slug}`}
                  className="relative block aspect-square overflow-hidden rounded-2xl"
                >
                  <img
                    src={inst.image}
                    alt={inst.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="font-display text-lg font-bold leading-snug inline-flex items-start gap-1.5">
                      {inst.name}
                      <ArrowUpRight size={14} className="mt-1 shrink-0" />
                    </h3>
                    {inst.location && (
                      <div className="mt-2 flex items-start gap-2 text-sm text-white/85">
                        <MapPin size={14} className="mt-0.5 shrink-0" />
                        <span>{inst.location}</span>
                      </div>
                    )}
                  </div>
                </Link>
                <div className="mt-5 pt-5 border-t border-border/60 flex flex-col gap-2">
                  <Button asChild variant="default" size="sm" className="w-full">
                    <Link to={`/institution/colleges/${inst.slug}`}>
                      View details <ArrowUpRight size={14} />
                    </Link>
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

export default Colleges;
