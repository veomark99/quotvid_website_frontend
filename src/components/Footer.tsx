import { Link } from "react-router-dom";
import whiteLogo from "@/assets/quotvid_white_logo.svg";

const Footer = () => {
  return (
    <footer className="bg-section-dark border-t border-primary/20">
      <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:px-8">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="mb-4 inline-block">
              <img src={whiteLogo} alt="QuotVid" className="h-6 sm:h-8" />
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              AI-powered quote videos for content creators worldwide.
            </p>
            <div className="mt-4 sm:mt-6 flex gap-4">
              {["Instagram", "TikTok", "X"].map((s) => (
                <a key={s} href="#" className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-primary">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground">Product</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link to="/#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><a href="https://app.quotvid.com/auth/signup" className="text-muted-foreground hover:text-primary transition-colors">Sign Up</a></li>
              <li><a href="https://app.quotvid.com/auth/signin" className="text-muted-foreground hover:text-primary transition-colors">Sign In</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="mailto:hello@quotvid.com" className="text-muted-foreground hover:text-primary transition-colors break-all">hello@quotvid.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 border-t border-primary/10 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          © 2026 QuotVid. All rights reserved. · Made for creators worldwide 🌍
        </div>
      </div>
    </footer>
  );
};

export default Footer;
