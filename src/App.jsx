import React, { useState } from "react";
import "../firebase"; // this runs Firebase initialization
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  Check,
  ArrowRight,
  Sparkles,
  Star,
  Code2,
  Rocket,
  PhoneCall,
  Palette,
  MonitorSmartphone,
  Hammer,
  Workflow,
} from "lucide-react";

import ContactForm from "@/components/ContactForm";
import Footer from "@/Footer";

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
    desc: "Lightning-fast, responsive, and accessible builds on React/Next.js.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UX/UI Design",
    desc: "Research-driven UX and crisp UI systems that convert and scale.",
    tags: ["Design systems", "Figma", "A/B"],
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Performance & SEO",
    desc: "Core Web Vitals, semantic HTML, structured data, analytics.",
    tags: ["CWV", "Schema", "GA4"],
  },
  {
    icon: <Hammer className="h-6 w-6" />,
    title: "E-commerce",
    desc: "Shopify & headless setups engineered to grow and sell.",
    tags: ["Shopify", "Headless", "Stripe"],
  },
];

const PROCESS = [
  {
    step: 1,
    title: "Discover",
    icon: <PhoneCall className="h-5 w-5" />,
    desc: "Goals, audience, success metrics.",
  },
  {
    step: 2,
    title: "Design",
    icon: <Palette className="h-5 w-5" />,
    desc: "Sitemaps, wireframes, high-fidelity UI.",
  },
  {
    step: 3,
    title: "Build",
    icon: <Code2 className="h-5 w-5" />,
    desc: "Clean, tested, accessible code.",
  },
  {
    step: 4,
    title: "Launch",
    icon: <Rocket className="h-5 w-5" />,
    desc: "Deployment, analytics, handoff & training.",
  },
  {
    step: 5,
    title: "Grow",
    icon: <Workflow className="h-5 w-5" />,
    desc: "Iterate with data. SEO & CRO.",
  },
];

const WORK = [
  {
    title: "N.E.M.O Clothing Brand",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80",
    result: "+48% online sales after launch",
    tags: ["Shopify", "Branding", "E-commerce"],
  },
  {
    title: "Kings and Queens Food Truck",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    result: "↑ 60% mobile orders and repeat customers",
    tags: ["React", "Tailwind", "PWA"],
  },
  {
    title: "Kings Cuts Barbershop",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
    result: "↓ 40% missed appointments after booking site launch",
    tags: ["Next.js", "Booking API", "SEO"],
  },
  {
    title: "Never Ending Money Operations Studio",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    result: "+35% new artists and collaborations",
    tags: ["Design", "Audio Hosting", "CMS"],
  },
];

