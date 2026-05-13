import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  images: string[];
  name: string;
  previewCount?: number;
}

const InstitutionGallery = ({ images, name, previewCount }: Props) => {
  const [active, setActive] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? 0 : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, images.length]);

  if (!images || images.length === 0) return null;

  const isCollapsible =
    typeof previewCount === "number" && previewCount > 0 && images.length > previewCount;
  const visibleCount = isCollapsible && !expanded ? previewCount! : images.length;
  const visible = images.slice(0, visibleCount);
  const remaining = images.length - visibleCount;

  return (
    <div>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
        <Images className="text-accent" /> Gallery
      </h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {visible.map((src, i) => {
          const isLastPreview = isCollapsible && !expanded && i === visibleCount - 1 && remaining > 0;
          return (
            <button
              key={i}
              type="button"
              onClick={() => (isLastPreview ? setExpanded(true) : setActive(i))}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border/60 bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img
                src={src}
                alt={`${name} gallery image ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-smooth group-hover:scale-105"
              />
              {isLastPreview && (
                <div className="absolute inset-0 bg-black/60 text-white flex flex-col items-center justify-center font-semibold transition-base group-hover:bg-black/70">
                  <span className="text-2xl sm:text-3xl">+{remaining}</span>
                  <span className="text-xs sm:text-sm uppercase tracking-wider mt-1">View more</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[1000] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute top-4 right-4 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white inline-flex items-center justify-center transition-base"
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
          >
            <X size={22} />
          </button>
          <button
            type="button"
            aria-label="Previous"
            className={cn(
              "absolute left-4 sm:left-8 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white inline-flex items-center justify-center transition-base"
            )}
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
            }}
          >
            <ChevronLeft size={22} />
          </button>
          <img
            src={images[active]}
            alt={`${name} gallery image ${active + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-2xl shadow-elegant object-contain"
          />
          <button
            type="button"
            aria-label="Next"
            className="absolute right-4 sm:right-8 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white inline-flex items-center justify-center transition-base"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? 0 : (i + 1) % images.length));
            }}
          >
            <ChevronRight size={22} />
          </button>
          <div className="absolute bottom-5 left-0 right-0 text-center text-white/80 text-sm">
            {active + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default InstitutionGallery;