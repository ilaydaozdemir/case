import { ComponentMetadata } from '@/types/metadata';

export const ExploreSectionMetadata: ComponentMetadata = {
  name: 'ExploreSection',
  description: 'Main explore section with category filters, dynamic content, newsletter and social media',
  version: '1.0.0',
  author: 'RapKology Team',
  lastModified: '2024-12-15',
  dependencies: [
    'React useState',
    'React useMemo',
    'Next.js Image',
    'JSON data (posts.json)',
    'Post interface'
  ],
  features: [
    'Category filtering system',
    'Dynamic content display',
    'Email newsletter signup',
    'Social media integration',
    'Responsive button layout',
    'Mobile horizontal scroll',
    'Navigation links',
    'Copyright information',
    'Fallback content handling'
  ],
  responsive: true,
  seo: {
    title: 'RapKology - Keşfet',
    description: 'Kategorilere göre rap içeriklerini keşfedin ve güncel haberleri takip edin',
    keywords: ['keşfet', 'kategoriler', 'türk rap', 'yabancı rap', 'haberler', 'newsletter'],
    ogTitle: 'RapKology Keşfet',
    ogDescription: 'Rap kategorilerini keşfedin ve güncel haberleri takip edin',
    ogImage: '/images/hero1.png'
  },
  performance: {
    bundleSize: '~25KB',
    renderTime: '<60ms',
    optimization: [
      'useMemo for filtered content',
      'Responsive image optimization',
      'Horizontal scroll optimization',
      'Touch action handling',
      'Memory efficient filtering'
    ],
    lazyLoading: true,
    preloading: false
  },
  accessibility: {
    ariaLabels: ['Keşfet', 'Kategoriler', 'Newsletter', 'Sosyal medya'],
    keyboardNavigation: true,
    screenReader: true,
    colorContrast: 'AAA compliant',
    focusManagement: true
  }
};
