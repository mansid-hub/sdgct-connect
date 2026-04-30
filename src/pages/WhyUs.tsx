import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import CallToDonate from "@/components/site/CallToDonate";
import { ShieldCheck, HeartHandshake, GraduationCap, Users } from "lucide-react";

const stats = [
  { value: "48+", label: "Institutions" },
  { value: "12,000+", label: "Students Impacted" },
  { value: "25+", label: "Years of Service" },
  { value: "100+", label: "Programs & Initiatives" },
];

const reasons = [
  { icon: ShieldCheck, title: "Trusted since 1991", text: "A registered Buddhist Minority Institution recognised by the Government of Maharashtra." },
  { icon: GraduationCap, title: "End-to-end education", text: "From pre-primary classrooms to post-graduate, technical and vocational programmes." },
  { icon: HeartHandshake, title: "Community first", text: "Every initiative is shaped by — and accountable to — the communities we serve." },
  { icon: Users, title: "People who care", text: "Trustees, teachers and volunteers who treat each student as their own." },
];

const WhyUs = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Why Us"
        title="Why families and communities trust SDGCT."
        description="Three decades of consistent, transparent service in education, healthcare and community development across Vidarbha."
        crumbs={[{ label: "Home", to: "/" }, { label: "Why Us" }]}
      />

      {/* Reasons */}
      <section className="section-y">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="bg-card rounded-3xl p-7 border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl gradient-primary text-primary-foreground mb-5">
                <r.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact section */}
      <section className="section-y bg-secondary/40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              <span className="h-px w-6 bg-accent" /> Our Impact
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Impact That Builds Trust and Changes Lives
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Through our institutions and initiatives, we create meaningful
              change in education, healthcare, and community development.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-card rounded-3xl border border-border/60 shadow-soft p-6 sm:p-8 text-center hover:shadow-card hover:-translate-y-1 transition-smooth"
              >
                <div className="font-display text-4xl sm:text-5xl font-bold text-primary tabular-nums">
                  {s.value}
                </div>
                <div className="mt-2 text-sm sm:text-base text-muted-foreground font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToDonate />
    </Layout>
  );
};

export default WhyUs;
