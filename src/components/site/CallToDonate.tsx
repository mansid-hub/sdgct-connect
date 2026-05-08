import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const grants = [
  { v: "₹ 500", l: "Books for a child", amount: 500 },
  { v: "₹ 1,500", l: "Medical kit", amount: 1500 },
  { v: "₹ 5,000", l: "Skill training", amount: 5000 },
  { v: "₹ 25,000", l: "Full scholarship", amount: 25000 },
];

const CallToDonate = ({ hideLastTile = false }: { hideLastTile?: boolean }) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl gradient-primary text-primary-foreground p-8 sm:p-14 lg:p-20 shadow-elegant">
          <div
            className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl"
            aria-hidden
          />

          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                <span className="h-px w-6 bg-accent" />
                Be the change
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Your contribution today writes someone's tomorrow.
              </h2>

              <p className="mt-5 text-primary-foreground/80 text-base sm:text-lg leading-relaxed max-w-xl">
                Every donation — large or small — funds a meal, a textbook, a
                medical check-up. Together we can keep this work going.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="donate" size="xl">
                  <Link to="/donate">
                    <Heart className="fill-current" />
                    Donate Now
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20 hover:border-primary-foreground/60"
                >
                  <Link to="/contact">
                    Volunteer with us
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Donation Tiles */}
            <div className="grid grid-cols-2 gap-4">
              {grants.map((g, i) => (
                <Link
                  key={i}
                  to={`/donate?amount=${g.amount}`}
                  className="group rounded-2xl bg-background/10 backdrop-blur border border-primary-foreground/15 p-5 hover:bg-background/20 hover:border-primary-foreground/40 transition-base"
                >
                  <div className="font-display font-bold text-2xl text-accent group-hover:scale-105 transition-base origin-left">
                    {g.v}
                  </div>

                  <div className="text-sm text-primary-foreground/80 mt-1">
                    {g.l}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToDonate;
