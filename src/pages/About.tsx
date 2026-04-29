import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SectionHeader from "@/components/site/SectionHeader";
import { Eye, Target, Sparkles, Users } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import CallToDonate from "@/components/site/CallToDonate";

const values = [
  { icon: Target, title: "Mission", text: "To uplift underprivileged communities through education, healthcare and dignified opportunity." },
  { icon: Eye, title: "Vision", text: "A society where every child, woman and elder has access to the tools they need to thrive." },
  { icon: Sparkles, title: "Values", text: "Transparency, compassion, accountability and unwavering respect for the people we serve." },
  { icon: Users, title: "Community", text: "We work with — not for — the communities, building local capability and lasting change." },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="About Us"
        title="Decades of service. Generations of impact."
        description="Founded in the spirit of Shri Dadasaheb Gawai's lifelong commitment to social reform, our trust has grown into one of Vidarbha's most respected charitable institutions."
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="section-y">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={hero2}
              alt="Our work in the community"
              loading="lazy"
              width={1920}
              height={1080}
              className="rounded-3xl shadow-card aspect-[4/5] object-cover w-full"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-card rounded-2xl p-6 shadow-elegant border border-border/60 w-56">
              <div className="font-display text-3xl font-bold text-primary">12+</div>
              <div className="text-sm text-muted-foreground mt-1">years of dedicated grassroots service</div>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              <span className="h-px w-6 bg-accent" /> Our Story
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Born from a vision of equality, sustained by community.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Shri Dadasaheb Gawai Charitable Trust was founded in honour
                of one of Vidarbha's most respected social reformers. From its
                first scholarship to a single child, it has grown into a
                multi-programme institution touching tens of thousands of lives
                each year.
              </p>
              <p>
                Today the trust runs schools, hostels, health camps, women's
                vocational centres and community welfare programmes across
                Amravati, Akola, Yavatmal and beyond — always anchored in the
                values that started it all.
              </p>
              <p>
                We remain a small team — but a deeply committed one — supported
                by trustees, donors and volunteers who believe that compassion
                in action is the best inheritance we can leave behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container">
          <SectionHeader
            eyebrow="What guides us"
            title="Mission, vision & values"
            description="The principles that shape every decision we make and every programme we run."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-card rounded-3xl p-7 border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl gradient-primary text-primary-foreground mb-5">
                  <v.icon size={20} />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              <span className="h-px w-6 bg-accent" /> Our Background
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              A movement rooted in Vidarbha, reaching across India.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                What began as a single scholarship in a small village school is
                today a registered charitable trust certified under Section 12A
                and 80G of the Income Tax Act.
              </p>
              <p>
                We publish quarterly impact reports, undergo independent annual
                audits and welcome anyone who wishes to visit our programmes
                in person.
              </p>
            </div>
          </div>
          <img
            src={hero3}
            alt="Trust at work in the community"
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