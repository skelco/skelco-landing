import React from "react";
import { Card, CardContent } from "@/components/ui/card";
// motion is used in JSX; ESLint may not detect usage in some configs
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Jordan Miles",
    role: "Founder, N.E.M.O Apparel",
    quote: "Skel Co brought our clothing line to life online. The website looks sharp, loads fast, and captures our brand perfectly.",
  },
  {
    name: "Alyssa Carter",
    role: "Owner, Kings & Queens Food Truck",
    quote: "Our new site made a huge difference. Customers can find us, check our menu, and follow our events without any hassle.",
  },
  {
    name: "Derrick Vaughn",
    role: "Manager, Kings Cuts Barbershop",
    quote: "The booking page and mobile design are spot-on. Skel Co made it easy for clients to schedule appointments and boosted our traffic.",
  },
  {
    name: "Rachel Nguyen",
    role: "Marketing Lead, Local Brand Collective",
    quote: "The process was smooth, communication was clear, and the results speak for themselves. Highly recommend the Skel Co team.",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Testimonials() {
  return (
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
  );
}
