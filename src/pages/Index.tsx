import Layout from "@/components/site/Layout";
import HeroSlider from "@/components/site/HeroSlider";
import ImpactMetrics from "@/components/site/ImpactMetrics";
import Initiatives from "@/components/site/Initiatives";
import Testimonials from "@/components/site/Testimonials";
import CallToDonate from "@/components/site/CallToDonate";
import InstitutionsPreview from "@/components/site/InstitutionsPreview";
import WhyUsTeaser from "@/components/site/WhyUsTeaser";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <HeroSlider />

      {/* Intro Section (NEW – makes site feel like a trust) */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Empowering Lives Through Education & Service
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Shri Dadasaheb Gawai Charitable Trust has been working since 1991 to
            uplift communities through education, skill development, and social
            initiatives. From classrooms to communities, our mission is to create
            equal opportunities for all.
          </p>
        </div>
      </section>

      {/* Impact */}
      <ImpactMetrics />

      {/* What We Do (NEW visual section like Mahan) */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Do
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Education",
                desc: "From pre-primary to post-graduation institutions",
                img: "/images/education.jpg",
              },
              {
                title: "Healthcare",
                desc: "Hospitals and community health initiatives",
                img: "/images/health.jpg",
              },
              {
                title: "Skill Development",
                desc: "Vocational training and career readiness programs",
                img: "/images/skill.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-soft border bg-white"
              >
                <img
                  src={item.img}
                  className="h-52 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutions */}
      <InstitutionsPreview />

      {/* Why Us */}
      <WhyUsTeaser />

      {/* Stories / Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CallToDonate />
    </Layout>
  );
};

export default Index;
