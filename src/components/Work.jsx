import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// motion is used in JSX; ESLint may not detect usage in some configs
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Work() {
  return (
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
  );
}
