import { NextRequest, NextResponse } from 'next/server';
import { 
  getAllSEOMetadata, 
  generatePostMetadata, 
  generateCategoryMetadata,
  generateTagMetadata,
  generateHomePageMetadata,
  generateSearchMetadata,
  generateSitemapMetadata,
  generateRSSMetadata
} from '@/utils/dynamicMetadata';

// Tüm post metadata'larını getir
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const slug = searchParams.get('slug');
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const query = searchParams.get('query');
    
    switch (type) {
      case 'post':
        if (!slug) {
          return NextResponse.json({ error: 'Slug is required for post metadata' }, { status: 400 });
        }
        const postMetadata = generatePostMetadata(slug);
        if (!postMetadata) {
          return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: postMetadata });
        
      case 'category':
        if (!category) {
          return NextResponse.json({ error: 'Category is required for category metadata' }, { status: 400 });
        }
        const categoryMetadata = generateCategoryMetadata(category);
        if (!categoryMetadata) {
          return NextResponse.json({ error: 'Category not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: categoryMetadata });
        
      case 'tag':
        if (!tag) {
          return NextResponse.json({ error: 'Tag is required for tag metadata' }, { status: 400 });
        }
        const tagMetadata = generateTagMetadata(tag);
        if (!tagMetadata) {
          return NextResponse.json({ error: 'Tag not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: tagMetadata });
        
      case 'search':
        if (!query) {
          return NextResponse.json({ error: 'Query is required for search metadata' }, { status: 400 });
        }
        const searchMetadata = generateSearchMetadata(query);
        return NextResponse.json({ success: true, data: searchMetadata });
        
      case 'home':
        const homeMetadata = generateHomePageMetadata();
        return NextResponse.json({ success: true, data: homeMetadata });
        
      case 'sitemap':
        const sitemapMetadata = generateSitemapMetadata();
        return NextResponse.json({ success: true, data: sitemapMetadata });
        
      case 'rss':
        const rssMetadata = generateRSSMetadata();
        return NextResponse.json({ success: true, data: rssMetadata });
        
      case 'all':
      default:
        const allMetadata = getAllSEOMetadata();
        return NextResponse.json({ success: true, data: allMetadata });
    }
  } catch (error) {
    console.error('Metadata API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}

// Metadata istatistikleri
export async function POST(request: NextRequest) {
  try {
    const allMetadata = getAllSEOMetadata();
    
    // İstatistikleri hesapla
    const stats = {
      totalPosts: allMetadata.length,
      categories: Array.from(new Set(allMetadata.flatMap(post => post.category))),
      tags: Array.from(new Set(allMetadata.flatMap(post => post.tags))),
      authors: Array.from(new Set(allMetadata.flatMap(post => post.authors))),
      recentPosts: allMetadata
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 5),
      trendPosts: allMetadata.filter(post => post.tags.includes('trends')),
      seoCompliance: {
        withTitle: allMetadata.filter(post => post.seo.metaTitle).length,
        withDescription: allMetadata.filter(post => post.seo.metaDescription).length,
        withCanonical: allMetadata.filter(post => post.seo.canonicalURL).length,
      }
    };
    
    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    console.error('Metadata Stats Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}
