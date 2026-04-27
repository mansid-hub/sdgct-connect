import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  to?: string;
}

const Breadcrumbs = ({ items }: { items: Crumb[] }) => {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.to && !last ? (
                <Link to={item.to} className="hover:text-primary transition-base">
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "text-foreground font-medium" : ""}>{item.label}</span>
              )}
              {!last && <ChevronRight size={14} className="text-muted-foreground/60" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;