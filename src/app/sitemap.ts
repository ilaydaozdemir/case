import { MetadataRoute } from "next";
import { generateSitemapMetadata } from "@/utils/dynamicMetadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapData = generateSitemapMetadata();

  const staticPages = [
    {
      url: "https://rapkology.com",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: "https://rapkology.com/haberler",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: "https://rapkology.com/etkinlikler",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://rapkology.com/muzikler",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: "https://rapkology.com/videolar",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: "https://rapkology.com/iletisim",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  return [...staticPages, ...sitemapData];
}
