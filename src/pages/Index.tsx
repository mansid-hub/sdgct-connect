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
      <HeroSlider />
      <ImpactMetrics />
      <Initiatives />
      <InstitutionsPreview />
      <WhyUsTeaser />
      <Testimonials />
      <CallToDonate />
    </Layout>
  );
};

export default Index;
