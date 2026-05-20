import Layout from "@/components/site/Layout";
import HeroSlider from "@/components/site/HeroSlider";
import ImpactMetrics from "@/components/site/ImpactMetrics";
import Initiatives from "@/components/site/Initiatives";
import Testimonials from "@/components/site/Testimonials";
import InstitutionsPreview from "@/components/site/InstitutionsPreview";
import WhatWeDo from "@/components/site/WhatWeDo";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <HeroSlider />

      {/* Impact */}
      <ImpactMetrics />

      {/* What We Do */}
      <WhatWeDo />

      {/* Institutions */}
      <InstitutionsPreview />

      {/* Stories / Testimonials */}
      <Testimonials />
    </Layout>
  );
};

export default Index;
