import { useMemo, useState } from "react";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { GraduationCap, HeartPulse, Sparkles, Utensils, Heart, Shield, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const causes = [
  { id: "education", label: "Education & Scholarships", icon: GraduationCap, desc: "Books, tuition & mentorship for students." },
  { id: "health", label: "Healthcare Camps", icon: HeartPulse, desc: "Mobile clinics & medicine for villages." },
  { id: "women", label: "Women Empowerment", icon: Sparkles, desc: "Vocational training and micro-grants." },
  { id: "food", label: "Food & Welfare", icon: Utensils, desc: "Daily meals for elders and families." },
];

const presets = [500, 1500, 5000, 10000, 25000];

const donorSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
});

const Donate = () => {
  const { toast } = useToast();
  const [cause, setCause] = useState("education");
  const [amount, setAmount] = useState<number>(1500);
  const [custom, setCustom] = useState("");
  const [donor, setDonor] = useState({ fullName: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const finalAmount = useMemo(() => {
    const c = parseInt(custom, 10);
    return Number.isFinite(c) && c > 0 ? c : amount;
  }, [custom, amount]);

  const causeLabel = causes.find((c) => c.id === cause)?.label ?? "";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = donorSchema.safeParse(donor);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.errors.forEach((er) => { errs[er.path[0] as string] = er.message; });
      setErrors(errs);
      return;
    }
    if (finalAmount < 100) {
      toast({ title: "Amount too small", description: "Minimum donation is ₹100." });
      return;
    }
    setErrors({});
    toast({
      title: "Thank you!",
      description: `₹${finalAmount.toLocaleString()} towards ${causeLabel}. Payment integration coming soon.`,
    });
  };

  return (
    <Layout>
      <PageHeader
        eyebrow="Donate"
        title="Make a donation that lasts a lifetime"
        description="Choose a cause, an amount and a payment method. Every contribution receives a tax-exempt receipt under Section 80G."
        crumbs={[{ label: "Home", to: "/" }, { label: "Donate" }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container grid lg:grid-cols-[1fr_380px] gap-10">
          <form onSubmit={submit} className="space-y-10">
            {/* Cause */}
            <div className="bg-card rounded-3xl p-7 sm:p-9 border border-border/60 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-9 w-9 rounded-full gradient-primary text-primary-foreground font-bold flex items-center justify-center">1</span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">Choose a cause</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {causes.map((c) => {
                  const active = cause === c.id;
                  return (
                    <label
                      key={c.id}
                      className={cn(
                        "cursor-pointer rounded-2xl border-2 p-5 flex gap-4 transition-base",
                        active
                          ? "border-primary bg-primary/5 shadow-soft"
                          : "border-border bg-background hover:border-primary/40"
                      )}
                    >
                      <input type="radio" name="cause" value={c.id} checked={active} onChange={() => setCause(c.id)} className="sr-only" />
                      <div className={cn("h-11 w-11 rounded-xl flex items-center justify-center shrink-0", active ? "gradient-primary text-primary-foreground" : "bg-secondary text-primary")}>
                        <c.icon size={20} />
                      </div>
                      <div>
                        <div className="font-display font-semibold text-foreground">{c.label}</div>
                        <div className="text-sm text-muted-foreground mt-1">{c.desc}</div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Amount */}
            <div className="bg-card rounded-3xl p-7 sm:p-9 border border-border/60 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-9 w-9 rounded-full gradient-primary text-primary-foreground font-bold flex items-center justify-center">2</span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">Select amount</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {presets.map((p) => {
                  const active = !custom && amount === p;
                  return (
                    <button
                      type="button"
                      key={p}
                      onClick={() => { setAmount(p); setCustom(""); }}
                      className={cn(
                        "h-14 rounded-2xl font-display font-bold text-lg border-2 transition-base",
                        active
                          ? "border-primary bg-primary text-primary-foreground shadow-soft"
                          : "border-border bg-background text-foreground hover:border-primary/40"
                      )}
                    >
                      ₹{p.toLocaleString()}
                    </button>
                  );
                })}
              </div>
              <div className="mt-5">
                <Label htmlFor="custom">Or enter custom amount (₹)</Label>
                <Input id="custom" inputMode="numeric" placeholder="e.g. 2500" value={custom} onChange={(e) => setCustom(e.target.value.replace(/[^\d]/g, "").slice(0, 7))} className="mt-2 h-12 rounded-xl" />
              </div>
            </div>

            {/* Donor */}
            <div className="bg-card rounded-3xl p-7 sm:p-9 border border-border/60 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-9 w-9 rounded-full gradient-primary text-primary-foreground font-bold flex items-center justify-center">3</span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">Your details</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <Label htmlFor="fullName">Full name</Label>
                  <Input id="fullName" className="mt-2 h-12 rounded-xl" value={donor.fullName} onChange={(e) => setDonor({ ...donor, fullName: e.target.value })} maxLength={100} />
                  {errors.fullName && <p className="mt-1.5 text-xs text-destructive">{errors.fullName}</p>}
                </div>
                <div>
                  <Label htmlFor="emailD">Email</Label>
                  <Input id="emailD" type="email" className="mt-2 h-12 rounded-xl" value={donor.email} onChange={(e) => setDonor({ ...donor, email: e.target.value })} maxLength={255} />
                  {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" className="mt-2 h-12 rounded-xl" value={donor.phone} onChange={(e) => setDonor({ ...donor, phone: e.target.value.replace(/[^\d+\s]/g, "").slice(0, 20) })} />
                  {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-card rounded-3xl p-7 sm:p-9 border border-border/60 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-9 w-9 rounded-full gradient-primary text-primary-foreground font-bold flex items-center justify-center">4</span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">Payment</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {["UPI", "Razorpay", "Stripe"].map((p) => (
                  <div key={p} className="rounded-2xl border-2 border-border p-5 text-center font-display font-semibold text-foreground hover:border-primary/40 transition-base">
                    {p}
                  </div>
                ))}
              </div>
              <Button type="submit" variant="donate" size="xl" className="mt-7 w-full">
                <Heart className="fill-current" /> Donate ₹{finalAmount.toLocaleString()} now
              </Button>
              <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                <Shield size={14} className="text-primary shrink-0 mt-0.5" />
                <span>Your payment is processed securely. You will receive a tax-exempt 80G receipt by email.</span>
              </div>
            </div>
          </form>

          {/* Sticky summary */}
          <aside>
            <div className="lg:sticky lg:top-28 space-y-4">
              <div className="bg-card rounded-3xl p-7 border border-border/60 shadow-card">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Donation summary</div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Cause</span><span className="font-semibold text-foreground text-right max-w-[60%]">{causeLabel}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Amount</span><span className="font-semibold text-foreground">₹{finalAmount.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Tax benefit (50%)</span><span className="font-semibold text-foreground">₹{Math.floor(finalAmount * 0.5).toLocaleString()}</span></div>
                </div>
                <div className="mt-5 pt-5 border-t border-border/60 flex justify-between items-center">
                  <span className="font-display font-semibold text-foreground">You pay</span>
                  <span className="font-display font-bold text-2xl text-primary">₹{finalAmount.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-secondary/60 rounded-3xl p-6 border border-border/60">
                <div className="font-display font-semibold text-foreground mb-3">Why donate to us</div>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {[
                    "Registered 80G & 12A certified trust",
                    "Independently audited annually",
                    "Quarterly impact reports to all donors",
                    "100% of your donation reaches the cause",
                  ].map((b, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;