import { ComponentMetadata } from '@/types/metadata';

export const TrendSectionMetadata: ComponentMetadata = {
  name: 'TrendSection',
  description: 'Trending content section with responsive grid layout and dynamic posts',
  version: '1.0.0',
  author: 'RapKology Team',
  lastModified: '2024-12-15',
  dependencies: [
    'TrendFrame component',
    'Next.js Image',
    'JSON data'
  ],
  features: [
    'Dynamic trending posts',
    'Responsive grid layout',
    'Author display with avatars',
    'Interactive hover effects',
    'Custom button styling',
    'Mobile-optimized layout',
    'JSON data integration'
  ],
  responsive: true,
  seo: {
    title: 'RapKology - Trend İçerikler',
    description: 'En popüler rap içerikleri ve trend haberleri',
    keywords: ['trend', 'popüler', 'rap içerikleri', 'güncel'],
    ogTitle: 'RapKology Trend İçerikleri',
    ogDescription: 'En popüler rap içeriklerini keşfedin'
  },
  performance: {
    bundleSize: '~8KB',
    renderTime: '<30ms',
    optimization: [
      'Grid layout optimization',
      'Image lazy loading',
      'CSS transitions',
      'Responsive font scaling'
    ],
    lazyLoading: true,
    preloading: false
  },
  accessibility: {
    ariaLabels: ['Trend içerikler'],
    keyboardNavigation: true,
    screenReader: true,
    colorContrast: 'AAA compliant',
    focusManagement: true
  }
};
