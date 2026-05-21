import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import { allInstitutions } from "@/data/institutions";

const links = [
  { to: "/", label: "Home" },
  { to: "/contact", label: "Contact Us" },
];

const aboutMenu = {
  label: "About Us",
  to: "/about",
  items: [
    { label: "Our Story", to: "/about" },
    { label: "Founder's Journey", to: "/about/founders-journey" },
    { label: "Mission & Vision", to: "/about/mission-vision" },
    { label: "Board of Trustees", to: "/trustees" },
  ],
};

const institutionMenu = {
  label: "Institutions",
  to: "/institution",
  items: [
    { label: "Schools", to: "/institution/schools", parent: "schools" as const },
    { label: "Colleges", to: "/institution/colleges", parent: "colleges" as const },
    { label: "Healthcare", to: "/institution/hospitals", parent: "hospitals" as const },
  ],
};

const mediaMenu = {
  label: "Resources",
  to: "/media",
  items: [
    { label: "Awards & Recognition", to: "/media/awards" },
    { label: "Success Stories", to: "/media/blogs" },
    { label: "Press Release", to: "/media/press" },
  ],
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [instOpen, setInstOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [mobileInstOpen, setMobileInstOpen] = useState<string | null>(null);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileInstChild, setMobileInstChild] = useState<string | null>(null);
  const [instHover, setInstHover] = useState<string | null>(null);
  const instRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const hoverTimers = useRef<{ about?: number; inst?: number; media?: number }>({});
  const location = useLocation();

  const HOVER_DELAY = 180;
  const openWithHover = (key: "about" | "inst" | "media") => {
    if (hoverTimers.current[key]) {
      window.clearTimeout(hoverTimers.current[key]);
      hoverTimers.current[key] = undefined;
    }
    if (key === "about") setAboutOpen(true);
    if (key === "inst") setInstOpen(true);
    if (key === "media") setMediaOpen(true);
  };
  const closeWithHover = (key: "about" | "inst" | "media") => {
    if (hoverTimers.current[key]) window.clearTimeout(hoverTimers.current[key]);
    hoverTimers.current[key] = window.setTimeout(() => {
      if (key === "about") setAboutOpen(false);
      if (key === "inst") setInstOpen(false);
      if (key === "media") setMediaOpen(false);
    }, HOVER_DELAY);
  };

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

  useEffect(() => {
  if (!mediaOpen) return;

  const onClick = (e: MouseEvent) => {
    if (mediaRef.current && !mediaRef.current.contains(e.target as Node)) {
      setMediaOpen(false);
    }
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setMediaOpen(false);
  };

  document.addEventListener("mousedown", onClick);
  document.addEventListener("keydown", onKey);

  return () => {
    document.removeEventListener("mousedown", onClick);
    document.removeEventListener("keydown", onKey);
  };
}, [mediaOpen]);

  const instActive = location.pathname.startsWith("/institution");
  const aboutActive =
    location.pathname === "/about" || location.pathname.startsWith("/trustees");
  const mediaActive = location.pathname.startsWith("/media");

  return (
    <>
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

        <nav className="hidden xl:flex items-center gap-1">
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
          <div
            className="relative"
            ref={aboutRef}
            onMouseEnter={() => openWithHover("about")}
            onMouseLeave={() => closeWithHover("about")}
          >
  <div className="flex items-center rounded-full overflow-hidden">
    
    {/* LEFT: toggle (About page inactive, opens dropdown) */}
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        setAboutOpen((v) => !v);
      }}
      className={cn(
        "px-4 py-2 text-sm font-medium",
        aboutActive
          ? "text-primary bg-primary/8"
          : "text-foreground/75 hover:text-primary hover:bg-secondary"
      )}
    >
      {aboutMenu.label}
    </button>

    {/* RIGHT: Dropdown toggle */}
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        setAboutOpen((v) => !v);
      }}
      aria-haspopup="menu"
      aria-expanded={aboutOpen}
      aria-label="Toggle About menu"
      className="px-2 py-2 hover:bg-secondary"
    >
      <ChevronDown
        size={14}
        className={cn("transition-base", aboutOpen && "rotate-180")}
      />
    </button>
  </div>

  {/* Dropdown */}
  <div
    role="menu"
    className={cn(
      "absolute left-0 mt-3 w-60 p-2 rounded-2xl border border-border bg-background shadow-elegant transition-smooth origin-top",
      aboutOpen
        ? "opacity-100 scale-100 pointer-events-auto"
        : "opacity-0 scale-95 pointer-events-none"
    )}
  >
    {aboutMenu.items.map((i) => (
      <Link
        key={i.to}
        to={i.to}
        className="block px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-secondary"
      >
        {i.label}
      </Link>
    ))}
  </div>
