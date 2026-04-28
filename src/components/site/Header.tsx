import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
];

const aboutMenu = {
  label: "About Us",
  to: "/about",
  items: [
    { label: "About the Trust", to: "/about" },
    { label: "Trustees", to: "/trustees" },
  ],
};

const institutionMenu = {
  label: "Institution",
  to: "/institution",
  groups: [
    {
      label: "Schools",
      to: "/institution/schools",
      items: [
        { label: "Granted Schools", to: "/institution/schools/granted-schools" },
        { label: "Non-Granted Schools", to: "/institution/schools/non-granted-schools" },
      ],
    },
    {
      label: "Colleges",
      to: "/institution/colleges",
      items: [
        { label: "Granted Colleges", to: "/institution/colleges/granted-colleges" },
        { label: "Non-Granted Colleges", to: "/institution/colleges/non-granted-colleges" },
        { label: "Granted Junior Colleges", to: "/institution/colleges/granted-junior-colleges" },
        { label: "Technical Colleges", to: "/institution/colleges/technical-colleges" },
        { label: "Polytechnics", to: "/institution/colleges/polytechnics" },
        { label: "ITI", to: "/institution/colleges/iti" },
      ],
    },
  ],
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [instOpen, setInstOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileInstOpen, setMobileInstOpen] = useState<string | null>(null);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const instRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setInstOpen(false);
    setAboutOpen(false);
    setMobileInstOpen(null);
    setMobileAboutOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!instOpen) return;
    const onClick = (e: MouseEvent) => {
      if (instRef.current && !instRef.current.contains(e.target as Node)) setInstOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setInstOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [instOpen]);

  useEffect(() => {
    if (!aboutOpen) return;
    const onClick = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAboutOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [aboutOpen]);

  const instActive = location.pathname.startsWith("/institution");
  const aboutActive =
    location.pathname === "/about" || location.pathname.startsWith("/trustees");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-base",
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-soft"
          : "bg-background/60 backdrop-blur-sm"
      )}
    >
      <div className="container flex items-center justify-between h-16 sm:h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {/* Home */}
          <NavLink
            key="/"
            to="/"
            end
            className={({ isActive }) =>
              cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-base",
                isActive
                  ? "text-primary bg-primary/8"
                  : "text-foreground/75 hover:text-primary hover:bg-secondary"
              )
            }
          >
            Home
          </NavLink>

          {/* About Us dropdown */}
          <div className="relative" ref={aboutRef}>
            <button
              type="button"
              onClick={() => setAboutOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={aboutOpen}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-base inline-flex items-center gap-1.5",
                aboutActive
                  ? "text-primary bg-primary/8"
                  : "text-foreground/75 hover:text-primary hover:bg-secondary"
              )}
            >
              {aboutMenu.label}
              <ChevronDown size={14} className={cn("transition-base", aboutOpen && "rotate-180")} />
            </button>
            <div
              role="menu"
              className={cn(
                "absolute left-0 mt-3 w-60 p-2 rounded-2xl border border-border bg-background shadow-elegant transition-smooth origin-top",
                aboutOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
              )}
            >
              {aboutMenu.items.map((i) => (
                <Link
                  key={i.to}
                  to={i.to}
                  className="block px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-secondary transition-base"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Institution dropdown (placed right after About Us) */}
          <div className="relative" ref={instRef}>
            <button
              type="button"
              onClick={() => setInstOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={instOpen}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-base inline-flex items-center gap-1.5",
                instActive
                  ? "text-primary bg-primary/8"
                  : "text-foreground/75 hover:text-primary hover:bg-secondary"
              )}
            >
              {institutionMenu.label}
              <ChevronDown size={14} className={cn("transition-base", instOpen && "rotate-180")} />
            </button>

            <div
              role="menu"
              className={cn(
                "absolute left-0 mt-3 w-[36rem] max-w-[calc(100vw-2rem)] grid grid-cols-2 gap-1 p-3 rounded-2xl border border-border bg-background shadow-elegant transition-smooth origin-top",
                instOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
              )}
            >
              {institutionMenu.groups.map((g) => (
                <div key={g.to} className="p-2">
                  <Link
                    to={g.to}
                    className="block px-3 py-2 rounded-lg text-xs font-semibold tracking-[0.18em] uppercase text-accent hover:bg-secondary"
                  >
                    {g.label}
                  </Link>
                  <div className="mt-1 flex flex-col">
                    {g.items.map((i) => (
                      <Link
                        key={i.to}
                        to={i.to}
                        className="px-3 py-2 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-secondary transition-base"
                      >
                        {i.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Remaining simple links */}
          {links.filter((l) => l.to !== "/").map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-base",
                  isActive
                    ? "text-primary bg-primary/8"
                    : "text-foreground/75 hover:text-primary hover:bg-secondary"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="donate" size="default" className="hidden sm:inline-flex">
            <Link to="/donate">
              <Heart className="fill-current" />
              Donate
            </Link>
          </Button>
          <Button asChild variant="donate" size="sm" className="sm:hidden">
            <Link to="/donate" aria-label="Donate">
              <Heart className="fill-current" />
              Donate
            </Link>
          </Button>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-primary hover:bg-secondary transition-base"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-background z-40 transition-smooth overflow-y-auto",
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="container flex flex-col py-8 gap-1">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              style={{ animationDelay: `${i * 60}ms` }}
              className={({ isActive }) =>
                cn(
                  "px-5 py-4 rounded-2xl text-lg font-display font-semibold transition-base animate-fade-up",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}

          {/* Mobile Institution accordion */}
          <div className="animate-fade-up" style={{ animationDelay: `${links.length * 60}ms` }}>
            <button
              type="button"
              onClick={() => setMobileInstOpen((v) => (v === "root" ? null : "root"))}
              className={cn(
                "w-full flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-display font-semibold transition-base",
                instActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
              )}
              aria-expanded={mobileInstOpen === "root"}
            >
              Institution
              <ChevronDown
                size={18}
                className={cn("transition-base", mobileInstOpen === "root" && "rotate-180")}
              />
            </button>
            {mobileInstOpen === "root" && (
              <div className="mt-1 ml-2 pl-3 border-l-2 border-border/60 flex flex-col gap-1">
                <Link
                  to="/institution"
                  className="px-4 py-3 rounded-xl text-base font-medium text-foreground/80 hover:bg-secondary hover:text-primary transition-base"
                >
                  Overview
                </Link>
                {institutionMenu.groups.map((g) => {
                  const key = g.to;
                  const sub = mobileInstOpen === key;
                  return (
                    <div key={g.to}>
                      <button
                        type="button"
                        onClick={() => setMobileInstOpen(sub ? "root" : key)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-foreground hover:bg-secondary transition-base"
                        aria-expanded={sub}
                      >
                        {g.label}
                        <ChevronDown
                          size={16}
                          className={cn("transition-base", sub && "rotate-180")}
                        />
                      </button>
                      {sub && (
                        <div className="ml-3 pl-3 border-l border-border/60 flex flex-col">
                          <Link
                            to={g.to}
                            className="px-4 py-2.5 rounded-lg text-sm text-accent font-semibold hover:bg-secondary"
                          >
                            All {g.label}
                          </Link>
                          {g.items.map((i) => (
                            <Link
                              key={i.to}
                              to={i.to}
                              className="px-4 py-2.5 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-secondary transition-base"
                            >
                              {i.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <Button asChild variant="donate" size="lg" className="mt-6 w-full">
            <Link to="/donate">
              <Heart className="fill-current" /> Donate Now
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
