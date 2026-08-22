"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Speakers", path: "/speakers" },
    { name: "Schedule", path: "/schedule" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "py-3 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "py-5 bg-black/40 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group relative flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] active:scale-95"
        >
          <Image
            src="/logo.png"
            alt="TEDx IEM Salt Lake"
            width={240}
            height={64}
            className="h-9 sm:h-11 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Register CTA */}
          <Link
            href="/register"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E62B1E] text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#c92519] active:scale-95 overflow-hidden"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#E62B1E]" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {links.map((link, index) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={link.path}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "bg-white/10 text-white font-medium"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="text-base">{link.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E62B1E]" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="/register"
                  className="w-full py-3 rounded-xl bg-[#E62B1E] text-white font-medium text-center flex items-center justify-center gap-2 hover:bg-[#c92519] transition-colors"
                >
                  <span>Register Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <div className="text-center text-xs text-gray-500 pt-2">
                  TEDx IEM Salt Lake • 2026 Edition
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
