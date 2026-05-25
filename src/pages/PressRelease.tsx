import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { FileText, Download, ExternalLink } from "lucide-react";
import coverCollege from "@/assets/press-covers/cover-college.jpg";
import coverEngineering from "@/assets/press-covers/cover-engineering.jpg";

const pdfs = [
  {
    title:
      "Press Releases of Dr. Babasaheb Ambedkar Takshashila Mahavidyalaya and Junior College, Uttam Nagar, Dist. Amravati",
    href: "/press/Press Releases of Dr. Babasaheb Ambedkar Takshashila Mahavidyalaya and Junior College, Uttam Nagar, Dist. Amravati.pdf",
    pages: 118,
    cover: coverCollege,
  },
  {
    title:
      "Press Releases of Takshashila Institute of Engineering and Technology and Research Center, Darapur, Tq. Daryapur, Dist. Amravati",
    href: "/press/Press Releases of Takshashila Institute of Engineering and Technology and Research Center, Darapur, Tq. Daryapur, Dist. Amravati.pdf",
    pages: 61,
    cover: coverEngineering,
  },
];

const PressRelease = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Resources"
        title="Press Release"
        description="Newspaper clippings and media coverage of Shri Dadasaheb Gawai Charitable Trust. Browse compiled press release documents below."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Resources", to: "/media" },
          { label: "Press Release" },
        ]}
      />

      <section className="section-y">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-accent" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Compiled Press Releases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pdfs.map((p, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft hover:shadow-card transition-base flex flex-col"
              >
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-[3/4] overflow-hidden bg-secondary/40"
                >
                  <img
                    src={p.cover}
                    alt={`Cover of ${p.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-smooth group-hover:scale-105"
                  />
                </a>
                <div className="p-5 flex flex-col gap-4 flex-1">
                  <div className="flex-1">
                    <p className="font-medium text-foreground leading-snug">
                      {p.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      PDF · {p.pages} pages
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-base px-4 py-2 text-sm font-semibold"
                    >
                      <ExternalLink size={16} /> View
                    </a>
                    <a
                      href={p.href}
                      download
                      className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary/5 transition-base px-4 py-2 text-sm font-semibold"
                    >
                      <Download size={16} /> Download
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PressRelease;
