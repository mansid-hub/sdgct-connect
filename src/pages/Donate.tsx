import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { ShieldCheck, Lock, Upload, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import qrImage from "@/assets/donation-qr.png";

const presets = [500, 1000, 5000];

type Method = "razorpay" | "stripe" | "upi";

const donorSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
});

const Donate = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
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
  const [method, setMethod] = useState<Method>("razorpay");
  const [donor, setDonor] = useState({ fullName: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const finalAmount = useMemo(() => {
    const c = parseInt(custom, 10);
    return Number.isFinite(c) && c > 0 ? c : amount;
  }, [custom, amount]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 5 * 1024 * 1024) {
      toast({ title: "File too large", description: "Please upload an image under 5 MB." });
      return;
    }
    setScreenshot(f);
  };

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
    if (method === "upi" && !screenshot) {
      toast({ title: "Screenshot required", description: "Please upload your UPI payment screenshot." });
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      // Frontend-only stub — backend integration coming soon.
      await new Promise((r) => setTimeout(r, 700));
      toast({
        title: "Thank you for your contribution.",
        description:
          method === "upi"
            ? "We've received your details. Verification may take a few hours."
            : `Redirecting you to ${method === "razorpay" ? "Razorpay" : "Stripe"}… (integration coming soon)`,
      });
      setDonor({ fullName: "", email: "", phone: "" });
      setScreenshot(null);
    } catch {
      toast({ title: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-16 sm:py-20 bg-gradient-to-b from-secondary/40 to-background">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-5">
              <ShieldCheck size={14} /> 80G Tax Exempt
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-foreground tracking-tight">
              Make a Donation
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Your contribution helps create access to education and healthcare for those who need it most.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
           {/* LEFT — Form */}
<form
  onSubmit={submit}
  className="rounded-[28px] bg-[#f7c600] space-y-6"
>
  {/* Heading */}
  <div className="text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#2f3d73]">
      50% Tax Exemption Under Section 80G*
    </h2>

    <p className="mt-2 text-sm font-medium text-[#d62828]">
      *Only Applicable for Indian Citizens
    </p>
  </div>

  {/* Frequency Toggle */}
  <div className="flex w-full max-w-md overflow-hidden rounded-xl bg-white">
    <button
      type="button"
      onClick={() => setMethod("razorpay")}
      className="flex-1 bg-[#e32727] py-4 text-lg font-semibold text-white"
    >
      One-time
    </button>

    <button
      type="button"
      className="flex-1 bg-white py-4 text-lg font-semibold text-black"
    >
      Monthly
    </button>
  </div>

  {/* Donation Amounts */}
  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
            "flex h-16 items-center justify-center rounded-lg border text-lg font-semibold transition-all",
            active
              ? "border-[#d62828] bg-[#d62828] text-white"
              : "border-gray-300 bg-white text-gray-700"
          )}
        >
          ₹ {p.toLocaleString()}
        </button>
      );
    })}

    <Input
      inputMode="numeric"
      placeholder="Min ₹ 100"
      value={custom}
      onChange={(e) =>
        setCustom(e.target.value.replace(/[^\d]/g, "").slice(0, 7))
      }
      className="h-16 border-gray-300 bg-white text-base"
    />
  </div>

  {/* Name */}
  <div className="grid gap-4 md:grid-cols-2">
    <Input
      placeholder="First Name *"
      className="h-16 bg-[#f3f3f3] text-lg"
      value={donor.fullName}
      onChange={(e) =>
        setDonor({ ...donor, fullName: e.target.value })
      }
    />

    <Input
      placeholder="Last Name *"
      className="h-16 bg-[#f3f3f3] text-lg"
    />
  </div>

  {/* Address */}
  <textarea
    placeholder="Address *"
    rows={4}
    className="w-full rounded-lg border border-gray-300 bg-[#f3f3f3] px-5 py-4 text-lg outline-none"
  />

  {/* City State Postal */}
  <div className="grid gap-4 md:grid-cols-3">
    <Input
      placeholder="City *"
      className="h-16 bg-[#f3f3f3] text-lg"
    />

    <Input
      placeholder="State *"
      className="h-16 bg-[#f3f3f3] text-lg"
    />

    <Input
      placeholder="Postal code *"
      className="h-16 bg-[#f3f3f3] text-lg"
    />
  </div>

  {/* PAN + Mobile */}
  <div className="grid gap-4 md:grid-cols-2">
    <Input
      placeholder="PAN NUMBER *"
      className="h-16 bg-[#f3f3f3] text-lg"
    />

    <Input
      placeholder="Mobile *"
      className="h-16 bg-[#f3f3f3] text-lg"
      value={donor.phone}
      onChange={(e) =>
        setDonor({
          ...donor,
          phone: e.target.value
            .replace(/[^\d+\s]/g, "")
            .slice(0, 20),
        })
      }
    />
  </div>

  {/* DOB + Email */}
  <div className="grid gap-4 md:grid-cols-2">
    <Input
      placeholder="DATE OF BIRTH *"
      className="h-16 bg-[#f3f3f3] text-lg"
    />

    <Input
      type="email"
      placeholder="Email Id *"
      className="h-16 bg-[#f3f3f3] text-lg"
      value={donor.email}
      onChange={(e) =>
        setDonor({ ...donor, email: e.target.value })
      }
    />
  </div>

  {/* Last Row */}
  <div className="grid gap-4 md:grid-cols-[1fr_auto]">
    <Select>
      <SelectTrigger className="h-16 bg-[#f3f3f3] text-lg">
        <SelectValue placeholder="How did you know about us?" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="instagram">Instagram</SelectItem>
        <SelectItem value="facebook">Facebook</SelectItem>
        <SelectItem value="youtube">YouTube</SelectItem>
        <SelectItem value="friend">Friend / Family</SelectItem>
      </SelectContent>
    </Select>

    <Button
      type="submit"
      disabled={submitting}
      className="h-16 rounded-full bg-[#e32727] px-10 text-lg font-bold uppercase text-white hover:bg-[#c91f1f]"
    >
      {submitting ? "Processing..." : "DONATE NOW"}
    </Button>
  </div>
</form>
            {/* RIGHT — QR */}
            <aside className="bg-card rounded-3xl p-7 sm:p-10 border border-border/60 shadow-soft">
              <div className="text-center">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Scan & Pay via UPI
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use any UPI app to scan the code below.
                </p>

                <div className="mt-6 inline-block p-3 sm:p-4 bg-background rounded-2xl border border-border/60 shadow-soft">
                  <img
                    src={qrImage}
                    alt="Shri Dadasaheb Gawai Charitable Trust UPI QR code"
                    className="w-56 h-56 sm:w-64 sm:h-64 object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="mt-6 space-y-1">
                  <div className="font-display font-bold text-foreground tracking-wide">
                    DADASAHEB GAWAI CHARITABLE TRUST
                  </div>
                  <div className="text-sm text-muted-foreground">
                    UPI ID: <span className="font-mono text-foreground">dada9820226@barodampay</span>
                  </div>
                </div>

                <p className="mt-6 text-xs text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  Scan using any UPI app and upload the payment screenshot in the form after completing the payment.
                </p>

                <div className="mt-6 pt-6 border-t border-border/60 space-y-3 text-left">
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                    All contributions directly support education and healthcare initiatives.
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <ShieldCheck size={14} className="text-primary shrink-0 mt-0.5" />
                    For QR payments, verification may take a few hours.
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
