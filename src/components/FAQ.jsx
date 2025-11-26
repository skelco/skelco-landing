import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const FAQ_ITEMS = [
  {
    q: "How long does a typical project take?",
    a: "Most projects are delivered in 2–6 week sprints depending on scope; we provide a detailed timeline after the discovery phase.",
  },
  {
    q: "Do you work with Shopify or headless e-commerce?",
    a: "Yes — we build both Shopify and headless commerce solutions depending on the client’s needs and scale.",
  },
  {
    q: "What does support and maintenance look like?",
    a: "We offer retainers and ad-hoc support. After launch we can monitor performance, run A/B tests, and iteratively improve conversions.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <p className="mt-2 text-neutral-300 max-w-2xl">Answers to common questions about process, timelines, and engagement models.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {FAQ_ITEMS.map((f) => (
            <Card key={f.q} className="bg-neutral-950 border-white/10">
              <CardContent>
                <h3 className="font-medium text-white">{f.q}</h3>
                <p className="mt-2 text-sm text-neutral-300">{f.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
