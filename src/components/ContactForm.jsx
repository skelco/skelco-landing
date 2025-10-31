import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertTriangle } from "lucide-react";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  // Auto-close success modal after 5s
  useEffect(() => {
    if (status.state === "success") {
      const t = setTimeout(() => setStatus({ state: "idle", message: "" }), 5000);
      return () => clearTimeout(t);
    }
  }, [status.state]);

  function validate(v = values) {
    const e = {};
    if (!v.name || v.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!v.email || !emailRe.test(v.email)) e.email = "Please enter a valid email address.";
    if (!v.message || v.message.trim().length < 10) e.message = "Please add a few more details (min 10 chars).";
    return e;
  }

  function handleChange(ev) {
    const { name, value } = ev.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
  }

  function handleBlur(ev) {
    const { name } = ev.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate());
  }

  async function onSubmit(e) {
    e.preventDefault();

    const currentErrors = validate();
    setErrors(currentErrors);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(currentErrors).length) return;

    setStatus({ state: "loading", message: "Sending..." });

    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    // ensure values from controlled inputs
    data.set("name", values.name);
    data.set("email", values.email);
    data.set("message", values.message);

    // REQUIRED Web3Forms param from .env (guard + trim)
    const key = import.meta.env.VITE_WEB3FORMS_KEY?.trim();
    if (!key || key.length < 10) {
      setStatus({
        state: "error",
        message: "Contact form not configured. Missing or invalid Web3Forms access key.",
      });
      if (import.meta.env.DEV) {
        console.error("Missing/invalid VITE_WEB3FORMS_KEY. Add it to .env.local and Vercel env.");
      }
      return;
    }
    data.append("access_key", key);

    // Optional meta
    data.append("from_name", "SkelCo Website");
    data.append("subject", "New project inquiry");

    // Honeypot (hidden checkbox)
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
        setValues({ name: "", email: "", message: "" });
        setTouched({ name: false, email: false, message: false });
        setErrors({});

        // OPTIONAL: Slack webhook notification (non-blocking)
        const slack = import.meta.env.VITE_SLACK_WEBHOOK_URL?.trim();
        if (slack) {
          try {
            fetch(slack, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                text: `📝 New project inquiry\n• Name: ${data.get("name")}\n• Email: ${data.get("email")}\n• Message: ${data.get("message")}`,
              }),
            }).catch(() => {});
          } catch {}
        }
      } else {
        if (import.meta.env.DEV) console.error("Web3Forms error:", res);
        setStatus({ state: "error", message: res.message || "Something went wrong." });
      }
    } catch (err) {
      if (import.meta.env.DEV) console.error("Network error:", err);
      setStatus({ state: "error", message: "Network error. Please try again." });
    }
  }

  const isLoading = status.state === "loading";

  return (
    <>
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4" noValidate>
        {/* Name */}
        <div className="md:col-span-1">
          <label className="text-sm text-neutral-300" htmlFor="cf-name">Name</label>
          <Input
            id="cf-name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
            placeholder="Your name"
            className={`mt-1 bg-neutral-900 border-white/10 text-white placeholder:text-neutral-500
              ${errors.name && touched.name ? "border-red-500/60 focus:ring-red-500" : ""}`}
          />
          {errors.name && touched.name && (
            <p id="cf-name-err" className="mt-1 text-xs text-red-400">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="md:col-span-1">
          <label className="text-sm text-neutral-300" htmlFor="cf-email">Email</label>
          <Input
            id="cf-email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "cf-email-err" : undefined}
            placeholder="you@company.com"
            className={`mt-1 bg-neutral-900 border-white/10 text-white placeholder:text-neutral-500
              ${errors.email && touched.email ? "border-red-500/60 focus:ring-red-500" : ""}`}
          />
          {errors.email && touched.email && (
            <p id="cf-email-err" className="mt-1 text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="text-sm text-neutral-300" htmlFor="cf-message">Project details</label>
          <Textarea
            id="cf-message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "cf-message-err" : undefined}
            placeholder="Tell us about goals, budget, and timeline"
            className={`mt-1 h-28 bg-neutral-900 border-white/10 text-white placeholder:text-neutral-500
              ${errors.message && touched.message ? "border-red-500/60 focus:ring-red-500" : ""}`}
          />
          {errors.message && touched.message && (
            <p id="cf-message-err" className="mt-1 text-xs text-red-400">{errors.message}</p>
          )}
        </div>

        {/* honeypot field (hidden) */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        <div className="md:col-span-2 flex items-center justify-between">
          <span className="text-xs text-neutral-400">React • Tailwind • Vite</span>
          <Button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-400"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Request Quote"}
          </Button>
        </div>
      </form>

      {/* Success Modal (indigo) */}
      <AnimatePresence>
        {status.state === "success" && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            aria-modal="true" role="dialog"
          >
            <motion.div
              className="bg-neutral-900 border border-indigo-500/40 text-center rounded-2xl p-8 mx-4 max-w-sm shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }}
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

      {/* Error Modal (red) */}
      <AnimatePresence>
        {status.state === "error" && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            aria-modal="true" role="dialog"
          >
            <motion.div
              className="bg-neutral-900 border border-red-500/40 text-center rounded-2xl p-8 mx-4 max-w-sm shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }}
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

              {/* <p className="text-xs text-neutral-500 mt-3">Or email us: hello@skelco.com</p> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}