import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/api/*"],
      },
    ],
    sitemap: "https://www.quotvid.com/sitemap.xml",
    host: "https://www.quotvid.com",
  };
}
