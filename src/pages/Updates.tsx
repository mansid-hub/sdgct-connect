import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText } from "lucide-react";
import collegeCover from "@/assets/takshashila-college-cover.jpg";
import engineeringCover from "@/assets/takshashila-engineering-cover.png";

const updates = [
  {
    title: "Press Releases of Dr. Babasaheb Ambedkar Takshashila Mahavidyalaya and Junior College",
    file: "/press/college-press-release.pdf",
    filename: "college-press-release.pdf",
    pages: 118,
    image: collegeCover,
    institution: "Dr. Babasaheb Ambedkar Takshashila Mahavidyalaya and Junior College",
  },
  {
    title: "Press Releases of Takshashila Institute of Engineering and Technology and Research Center",
    file: "/press/engineering-press-release.pdf",
    filename: "engineering-press-release.pdf",
    pages: 61,
    image: engineeringCover,
    institution: "Takshashila Institute of Engineering and Technology and Research Center",
  },
];

const Updates = () => (
  <Layout>
    <PageHeader
      eyebrow="Contact Us"
      title="Updates"
      description="Official news and press coverage from our institutions."
      crumbs={[
        { label: "Home", to: "/" },
        { label: "Contact Us", to: "/contact" },
        { label: "Updates" },
      ]}
    />

    <section className="section-y">
      <div className="container">
        <div className="mb-8 flex items-center gap-3">
          <FileText className="text-accent" aria-hidden="true" />
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Institution press releases
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {updates.map((update) => (
            <article
              key={update.filename}
              className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition-base hover:shadow-card"
            >
              <div className="aspect-[16/9] overflow-hidden bg-secondary">
                <img
                  src={update.image}
                  alt={update.institution}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex h-full flex-col gap-4 p-5">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">{update.institution}</p>
                  <h3 className="mt-2 font-display font-semibold leading-snug text-foreground">
                    {update.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">PDF · {update.pages} pages</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="sm">
                    <a href={update.file} target="_blank" rel="noopener noreferrer">
                      <ExternalLink aria-hidden="true" /> View
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href={update.file} download={update.filename}>
                      <Download aria-hidden="true" /> Download
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Updates;