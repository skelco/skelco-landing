import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// motion is used in JSX; ESLint may not detect usage in some configs
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
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
            Strategy, design, and code under one roof. From marketing sites
            to e-commerce and web apps—delivered with a conversion-first
            mindset.
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
