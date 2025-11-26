import * as React from "react";
import { Link } from "@tanstack/react-router";
// motion/AnimatePresence are used in JSX; ESLint may not detect usage in some configs
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const closeMobile = React.useCallback(() => setMobileOpen(false), []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={closeMobile}
        >
          <img
            src="https://res.cloudinary.com/dgp57ptui/image/upload/v1761935049/Skel_Co_Industries_a97vxi.gif"
            alt="Skel Co Industries Logo"
            className="h-10 w-10"
          />
          <span className="font-semibold tracking-tight">
            Skel Co Industries
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.href}
              preload="intent"
              className="text-sm text-neutral-300 hover:text-white transition-colors"
              activeProps={{ className: "text-white" }}
              onClick={closeMobile}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Button className="bg-indigo-500 hover:bg-indigo-400" asChild>
            <Link to="/contact" preload="intent">
              Get a Quote
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/5 bg-neutral-950/90 backdrop-blur"
          >
            <div className="px-4 py-4 space-y-3">
              <div className="flex flex-col">
                {NAV.map((n) => (
                  <Link
                    key={n.label}
                    to={n.href}
                    preload="intent"
                    onClick={closeMobile}
                    className="py-2 text-sm text-neutral-200 hover:text-white transition-colors"
                    activeProps={{ className: "text-white" }}
                  >
                    {n.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <Button
                className="w-full bg-indigo-500 hover:bg-indigo-400"
                asChild
              >
                <Link
                  to="/contact"
                  preload="intent"
                  onClick={closeMobile}
                  className="w-full text-center"
                >
                  Get a Quote
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}