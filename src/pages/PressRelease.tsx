import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Calendar, FileText, Download, ExternalLink } from "lucide-react";

interface PressReleaseItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  pdfUrl?: string;
  externalUrl?: string;
}

const pressReleases: PressReleaseItem[] = [
  {
    id: 1,
    title: "Shri Dadasaheb Gawai Charitable Trust Announces New Scholarship Program for Rural Students",
    date: "May 15, 2025",
    excerpt:
      "The Trust has launched a comprehensive scholarship initiative aimed at supporting meritorious students from underprivileged backgrounds across Vidarbha, covering tuition, books, and hostel fees.",
    category: "Education",
    pdfUrl: "#",
  },
  {
    id: 2,
    title: "Annual Day Celebrations at Takshashila Institute of Pharmaceutical Education and Research",
    date: "April 22, 2025",
    excerpt:
      "The annual day event brought together students, faculty, and dignitaries to celebrate academic excellence and cultural performances, highlighting the institute's commitment to holistic education.",
    category: "Institution",
    pdfUrl: "#",
  },
  {
    id: 3,
    title: "Trust Expands Healthcare Services with New OPD Facility at Kherda Hospital",
    date: "March 10, 2025",
    excerpt:
      "A new state-of-the-art Outpatient Department has been inaugurated at the rural hospital in Kherda, Washim, extending affordable healthcare access to surrounding villages.",
    category: "Healthcare",
    pdfUrl: "#",
  },
  {
    id: 4,
    title: "National-Level Sports Achievements by Students of Dadasaheb Gawai Vidyalaya",
    date: "February 28, 2025",
    excerpt:
      "Students from the Trust's institutions have brought laurels at national-level competitions in Sikai Martial Art, Thang-Ta, and Atya-Patya, showcasing the spirit of rural talent.",
    category: "Sports",
    externalUrl: "/media/blogs",
  },
  {
    id: 5,
    title: "Shri Dadasaheb Gawai Charitable Trust Partners with CSR Initiative for School Infrastructure",
    date: "January 18, 2025",
    excerpt:
      "A new partnership has been formed with leading corporate donors to upgrade digital classrooms, science laboratories, and library facilities across five Trust-run schools.",
    category: "Partnership",
    pdfUrl: "#",
  },
  {
    id: 6,
    title: "Alumni Achievements: From Rural Classrooms to National Service",
    date: "December 05, 2024",
    excerpt:
      "The Trust celebrates the remarkable accomplishments of its alumni who have secured positions in Maharashtra Police, DRDO, and State Services, embodying the transformative power of education.",
    category: "Alumni",
    externalUrl: "/media/blogs",
  },
];

const categoryColors: Record<string, string> = {
  Education: "bg-blue-50 text-blue-700",
  Institution: "bg-emerald-50 text-emerald-700",
  Healthcare: "bg-rose-50 text-rose-700",
  Sports: "bg-amber-50 text-amber-700",
  Partnership: "bg-violet-50 text-violet-700",
  Alumni: "bg-teal-50 text-teal-700",
};

const PressRelease = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Resources"
        title="Press Release"
        description="Official announcements, news, and updates from Shri Dadasaheb Gawai Charitable Trust."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Resources", to: "/media" },
          { label: "Press Release" },
        ]}
      />

      <section className="section-y">
        <div className="container">
          {/* Stats / intro bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Total Releases", value: `${pressReleases.length}` },
              { label: "Categories", value: `${Object.keys(categoryColors).length}` },
              { label: "Latest Update", value: pressReleases[0]?.date || "—" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border/60 rounded-2xl p-5 shadow-soft"
              >
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Press release list */}
          <div className="space-y-6">
            {pressReleases.map((item) => (
              <article
                key={item.id}
                className="group bg-card border border-border/60 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-base"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        categoryColors[item.category] || "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={13} />
                      {item.date}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground leading-snug group-hover:text-primary transition-base">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {item.pdfUrl && (
                      <a
                        href={item.pdfUrl}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium bg-primary/8 text-primary hover:bg-primary hover:text-primary-foreground transition-base"
                      >
                        <FileText size={15} />
                        Read Full Release
                        <Download size={14} />
                      </a>
                    )}
                    {item.externalUrl && (
                      <a
                        href={item.externalUrl}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-base"
                      >
                        <ExternalLink size={15} />
                        Read More
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </a>

          {/* Contact note */}
          <div className="mt-12 bg-accent-soft/60 border border-accent/20 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div>
                <h3 className="font-display font-bold text-foreground text-lg">
                  For media inquiries
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Journalists and media professionals can reach out for interviews, photo requests, and official statements.
                </p>
              </div>
              <a
                href="mailto:sdgct1991@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-primary text-primary-foreground font-semibold text-sm shadow-elegant hover:-translate-y-0.5 transition-base shrink-0"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PressRelease;
