import { useEffect, useRef, useState } from "react";
import { HandHeart, GraduationCap, Building2, HeartPulse } from "lucide-react";

const metrics = [
  { icon: GraduationCap, value: 10915, suffix: "", label: "Students Learning ", note: "Across our schools and colleges" },
  { icon: HandHeart, value: 743, suffix: "", label: "Educators & Support Staff", note: "Dedicated teaching professionals across schools, colleges, and other institutes" },
  { icon: Building2, value: 30, suffix: "+", label: "Institutes Supported", note: "Schools, colleges, and hospitals" },
  { icon: HeartPulse, value: 40649, suffix: "", label: "OPD Patients", note: "Through healthcare services" },
];

function useCountUp(end: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * end));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, start, duration]);
  return value;
}

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const v = useCountUp(end, visible);
  return (
    <div ref={ref} className="font-display text-4xl sm:text-5xl font-bold text-primary tabular-nums">
      {v.toLocaleString()}
      {suffix}
    </div>
  );
};

const ImpactMetrics = () => {
  return (
    <section className="relative -mt-12 sm:-mt-16 z-20">
      <div className="container">
        <div className="bg-card rounded-3xl shadow-card border border-border/60 p-6 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="text-center lg:text-left lg:px-6 lg:border-r last:border-r-0 border-border/60"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-primary/8 text-primary mb-4">
                <m.icon size={22} />
              </div>
              <Counter end={m.value} suffix={m.suffix} />
              <div className="font-display font-semibold text-foreground mt-2 text-sm sm:text-base">
                {m.label}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{m.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
