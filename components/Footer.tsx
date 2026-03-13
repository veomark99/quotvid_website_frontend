import Link from "next/link";
import Image from "next/image";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-section-dark border-t border-primary/20">
      <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:px-8">
        <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 md:grid-cols-3 items-start">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Image src="/quotvid_white_logo.svg" alt="QuotVid" width={150} height={45} className="h-8 sm:h-10 w-auto" />
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2 mb-3">
              AI-powered quote videos for content creators worldwide.
            </p>
            <a href="mailto:hello@quotvid.com" className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors mb-2">
              hello@quotvid.com
            </a>
            <div className="mt-4 sm:mt-6 flex gap-3">
              {[
                {
                  label: "YouTube Shorts",
                  href: "https://youtube.com/@quotvid",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://instagram.com/quotvid",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.766 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
                {
                  label: "TikTok",
                  href: "https://tiktok.com/@quotvid",
                  icon: <SiTiktok className="w-5 h-5" aria-hidden />,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col">
            <h4 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground">Product</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link href="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col">
            <h4 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground">Support</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/sitemap-page" className="text-muted-foreground hover:text-primary transition-colors">Sitemap</Link></li>
              <li><a href="https://app.quotvid.com/auth/signup" className="text-muted-foreground hover:text-primary transition-colors">Sign up</a></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-8 sm:mt-12 border-t border-primary/10 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          © 2026 QuotVid. All rights reserved. · Made for creators worldwide
        </div>
      </div>
    </footer>
  );
}
