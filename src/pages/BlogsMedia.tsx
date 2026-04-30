import Layout from "@/components/site/Layout";

const blogs = [
  {
    title: "Empowering Education for All",
    description: "How SDGCT is transforming access to quality education.",
    image: "/images/blog1.jpg",
    date: "March 2025",
  },
  {
    title: "Digital Learning Initiatives",
    description: "Bringing modern learning tools to every student.",
    image: "/images/blog2.jpg",
    date: "February 2025",
  },
  {
    title: "Community Development Programs",
    description: "Creating sustainable impact beyond classrooms.",
    image: "/images/blog3.jpg",
    date: "January 2025",
  },
];

const BlogsMedia = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">

        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Blogs</h1>
          <p className="text-muted-foreground">
            Explore insights, stories, and updates from our journey in education and community impact.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <p className="text-xs text-muted-foreground mb-2">
                  {blog.date}
                </p>
                <h2 className="text-lg font-semibold mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default BlogsMedia;
