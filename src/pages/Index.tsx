import Layout from "@/components/site/Layout";
import HeroSlider from "@/components/site/HeroSlider";
import ImpactMetrics from "@/components/site/ImpactMetrics";
import Initiatives from "@/components/site/Initiatives";
import Testimonials from "@/components/site/Testimonials";
import CallToDonate from "@/components/site/CallToDonate";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <ImpactMetrics />
      <Initiatives />
      <Testimonials />
      <CallToDonate />
    </Layout>
  );
};

export default Index;
