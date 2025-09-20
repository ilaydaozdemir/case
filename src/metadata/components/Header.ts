import { ComponentMetadata } from '@/types/metadata';

export const HeaderMetadata: ComponentMetadata = {
  name: 'Header',
  description: 'Responsive navigation header with logo, menu, search and login functionality',
  version: '1.0.0',
  author: 'RapKology Team',
  lastModified: '2024-12-15',
  dependencies: [
    'Next.js Image',
    'React useState',
    'Next.js Link',
    'Next.js usePathname'
  ],
  features: [
    'Responsive navigation menu',
    'Mobile hamburger menu',
    'Logo with optimized aspect ratio',
    'Search functionality',
    'Login button',
    'Active page highlighting',
    'Backdrop blur effect',
    'Fixed positioning'
  ],
  responsive: true,
  seo: {
    title: 'RapKology - Navigation',
    description: 'Navigate through Turkish and world rap music news and content',
    keywords: ['navigation', 'menu', 'rap', 'music', 'news'],
    ogTitle: 'RapKology Navigation',
    ogDescription: 'Access Turkish rap and world music content through our responsive navigation'
  },
  performance: {
    bundleSize: '~15KB',
    renderTime: '<50ms',
    optimization: [
      'Next.js Image optimization',
      'CSS-in-JS for dynamic styles',
      'Fixed positioning for performance',
      'Backdrop filter optimization'
    ],
    lazyLoading: false,
    preloading: true
  },
  accessibility: {
    ariaLabels: ['Ana menü', 'Ara', 'Menüyü Aç/Kapat'],
    keyboardNavigation: true,
    screenReader: true,
    colorContrast: 'AAA compliant',
    focusManagement: true
  }
};
