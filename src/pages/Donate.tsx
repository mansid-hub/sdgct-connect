import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { ShieldCheck, Lock, CheckCircle2, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const presets = [500, 1000, 5000];

type DonationType = "one-time" | "monthly";

const donorSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
});

// Placeholder handlers for future payment gateway integration.
// Developers: wire Razorpay / Stripe / backend API here.
const initiateRazorpayPayment = async (_payload: Record<string, unknown>) => {
  // TODO: integrate Razorpay
  return new Promise((r) => setTimeout(r, 600));
};

const Donate = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [donationType, setDonationType] = useState<DonationType>("one-time");
  const [amount, setAmount] = useState<number>(1000);
  const [custom, setCustom] = useState("");

  useEffect(() => {
    const a = parseInt(searchParams.get("amount") ?? "", 10);
    if (Number.isFinite(a) && a > 0) {
      if (presets.includes(a)) {
        setAmount(a);
        setCustom("");
      } else {
        setCustom(String(a));
      }
    }
  }, [searchParams]);

  const [donor, setDonor] = useState({ fullName: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [pan, setPan] = useState("");
  const [panOtpVisible, setPanOtpVisible] = useState(false);
  const [panOtp, setPanOtp] = useState("");
  const [panVerified, setPanVerified] = useState(false);

  const handleVerifyPan = () => {
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan.trim().toUpperCase())) {
      toast({ title: "Invalid PAN", description: "Please enter a valid 10-character PAN." });
      return;
    }
    setPanOtpVisible(true);
    setPanVerified(false);
    toast({ title: "OTP sent", description: "A 6-digit OTP has been sent for verification." });
  };

  const handleVerifyOtp = () => {
    if (panOtp.trim().length < 4) {
      toast({ title: "Invalid OTP", description: "Please enter the OTP you received." });
      return;
    }
    setPanVerified(true);
  };

  const finalAmount = useMemo(() => {
    const c = parseInt(custom, 10);
    return Number.isFinite(c) && c > 0 ? c : amount;
  }, [custom, amount]);

  const submit = async (e: React.FormEvent) => {
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
    setSubmitting(true);
    try {
      await initiateRazorpayPayment({
        amount: finalAmount,
        donationType,
        donor,
      });
      toast({
        title: "Thank you for your contribution.",
        description: "Payment gateway integration coming soon.",
      });
      setDonor({ fullName: "", email: "", phone: "" });
    } catch {
      toast({ title: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-10 sm:py-14 bg-gradient-to-b from-secondary/40 to-background">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-5">
              <ShieldCheck size={14} /> 80G Tax Exempt
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-foreground tracking-tight">
              Support Our Trust
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Your contribution helps to uplift rural communities.
            </p>
          </div>

          {/* Form Card */}
          <form
            onSubmit={submit}
            className="bg-card rounded-3xl p-7 sm:p-10 border border-border/60 shadow-soft space-y-4"
          >
            {/* Donation Type Toggle */}
            <div className="flex justify-center">
              <div
                role="tablist"
                aria-label="Donation type"
                className="inline-flex p-1 rounded-full bg-secondary/60 border border-border/60"
              >
                {(["one-time", "monthly"] as const).map((t) => {
                  const active = donationType === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setDonationType(t)}
                      className={cn(
                        "px-6 sm:px-8 h-11 rounded-full text-sm font-semibold transition-base",
                        active
                          ? "bg-primary text-primary-foreground shadow-soft"
                          : "bg-background/60 text-foreground hover:bg-background border border-transparent"
                      )}
                    >
                      {t === "one-time" ? "One-Time" : "Monthly"}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              {/* Name */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" className="mt-2 h-12 rounded-xl" placeholder="First Name *" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" className="mt-2 h-12 rounded-xl" placeholder="Last Name *" />
                </div>
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address">Address</Label>
                <textarea
                  id="address"
                  rows={4}
                  placeholder="Address *"
                  className="mt-2 flex w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>

              {/* City / State / Postal */}
              <div className="grid sm:grid-cols-3 gap-3">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" className="mt-2 h-12 rounded-xl" placeholder="City *" />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input id="state" className="mt-2 h-12 rounded-xl" placeholder="State *" />
                </div>
                <div>
                  <Label htmlFor="postal">Postal Code</Label>
                  <Input id="postal" className="mt-2 h-12 rounded-xl" placeholder="Postal code *" />
                </div>
              </div>

              {/* PAN + Phone */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="pan">PAN Number</Label>
                  <div className="mt-2 flex gap-2">
                    <Input
                      id="pan"
                      className="h-12 rounded-xl uppercase flex-1"
                      placeholder="PAN NUMBER *"
                      value={pan}
                      onChange={(e) => {
                        setPan(e.target.value.toUpperCase().slice(0, 10));
                        setPanVerified(false);
                        setPanOtpVisible(false);
                        setPanOtp("");
                      }}
                      disabled={panVerified}
                      maxLength={10}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="h-12 rounded-xl shrink-0"
                      onClick={handleVerifyPan}
                      disabled={panVerified || pan.length === 0}
                    >
                      Verify PAN
                    </Button>
                  </div>

                  {panOtpVisible && !panVerified && (
                    <div className="mt-3 flex flex-col sm:flex-row gap-2">
                      <Input
                        inputMode="numeric"
                        className="h-12 rounded-xl flex-1"
                        placeholder="Enter OTP"
                        value={panOtp}
                        onChange={(e) => setPanOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                        maxLength={6}
                      />
                      <Button
                        type="button"
                        variant="default"
                        className="h-12 rounded-xl shrink-0"
                        onClick={handleVerifyOtp}
                      >
                        Verify OTP
                      </Button>
                    </div>
                  )}

                  {panVerified && (
                    <div className="mt-3 flex items-center gap-2 rounded-xl border border-green-600/30 bg-green-600/10 px-3 py-2 text-sm font-medium text-green-700 dark:text-green-400">
                      <CheckCircle2 size={16} />
                      PAN Verified Successfully
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="mt-2 h-12 rounded-xl"
                    value={donor.phone}
                    onChange={(e) =>
                      setDonor({
                        ...donor,
                        phone: e.target.value.replace(/[^\d+\s]/g, "").slice(0, 20),
                      })
                    }
                    placeholder="+91 ..."
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* DOB + Email */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" className="mt-2 h-12 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-2 h-12 rounded-xl"
                    value={donor.email}
                    onChange={(e) => setDonor({ ...donor, email: e.target.value })}
                    maxLength={255}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Amount */}
              <div>
                <Label>Donation Amount (₹)</Label>
                <Input
                  inputMode="numeric"
                  className="mt-2 h-12 rounded-xl"
                  placeholder="Enter amount"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value.replace(/[^\d]/g, "").slice(0, 7))}
                />
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {presets.map((p) => {
                    const active = !custom && amount === p;
                    return (
                      <button
                        type="button"
                        key={p}
                        onClick={() => {
                          setAmount(p);
                          setCustom("");
                        }}
                        className={cn(
                          "h-11 rounded-xl font-display font-semibold border transition-base",
                          active
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-foreground hover:border-primary/40"
                        )}
                      >
                        ₹{p.toLocaleString()}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Source */}
              <div>
                <Label>How did you know about us?</Label>
                <Select>
                  <SelectTrigger className="mt-2 h-12 rounded-xl">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="friend">Friend / Family</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Donate Button */}
            <div className="pt-2">
              <Button
                type="submit"
                size="xl"
                disabled={submitting}
                className="w-full h-14 rounded-2xl text-base font-semibold shadow-elegant"
              >
                <Heart className="fill-current" />
                {submitting ? "Processing..." : `Donate Now${finalAmount ? ` · ₹${finalAmount.toLocaleString()}` : ""}`}
              </Button>

              <div className="mt-5 space-y-2 text-center">
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Lock size={12} className="text-primary" />
                  Your payment is secure and encrypted.
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck size={12} className="text-primary" />
                  80G tax exemption available for eligible donations.
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
