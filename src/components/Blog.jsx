import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const POSTS = [
  {
    title: "Designing for Conversion: 5 Quick Wins",
    excerpt: "Small design changes that deliver big improvements to conversion rates.",
    href: "#",
  },
  {
    title: "Performance Checklist for New Sites",
    excerpt: "A practical checklist to improve Core Web Vitals and loading times.",
    href: "#",
  },
  {
    title: "Headless Commerce: When to Choose It",
    excerpt: "Compare headless vs monolith approaches and when headless makes sense.",
    href: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">From the Blog</h2>
        <p className="mt-2 text-neutral-300 max-w-2xl">Insights on product design, performance, and growth.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((p) => (
            <Card key={p.title} className="bg-neutral-950 border-white/10">
              <CardHeader>
                <CardTitle className="text-base">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-300">{p.excerpt}</p>
                <a href={p.href} className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 text-sm">Read more →</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
