import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// motion/AnimatePresence are used in JSX; ESLint may not detect usage in some configs
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertTriangle } from "lucide-react";

// Contact endpoint: set `VITE_CONTACT_API_URL` in your environment to a Formspree endpoint
// Example: VITE_CONTACT_API_URL=https://formspree.io/f/yourFormId
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || "https://formspree.io/f/yourFormId";

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  useEffect(() => {
    if (status.state === "success") {
      const t = setTimeout(() => setStatus({ state: "idle", message: "" }), 5000);
      return () => clearTimeout(t);
    }
  }, [status.state]);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", message: "Sending..." });

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    if (data.get("botcheck")) {
      setStatus({ state: "error", message: "Bot detected." });
      return;
    }

    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      // Formspree returns 200/201 and a JSON body; other services may differ
      if (res.ok) {
        setStatus({ state: "success", message: "Thanks! We’ll get back to you shortly." });
        form.reset();
      } else {
        let text = "Something went wrong.";
        try {
          const json = await res.json();
          if (json && json.error) text = json.error;
          if (json && json.errors && json.errors.length) text = json.errors.map(e=>e.message||e).join(', ');
        } catch {}
        setStatus({ state: "error", message: text });
      }
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Please try again.",
      });
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1">
          <label className="text-sm text-neutral-300">Name</label>
          <Input
            name="name"
            required
            placeholder="Your name"
            className="mt-1 bg-neutral-900 border-white/10 text-white placeholder:text-neutral-500"
          />
        </div>

        <div className="md:col-span-1">
          <label className="text-sm text-neutral-300">Email</label>
          <Input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-1 bg-neutral-900 border-white/10 text-white placeholder:text-neutral-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm text-neutral-300">Project details</label>
          <Textarea
            name="message"
            required
            placeholder="Tell us about goals, budget, and timeline"
            className="mt-1 h-28 bg-neutral-900 border-white/10 text-white placeholder:text-neutral-500"
          />
        </div>

        <input type="checkbox" name="botcheck" className="hidden" />

        <div className="md:col-span-2 flex items-center justify-between">
          <span className="text-xs text-neutral-400">React • Tailwind • Vite</span>
          <Button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-400"
            disabled={status.state === "loading"}
          >
            {status.state === "loading" ? "Sending..." : "Request Quote"}
          </Button>
        </div>

        {status.state !== "idle" && status.state !== "success" && (
          <div
            className={`md:col-span-2 text-sm ${
              status.state === "error" ? "text-red-400" : "text-neutral-300"
            }`}
          >
            {status.message}
          </div>
        )}
      </form>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {status.state === "success" && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-neutral-900 border border-indigo-500/40 text-center rounded-2xl p-8 mx-4 max-w-sm"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
            >
              <CheckCircle className="mx-auto h-12 w-12 text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Message Sent</h3>
              <p className="text-sm text-neutral-400 mb-6">{status.message}</p>
              <Button className="bg-indigo-500 w-full" onClick={() => setStatus({ state: "idle", message: "" })}>
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ERROR MODAL */}
      <AnimatePresence>
        {status.state === "error" && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-neutral-900 border border-red-500/40 text-center rounded-2xl p-8 mx-4 max-w-sm"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
            >
              <AlertTriangle className="mx-auto h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Error</h3>
              <p className="text-sm text-neutral-400 mb-6">{status.message}</p>
              <Button className="bg-red-500 w-full" onClick={() => setStatus({ state: "idle", message: "" })}>
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
