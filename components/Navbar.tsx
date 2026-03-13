"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 md:px-8">
        <Link href="/">
          <Image src="/quotvid_white_logo.svg" alt="QuotVid" width={120} height={36} className="h-6 sm:h-8 md:h-9 w-auto" priority />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
          <a href="https://app.quotvid.com/auth/signin" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Sign In
          </a>
          <a
            href="https://app.quotvid.com/auth/signup"
            className="rounded-lg bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Get Started Free
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-3 sm:px-4 pb-6 pt-2 space-y-4">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="block text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a href="https://app.quotvid.com/auth/signin" className="block text-sm text-muted-foreground hover:text-foreground">
            Sign In
          </a>
          <a
            href="https://app.quotvid.com/auth/signup"
            className="block rounded-lg bg-gradient-gold px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Get Started Free
          </a>
        </div>
      )}
    </nav>
  );
}
