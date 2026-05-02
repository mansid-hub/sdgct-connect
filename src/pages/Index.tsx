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