const TESTIMONIALS = [
  {
    name: "Jordan Miles",
    role: "Founder, N.E.M.O Apparel",
    quote:
      "Skel Co brought our clothing line to life online. The website looks sharp, loads fast, and captures our brand perfectly.",
  },
  {
    name: "Alyssa Carter",
    role: "Owner, Kings & Queens Food Truck",
    quote:
      "Our new site made a huge difference. Customers can find us, check our menu, and follow our events without any hassle.",
  },
  {
    name: "Derrick Vaughn",
    role: "Manager, Kings Cuts Barbershop",
    quote:
      "The booking page and mobile design are spot-on. Skel Co made it easy for clients to schedule appointments and boosted our traffic.",
  },
  {
    name: "Rachel Nguyen",
    role: "Marketing Lead, Local Brand Collective",
    quote:
      "The process was smooth, communication was clear, and the results speak for themselves. Highly recommend the Skel Co team.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AgencyLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100 overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-2"
            onClick={closeMobile}
          >
            <img
              src="https://res.cloudinary.com/dgp57ptui/image/upload/v1761935049/Skel_Co_Industries_a97vxi.gif"
              alt="Skel Co Industries Logo"
              className="h-10 w-10"
            />
            <span className="font-semibold tracking-tight">
              Skel Co Industries
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-sm text-neutral-300 hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Button className="bg-indigo-500 hover:bg-indigo-400">
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile slide-down menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-white/5 bg-neutral-950/90 backdrop-blur"
            >
              <div className="px-4 py-4 space-y-3">
                <div className="flex flex-col">
                  {NAV.map((n) => (
                    <a
                      key={n.label}
                      href={n.href}
                      onClick={closeMobile}
                      className="py-2 text-sm text-neutral-200 hover:text-white"
                    >
                      {n.label}
                    </a>
                  ))}
                </div>
                <Button
                  className="w-full bg-indigo-500 hover:bg-indigo-400"
                  asChild
                >
                  <a
                    href="#contact"
                    onClick={closeMobile}
                    className="w-full text-center"
                  >
                    Get a Quote
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.15),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <Badge className="bg-white/10 text-white hover:bg-white/20">
              Phoenix-Based • Remote Across the World.
            </Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              We build fast, beautiful websites that grow your business.
            </h1>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
              Strategy, design, and code under one roof. From marketing sites to
              e-commerce and web apps—delivered with a conversion-first mindset.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button className="bg-indigo-500 hover:bg-indigo-400" size="lg">
                <a href="#contact" className="flex items-center gap-2">
                  Start a Project <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                size="lg"
              >
                <a href="#work">See Our Work</a>
              </Button>
              <div className="flex items-center gap-1 text-neutral-400 text-sm"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work / Portfolio */}
      <section
        id="work"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Selected Work
            </h2>
            <a
              href="#contact"
              className="text-sm text-indigo-400 hover:text-indigo-300"
            >
              Book a walkthrough →
            </a>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORK.map((w) => (
              <Card
                key={w.title}
                className="bg-white/5 border-white/10 overflow-hidden"
              >
                <div className="aspect-video bg-neutral-900">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-base">{w.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-neutral-300">{w.result}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <Badge
                        key={t}
                        className="bg-white/10 text-white hover:bg-white/20"
                      >
                        {t}
                      </Badge>
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
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              What we do
            </h2>
            <p className="mt-2 text-neutral-300 max-w-2xl">
              End-to-end delivery: from research and UX to production-ready code
              and launch. Pick a sprint or retain us long-term.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {SERVICES.map((s) => (
                <Card key={s.title} className="bg-neutral-950 border-white/10">
                  <CardHeader className="flex flex-row items-center gap-3 pb-2">
                    <div className="rounded-xl bg-indigo-500/20 text-indigo-300 p-2">
                      {s.icon}
                    </div>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-300">{s.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <Badge
                          key={t}
                          className="bg-white/10 text-white hover:bg-white/20"
                        >
                          {t}
                        </Badge>
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
      <section
        id="process"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              How we work
            </h2>
            <span className="text-sm text-neutral-400">
              Transparent, sprint-based delivery
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROCESS.map((p) => (
              <div
                key={p.step}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center gap-2 text-indigo-300">
                  <div className="rounded-lg bg-indigo-500/20 p-1">
                    {p.icon}
                  </div>
                  <span className="text-sm">Step {p.step}</span>
                </div>
                <h3 className="mt-2 font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-300">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team */}
      <section id="team" className="bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Meet the Skel Co Industries Team
            </h2>
            <p className="mt-2 text-neutral-300 max-w-2xl">
              The leadership driving our family of brands — N.E.M.O Clothing,
              Kings & Queens Food Truck, Kings Cuts Barbershop, and Never Ending
              Money Operations Music Studio.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Alexander Skelton",
                  role: "Chief Executive Officer (CEO) / Lead Developer",
                  bio: "Founder of Skel Co Industries. Leads creative direction, web development, and brand innovation across all ventures.",
                  image:
                    "https://res.cloudinary.com/dgp57ptui/image/upload/v1761935049/Skel_Co_Industries_a97vxi.gif",
                  linkedin: "https://linkedin.com",
                  instagram: "https://instagram.com",
                },
                {
                  name: "Glen Fallis",
                  role: "Creative Director / Graphic Design Lead",
                  bio: "Specializes in graphic design, brand identity, and digital art direction with a focus on streetwear and urban culture.",
                  image:
                    "https://res.cloudinary.com/dgp57ptui/image/upload/c_fill,w_400,h_400,ar_1:1,g_auto/v1761934968/animal-tiger-close-up-64152_zrcgvm.jpg",
                  linkedin: "https://linkedin.com",
                  instagram: "https://instagram.com",
                },
                {
                  name: "Frederick McCullough",
                  role: "Director of Marketing & Advertising Strategy",
                  bio: "Oversees marketing campaigns, partnerships, and brand growth strategies across Skel Co’s creative divisions.",
                  image:
                    "https://res.cloudinary.com/dgp57ptui/image/upload/c_fill,w_400,h_400,ar_1:1,g_auto/v1761934012/fred_fclv2s.png",
                  linkedin: "https://linkedin.com",
                  instagram: "https://instagram.com",
                },
                {
                  name: "Michael Hawkins",
                  role: "Chief Operations Officer (COO)",
                  bio: "Manages business operations, logistics, and cross-team coordination to keep every Skel Co project running smoothly.",
                  image:
                    "https://res.cloudinary.com/dgp57ptui/image/upload/c_fill,w_400,h_400,ar_1:1,g_auto/v1761934035/mic_o6wpah.png",
                  linkedin: "https://linkedin.com",
                  instagram: "https://instagram.com",
                },
              ].map((person) => (
                <Card
                  key={person.name}
                  className="bg-neutral-950 border-white/10 text-center rounded-2xl p-6 hover:scale-[1.03] transition-transform duration-300"
                >
                  <CardContent>
                    <img
                      src={person.image}
                      alt={person.name}
                      className="mx-auto h-32 w-32 rounded-full object-cover border-2 border-indigo-500 shadow-md"
                    />
                    <h3 className="mt-4 text-lg font-medium text-white">
                      {person.name}
                    </h3>
                    <p className="text-sm text-indigo-300">{person.role}</p>
                    <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                      {person.bio}
                    </p>

                    {/* Social icons */}
                    <div className="mt-4 flex items-center justify-center gap-4 text-neutral-400">
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                        >
                          <path
                            d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 
                    0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
                    19h-3v-10h3v10zm-1.5-11.45c-.97 
                    0-1.75-.78-1.75-1.75s.78-1.75 
                    1.75-1.75 1.75.78 1.75 
                    1.75-.78 1.75-1.75 
                    1.75zm13.5 11.45h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                    0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.76 
                    1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 
                    4.59v5.6z"
                          />
                        </svg>
                      </a>
                      <a
                        href={person.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                        >
                          <path
                            d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.5.6.3 
                    1 .6 1.5 1.1.5.5.8.9 1.1 1.5.3.5.4 
                    1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 
                    3.6-.1 4.9c-.1 1.2-.2 1.9-.5 
                    2.4-.3.6-.6 1-1.1 1.5-.5.5-.9.8-1.5 
                    1.1-.5.3-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 
                    0-4.9-.1c-1.2-.1-1.9-.2-2.4-.5-.6-.3-1-.6-1.5-1.1-.5-.5-.8-.9-1.1-1.5-.3-.5-.4-1.2-.5-2.4C2.2 
                    15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.5-2.4.3-.6.6-1 
                    1.1-1.5.5-.5.9-.8 1.5-1.1.5-.3 1.2-.4 
                    2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 
                    1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-1.9.3-.5.2-.9.4-1.2.7-.3.3-.5.7-.7 
                    1.2-.1.3-.3.9-.3 1.9-.1 1.2-.1 1.6-.1 
                    4.7s0 3.5.1 4.7c.1 1 .2 1.6.3 1.9.2.5.4.9.7 
                    1.2.3.3.7.5 1.2.7.3.1.9.3 1.9.3 1.2.1 1.6.1 
                    4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.3.5-.2.9-.4 
                    1.2-.7.3-.3.5-.7.7-1.2.1-.3.3-.9.3-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.3-1.9-.2-.5-.4-.9-.7-1.2-.3-.3-.7-.5-1.2-.7-.3-.1-.9-.3-1.9-.3-1.2-.1-1.6-.1-4.7-.1zm0 
                    3.3a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm0 
                    1.8a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm6.8-2a1.5 1.5 0 
                    1 1-3 0 1.5 1.5 0 0 1 3 0z"
                          />
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Clients say
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <Card key={t.name} className="bg-neutral-950 border-white/10">
                  <CardContent className="pt-6">
                    <p className="text-neutral-200 leading-relaxed">
                      “{t.quote}”
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-neutral-400">
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span>
                        {t.name} • {t.role}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Left column: info text */}
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Tell us about your project
              </h2>
              <p className="mt-2 text-neutral-300 max-w-md">
                Get a free roadmap and quote in 24 hours. We’ll review goals,
                budget, and timeline and respond with options.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" /> 2–6-week sprints
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" /> Fixed-bid or
                  retainer
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" /> Dedicated PM •
                  Slack communication
                </li>
              </ul>
            </div>

            {/* Right column: the form card */}
            <Card className="md:col-span-3 bg-white/5 border-white/10 rounded-xl shadow-lg">
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
