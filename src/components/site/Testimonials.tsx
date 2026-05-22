import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

import omprakashImg from "@/assets/success-omprakash-jambekar.jpg";
import pallaviImg from "@/assets/pallavi-sadanshiv.jpeg";
import atishImg from "@/assets/success-atish-tayde.png";
import bhaktiImg from "@/assets/bhakti-chaudhary-profile.jpg";

const stories = [
  {
    slug: "omprakash-jambekar-agriculture-officer",
    name: "Mr. Omprakash Harilal Jambekar",
    role: "Agricultural Assistant Officer, CICR Nagpur",
    image: omprakashImg,
    objectPosition: "object-top",
    quote:
      "From a remote village in Dharni Ghat to serving the nation as an Agricultural Assistant Officer — a story of resilience and hope.",
  },
  {
    slug: "pallavi-sadanshiv-psi",
    name: "Ms. Pallavi A. Sadanshiv",
    role: "Police Sub-Inspector, Maharashtra Police",
    image: pallaviImg,
    objectPosition: "object-[center_20%]",
    quote:
      "Through self-study and unwavering determination, Pallavi cleared the MPSC and became a Police Sub-Inspector.",
  },
  {
    slug: "atish-tayde-drdo",
    name: "Mr. Atish Tayde",
    role: "Scientist, DRDO",
    image: atishImg,
    objectPosition: "object-top",
    quote:
      "From a humble rural background to serving the nation as a DRDO Scientist — a journey of discipline and dedication.",
  },
  {
    slug: "bhakti-chaudhary-sepak-takraw",
    name: "Ms. Bhakti Gajanan Chaudhary",
    role: "National Silver Medalist, Sepak Takraw",
    image: bhaktiImg,
    objectPosition: "object-top",
    quote:
      "Honored with the Dr. Punjabrao Deshmukh Krida Award — Bhakti's perseverance turned dreams into reality.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-8 sm:py-10 bg-secondary/40">
      <div className="container">
        <SectionHeader
          eyebrow="Voices of Impact"
          title="Success stories of our students"
          className="max-w-4xl [&_h2]:whitespace-nowrap"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((s) => (
            <Link
              key={s.slug}
              to={`/media/blogs/${s.slug}`}
              className="group bg-card rounded-3xl overflow-hidden shadow-soft border border-border/60 flex flex-col transition-base hover:-translate-y-1 hover:shadow-card"
            >
              <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className={`w-full h-full object-cover ${s.objectPosition} transition-base group-hover:scale-105`}
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="font-semibold text-foreground">{s.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.role}</div>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed line-clamp-4">
                  {s.quote}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            to="/media/blogs"
            aria-label="View all success stories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            View all success stories
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
