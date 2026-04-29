import { useState } from "react";
import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Message is too short").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.errors.forEach((er) => { errs[er.path[0] as string] = er.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    toast({ title: "Message sent", description: "Thank you — we will get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <PageHeader
        eyebrow="Get in Touch"
        title="We would love to hear from you"
        description="Questions, partnership ideas or simply a hello — our team usually replies within two working days."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="section-y">
        <div className="container grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16">
          <div className="bg-card rounded-3xl p-8 sm:p-10 border border-border/60 shadow-card">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Send us a message</h2>
            <p className="mt-2 text-muted-foreground">We respond personally to every message we receive.</p>
            <form onSubmit={submit} className="mt-8 space-y-5" noValidate>
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 h-12 rounded-xl" placeholder="Your full name" maxLength={100} />
                {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 h-12 rounded-xl" placeholder="you@example.com" maxLength={255} />
                {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 rounded-xl" placeholder="How can we help?" maxLength={1000} />
                {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                <Send size={16} /> Send message
              </Button>
            </form>
          </div>

          <div className="space-y-4">
            {[
              { icon: MapPin, title: "Visit us", body: "Shyam Nagar, Congress Nagar Road,\nAmravati - 444606, MH" },
              { icon: Phone, title: "Call us", body: "+91 98234 96914" },
              { icon: Mail, title: "Email", body: "sdgct1991@gmail.com" },
              { icon: Clock, title: "Office hours", body: "Mon–Sat · 9:30 am – 6:00 pm\nSun · By appointment" },
            ].map((c, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border/60 shadow-soft flex gap-4">
                <div className="h-11 w-11 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <c.icon size={18} />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">{c.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground whitespace-pre-line">{c.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-12">
          <div className="rounded-3xl overflow-hidden border border-border/60 shadow-card aspect-[16/7] bg-secondary">
            <iframe
              title="Shyam Nagar, Congress Nagar Road, Amravati 444606"
              src="https://www.google.com/maps?q=Shyam+Nagar,+Congress+Nagar+Road,+Amravati+444606,+Maharashtra&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;