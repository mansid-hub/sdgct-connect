import Layout from "@/components/site/Layout";

const WhyUs = () => {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-6">Why Us</h1>

        <p className="text-lg text-muted-foreground mb-6">
          We are committed to excellence in education, healthcare, and community development.
        </p>

        <ul className="space-y-3">
          <li>✔ 25+ Years of Service</li>
          <li>✔ Trusted by Thousands</li>
          <li>✔ Holistic Development Approach</li>
          <li>✔ Strong Institutional Network</li>
        </ul>
      </div>
    </Layout>
  );
};

export default WhyUs;
