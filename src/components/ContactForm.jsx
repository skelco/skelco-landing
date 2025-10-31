import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showSuccess ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showSuccess]);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", message: "Sending..." });

    const form = e.currentTarget;
    const data = new FormData(form);

    // REQUIRED Web3Forms param from .env
    data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    // Optional meta
    data.append("from_name", "SkelCo Website");
    data.append("subject", "New project inquiry");

    // Honeypot
    if (data.get("botcheck")) {
      setStatus({ state: "error", message: "Bot detected." });
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      }).then(r => r.json());

      if (res.success) {
        setStatus({ state: "success", message: "Thanks! We’ll get back to you shortly." });
        form.reset();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000); // auto-close in 3s
      } else {
        setStatus({ state: "error", message: res.message || "Something went wrong." });
      }
    } catch {
      setStatus({ state: "error", message: "Network error. Please try again." });
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1">
          <label className="text-sm text-neutral-300">Name</label>
          <Input name="name" required placeholder="Your name"
            className="mt-1 bg-neutral-900 border-white/10 text-white placeholder:text-neutral-500" />
        </div>
        <div className="md:col-span-1">
          <label className="text-sm text-neutral-300">Email</label>
          <Input name="email" type="email" required placeholder="you@company.com"
            className="mt-1 bg-neutral-900 border-white/10 text-white placeholder:text-neutral-500" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-neutral-300">Project details</label>
          <Textarea name="message" required placeholder="Tell us about goals, budget, and timeline"
            className="mt-1 h-28 bg-neutral-900 border-white/10 text-white placeholder:text-neutral-500" />
        </div>

        {/* honeypot */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        <div className="md:col-span-2 flex items-center justify-between">
          <span className="text-xs text-neutral-400">React • Tailwind • Vite</span>
          <Button type="submit" className="bg-indigo-500 hover:bg-indigo-400" disabled={status.state === "loading"}>
            {status.state === "loading" ? "Sending..." : "Request Quote"}
          </Button>
        </div>

        {/* inline error/fallback */}
        {status.state !== "idle" && status.state !== "success" && (
          <div className={`md:col-span-2 text-sm ${status.state === "error" ? "text-red-400" : "text-neutral-300"}`}>
            {status.message}
          </div>
        )}
      </form>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            aria-modal="true" role="dialog"
          >
            <motion.div
              key="modal"
              className="w-[92vw] max-w-md rounded-2xl border border-white/10 bg-neutral-900 p-6 text-neutral-100 shadow-xl"
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Message sent!</h3>
                  <p className="mt-1 text-sm text-neutral-300">
                    Thanks for reaching out. We’ll reply shortly with next steps.
                  </p>
                </div>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="rounded-md px-2 py-1 text-sm text-neutral-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 text-xs text-neutral-400">
                Tip: Include project links or files when you reply so we can estimate accurately.
              </div>

              <div className="mt-6 flex justify-end">
                <Button onClick={() => setShowSuccess(false)} className="bg-indigo-500 hover:bg-indigo-400">
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
