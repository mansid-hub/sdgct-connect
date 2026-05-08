import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Quote, Sparkles } from "lucide-react";
import kamaltai from "@/assets/trustees/kamaltai.jpg";
import hero1 from "@/assets/hero-1.jpg";

const FoundersJourney = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Founder's Journey"
        title="A vision that built institutions and lifted communities."
        description="The story of SDGCT begins with two extraordinary lives — Shri Dadasaheb Gawai and Aai Dr. Kamaltai R. Gawai — whose belief in education and dignity continues to guide every decision the trust makes."
        crumbs={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Founder's Journey" }]}
      />

      {/* Shri Dadasaheb Gawai */}
      <section className="section-y">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <img
            src={hero1}
            alt="Legacy of Shri Dadasaheb Gawai"
            loading="lazy"
            width={1600}
            height={1200}
            className="rounded-3xl shadow-card aspect-[4/5] object-cover w-full"
          />
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              <span className="h-px w-6 bg-accent" /> The Vision
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Shri Dadasaheb Gawai
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Shri Dadasaheb Gawai believed deeply that education is the
                surest path out of inequality. His life's work was anchored in
                a single conviction — that every child deserves a fair chance
                to learn, grow and live with dignity.
              </p>
              <p>
                That conviction became the foundation on which this trust was
                built. The institutions that carry his name today exist because
                he refused to accept that opportunity should depend on where
                someone was born.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border-l-4 border-accent bg-secondary/40 p-5">
              <Quote className="text-accent mb-2" size={20} />
              <p className="text-foreground italic leading-relaxed">
                "Educate. Organise. Uplift. The future of any community is built
                in its classrooms."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aai Dr. Kamaltai */}
      <section className="section-y bg-secondary/40">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              <span className="h-px w-6 bg-accent" /> The Inspiration
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Aai Dr. Kamaltai R. Gawai
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Aai Dr. Kamaltai R. Gawai is the founding inspiration behind
                SDGCT. With quiet determination, she carried forward a vision
                of education for every child — and built it, brick by brick,
                school by school, into the network of institutions that exists
                today.
              </p>
              <p>
                Her devotion to women's empowerment, child welfare and
                community service shaped the soul of this trust. The warmth
                with which the trust is run today is, in many ways, hers.
              </p>
            </div>
          </div>
          <img
            src={kamaltai}
            alt="Aai Dr. Kamaltai R. Gawai"
            loading="lazy"
            width={1200}
            height={1500}
            className="order-1 lg:order-2 rounded-3xl shadow-card aspect-[4/5] object-cover w-full"
          />
        </div>
      </section>

      {/* Long-term impact */}
      <section className="section-y">
        <div className="container max-w-4xl text-center">
          <Sparkles className="mx-auto text-accent" size={28} />
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            A legacy that keeps growing.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From a single school to over fifty institutions, from a handful of
            students to thousands of learners every year — the journey that
            began with a vision now belongs to entire generations.
          </p>
        </div>
      </section>

    </Layout>
  );
};

export default FoundersJourney;
