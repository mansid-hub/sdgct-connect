import SectionHeader from "./SectionHeader";
import { GraduationCap, Sparkles, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "Accessible Education",
    text: "We bring quality education to underserved rural communities by building schools, colleges, and professional institutions that make learning accessible and affordable.",
  },
  {
    icon: Sparkles,
    title: "Student Empowerment",
    text: "We empower students from disadvantaged backgrounds with opportunities in engineering, healthcare, law, management, and skill development, helping them create brighter futures for themselves and their families.",
  },
  {
    icon: HeartHandshake,
    title: "Social Transformation",
    text: "We drive social transformation through compassionate healthcare services, holistic development, and upliftment initiatives that promote dignity, self-reliance, equitable growth, and long-term social progress.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="section-y bg-secondary/30">
      <div className="container">
        <SectionHeader
          eyebrow="What We Do"
          title="From Rural Roots to Limitless Possibilities."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <article
              key={i}
              className="group relative bg-card rounded-3xl p-8 border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth flex flex-col"
            >
              <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center shadow-elegant">
                <p.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="mt-6 font-display font-bold text-xl text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {p.text}
              </p>
              <span className="absolute top-8 right-8 text-5xl font-display font-bold text-primary/10 group-hover:text-accent/30 transition-base">
                0{i + 1}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;