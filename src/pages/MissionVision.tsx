import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";

const missionPoints = [
  "To serve underserved and rural regions across Vidarbha through sustained, on-ground delivery of education and healthcare.",
  "To provide holistic education that goes beyond academics—nurturing values, character, critical thinking, physical well-being, and environmental responsibility.",
  "To deliver affordable, accessible, and reliable healthcare to families in rural and interior regions.",
  "To build institutions that are consistent, accountable, and rooted in local needs—creating long-term impact.",
  "To foster an environment where educators, healthcare professionals, and staff can grow, lead, and contribute with purpose.",
];

const visionPoints = [
  "Where every child can learn and grow.",
  "Where every family can access dignified care.",
  "Where every individual has the opportunity to live with purpose, self-reliance, and possibility—across rural Vidarbha and beyond.",
];


const MissionVision = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Vision & Mission"
        title="Building access, dignity and opportunity."
        description="Our vision and mission guide every institution, initiative, and decision—ensuring education and healthcare remain accessible to underserved communities across Vidarbha."
        crumbs={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Mission & Vision" }]}
      />

      <section className="section-y">
        <div className="container grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/60 shadow-soft">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-accent">
              <span className="h-px w-6 bg-accent" /> Our Mission
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Creating long-term impact through institutions.
            </h2>
            <div className="mt-8 space-y-5">
              {missionPoints.map((p, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-accent flex-shrink-0" />
                  <p className="text-foreground/80 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/60 shadow-soft">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-accent">
              <span className="h-px w-6 bg-accent" /> Our Vision
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              An equitable and inclusive future.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              An equitable and inclusive society where access to quality education and healthcare is a fundamental
              right—not determined by geography or circumstance.
            </p>
            <div className="mt-8 space-y-5 border-t border-border/60 pt-6">
              {visionPoints.map((p, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground/80 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};
  );
};

export default MissionVision;
