import { ComponentMetadata } from '@/types/metadata';

export const HeroSectionMetadata: ComponentMetadata = {
  name: 'HeroSection',
  description: 'Main hero slider with dynamic content, navigation arrows and pagination',
  version: '1.0.0',
  author: 'RapKology Team',
  lastModified: '2024-12-15',
  dependencies: [
    'Swiper.js',
    'Next.js Image',
    'React useState',
    'CSS-in-JS'
  ],
  features: [
    'Image slider with Swiper.js',
    'Two dynamic slide contents',
    'Responsive text scaling',
    'Navigation arrows (desktop)',
    'Pagination dots',
    'Mobile touch support',
    'Keyboard navigation',
    'Texture overlay effects',
    'Vector frame effect'
  ],
  responsive: true,
  seo: {
    title: 'RapKology - Dünya Rap Trendleri',
    description: 'Türkçe rap ve dünya müzik haberlerini takip edin. En güncel rap trendleri ve haberleri.',
    keywords: ['rap', 'türkçe rap', 'müzik haberleri', 'trendler', 'hip hop'],
    ogTitle: 'RapKology - Dünya Rap Trendleri',
    ogDescription: 'En güncel Türkçe rap ve dünya müzik haberlerini keşfedin',
    ogImage: '/images/hero1.png'
  },
  performance: {
    bundleSize: '~45KB (with Swiper)',
    renderTime: '<100ms',
    optimization: [
      'Swiper.js lazy loading',
      'Image optimization with Next.js',
      'CSS transitions for smooth animations',
      'Touch action optimization',
      'Passive event listeners'
    ],
    lazyLoading: true,
    preloading: true
  },
  accessibility: {
    ariaLabels: ['Önceki', 'Sonraki', 'Slider'],
    keyboardNavigation: true,
    screenReader: true,
    colorContrast: 'AAA compliant',
    focusManagement: true
  }
};
