import React from "react";
import { Card, CardContent } from "@/components/ui/card";
// motion is used in JSX; ESLint may not detect usage in some configs
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const people = [
  {
    name: "Alexander Skelton",
    role: "Chief Executive Officer (CEO) / Lead Developer",
    bio: "Founder of Skel Co Industries. Leads creative direction, web development, and brand innovation across all ventures.",
    image: "https://res.cloudinary.com/dgp57ptui/image/upload/v1761935049/Skel_Co_Industries_a97vxi.gif",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Glen Fallis",
    role: "Creative Director / Graphic Design Lead",
    bio: "Specializes in graphic design, brand identity, and digital art direction with a focus on streetwear and urban culture.",
    image: "https://res.cloudinary.com/dgp57ptui/image/upload/c_fill,w_400,h_400,ar_1:1,g_auto/v1761934968/animal-tiger-close-up-64152_zrcgvm.jpg",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Frederick McCullough",
    role: "Director of Marketing & Advertising Strategy",
    bio: "Oversees marketing campaigns, partnerships, and brand growth strategies across Skel Co’s creative divisions.",
    image: "https://res.cloudinary.com/dgp57ptui/image/upload/c_fill,w_400,h_400,ar_1:1,g_auto/v1761934012/fred_fclv2s.png",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Michael Hawkins",
    role: "Chief Operations Officer (COO)",
    bio: "Manages business operations, logistics, and cross-team coordination to keep every Skel Co project running smoothly.",
    image: "https://res.cloudinary.com/dgp57ptui/image/upload/c_fill,w_400,h_400,ar_1:1,g_auto/v1761934035/mic_o6wpah.png",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Team() {
  return (
    <section id="team" className="bg-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Meet the Skel Co Industries Team</h2>
          <p className="mt-2 text-neutral-300 max-w-2xl">The leadership driving our family of brands — N.E.M.O Clothing, Kings & Queens Food Truck, Kings Cuts Barbershop, and Never Ending Money Operations Music Studio.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {people.map((person) => (
              <Card key={person.name} className="bg-neutral-950 border-white/10 text-center rounded-2xl p-6 hover:scale-[1.03] transition-transform duration-300">
                <CardContent>
                  <img src={person.image} alt={person.name} className="mx-auto h-32 w-32 rounded-full object-cover border-2 border-indigo-500 shadow-md" />
                  <h3 className="mt-4 text-lg font-medium text-white">{person.name}</h3>
                  <p className="text-sm text-indigo-300">{person.role}</p>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{person.bio}</p>
                  <div className="mt-4 flex items-center justify-center gap-4 text-neutral-400">
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">{/* svg */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.45c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.45h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.6z"/></svg>
                    </a>
                    <a href={person.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">{/* svg */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.5.6.3 1 .6 1.5 1.1.5.5.8.9 1.1 1.5.3.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.5 2.4-.3.6-.6 1-1.1 1.5-.5.5-.9.8-1.5 1.1-.5.3-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.5-.6-.3-1-.6-1.5-1.1-.5-.5-.8-.9-1.1-1.5-.3-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.5-2.4.3-.6.6-1 1.1-1.5.5-.5.9-.8 1.5-1.1.5-.3 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-1.9.3-.5.2-.9.4-1.2.7-.3.3-.5.7-.7 1.2-.1.3-.3.9-.3 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.3 1.9.2.5.4.9.7 1.2.3.3.7.5 1.2.7.3.1.9.3 1.9.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.3.5-.2.9-.4 1.2-.7.3-.3.5-.7.7-1.2.1-.3.3-.9.3-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.3-1.9-.2-.5-.4-.9-.7-1.2-.3-.3-.7-.5-1.2-.7-.3-.1-.9-.3-1.9-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.3a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm0 1.8a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm6.8-2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
                    </a>
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
