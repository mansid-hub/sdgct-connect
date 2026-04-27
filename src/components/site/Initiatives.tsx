import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import edu from "@/assets/initiative-education.jpg";
import health from "@/assets/initiative-health.jpg";
import women from "@/assets/initiative-women.jpg";
import food from "@/assets/initiative-food.jpg";

const items = [
  {
    image: edu,
    title: "Education & Scholarships",
    description: "Funding tuition, books and mentorship for first-generation learners.",
    progress: 78,
    raised: "₹ 18.4L raised of ₹ 25L",
  },
  {
    image: health,
    title: "Mobile Health Camps",
    description: "Monthly clinics bringing doctors and medicine to remote villages.",
    progress: 64,
    raised: "₹ 9.6L raised of ₹ 15L",
  },
  {
    image: women,
    title: "Women Empowerment",
    description: "Vocational training and micro-enterprise support for rural women.",
    progress: 52,
    raised: "₹ 6.2L raised of ₹ 12L",
  },
  {
    image: food,
    title: "Food & Welfare",
    description: "Daily meals and essentials for elders and families in need.",
    progress: 86,
    raised: "₹ 4.3L raised of ₹ 5L",
  },
];

const Initiatives = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="What We Do"
          title="Initiatives that change lives every day"
          description="Each programme is run by trustees and volunteers on the ground, with full transparency on funds raised and impact delivered."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <article
              key={i}
              className="group bg-card rounded-3xl overflow-hidden border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={it.image}
                  alt={it.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-transparent to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-lg text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {it.description}
                </p>

                <div className="mt-5">
                  <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-accent rounded-full transition-smooth"
                      style={{ width: `${it.progress}%` }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>{it.raised}</span>
                    <span className="font-semibold text-primary">{it.progress}%</span>
                  </div>
                </div>

                <Button asChild variant="default" size="sm" className="mt-5 w-full">
                  <Link to="/donate">
                    Donate <ArrowRight />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;