import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, ArrowRight, Sparkles, Star, Code2, Rocket, PhoneCall, Palette, MonitorSmartphone, Hammer, Workflow } from "lucide-react";

/**
 * Freelance/Agency Landing Page
 * - Modern hero with value prop
 * - Services, Process, Portfolio, Testimonials
 * - Contact form with CTA
 * - Clean, minimal aesthetic using Tailwind + shadcn/ui
 *
 * Tailwind tips:
 * - Swap brand classes on the root <div> (e.g., from indigo to emerald) to reskin fast
 * - Replace placeholder images and copy in the config objects below
 */

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: <MonitorSmartphone className="h-6 w-6" />, 
    title: "Websites & Web Apps",
    desc: "Fast, responsive, accessible sites built with React / Next.js.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: <Palette className="h-6 w-6" />, 
    title: "UX/UI Design",
    desc: "Research, wireframes, and high‑fidelity design systems that convert.",
    tags: ["Design systems", "Figma", "A/B"],
  },
  {
    icon: <Rocket className="h-6 w-6" />, 
    title: "Performance & SEO",
    desc: "Core Web Vitals, semantic HTML, technical SEO, and analytics.",
    tags: ["CWV", "Schema", "GA4"],
  },
  {
    icon: <Hammer className="h-6 w-6" />, 
    title: "E‑commerce",
    desc: "Shopify / headless builds that scale and sell.",
    tags: ["Shopify", "Headless", "Stripe"],
  },
];

const PROCESS = [
  { step: 1, title: "Discover", icon: <PhoneCall className="h-5 w-5" />, desc: "Goals, audience, success metrics." },
  { step: 2, title: "Design", icon: <Palette className="h-5 w-5" />, desc: "Sitemaps, wireframes, hi‑fi UI." },
  { step: 3, title: "Build", icon: <Code2 className="h-5 w-5" />, desc: "Clean, tested, accessible code." },
  { step: 4, title: "Launch", icon: <Rocket className="h-5 w-5" />, desc: "Deployment, analytics, training." },
  { step: 5, title: "Grow", icon: <Workflow className="h-5 w-5" />, desc: "Iterate with data. SEO & CRO." },
];

const WORK = [
  {
    title: "Lovesac Event Microsite",
    image: "https://picsum.photos/seed/lovesac/800/600",
    result: "↑ 38% event sign‑ups",
    tags: ["Next.js", "Edge", "CMS"],
  },
  {
    title: "Native Union Store",
    image: "https://picsum.photos/seed/native/800/600",
    result: "+24% conversion rate",
    tags: ["Shopify", "Hydrogen", "CRO"],
  },
  {
    title: "Goodman Theatre Redesign",
    image: "https://picsum.photos/seed/goodman/800/600",
    result: "+31% time on page",
    tags: ["Accessibility", "Design system"],
  },
  {
    title: "Healthcare Portal",
    image: "https://picsum.photos/seed/health/800/600",
    result: "‑42% support tickets",
    tags: ["React", "RBAC", "Testing"],
  },
];

