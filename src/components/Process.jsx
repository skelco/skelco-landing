import React from "react";
// motion is used in JSX; ESLint may not detect usage in some configs
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { PhoneCall, Palette, Code2, Rocket, Workflow } from "lucide-react";

const PROCESS = [
  { step: 1, title: "Discover", icon: <PhoneCall className="h-5 w-5" />, desc: "Goals, audience, success metrics." },
  { step: 2, title: "Design", icon: <Palette className="h-5 w-5" />, desc: "Sitemaps, wireframes, high-fidelity UI." },
  { step: 3, title: "Build", icon: <Code2 className="h-5 w-5" />, desc: "Clean, tested, accessible code." },
  { step: 4, title: "Launch", icon: <Rocket className="h-5 w-5" />, desc: "Deployment, analytics, handoff & training." },
  { step: 5, title: "Grow", icon: <Workflow className="h-5 w-5" />, desc: "Iterate with data. SEO & CRO." },
];

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How we work</h2>
          <span className="text-sm text-neutral-400">Transparent, sprint-based delivery</span>
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
  );
}
