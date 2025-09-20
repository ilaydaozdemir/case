import { Post } from "@/types/post";
import posts from "@/data/posts.json";

/**
 * JSON Data'dan Dinamik Metadata Oluşturma
 * Bu utility, posts.json'daki SEO bilgilerini kullanarak dinamik metadata oluşturur
 */

// Tüm post'lardan SEO bilgilerini çıkarma
export const getAllSEOMetadata = () => {
  const allPosts = posts as Post[];

  return allPosts.map((post) => ({
    id: post._id,
    slug: post.attributes.slug,
    seo: post.attributes.seo,
    title: post.attributes.title,
    description: post.attributes.desc,
    image: post.attributes.img,
    tags: post.attributes.tags,
    category: post.attributes.category,
    authors: post.attributes.authors,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
  }));
};

// Belirli bir post için metadata oluşturma
export const generatePostMetadata = (postSlug: string) => {
  const allPosts = posts as Post[];
  const post = allPosts.find((p) => p.attributes.slug === postSlug);

  if (!post) {
    return null;
  }

  return {
    title: post.attributes.seo.metaTitle,
    description: post.attributes.seo.metaDescription,
    canonical: post.attributes.seo.canonicalURL,
    keywords: post.attributes.tags.join(", "),
    authors: post.attributes.authors,
    openGraph: {
      title: post.attributes.seo.metaTitle,
      description: post.attributes.seo.metaDescription,
      images: [
        {
          url: post.attributes.img,
          width: 1200,
          height: 630,
          alt: post.attributes.title,
        },
      ],
      type: "article",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: post.attributes.authors,
      tags: post.attributes.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.attributes.seo.metaTitle,
      description: post.attributes.seo.metaDescription,
      images: [post.attributes.img],
    },
    article: {
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: post.attributes.authors,
      tags: post.attributes.tags,
    },
  };
};

// Kategori bazında metadata oluşturma
export const generateCategoryMetadata = (category: string) => {
  const allPosts = posts as Post[];
  const categoryPosts = allPosts.filter((post) =>
    post.attributes.category.includes(category)
  );

  if (categoryPosts.length === 0) {
    return null;
  }

  const latestPost = categoryPosts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )[0];

  return {
    title: `${category} - RapKology`,
    description: `${category} kategorisindeki en güncel içerikler. ${
      categoryPosts.length
    } adet ${category.toLowerCase()} içeriği.`,
    keywords: `${category}, rap, müzik, haber, ${latestPost.attributes.tags.join(
      ", "
    )}`,
    openGraph: {
      title: `${category} - RapKology`,
      description: `${category} kategorisindeki en güncel içerikler.`,
      images: [
        {
          url: latestPost.attributes.img,
          width: 1200,
          height: 630,
          alt: `${category} kategorisi`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category} - RapKology`,
      description: `${category} kategorisindeki en güncel içerikler.`,
      images: [latestPost.attributes.img],
    },
  };
};

// Tag bazında metadata oluşturma
export const generateTagMetadata = (tag: string) => {
  const allPosts = posts as Post[];
  const tagPosts = allPosts.filter((post) =>
    post.attributes.tags.includes(tag)
  );

  if (tagPosts.length === 0) {
    return null;
  }

  const latestPost = tagPosts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )[0];

  return {
    title: `${tag} - RapKology`,
    description: `${tag} etiketli içerikler. ${
      tagPosts.length
    } adet ${tag.toLowerCase()} içeriği.`,
    keywords: `${tag}, rap, müzik, haber, ${latestPost.attributes.tags.join(
      ", "
    )}`,
    openGraph: {
      title: `${tag} - RapKology`,
      description: `${tag} etiketli içerikler.`,
      images: [
        {
          url: latestPost.attributes.img,
          width: 1200,
          height: 630,
          alt: `${tag} etiketi`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tag} - RapKology`,
      description: `${tag} etiketli içerikler.`,
      images: [latestPost.attributes.img],
    },
  };
};

