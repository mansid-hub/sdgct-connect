import { Link } from "react-router-dom";
import { ShieldCheck, GraduationCap, HeartHandshake, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  { icon: ShieldCheck, title: "Trusted since 1991", text: "Recognised Buddhist Minority Institution." },
  { icon: GraduationCap, title: "End-to-end education", text: "Pre-primary to post-graduation." },
  { icon: HeartHandshake, title: "Affordable Healthcare", text: "Quality care in underserved regions." },
  { icon: Users, title: "Rural Focus", text: "Deep presence in Vidarbha." },
];

const WhyUsTeaser = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            <span className="h-px w-6 bg-accent" /> Why SDGCT
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Delivery end-to-end education. From early learners to masters programs. With a commitment to affordability, inclusion & regional impact.
          </h2>
          <Button asChild variant="default" size="lg" className="mt-7">
            <Link to="/why-us">Why choose us <ArrowRight /></Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {points.map((p, i) => (
            <div key={i} className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <p.icon size={18} />
              </div>
              <h3 className="mt-4 font-display font-bold text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsTeaser;
