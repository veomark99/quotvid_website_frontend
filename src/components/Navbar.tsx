import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import whiteLogo from "@/assets/quotvid_white_logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 md:px-8">
        <Link to="/">
          <img src={whiteLogo} alt="QuotVid" className="h-6 sm:h-8 md:h-9" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link key={l.href} to={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
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
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-3 sm:px-4 pb-6 pt-2 space-y-4">
          {navLinks.map((l) => (
            <Link key={l.href} to={l.href} className="block text-sm text-muted-foreground hover:text-foreground">
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
};

export default Navbar;
