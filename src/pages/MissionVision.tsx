export default function MissionVisionSection() {
  const missionPoints = [
    "To serve underserved and rural regions across Vidarbha through sustained, on-ground delivery of education and healthcare.",
    "To provide holistic education that goes beyond academics—nurturing values, character, critical thinking, physical well-being, and environmental responsibility.",
    "To deliver affordable, accessible, and reliable healthcare to families in rural and interior regions.",
    "To build institutions that are consistent, accountable, and rooted in local needs—creating long-term impact.",
    "To foster an environment where educators, healthcare professionals, and staff can grow, lead, and contribute with purpose.",
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            Foundation & Purpose
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Vision & Mission
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Building institutions that create meaningful access to
            education and healthcare across rural Vidarbha.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* ================= VISION CARD ================= */}
          <div className="border border-gray-200 rounded-3xl p-8 md:p-10 bg-gray-50">
            <div className="mb-8">
              <span className="text-sm uppercase tracking-[0.18em] text-gray-500">
                Our Vision
              </span>

              <h2 className="text-3xl font-semibold mt-3 text-gray-900">
                An Inclusive Future
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              An equitable and inclusive society where access to quality
              education and healthcare is a fundamental right—not
              determined by geography or circumstance.
            </p>

            <div className="space-y-5 border-t border-gray-200 pt-8">
              <div>
                <p className="text-gray-800 font-medium">
                  Where every child can learn and grow.
                </p>
              </div>

              <div>
                <p className="text-gray-800 font-medium">
                  Where every family can access dignified care.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  Where every individual has the opportunity to live
                  with purpose, self-reliance, and possibility—across
                  rural Vidarbha and beyond.
                </p>
              </div>
            </div>
          </div>

          {/* ================= MISSION CARD ================= */}
          <div className="border border-gray-200 rounded-3xl p-8 md:p-10">
            <div className="mb-8">
              <span className="text-sm uppercase tracking-[0.18em] text-gray-500">
                Our Mission
              </span>

              <h2 className="text-3xl font-semibold mt-3 text-gray-900">
                What Drives Us
              </h2>
            </div>

            <div className="space-y-6">
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-gray-900 flex-shrink-0"></div>

                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CTA / NAVIGATION ================= */}
        <div className="mt-24 border-t border-gray-200 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Explore Our Institutions
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Discover the schools, colleges, and healthcare institutions
                that continue to serve communities across Vidarbha through
                education, care, and opportunity.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/institutions"
                className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition"
              >
                View Institutions
              </a>

              <a
                href="/about"
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
              >
                Learn More
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
