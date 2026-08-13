import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-section-dark border-t border-[#1F2937]">
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
            <a href="mailto:hello@quotvid.com" className="block text-xs sm:text-sm text-muted-foreground hover:text-[#e2a128] transition-colors mb-2">
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
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#e2a128] transition-colors"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col">
            <h4 className="mb-3 sm:mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-white">Product</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link href="/features" className="text-muted-foreground hover:text-[#e2a128] transition-colors">Features</Link></li>
              <li><Link href="/solutions" className="text-muted-foreground hover:text-[#e2a128] transition-colors">Solutions</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-[#e2a128] transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-[#e2a128] transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-[#e2a128] transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-[#e2a128] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col">
            <h4 className="mb-3 sm:mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-white">Support</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link href="/help" className="text-muted-foreground hover:text-[#e2a128] transition-colors">Help Center</Link></li>
              <li><Link href="/sitemap-page" className="text-muted-foreground hover:text-[#e2a128] transition-colors">Sitemap</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-[#e2a128] transition-colors">Get started</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-[#e2a128] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-[#e2a128] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-8 sm:mt-12 border-t border-[rgba(226,161,40,0.20)] pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          © 2026 QuotVid. All rights reserved. · Made for creators worldwide
        </div>
      </div>
    </footer>
  );
}
