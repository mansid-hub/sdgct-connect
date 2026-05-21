import Layout from "@/components/site/Layout";
import { Link } from "react-router-dom";

const mediaItems = [
  {
    title: "Success Stories",
    description: "Insights, stories, and updates from our journey.",
    image: "/images/blog.png",
    link: "/media/blogs",
  },
];


const Media = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 text-black">

        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Media & Updates
          </h1>
          <p className="text-black/70">
            Stay connected with our journey through achievements, stories, and official updates. 
            Explore how we continue to create impact across education and community development.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="group border rounded-xl overflow-hidden bg-white hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
                  {item.title}
                </h2>
                <p className="text-sm text-black/70">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Media;
