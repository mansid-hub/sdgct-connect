import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { X, ChevronLeft, ChevronRight, Newspaper } from "lucide-react";

// Import all images automatically
const imageModules = import.meta.glob("@/assets/press/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

// Optional titles
const titles: string[] = [
  "एक पेड माँ के नाम — वृक्षारोपण संपन्न",
  "सामाजिक उपक्रम पंधरवडा — विदर्भ मतदार",
  "सामाजिक उपक्रम पंधरवडा उद्घाटन",
  "मिनी गोल्फ राष्ट्रीय स्पर्धेत पदक",
  "पोलीस भरतीपूर्व प्रशिक्षण वर्गाचे उद्घाटन",
  "पोलीस भरतीपूर्व प्रशिक्षण — विदर्भ मतदार",
  "आनापान साधना शिबिर संपन्न",
  "एक विद्यार्थी एक झाड उपक्रमाने उद्घाटन",
  "सामान्य ज्ञान परीक्षा बक्षीस वितरण",
  "मधुबन वृद्धाश्रमाला मदत — दिव्य मराठी",
];

const PressRelease = () => {
  const [active, setActive] = useState<number | null>(null);

  // Generate clippings automatically
  const clippings = useMemo(() => {
    return Object.entries(imageModules)
      .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
      .map(([path, src], index) => {
        const filename = path.split("/").pop()?.split(".")[0] || "";

        return {
          src: src as string,
          title: titles[index] || filename.replace(/-/g, " "),
        };
      });
  }, []);

  useEffect(() => {
    if (active === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);

      if (e.key === "ArrowRight") {
        setActive((i) =>
          i === null ? 0 : (i + 1) % clippings.length
        );
      }

      if (e.key === "ArrowLeft") {
        setActive((i) =>
          i === null ? 0 : (i - 1 + clippings.length) % clippings.length
        );
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, clippings.length]);

  return (
    <Layout>
      <PageHeader
        eyebrow="Resources"
        title="Press Release"
        description="Newspaper clippings and media coverage of Shri Dadasaheb Gawai Charitable Trust. Click any clipping to view full size and read the content."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Resources", to: "/media" },
          { label: "Press Release" },
        ]}
      />

      <section className="section-y">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="text-accent" />

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Media Coverage
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {clippings.map((c, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft hover:shadow-card transition-base focus:outline-none focus:ring-2 focus:ring-primary text-left"
              >
                <div className="aspect-[3/4] overflow-hidden bg-secondary/40">
                  <img
                    src={c.src}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-smooth group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <p className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-base">
                    {c.title}
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    Click to read full clipping
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fade-in"
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
            className="absolute left-4 sm:left-8 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white inline-flex items-center justify-center transition-base"
            onClick={(e) => {
              e.stopPropagation();

              setActive((i) =>
                i === null
                  ? 0
                  : (i - 1 + clippings.length) % clippings.length
              );
            }}
          >
            <ChevronLeft size={22} />
          </button>

          <img
            src={clippings[active].src}
            alt={clippings[active].title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-full rounded-2xl shadow-elegant object-contain"
          />

          <button
            type="button"
            aria-label="Next"
            className="absolute right-4 sm:right-8 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white inline-flex items-center justify-center transition-base"
            onClick={(e) => {
              e.stopPropagation();

              setActive((i) =>
                i === null
                  ? 0
                  : (i + 1) % clippings.length
              );
            }}
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-5 left-0 right-0 text-center text-white/80 text-sm px-4">
            {active + 1} / {clippings.length} — {clippings[active].title}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default PressRelease;