const TESTIMONIALS = [
  {
    name: "Alex R.",
    role: "COO, DTC Brand",
    quote:
      "Best vendor we’ve hired. They ship fast, communicate clearly, and care about outcomes, not just pixels.",
  },
  {
    name: "Cayla B.",
    role: "Director of Marketing",
    quote:
      "Traffic grew 52% after launch. The design is beautiful and the site is blazing fast on mobile.",
  },
  {
    name: "Eric M.",
    role: "Founder, SaaS",
    quote:
      "We went from idea to live MVP in six weeks. Clean codebase and a smooth handoff to our team.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AgencyLanding() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-400" />
            <span className="font-semibold tracking-tight">Studio Indigo</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="text-sm text-neutral-300 hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button className="bg-indigo-500 hover:bg-indigo-400" asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.15),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl">
            <Badge className="bg-white/10 text-white hover:bg-white/20">Web Design + Development</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              We build fast, beautiful websites that grow your business.
            </h1>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
              Strategy, design, and code under one roof. From marketing sites to e‑commerce and web apps—delivered with a conversion‑first mindset.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button className="bg-indigo-500 hover:bg-indigo-400" size="lg" asChild>
                <a href="#contact" className="flex items-center gap-2">
                  Start a Project <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" size="lg" asChild>
                <a href="#work">See Our Work</a>
              </Button>
              <div className="flex items-center gap-1 text-neutral-400 text-sm">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>Top‑rated • 50+ reviews</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work / Portfolio */}
      <section id="work" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected Work</h2>
            <a href="#contact" className="text-sm text-indigo-400 hover:text-indigo-300">Book a walkthrough →</a>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORK.map((w) => (
              <Card key={w.title} className="bg-white/5 border-white/10 overflow-hidden">
                <div className="aspect-video bg-neutral-900">
                  <img src={w.image} alt={w.title} className="h-full w-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-base">{w.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-neutral-300">{w.result}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <Badge key={t} className="bg-white/10 text-white hover:bg-white/20">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What we do</h2>
            <p className="mt-2 text-neutral-300 max-w-2xl">End‑to‑end delivery: from research and UX to production‑ready code and launch. Pick a sprint or retain us long‑term.</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {SERVICES.map((s) => (
                <Card key={s.title} className="bg-neutral-950 border-white/10">
                  <CardHeader className="flex flex-row items-center gap-3 pb-2">
                    <div className="rounded-xl bg-indigo-500/20 text-indigo-300 p-2">{s.icon}</div>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-300">{s.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <Badge key={t} className="bg-white/10 text-white hover:bg-white/20">{t}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How we work</h2>
            <span className="text-sm text-neutral-400">Transparent, sprint‑based delivery</span>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="relative rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-indigo-300">
                  <div className="rounded-lg bg-indigo-500/20 p-1">{p.icon}</div>
                  <span className="text-sm">Step {p.step}</span>
                </div>
                <h3 className="mt-2 font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-300">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Clients say</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <Card key={t.name} className="bg-neutral-950 border-white/10">
                  <CardContent className="pt-6">
                    <p className="text-neutral-200 leading-relaxed">“{t.quote}”</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-neutral-400">
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span>{t.name} • {t.role}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Tell us about your project</h2>
              <p className="mt-2 text-neutral-300 max-w-md">Get a free roadmap and quote in 24 hours. We’ll review goals, budget, and timeline and respond with options.</p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-400"/> 2–6 week sprints</li>
                <li className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-400"/> Fixed‑bid or retainer</li>
                <li className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-400"/> Dedicated PM + Slack</li>
              </ul>
            </div>
            <Card className="md:col-span-3 bg-white/5 border-white/10">
              <CardContent className="pt-6">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-1">
                    <label className="text-sm text-neutral-300">Name</label>
                    <Input placeholder="Your name" className="mt-1 bg-neutral-900 border-white/10 text-white placeholder:text-neutral-500" />
                  </div>
                  <div className="md:col-span-1">
                    <label className="text-sm text-neutral-300">Email</label>
                    <Input type="email" placeholder="you@company.com" className="mt-1 bg-neutral-900 border-white/10 text-white placeholder:text-neutral-500" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm text-neutral-300">Project details</label>
                    <Textarea placeholder="Tell us about goals, budget, and timeline" className="mt-1 h-28 bg-neutral-900 border-white/10 text-white placeholder:text-neutral-500" />
                  </div>
                  <div className="md:col-span-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <span className="inline-flex items-center gap-1"><Code2 className="h-3 w-3"/> React / Next.js</span>
                      <span className="inline-flex items-center gap-1"><Palette className="h-3 w-3"/> Tailwind / shadcn</span>
                      <span className="inline-flex items-center gap-1"><Rocket className="h-3 w-3"/> Vercel</span>
                    </div>
                    <Button className="bg-indigo-500 hover:bg-indigo-400">Request Quote</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span>© {new Date().getFullYear()} Studio Indigo. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-400">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}