import { Metadata } from "next";
import { generatePostMetadata } from "@/utils/dynamicMetadata";
import posts from "@/data/posts.json";
import { Post } from "@/types/post";

interface PageProps {
  params: {
    slug: string;
  };
}

// Dinamik metadata oluşturma
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const metadata = generatePostMetadata(params.slug);

  if (!metadata) {
    return {
      title: "İçerik Bulunamadı - RapKology",
      description: "Aradığınız içerik bulunamadı.",
    };
  }

  return metadata;
}

// Static params oluşturma
export async function generateStaticParams() {
  const allPosts = posts as Post[];

  return allPosts.map((post) => ({
    slug: post.attributes.slug,
  }));
}

export default function PostPage({ params }: PageProps) {
  const allPosts = posts as Post[];
  const post = allPosts.find((p) => p.attributes.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">İçerik Bulunamadı</h1>
          <p className="text-gray-400">Aradığınız içerik bulunamadı.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            {post.attributes.authors.map((author, index) => (
              <span key={index} className="text-yellow-400 font-semibold">
                {author}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {post.attributes.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.attributes.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.attributes.category.map((category, index) => (
              <span
                key={index}
                className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold"
              >
                {category}
              </span>
            ))}
          </div>

          <time className="text-gray-400">
            {new Date(post.createdAt).toLocaleDateString("tr-TR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>

        <div className="mb-8">
          <img
            src={post.attributes.img}
            alt={post.attributes.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        <article className="prose prose-invert max-w-none">
          <div className="text-lg leading-relaxed whitespace-pre-line">
            {post.attributes.content}
          </div>
        </article>

        {/* SEO Info */}
        <div className="mt-12 p-6 bg-gray-900 rounded-lg">
          <h3 className="text-xl font-bold mb-4">SEO Bilgileri</h3>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Meta Title:</strong> {post.attributes.seo.metaTitle}
            </p>
            <p>
              <strong>Meta Description:</strong>{" "}
              {post.attributes.seo.metaDescription}
            </p>
            <p>
              <strong>Canonical URL:</strong> {post.attributes.seo.canonicalURL}
            </p>
            <p>
              <strong>Oluşturulma:</strong>{" "}
              {new Date(post.createdAt).toLocaleString("tr-TR")}
            </p>
            <p>
              <strong>Güncellenme:</strong>{" "}
              {new Date(post.updatedAt).toLocaleString("tr-TR")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
