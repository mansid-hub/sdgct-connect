import Layout from "@/components/site/Layout";
import { Link } from "react-router-dom";

const Media = () => {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-8">Media</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/media/awards" className="p-6 border rounded-xl hover:shadow-md">
            Awards & Recognition
          </Link>

          <Link to="/media/blogs" className="p-6 border rounded-xl hover:shadow-md">
            Blogs
          </Link>

          <Link to="/media/press" className="p-6 border rounded-xl hover:shadow-md">
            Press Release
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Media;