// Ana sayfa için metadata oluşturma
export const generateHomePageMetadata = () => {
  const allPosts = posts as Post[];
  const trendPosts = allPosts.filter((post) => post.attributes.trends);
  const latestPost = allPosts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )[0];

  // En popüler kategorileri bulma
  const categoryCounts = allPosts.reduce((acc, post) => {
    post.attributes.category.forEach((category) => {
      acc[category] = (acc[category] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const topCategories = Object.entries(categoryCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([category]) => category);

  return {
    title: "RapKology - Türkçe Rap ve Dünya Müzik Haberleri",
    description: `Türkçe rap ve dünya müzik haberlerini takip edin. ${
      allPosts.length
    } adet güncel içerik, ${
      trendPosts.length
    } trend haber. ${topCategories.join(
      ", "
    )} kategorilerinde en güncel haberler.`,
    keywords:
      "türkçe rap, rap haberleri, müzik haberleri, hip hop, rap müzik, türkçe rap şarkıları, rap videoları",
    openGraph: {
      title: "RapKology - Türkçe Rap ve Dünya Müzik Haberleri",
      description: `Türkçe rap ve dünya müzik haberlerini takip edin. ${allPosts.length} adet güncel içerik.`,
      images: [
        {
          url: latestPost.attributes.img,
          width: 1200,
          height: 630,
          alt: "RapKology - Türkçe Rap ve Dünya Müzik Haberleri",
        },
      ],
      type: "website",
      siteName: "RapKology",
    },
    twitter: {
      card: "summary_large_image",
      title: "RapKology - Türkçe Rap ve Dünya Müzik Haberleri",
      description: `Türkçe rap ve dünya müzik haberlerini takip edin. ${allPosts.length} adet güncel içerik.`,
      images: [latestPost.attributes.img],
    },
    alternates: {
      canonical: "https://rapkology.com",
    },
  };
};

// Arama sayfası için metadata
export const generateSearchMetadata = (query: string) => {
  const allPosts = posts as Post[];
  const searchResults = allPosts.filter(
    (post) =>
      post.attributes.title.toLowerCase().includes(query.toLowerCase()) ||
      post.attributes.desc.toLowerCase().includes(query.toLowerCase()) ||
      post.attributes.tags.some((tag) =>
        tag.toLowerCase().includes(query.toLowerCase())
      )
  );

  return {
    title: `"${query}" Arama Sonuçları - RapKology`,
    description: `"${query}" için ${searchResults.length} sonuç bulundu. Türkçe rap ve müzik haberlerinde arama yapın.`,
    keywords: `${query}, arama, rap, müzik, haber, ${searchResults
      .slice(0, 5)
      .map((post) => post.attributes.tags.join(", "))
      .join(", ")}`,
    openGraph: {
      title: `"${query}" Arama Sonuçları - RapKology`,
      description: `"${query}" için ${searchResults.length} sonuç bulundu.`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `"${query}" Arama Sonuçları - RapKology`,
      description: `"${query}" için ${searchResults.length} sonuç bulundu.`,
    },
  };
};

// Site haritası için metadata
export const generateSitemapMetadata = () => {
  const allPosts = posts as Post[];

  return allPosts.map((post) => ({
    url: `https://rapkology.com/${post.attributes.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly" as const,
    priority: post.attributes.trends ? 0.8 : 0.6,
  }));
};

// RSS feed için metadata
export const generateRSSMetadata = () => {
  const allPosts = posts as Post[];
  const recentPosts = allPosts
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 20);

  return {
    title: "RapKology - Türkçe Rap ve Dünya Müzik Haberleri",
    description: "Türkçe rap ve dünya müzik haberlerini takip edin",
    url: "https://rapkology.com",
    feedUrl: "https://rapkology.com/rss.xml",
    items: recentPosts.map((post) => ({
      title: post.attributes.title,
      description: post.attributes.desc,
      url: `https://rapkology.com/${post.attributes.slug}`,
      date: post.createdAt,
      author: post.attributes.authors.join(", "),
      categories: post.attributes.tags,
    })),
  };
};
