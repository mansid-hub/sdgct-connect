import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/why-us", label: "Why Us" },
  { to: "/contact", label: "Contact Us" },
];

const aboutMenu = {
  label: "About Us",
  to: "/about",
  items: [
    { label: "Founder's Journey", to: "/about/founders-journey" },
    { label: "Mission & Vision", to: "/about/mission-vision" },
    { label: "Board of Trustee", to: "/trustees" },
  ],
};

const institutionMenu = {
  label: "Institution",
  to: "/institution",
  items: [
    { label: "Schools", to: "/institution/schools" },
    { label: "Colleges", to: "/institution/colleges" },
    { label: "Healthcare", to: "/institution/hospitals" },
  ],
};

const mediaMenu = {
  label: "Media",
  to: "/media",
  items: [
    { label: "Awards & Recognition", to: "/media/awards" },
    { label: "Blogs", to: "/media/blogs" },
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
    
    {/* LEFT: Link (About page) */}
    <Link
      to="/about"
      className={cn(
        "px-4 py-2 text-sm font-medium",
        aboutActive
          ? "text-primary bg-primary/8"
          : "text-foreground/75 hover:text-primary hover:bg-secondary"
      )}
    >
      {aboutMenu.label}
    </Link>

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
              <Link
                to={institutionMenu.to}
                className="pl-4 pr-1.5 py-2 text-sm font-medium rounded-l-full"
              >
                {institutionMenu.label}
              </Link>
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
                "absolute left-0 mt-3 w-60 p-2 rounded-2xl border border-border bg-background shadow-elegant transition-smooth origin-top",
                instOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
              )}
            >
              {institutionMenu.items.map((i) => (
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
          
          {/* Media dropdown (placed right after Institution) */}
          <div
            className="relative"
            ref={mediaRef}
            onMouseEnter={() => openWithHover("media")}
            onMouseLeave={() => closeWithHover("media")}
          >
  <div
    className={cn(
      "rounded-full inline-flex items-center transition-base",
      mediaActive
        ? "text-primary bg-primary/8"
        : "text-foreground/75 hover:text-primary hover:bg-secondary"
    )}
  >
    <Link
      to={mediaMenu.to}
      className="pl-4 pr-1.5 py-2 text-sm font-medium rounded-l-full"
    >
      {mediaMenu.label}
    </Link>

    <button
      type="button"
      onClick={() => setMediaOpen((v) => !v)}
      aria-haspopup="menu"
      aria-expanded={mediaOpen}
      aria-label="Toggle Media menu"
      className="pr-3 pl-1 py-2 rounded-r-full"
    >
      <ChevronDown
        size={14}
        className={cn("transition-base", mediaOpen && "rotate-180")}
      />
    </button>
  </div>

  <div
    role="menu"
    className={cn(
      "absolute left-0 mt-3 w-60 p-2 rounded-2xl border border-border bg-background shadow-elegant transition-smooth origin-top",
      mediaOpen
        ? "opacity-100 scale-100 pointer-events-auto"
        : "opacity-0 scale-95 pointer-events-none"
    )}
  >
    {mediaMenu.items.map((i) => (
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
                {institutionMenu.items.map((i) => (
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

          <div className="animate-fade-up">
  <button
    type="button"
    onClick={() => setMobileInstOpen((v) => (v === "media" ? null : "media"))}
    className="w-full flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-display font-semibold"
  >
    Media
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
