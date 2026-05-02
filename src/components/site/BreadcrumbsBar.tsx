import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const LABEL_OVERRIDES: Record<string, string> = {
  "about": "About Us",
  "founders-journey": "Founder's Journey",
  "mission-vision": "Mission & Vision",
  "trustees": "Board of Trustee",
  "institution": "Institution",
  "schools": "Schools",
  "colleges": "Colleges",
  "hospitals": "Hospitals",
  "media": "Media",
  "awards": "Awards & Recognition",
  "blogs": "Blogs",
  "press": "Press Release",
  "why-us": "Why Us",
  "contact": "Contact Us",
  "donate": "Donate",
};

const prettify = (segment: string) => {
  if (LABEL_OVERRIDES[segment]) return LABEL_OVERRIDES[segment];
  try {
    segment = decodeURIComponent(segment);
  } catch {}
  return segment
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

const BreadcrumbsBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/") return null;

  const segments = location.pathname.split("/").filter(Boolean);
  const crumbs = segments.map((seg, i) => ({
    label: prettify(seg),
    to: "/" + segments.slice(0, i + 1).join("/"),
  }));

  return (
    <div className="border-b border-border/50 bg-secondary/30">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-base self-start"
          aria-label="Go back"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <nav aria-label="Breadcrumb" className="text-sm">
          <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <Link
                to="/"
                className="inline-flex items-center gap-1 hover:text-primary transition-base"
              >
                <Home size={14} />
                <span>Home</span>
              </Link>
              <ChevronRight size={14} className="text-muted-foreground/60" />
            </li>
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={c.to} className="flex items-center gap-1.5">
                  {last ? (
                    <span className="font-medium text-foreground">{c.label}</span>
                  ) : (
                    <Link to={c.to} className="hover:text-primary transition-base">
                      {c.label}
                    </Link>
                  )}
                  {!last && (
                    <ChevronRight size={14} className="text-muted-foreground/60" />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default BreadcrumbsBar;