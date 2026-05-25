import SectionHeader from "./SectionHeader";

const sentences = [
  "We bring quality education to underserved rural communities by building schools, colleges, and professional institutions that make learning accessible and affordable.",
  "We empower students from disadvantaged backgrounds with opportunities in engineering, healthcare, law, management, and skill development, helping them create brighter futures for themselves and their families.",
  "We drive social transformation through compassionate healthcare services, holistic development, and upliftment initiatives that promote dignity, self-reliance, equitable growth, and long-term social progress.",
];

const WhatWeDo = () => {
  return (
    <section className="section-y bg-secondary/30">
      <div className="container">
        <SectionHeader
          eyebrow="What We Do"
          title="From Rural Roots to Limitless Possibilities"
          className="max-w-4xl [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:lg:text-3xl [&>h2]:whitespace-nowrap"
        />

        <div className="mt-10 max-w-4xl mx-auto space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
          {sentences.map((s, i) => (
            <p key={i}>{s}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
