import React from "react";
// motion is used in JSX; ESLint may not detect usage in some configs
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Tell us about your project</h2>
            <p className="mt-2 text-neutral-300 max-w-md">Get a free roadmap and quote in 24 hours. We’ll review goals, budget, and timeline and respond with options.</p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-300">
              <li className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-400" /> 2–6-week sprints</li>
              <li className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-400" /> Fixed-bid or retainer</li>
              <li className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-400" /> Dedicated PM • Slack communication</li>
            </ul>
          </div>

          <Card className="md:col-span-3 bg-white/5 border-white/10 rounded-xl shadow-lg">
            <CardContent className="pt-6">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
