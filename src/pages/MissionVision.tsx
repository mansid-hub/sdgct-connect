import Layout from "@/components/site/Layout";

const MissionVision = () => {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-8">Mission & Vision</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-muted-foreground">
            To provide quality education and services that empower individuals and uplift society.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-muted-foreground">
            To become a leading institution driving positive change and innovation in society.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default MissionVision;
