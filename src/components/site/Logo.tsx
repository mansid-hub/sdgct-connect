import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

interface LogoProps {
  variant?: "default" | "light";
  compact?: boolean;
}

const Logo = ({ variant = "default", compact = false }: LogoProps) => {
  const textColor = variant === "light" ? "text-primary-foreground" : "text-primary";
  const subColor = variant === "light" ? "text-primary-foreground/70" : "text-muted-foreground";
  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="Home">
      <img
        src={logo}
        alt="Shri Dadasaheb Gawai Charitable Trust crest"
        className="h-11 w-11 sm:h-12 sm:w-12 object-contain transition-base group-hover:scale-105"
        width={48}
        height={48}
      />
      {!compact && (
        <div className="flex flex-col leading-tight">
          <span className={`font-display font-bold text-sm sm:text-base ${textColor}`}>
            Dadasaheb Gawai
          </span>
          <span className={`text-[10px] sm:text-xs uppercase tracking-wider ${subColor}`}>
            Charitable Trust · Amravati
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;