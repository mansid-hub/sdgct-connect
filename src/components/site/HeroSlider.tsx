import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpeg";
import hero2 from "@/assets/hero-2.jpeg";
import hero3 from "@/assets/hero-3.jpg";
import heroEducation from "@/assets/hero-education-all.jpeg";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: hero3,
    eyebrow: "Community First",
    title: "When Compassion Meet Commitment",
    description:
      "Empowering lives through education.",
    objectPosition: "center 75%",
    overlay: "bg-black/35",
  },
  {
    image: hero2,
    eyebrow: "Hope in Action",
    title: "Every hand we hold builds a stronger tomorrow",
    description:
      "From village schools to mobile clinics, we create equitable opportunities.",
    objectPosition: "center 35%",
    overlay: "bg-black/35",
  },
  {
    image: hero1,
    eyebrow: "Education for All",
    title: "Empowering lives and expanding access to quality education",
    description:
      "For over three decades, we’ve supported the most vulnerable because talent is everywhere, but opportunity isn’t.",
    objectPosition: "center top",
    overlay: "bg-black/40",
  },
];

const HeroSlider = () => {
  const [active, setActive] = useState(0);

  // Different duration per slide
  useEffect(() => {
    const durations = [10000, 6500, 6500];

    const timeout = setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, durations[active]);

    return () => clearTimeout(timeout);
  }, [active]);

  return (
 <section className="relative overflow-hidden h-[74vh] min-h-[500px] max-h-[680px] flex items-center text-primary-foreground">      
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            active === i ? "opacity-100" : "opacity-0"
          )}
          aria-hidden={active !== i}
        >
          {/* Image with subtle zoom */}
          <img
            src={slide.image}
            alt=""
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-transform duration-[7000ms]",
              active === i ? "scale-105" : "scale-100"
            )}
            style={{ objectPosition: slide.objectPosition }}
            loading={i === 0 ? "eager" : "lazy"}
          />

          {/* Dark overlay */}
          <div className={cn("absolute inset-0", slide.overlay)} />
          {/* Left-side gradient to keep text readable without darkening the whole image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="container relative z-10 pt-16 pb-12">
        <div className="max-w-3xl">
          {slides.map((slide, i) => (
            <div key={i} className={cn(active === i ? "block" : "hidden")}>
              
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-5 animate-fade-up">
                <span className="h-px w-8 bg-accent" />
                {slide.eyebrow}
              </span>

              <h1
                className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] text-balance animate-fade-up"
                style={{ animationDelay: "80ms" }}
              >
                {slide.title}
              </h1>

              <p
                className="mt-6 text-base sm:text-lg lg:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed animate-fade-up"
                style={{ animationDelay: "180ms" }}
              >
                {slide.description}
              </p>
            </div>
          ))}

          {/* Buttons */}
          <div
            className="mt-6 flex flex-wrap gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: "260ms" }}
          >
            

            <Button
              asChild
              variant="outline"
              size="xl"
              className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20 hover:border-primary-foreground/60"
            >
              <Link to="/about">
                <Play size={16} /> Our Story
                <ArrowRight />
              </Link>
            </Button>
          </div>

          {/* Indicators (left, below Our Story button) */}
          <div className="mt-6 animate-fade-up" style={{ animationDelay: "320ms" }}>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-base",
                    active === i
                      ? "w-10 bg-accent"
                      : "w-6 bg-primary-foreground/40 hover:bg-primary-foreground/60"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
 </section>
  );
};

export default HeroSlider;
