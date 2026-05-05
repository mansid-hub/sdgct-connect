export default function MissionVisionSection() {
  const missionPoints = [
    "To serve underserved and rural regions across Vidarbha through sustained, on-ground delivery of education and healthcare.",
    "To provide holistic education that goes beyond academics—nurturing values, character, critical thinking, physical well-being, and environmental responsibility.",
    "To deliver affordable, accessible, and reliable healthcare to families in rural and interior regions.",
    "To build institutions that are consistent, accountable, and rooted in local needs—creating long-term impact.",
    "To foster an environment where educators, healthcare professionals, and staff can grow, lead, and contribute with purpose.",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      
      {/* ================= VISION ================= */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Vision
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          An equitable and inclusive society where access to quality education and healthcare 
          is a fundamental right—not determined by geography or circumstance.
        </p>

        <div className="w-16 h-[1px] bg-gray-300 mx-auto my-10"></div>

        <div className="text-base md:text-lg text-gray-600 space-y-3 max-w-2xl mx-auto">
          <p>Where every child can learn and grow.</p>
          <p>Where every family can access dignified care.</p>
          <p>
            Where every individual has the opportunity to live with purpose, 
            self-reliance, and possibility—across rural Vidarbha and beyond.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-200 mb-20"></div>

      {/* ================= MISSION ================= */}
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Mission
        </h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          {missionPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              {/* Bullet */}
              <div className="mt-2 w-2 h-2 rounded-full bg-gray-400 flex-shrink-0"></div>

              {/* Text */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
