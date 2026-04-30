import { useState } from "react";
import Layout from "@/components/site/Layout";

const awardsImages = [
  "/images/awards.png",
  "/images/awards1.png",
  "/images/awards2.png",
  "/images/awards3.png",
];

const Awards = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">

        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Awards & Recognition
          </h1>
          <p className="text-muted-foreground">
            Our institutions have been recognized for excellence in education,
            innovation, and community service. These milestones reflect our
            continued commitment to creating meaningful impact.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="group overflow-hidden rounded-xl border bg-white relative cursor-pointer"
            >
              <img
                src={img}
                alt={`Award ${index + 1}`}
                className="w-full h-60 object-cover group-hover:scale-105 transition"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-sm">View Award</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white text-3xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Selected Award"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            />
          </div>
        )}

      </div>
    </Layout>
  );
};

export default Awards;