</div>
          {/* Institution dropdown (placed right after About Us) */}
          <div
            className="relative"
            ref={instRef}
            onMouseEnter={() => openWithHover("inst")}
            onMouseLeave={() => closeWithHover("inst")}
          >
            <div
              className={cn(
                "rounded-full inline-flex items-center transition-base",
                instActive
                  ? "text-primary bg-primary/8"
                  : "text-foreground/75 hover:text-primary hover:bg-secondary"
              )}
            >
              <button
                type="button"
                onClick={() => setInstOpen((v) => !v)}
                className="pl-4 pr-1.5 py-2 text-sm font-medium rounded-l-full"
              >
                {institutionMenu.label}
              </button>
              <button
                type="button"
                onClick={() => setInstOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={instOpen}
                aria-label="Toggle Institution menu"
                className="pr-3 pl-1 py-2 rounded-r-full"
              >
                <ChevronDown size={14} className={cn("transition-base", instOpen && "rotate-180")} />
              </button>
            </div>

            <div
              role="menu"
              className={cn(
                "absolute left-0 mt-3 w-64 p-2 rounded-2xl border border-border bg-background shadow-elegant transition-smooth origin-top",
                instOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
              )}
            >
              <Link
                to="/institution"
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-secondary transition-base"
              >
                <span>Overview</span>
              </Link>
              {institutionMenu.items.map((i) => {
                const children = allInstitutions(i.parent);
                return (
                  <div
                    key={i.to}
                    className="relative"
                    onMouseEnter={() => setInstHover(i.parent)}
                    onMouseLeave={() => setInstHover((p) => (p === i.parent ? null : p))}
                  >
                    <Link
                      to={i.to}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-secondary transition-base"
                    >
                      <span>{i.label}</span>
                      <ChevronDown size={14} className="-rotate-90 opacity-60" />
                    </Link>
                    {children.length > 0 && (
                      <div
                        className={cn(
                          "absolute top-0 left-full ml-1 w-80 max-h-[70vh] overflow-y-auto p-2 rounded-2xl border border-border bg-background shadow-elegant transition-smooth origin-top-left",
                          instHover === i.parent
                            ? "opacity-100 scale-100 pointer-events-auto"
                            : "opacity-0 scale-95 pointer-events-none"
                        )}
                      >
                        {children.map((c) => (
                          <Link
                            key={c.parent + c.slug}
                            to={`/institution/${c.parent}/${c.slug}`}
                            className="block px-3 py-2 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-secondary transition-base"
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Success Stories link */}
          <NavLink
            to="/media/blogs"
            className={({ isActive }) =>
              cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-base",
                isActive
                  ? "text-primary bg-primary/8"
                  : "text-foreground/75 hover:text-primary hover:bg-secondary"
              )
            }
          >
            Success Stories
          </NavLink>

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
            className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-primary hover:bg-secondary transition-base"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile menu */}
      <div
  className={cn(
    "xl:hidden fixed left-0 right-0 bottom-0 top-16 sm:top-20 bg-white z-[999] overflow-y-auto transition-transform duration-300",
    open ? "translate-x-0" : "translate-x-full pointer-events-none"
  )}
>
        <nav className="container flex flex-col py-8 gap-1 text-black">          
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              cn(
                "px-5 py-4 rounded-2xl text-lg font-display font-semibold transition-base animate-fade-up",
                isActive ? "bg-primary text-primary-foreground" : "text-black hover:bg-secondary"
              )
            }
          >
            Home
          </NavLink>

          {/* Mobile About Us accordion */}
          <div className="animate-fade-up">
            <button
              type="button"
              onClick={() => setMobileAboutOpen((v) => !v)}
              className={cn(
                "w-full flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-display font-semibold transition-base",
                aboutActive ? "bg-primary text-primary-foreground" : "text-black hover:bg-secondary"
              )}
              aria-expanded={mobileAboutOpen}
            >
              About Us
              <ChevronDown
                size={18}
                className={cn("transition-base", mobileAboutOpen && "rotate-180")}
              />
            </button>
            {mobileAboutOpen && (
              <div className="mt-1 ml-2 pl-3 border-l-2 border-border/60 flex flex-col gap-1">
                {aboutMenu.items.map((i) => (
                  <Link
                    key={i.to}
                    to={i.to}
                    className="px-4 py-3 rounded-xl text-base font-medium text-black/80 hover:bg-secondary hover:text-primary transition-base"
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Institution accordion */}
          <div className="animate-fade-up">
            <button
              type="button"
              onClick={() => setMobileInstOpen((v) => (v === "root" ? null : "root"))}
              className={cn(
                "w-full flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-display font-semibold transition-base",
                instActive ? "bg-primary text-primary-foreground" : "text-black hover:bg-secondary"
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
                  className="px-4 py-3 rounded-xl text-base font-medium text-black/80 hover:bg-secondary hover:text-primary transition-base"
                >
                  Overview
                </Link>
                {institutionMenu.items.map((i) => {
                  const children = allInstitutions(i.parent);
                  const open = mobileInstChild === i.parent;
                  return (
                    <div key={i.to}>
                      <div className="flex items-center">
                        <Link
                          to={i.to}
                          className="flex-1 px-4 py-3 rounded-xl text-base font-medium text-black/80 hover:bg-secondary hover:text-primary transition-base"
                        >
                          {i.label}
                        </Link>
                        {children.length > 0 && (
                          <button
                            type="button"
                            aria-label={`Toggle ${i.label} list`}
                            onClick={() =>
                              setMobileInstChild((v) => (v === i.parent ? null : i.parent))
                            }
                            className="px-3 py-3 text-black/70 hover:text-primary"
                          >
                            <ChevronDown
                              size={16}
                              className={cn("transition-base", open && "rotate-180")}
                            />
                          </button>
                        )}
                      </div>
                      {open && children.length > 0 && (
                        <div className="mt-1 ml-3 pl-3 border-l-2 border-border/60 flex flex-col">
                          {children.map((c) => (
                            <Link
                              key={c.parent + c.slug}
                              to={`/institution/${c.parent}/${c.slug}`}
                              className="px-3 py-2 rounded-lg text-sm text-black/75 hover:bg-secondary hover:text-primary transition-base"
                            >
                              {c.name}
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

          <div className="animate-fade-up">
  <button
    type="button"
    onClick={() => setMobileInstOpen((v) => (v === "media" ? null : "media"))}
    className="w-full flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-display font-semibold"
  >
    Resources
    <ChevronDown
      size={18}
      className={cn(
        "transition-base",
        mobileInstOpen === "media" && "rotate-180"
      )}
    />
  </button>

  {mobileInstOpen === "media" && (
    <div className="mt-1 ml-2 pl-3 border-l-2 border-border/60 flex flex-col gap-1">
      {mediaMenu.items.map((i) => (
        <Link
          key={i.to}
          to={i.to}
          className="px-4 py-3 rounded-xl text-base font-medium text-black/80 hover:bg-secondary hover:text-primary"
        >
          {i.label}
        </Link>
      ))}
    </div>
  )}
</div>
          {/* Remaining simple links (Blog, Contact) */}
          {links.filter((l) => l.to !== "/").map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "px-5 py-4 rounded-2xl text-lg font-display font-semibold transition-base animate-fade-up",
                  isActive ? "bg-primary text-primary-foreground" : "text-black hover:bg-secondary"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}

          <Button asChild variant="donate" size="lg" className="mt-6 w-full">
            <Link to="/donate">
              <Heart className="fill-current" /> Donate Now
            </Link>
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Header;
