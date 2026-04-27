import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  {
    quote:
      "The scholarship the trust gave me changed everything. I am the first engineer in my village — and I owe it to them.",
    name: "Pooja Wankhede",
    role: "Software Engineer · Pune",
  },
  {
    quote:
      "Their mobile health camps brought a doctor to my mother for the first time. We are forever grateful.",
    name: "Ramesh Patil",
    role: "Farmer · Morshi",
  },
  {
    quote:
      "I learned tailoring at the centre and now run my own boutique that supports my family.",
    name: "Sunita Bhagat",
    role: "Entrepreneur · Achalpur",
  },
  {
    quote:
      "Every rupee I donate is accounted for. That transparency is why I keep coming back as a supporter.",
    name: "Aditya Sharma",
    role: "Donor · Mumbai",
  },
  {
    quote:
      "Volunteering with the trust has been the most meaningful thing I've done in years.",
    name: "Meera Iyer",
    role: "Volunteer · Amravati",
  },
];

const Testimonials = () => {
  const scroller = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const el = scroller.current;
      if (!el) return;
      const next = el.scrollLeft + el.clientWidth * 0.85;
      if (next >= el.scrollWidth - 10) el.scrollTo({ left: 0, behavior: "smooth" });
      else el.scrollTo({ left: next, behavior: "smooth" });
    }, 4500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="py-20 sm:py-28 bg-secondary/40">
      <div className="container">
        <SectionHeader
          eyebrow="Voices of Impact"
          title="Stories from the people we serve"
        />
      </div>

      <div
        ref={scroller}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        className="mt-12 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide px-4 sm:px-8 lg:px-16 pb-6"
      >
        {items.map((it, i) => (
          <figure
            key={i}
            className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] bg-card rounded-3xl p-7 sm:p-9 shadow-soft border border-border/60 flex flex-col"
          >
            <Quote className="text-accent mb-4 fill-current" size={28} />
            <blockquote className="font-display text-lg leading-relaxed text-foreground flex-1">
              "{it.quote}"
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-border/60">
              <div className="font-semibold text-foreground">{it.name}</div>
              <div className="text-sm text-muted-foreground">{it.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;