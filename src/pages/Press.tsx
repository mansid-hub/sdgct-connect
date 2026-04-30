import Layout from "@/components/site/Layout";

const pressReleases = [
  {
    title: "SDGCT Expands Educational Initiatives",
    description: "New programs launched to enhance skill-based learning.",
    image: "/images/press1.jpg",
    date: "April 2025",
  },
  {
    title: "Recognition for Excellence in Education",
    description: "Our institutions receive state-level appreciation.",
    image: "/images/press2.jpg",
    date: "March 2025",
  },
  {
    title: "Community Outreach Program Success",
    description: "Large-scale impact through healthcare and education drives.",
    image: "/images/press3.jpg",
    date: "February 2025",
  },
];

const Press = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">

        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Press Releases
          </h1>
          <p className="text-muted-foreground">
            Stay updated with official announcements and media coverage of our initiatives.
          </p>
        </div>

        {/* Press Grid */}
        <div className="space-y-6">
          {pressReleases.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 border rounded-xl p-4 bg-white hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-64 h-40 object-cover rounded-lg"
              />

              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {item.date}
                  </p>
                  <h2 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <button className="mt-4 text-primary text-sm font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Press;
