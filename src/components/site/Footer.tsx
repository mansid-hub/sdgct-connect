import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="container py-10 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <div className="bg-background/95 inline-flex p-3 rounded-2xl">
            <Logo />
          </div>
          <p className="text-sm text-primary-foreground/75 leading-relaxed max-w-xs">
            Empowering lives across Vidarbha through education, healthcare and
            community welfare since our founding.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-base"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-base mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/75">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/trustees", label: "Our Trustees" },
              { to: "/media/press", label: "Resources" },
              { to: "/donate", label: "Donate" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent transition-base">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-base mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>
                Shri Dadasaheb Gawai Charitable Trust,<br />
                Shyam Nagar, Congress Nagar Road,<br />
                Amravati - 444606, Maharashtra
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-accent shrink-0" />
              <a href="tel:+919823496914" className="hover:text-accent">+91 98234 96914</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-accent shrink-0" />
              <a href="mailto:info@sdgct.org" className="hover:text-accent">
                info@sdgct.org
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-base mb-4">Make a Difference</h4>
          <p className="text-sm text-primary-foreground/75 mb-4">
            Your contribution helps us reach more children, families and elders
            who need it most.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 gradient-accent text-accent-foreground px-5 py-2.5 rounded-full font-semibold text-sm shadow-elegant hover:-translate-y-0.5 transition-base"
          >
            <Heart size={14} className="fill-current" /> Donate Now
          </Link>
          <p className="mt-4 text-xs text-primary-foreground/55">
            All donations are eligible for tax exemption under Section 80G.
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-primary-foreground/55">
          <p>© {new Date().getFullYear()} Shri Dadasaheb Gawai Charitable Trust. All rights reserved.</p>
          <p>Reg. No. F-XXXX/Amravati · 80G & 12A certified</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
