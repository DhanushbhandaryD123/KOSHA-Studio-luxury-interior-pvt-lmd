import type { MetadataRoute } from "next";
import { projects, blogPosts, site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "", "/about", "/services", "/services/residential", "/services/commercial",
    "/services/architecture", "/projects", "/gallery", "/process", "/pricing",
    "/blog", "/faq", "/contact", "/careers", "/privacy", "/terms",
  ].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const projectPages = projects.map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const blogPages = blogPosts.map((b) => ({
    url: `${site.url}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
