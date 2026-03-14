/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.quotvid.com",
  generateRobotsTxt: false, // handled by app/robots.ts
  exclude: ["/api/*"],
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/pricing": 0.9,
      "/features": 0.9,
      "/about": 0.7,
      "/blog": 0.8,
      "/contact": 0.6,
      "/help": 0.7,
      "/sitemap-page": 0.3,
      "/privacy": 0.3,
      "/terms": 0.3,
    };
    const changefreqs = {
      "/": "weekly",
      "/pricing": "weekly",
      "/features": "monthly",
      "/blog": "weekly",
      "/help": "monthly",
    };
    return {
      loc: path,
      changefreq: changefreqs[path] ?? (path.startsWith("/blog/") ? "monthly" : "monthly"),
      priority: priorities[path] ?? (path.startsWith("/blog/") ? 0.7 : 0.5),
      lastmod: new Date().toISOString(),
    };
  },
};
