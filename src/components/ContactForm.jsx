import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertTriangle } from "lucide-react";




export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  // Auto-close success modal after 5s
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

    // Required Web3Forms fields
    data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    data.append("from_name", "SkelCo Website");
    data.append("subject", "New project inquiry");

    // ✅ Hard-coded email → YOU receive submissions
    data.append("email_to", "skelcoindustries@gmail.com");

    // Let you reply to the user directly
    data.append("replyto", data.get("email"));

    // Honeypot
    if (data.get("botcheck")) {
      setStatus({ state: "error", message: "Bot detected." });
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      }).then((r) => r.json());

      if (res.success) {
        setStatus({ state: "success", message: "Thanks! We’ll get back to you shortly." });
        form.reset();
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

        {/* honeypot */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

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

        {/* inline debug message */}
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

      {/* Success Modal */}
      <AnimatePresence>
        {status.state === "success" && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            aria-modal="true" role="dialog"
          >
            <motion.div
              className="bg-neutral-900 border border-indigo-500/40 text-center rounded-2xl p-8 mx-4 max-w-sm shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            >
              <CheckCircle className="mx-auto h-12 w-12 text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Message Sent</h3>
              <p className="text-sm text-neutral-400 mb-6">
                {status.message || "Thanks for reaching out! We’ll contact you soon."}
              </p>
              <Button
                className="bg-indigo-500 hover:bg-indigo-400 w-full"
                onClick={() => setStatus({ state: "idle", message: "" })}
              >
                Close
              </Button>
              <p className="text-xs text-neutral-500 mt-3">Auto closing in 5s...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>
        {status.state === "error" && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            aria-modal="true" role="dialog"
          >
            <motion.div
              className="bg-neutral-900 border border-red-500/40 text-center rounded-2xl p-8 mx-4 max-w-sm shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            >
              <AlertTriangle className="mx-auto h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Something went wrong</h3>
              <p className="text-sm text-neutral-400 mb-6">
                {status.message || "Please try again or email us directly."}
              </p>

              <div className="flex gap-3">
                <Button
                  className="bg-neutral-800 hover:bg-neutral-700 w-1/2"
                  onClick={() => setStatus({ state: "idle", message: "" })}
                >
                  Close
                </Button>
                <Button
                  className="bg-red-500 hover:bg-red-400 w-1/2"
                  onClick={() => setStatus({ state: "idle", message: "" })}
                >
                  Try Again
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

