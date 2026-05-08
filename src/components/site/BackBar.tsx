import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") return null;

  return (
    <div className="border-b border-border/40 bg-secondary/20">
      <div className="container mx-auto px-4 py-2.5">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-base"
          aria-label="Go back"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>
    </div>
  );
};

export default BackBar;
