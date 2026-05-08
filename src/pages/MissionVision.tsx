import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import CallToDonate from "@/components/site/CallToDonate";
import { Quote, Sparkles } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";

export default function VisionMissionPage() {
  return (
    <>
      {/* Shared Header */}
      <PageHeader
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Vision & Mission" },
        ]}
        eyebrow="Vision & Mission"
        title="Building access, dignity and opportunity."
        description="Our vision and mission guide every institution, initiative, and decision—ensuring education and healthcare remain accessible to underserved communities across Vidarbha."
        gradient="blue"
      />

      {/* Main Content */}

export default function MissionVisionSection() {
  const missionPoints = [
    "To serve underserved and rural regions across Vidarbha through sustained, on-ground delivery of education and healthcare.",
    "To provide holistic education that goes beyond academics—nurturing values, character, critical thinking, physical well-being, and environmental responsibility.",
    "To deliver affordable, accessible, and reliable healthcare to families in rural and interior regions.",
    "To build institutions that are consistent, accountable, and rooted in local needs—creating long-term impact.",
    "To foster an environment where educators, healthcare professionals, and staff can grow, lead, and contribute with purpose.",
  ];

  return (
    <section className="bg-[#f5f5f7]">

      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#12397f] to-[#2553a6]">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-white/70 text-sm mb-10">
            <span>Home</span>
            <span>›</span>
            <span>About</span>
            <span>›</span>
            <span className="text-white font-medium">
              Vision & Mission
            </span>
          </div>

          <div className="max-w-4xl">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-orange-400"></div>

              <span className="uppercase tracking-[0.25em] text-sm text-orange-300 font-semibold">
                Vision & Mission
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] text-white mb-8">
              Building access,
              <br />
              dignity and
              <br />
              opportunity.
            </h1>

            <p className="text-lg md:text-2xl text-white/75 leading-relaxed max-w-3xl">
              Our vision and mission guide every institution,
              initiative, and decision—ensuring education and
              healthcare remain accessible to underserved
              communities across Vidarbha.
            </p>

          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ================= VISION ================= */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-sm">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-orange-400"></div>

              <span className="uppercase tracking-[0.22em] text-sm text-orange-500 font-semibold">
                Our Vision
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-[#0f172a] leading-tight mb-8">
              An equitable and inclusive future.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              An equitable and inclusive society where access
              to quality education and healthcare is a
              fundamental right—not determined by geography
              or circumstance.
            </p>

            <div className="space-y-6 border-t border-gray-100 pt-8">

              <div className="flex gap-4">
                <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#12397f] flex-shrink-0"></div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Where every child can learn and grow.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#12397f] flex-shrink-0"></div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Where every family can access dignified care.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#12397f] flex-shrink-0"></div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Where every individual has the opportunity
                  to live with purpose, self-reliance, and
                  possibility—across rural Vidarbha and beyond.
                </p>
              </div>

            </div>
          </div>

          {/* ================= MISSION ================= */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-sm">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-orange-400"></div>

              <span className="uppercase tracking-[0.22em] text-sm text-orange-500 font-semibold">
                Our Mission
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-[#0f172a] leading-tight mb-8">
              Creating long-term impact through institutions.
            </h2>

            <div className="space-y-7">

              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                >
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-orange-500 flex-shrink-0"></div>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* ================= CTA SECTION ================= */}
        <div className="mt-24">

          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#12397f] to-[#2553a6] px-8 py-14 md:px-16 md:py-16">

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left */}
              <div>

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-[1px] bg-orange-400"></div>

                  <span className="uppercase tracking-[0.22em] text-sm text-orange-300 font-semibold">
                    Continue Exploring
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
                  Discover the institutions carrying this vision forward.
                </h3>

                <p className="text-lg text-white/75 leading-relaxed max-w-2xl mb-8">
                  Explore the schools, colleges, healthcare initiatives,
                  and social programs shaping meaningful impact across
                  Vidarbha.
                </p>

                <div className="flex flex-wrap gap-4">

                  <a
                    href="/institutions"
                    className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold"
                  >
                    View Institutions
                  </a>

                  <a
                    href="/trustees"
                    className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-white/25 hover:bg-white/10 transition text-white font-semibold"
                  >
                    Meet Our Trustees
                  </a>

                </div>
              </div>

              {/* Right Stats */}
              <div className="grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-6">
                  <h4 className="text-4xl font-bold text-orange-300 mb-2">
                    16+
                  </h4>

                  <p className="text-white/80">
                    Educational Institutions
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-6">
                  <h4 className="text-4xl font-bold text-orange-300 mb-2">
                    400+
                  </h4>

                  <p className="text-white/80">
                    Educators & Faculty
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-6">
                  <h4 className="text-4xl font-bold text-orange-300 mb-2">
                    30+
                  </h4>

                  <p className="text-white/80">
                    Years of Community Impact
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-6">
                  <h4 className="text-4xl font-bold text-orange-300 mb-2">
                    Vidarbha
                  </h4>

                  <p className="text-white/80">
                    Region of Continued Service
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
