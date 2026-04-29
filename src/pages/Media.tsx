import Layout from "@/components/site/Layout";
import { Link } from "react-router-dom";

const Media = () => {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-8">Media</h1>

        <p className="text-muted-foreground mb-10">
          Explore our latest updates, achievements, and media coverage.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/media/awards"
            className="p-6 border rounded-xl hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold mb-2">
              Awards & Recognition
            </h2>
            <p className="text-sm text-muted-foreground">
              View our achievements and milestones.
            </p>
          </Link>

          <Link
            to="/media/blogs"
            className="p-6 border rounded-xl hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold mb-2">Blogs</h2>
            <p className="text-sm text-muted-foreground">
              Read insights and updates from our organization.
            </p>
          </Link>

          <Link
            to="/media/press"
            className="p-6 border rounded-xl hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold mb-2">Press Release</h2>
            <p className="text-sm text-muted-foreground">
              Latest news and announcements.
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Media;
