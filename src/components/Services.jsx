import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// motion is used in JSX; ESLint may not detect usage in some configs
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MonitorSmartphone, Palette, Rocket, Hammer } from "lucide-react";

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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="bg-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-2 text-neutral-300 max-w-2xl">End-to-end delivery: from research and UX to production-ready code and launch. Pick a sprint or retain us long-term.</p>
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
  );
}
