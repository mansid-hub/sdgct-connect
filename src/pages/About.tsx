import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SectionHeader from "@/components/site/SectionHeader";
import { GraduationCap, HeartHandshake, Sparkles, BookOpen, Users, Cpu } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import CallToDonate from "@/components/site/CallToDonate";

const whatWeDo = [
  {
    icon: BookOpen,
    title: "Education for all",
    text: "Pre-primary to post-graduation across schools, junior and senior colleges.",
  },
  {
    icon: Cpu,
    title: "Skills & digital learning",
    text: "Pharmacy, vocational training, e-learning and applied research programmes.",
  },
  {
    icon: Users,
    title: "Community upliftment",
    text: "Outreach, scholarships and welfare initiatives that reach families across Vidarbha.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="About Us"
        title="A trust built on dignity, education and opportunity."
        description="Shri Dadasaheb Gawai Charitable Trust (SDGCT) is a Buddhist Minority Institution recognised by the Government of Maharashtra, serving Amravati and beyond since 1991."
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      {/* Who we are */}
      <section className="section-y">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={hero2}
              alt="Students and teachers across SDGCT institutions"
              loading="lazy"
              width={1920}
              height={1080}
              className="rounded-3xl shadow-card aspect-[4/5] object-cover w-full"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-card rounded-2xl p-6 shadow-elegant border border-border/60 w-56">
              <div className="font-display text-3xl font-bold text-primary">
                Since 1991
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Three decades of grassroots service
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              <span className="h-px w-6 bg-accent" /> Who we are
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              An institution rooted in service, guided by an enduring vision.
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Established in 1991 in Amravati, SDGCT is a charitable trust
                inspired by the lifelong vision of Dr. B. R. Ambedkar — that
                education and dignity belong to every person, without exception.
              </p>

              <p>
                The trust owes its foundation to the vision of Hon’ble Shri R. S.
                (Dadasaheb) Gawai and Hon’ble Dr. Kamaltai R. Gawai, whose
                commitment to social upliftment continues to inspire every
                initiative we undertake today.
              </p>

              <p>
                Today the trust runs a growing network of schools, junior and
                senior colleges, technical institutes and community programmes
                that quietly change lives, one student and one family at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Foundation (Replaces Mission) */}
      <section className="section-y bg-secondary/40">
        <div className="container max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent justify-center">
            <span className="h-px w-6 bg-accent" /> Our Foundation
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Built on values that empower generations.
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Guided by the ideals of Bharat Ratna Dr. B. R. Ambedkar, the trust
            believes that education is the most powerful tool for social
            transformation. Every initiative we undertake reflects a commitment
            to equality, dignity, and opportunity for all sections of society.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            From classrooms to community programmes, our work is rooted in the
            belief that real change begins when individuals are empowered with
            knowledge, confidence, and the right opportunities.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="section-y">
        <div className="container">
          <SectionHeader
            eyebrow="What We Do"
            title="Education and upliftment, end to end."
            description="From a child's first classroom to advanced research and skill training — our work spans the full journey of a learner."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((v, i) => (
              <div
                key={i}
                className="bg-card rounded-3xl p-7 border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl gradient-primary text-primary-foreground mb-5">
                  <v.icon size={20} />
                </div>

                <h3 className="font-display font-bold text-lg text-foreground">
                  {v.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth & Impact */}
      <section className="section-y bg-secondary/40">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              <span className="h-px w-6 bg-accent" /> Growth & Impact
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Approaching a golden jubilee of service.
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Several of our institutions are nearing their golden jubilee — a
                quiet milestone built on decades of trust earned from students,
                parents and the communities we serve.
              </p>

              <p>
                In recent years the trust has expanded into pharmacy education,
                e-learning, applied research and vocational courses — preparing
                a new generation of learners for the world they are entering.
              </p>

              <div className="pt-2 grid grid-cols-3 gap-4">
                {[
                  { icon: GraduationCap, label: "Education" },
                  { icon: Sparkles, label: "Research" },
                  { icon: HeartHandshake, label: "Community" },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-border/60 bg-card p-4 flex items-center gap-2"
                  >
                    <p.icon size={16} className="text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <img
            src={hero3}
            alt="SDGCT institutions across the Amravati region"
            loading="lazy"
            width={1920}
            height={1080}
            className="order-1 lg:order-2 rounded-3xl shadow-card aspect-[5/4] object-cover w-full"
          />
        </div>
      </section>

      <CallToDonate />
    </Layout>
  );
};

export default About;
