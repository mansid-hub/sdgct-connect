import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: hero1,
    eyebrow: "Education for All",
    title: "Empowering lives and expanding access to quality education",
    description:
      "For over three decades, we’ve supported the most vulnerable because talent is everywhere, but opportunity isn’t.",
  },
  {
    image: hero2,
    eyebrow: "Community First",
    title: "Every Hand We Hold Builds a Stronger Tomorrow",
    description:
      "From village schools to mobile clinics, your support powers the change happening across Vidarbha.",
  },
  {
    image: hero3,
    eyebrow: "Hope in Action",
    title: "Where Compassion Meets Commitment",
    description:
      "Join thousands of supporters who believe that no child should be left behind — for any reason.",
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
 <section className="relative overflow-hidden h-[65vh] min-h-[420px] max-h-[580px] flex items-center text-primary-foreground">      
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
            loading={i === 0 ? "eager" : "lazy"}
          />

          {/* Dark overlay */}
          <div
            className={cn(
              "absolute inset-0",
              i === 0 ? "bg-black/50" : "bg-black/40"
            )}
          />
        </div>
      ))}

      {/* Content */}
      <div className="container relative z-10 py-10">
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
            className="mt-9 flex flex-wrap gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: "260ms" }}
          >
            {/* Hide on first slide */}
            {active !== 0 && (
              <Button asChild variant="donate" size="xl">
                <Link to="/donate">
                  <Heart className="fill-current" /> Sponsor a Child
                </Link>
              </Button>
            )}

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
        </div>
      </div>
   {/* Indicators */} <div className="absolute bottom-4 left-0 right-0 z-10"> 
     <div className="container flex items-center justify-between gap-6"> 
       <div className="flex gap-2"> 
         {slides.map((_, i) => ( 
   <button 
     key={i} 
     onClick={() => setActive(i)} 
     aria-label={Slide ${i + 1}} 
     className={cn( 
       "h-1.5 rounded-full transition-base", 
       active === i ? 
       "w-10 bg-accent" 
       : "w-6 bg-primary-foreground/40 hover:bg-primary-
       foreground/60" 
     )} 
     /> 
 ))} 
       </div>
       </div>
     </div>
    </section>
  );
};

export default HeroSlider;
