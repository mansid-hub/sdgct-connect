import Layout from "@/components/site/Layout";
import { Link } from "react-router-dom";

const Media = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16">
        <h1 className="text-3xl font-bold mb-6">Media</h1>

        <p className="mb-10 text-gray-600">
          Explore our latest updates, achievements, and media coverage.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/media/awards"
            className="p-6 border rounded-xl hover:shadow-lg transition bg-white"
          >
            <h2 className="text-lg font-semibold mb-2">
              Awards & Recognition
            </h2>
            <p className="text-sm text-gray-500">
              View our achievements and milestones.
            </p>
          </Link>

          <Link
            to="/media/blogs"
            className="p-6 border rounded-xl hover:shadow-lg transition bg-white"
          >
            <h2 className="text-lg font-semibold mb-2">Blogs</h2>
            <p className="text-sm text-gray-500">
              Read insights and updates.
            </p>
          </Link>

          <Link
            to="/media/press"
            className="p-6 border rounded-xl hover:shadow-lg transition bg-white"
          >
            <h2 className="text-lg font-semibold mb-2">
              Press Release
            </h2>
            <p className="text-sm text-gray-500">
              Latest announcements and news.
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Media;
