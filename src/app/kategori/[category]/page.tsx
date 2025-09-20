import { Metadata } from 'next';
import { generateCategoryMetadata } from '@/utils/dynamicMetadata';
import posts from '@/data/posts.json';
import { Post } from '@/types/post';
import Link from 'next/link';
import Image from 'next/image';

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

// Dinamik metadata oluşturma
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const metadata = generateCategoryMetadata(resolvedParams.category);
  
  if (!metadata) {
    return {
      title: 'Kategori Bulunamadı - RapKology',
      description: 'Aradığınız kategori bulunamadı.',
    };
  }
  
  return metadata;
}

// Static params oluşturma
export async function generateStaticParams() {
  const allPosts = posts as Post[];
  const categories = Array.from(
    new Set(allPosts.flatMap(post => post.attributes.category))
  );
  
  return categories.map((category) => ({
    category: category,
  }));
}

export default async function CategoryPage({ params }: PageProps) {
  const allPosts = posts as Post[];
  const resolvedParams = await params;
  const categoryPosts = allPosts.filter(post => 
    post.attributes.category.includes(resolvedParams.category)
  );
  
  if (categoryPosts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Kategori Bulunamadı</h1>
          <p className="text-gray-400">Aradığınız kategori bulunamadı.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {resolvedParams.category}
          </h1>
          <p className="text-gray-400 text-lg">
            {categoryPosts.length} adet {resolvedParams.category.toLowerCase()} içeriği
          </p>
        </header>
        
        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryPosts.map((post) => (
            <article key={post._id} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
              <Link href={`/${post.attributes.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={post.attributes.img}
                    alt={post.attributes.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {post.attributes.authors.map((author, index) => (
                      <span key={index} className="text-yellow-400 text-sm font-semibold">
                        {author}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-lg font-bold mb-2 line-clamp-2">
                    {post.attributes.title}
                  </h2>
                  
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                    {post.attributes.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.attributes.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <time className="text-gray-500 text-xs">
                    {new Date(post.createdAt).toLocaleDateString('tr-TR')}
                  </time>
                </div>
              </Link>
            </article>
          ))}
        </div>
        
        {/* SEO Info */}
        <div className="mt-12 p-6 bg-gray-900 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Kategori SEO Bilgileri</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Kategori:</strong> {resolvedParams.category}</p>
            <p><strong>Toplam İçerik:</strong> {categoryPosts.length}</p>
            <p><strong>Son Güncelleme:</strong> {new Date().toLocaleString('tr-TR')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
