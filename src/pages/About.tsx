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

      {/* Our Story */}
      <section className="section-y">
        <div className="container grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="relative lg:sticky lg:top-28">
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
          </div>

          <div className="lg:col-span-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              <span className="h-px w-6 bg-accent" /> Our Story
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              From a small village in Vidarbha to a network shaping rural futures.
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The story of Shri Dadasaheb Gawai Charitable Trust begins in the
                small rural village of Darapur, in Daryapur taluka of Vidarbha.
              </p>
              <p>
                Born into a modest farming family as one among seven siblings,
                Late Shri R. S. Gavai understood firsthand the barriers that
                prevented rural children from accessing education. Despite
                financial hardship, he pursued higher education and went on to
                complete his degree from Nagpur University. But his ambition
                extended far beyond personal success. He believed that thousands
                of children growing up in circumstances similar to his deserved
                the same opportunity to learn, grow, and build a better future.
              </p>

              <h3 className="pt-4 font-display text-xl font-bold text-foreground">
                The Problem He Saw
              </h3>
              <p>
                As he travelled across Vidarbha, Shri Gavai recognised two
                fundamental challenges facing rural education.
              </p>
              <p>
                The first was geography. Villages across the region were
                scattered and disconnected, with educational institutions
                concentrated in urban centres. For many children, especially in
                remote areas, even basic schooling remained physically
                inaccessible.
              </p>
              <p>
                The second was affordability. Families of landless labourers,
                small farmers, tribal communities, and socially disadvantaged
                groups often lacked the financial means to send their children
                away for education. Distance, transportation, hostel costs, and
                fees collectively pushed education out of reach for generations
                of rural families.
              </p>
              <p>
                These challenges were particularly visible across Vidarbha's
                agrarian belt, where economic uncertainty, drought-prone
                conditions, and limited infrastructure often restricted
                educational opportunity for rural families. Shri Gavai saw
                education not only as a pathway to employment, but as a means of
                creating long-term social and economic stability within these
                communities.
              </p>

              <h3 className="pt-4 font-display text-xl font-bold text-foreground">
                How It Began
              </h3>
              <p>
                Shri Gavai believed that if children could not reach schools,
                schools must reach them.
              </p>
              <p>
                With this vision, he began establishing schools directly within
                rural communities. In the early years, this often meant
                persuading local landowners to donate small parcels of land for
                educational institutions. In return, schools would sometimes be
                named in memory of their family members—creating a shared sense
                of ownership and community participation in education.
              </p>
              <p>
                What began as a small initiative steadily evolved into a large
                educational network rooted in accessibility and social mobility.
              </p>

              <h3 className="pt-4 font-display text-xl font-bold text-foreground">
                Where We Are Today
              </h3>
              <p>
                Today, the Trust operates 16 schools and 12 higher educational
                institutions across Maharashtra, including engineering,
                pharmacy, law, polytechnic, and Ayurvedic medical colleges,
                along with a 100-bedded hospital serving rural communities.
              </p>
              <p>
                One of Shri Gavai's most meaningful achievements was fulfilling
                the long-standing aspiration of the people of his native region
                by establishing an engineering college there—bringing
                professional education to students who would otherwise have had
                to leave their villages or abandon such ambitions entirely.
              </p>
              <p>
                Over the decades, the institutions built under his vision have
                enabled students from rural and underserved backgrounds to
                access opportunities once considered unimaginable. Alumni from
                our institutions have gone on to study at IITs, IIMs, Ivy League
                universities, serve in senior government positions, and build
                successful careers across industries in India and abroad.
              </p>

              <h3 className="pt-4 font-display text-xl font-bold text-foreground">
                The Legacy
              </h3>
              <p>
                While the scale of the Trust has grown, its core mission remains
                unchanged: to expand access to quality education and healthcare
                for communities that are too often left behind by geography,
                circumstance, or economic barriers.
              </p>
              <p>
                Today, that mission remains as relevant as ever. Even now,
                thousands of students across rural India continue to face
                barriers of affordability, access, and exposure. The Trust's
                work therefore continues to focus not only on building
                institutions, but on creating pathways of opportunity that allow
                students from rural backgrounds to participate fully in a
                rapidly changing world.
              </p>
              <p>
                From one small school to a network serving thousands annually,
                the journey of the Trust continues to be guided by the belief
                that talent exists everywhere and opportunity must too.
              </p>
            </div>
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
