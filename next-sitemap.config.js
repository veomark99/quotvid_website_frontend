/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.quotvid.com",
  generateRobotsTxt: false, // we have a custom robots.txt
  exclude: ["/api/*"],
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/pricing": 0.9,
      "/features": 0.8,
      "/about": 0.7,
      "/contact": 0.7,
      "/blog": 0.8,
    };
    return {
      loc: path,
      changefreq: path.startsWith("/blog/") ? "monthly" : path === "/" || path === "/pricing" ? "weekly" : "monthly",
      priority: priorities[path] ?? (path.startsWith("/blog/") ? 0.7 : path === "/privacy" || path === "/terms" ? 0.3 : 0.6),
      lastmod: new Date().toISOString(),
    };
  },
};
