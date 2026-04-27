import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";
import edu from "@/assets/initiative-education.jpg";
import women from "@/assets/initiative-women.jpg";
import food from "@/assets/initiative-food.jpg";

const posts = [
  { image: b1, category: "Education", date: "Apr 18, 2026", read: "5 min", title: "Opening our 14th rural learning centre in Yavatmal", excerpt: "How a small village school became a model for digital learning across the district." },
  { image: edu, category: "Scholarships", date: "Mar 30, 2026", read: "4 min", title: "Meet the 1,200 students who received scholarships this year", excerpt: "Stories of grit, family sacrifice and the difference one cheque can make." },
  { image: b2, category: "Reflection", date: "Mar 14, 2026", read: "6 min", title: "Why transparency is our greatest competitive advantage", excerpt: "An honest look at how we report, audit and publish every rupee that comes through." },
  { image: women, category: "Empowerment", date: "Feb 22, 2026", read: "5 min", title: "From sewing class to her own boutique: Sunita's story", excerpt: "A graduate of our women's vocational centre on building independence." },
  { image: b3, category: "Community", date: "Feb 5, 2026", read: "3 min", title: "Annual day: gratitude, music and a thousand smiles", excerpt: "Photos and reflections from our most joyful day of the year." },
  { image: food, category: "Welfare", date: "Jan 12, 2026", read: "4 min", title: "Inside our daily meals programme for elderly residents", excerpt: "How our volunteers prepare and deliver 600 hot meals every single day." },
];

const Blog = () => {
  const [feature, ...rest] = posts;
  return (
    <Layout>
      <PageHeader
        eyebrow="Blog & Stories"
        title="News, stories and reflections from the field"
        description="Updates from the people, places and programmes that make up our work."
        crumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container">
          {/* Featured */}
          <a href="#" className="group grid lg:grid-cols-2 gap-8 lg:gap-12 bg-card rounded-3xl overflow-hidden border border-border/60 shadow-soft hover:shadow-card transition-smooth">
            <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
              <img src={feature.image} alt={feature.title} loading="lazy" width={1024} height={640} className="h-full w-full object-cover group-hover:scale-105 transition-smooth" />
            </div>
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded-full bg-accent/15 text-accent font-semibold uppercase tracking-wider">{feature.category}</span>
                <span className="text-muted-foreground inline-flex items-center gap-1.5"><Calendar size={12} /> {feature.date}</span>
                <span className="text-muted-foreground inline-flex items-center gap-1.5"><Clock size={12} /> {feature.read} read</span>
              </div>
              <h2 className="mt-5 font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground text-balance group-hover:text-primary transition-base">
                {feature.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{feature.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary group-hover:gap-3 transition-base">
                Read article <ArrowUpRight size={16} />
              </span>
            </div>
          </a>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <a key={i} href="#" className="group bg-card rounded-3xl overflow-hidden border border-border/60 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" width={1024} height={640} className="h-full w-full object-cover group-hover:scale-110 transition-smooth" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-secondary text-primary font-semibold uppercase tracking-wider">{p.category}</span>
                    <span className="text-muted-foreground">{p.date}</span>
                  </div>
                  <h3 className="mt-4 font-display font-bold text-lg text-foreground group-hover:text-primary transition-base text-balance">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read more <ArrowUpRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;