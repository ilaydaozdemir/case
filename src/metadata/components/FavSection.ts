import { ComponentMetadata } from '@/types/metadata';

export const FavSectionMetadata: ComponentMetadata = {
  name: 'FavSection',
  description: 'Favorites slider with custom touch navigation and wheel scrolling',
  version: '1.0.0',
  author: 'RapKology Team',
  lastModified: '2024-12-15',
  dependencies: [
    'FavFrame component',
    'React useState',
    'React useRef',
    'React useEffect',
    'Custom touch handlers'
  ],
  features: [
    'Custom horizontal slider',
    'Touch gesture support',
    'Mouse wheel navigation',
    'Smooth transitions',
    'Keyboard navigation',
    'Auto-play functionality',
    'Responsive design',
    'Touch action optimization'
  ],
  responsive: true,
  seo: {
    title: 'RapKology - Favori İçerikler',
    description: 'En sevilen rap içerikleri ve favori haberler',
    keywords: ['favori', 'beğenilen', 'popüler', 'rap'],
    ogTitle: 'RapKology Favori İçerikleri',
    ogDescription: 'En sevilen rap içeriklerini keşfedin'
  },
  performance: {
    bundleSize: '~12KB',
    renderTime: '<40ms',
    optimization: [
      'Custom slider implementation',
      'Touch event optimization',
      'Passive event listeners',
      'Smooth CSS transitions',
      'Memory leak prevention'
    ],
    lazyLoading: true,
    preloading: false
  },
  accessibility: {
    ariaLabels: ['Favori içerikler', 'Slider'],
    keyboardNavigation: true,
    screenReader: true,
    colorContrast: 'AAA compliant',
    focusManagement: true
  }
};
