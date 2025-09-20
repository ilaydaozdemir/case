export interface ComponentMetadata {
  name: string;
  description: string;
  version: string;
  author: string;
  lastModified: string;
  dependencies: string[];
  features: string[];
  responsive: boolean;
  seo: SEOData;
  performance: PerformanceData;
  accessibility: AccessibilityData;
}

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export interface PerformanceData {
  bundleSize?: string;
  renderTime?: string;
  optimization: string[];
  lazyLoading?: boolean;
  preloading?: boolean;
}

export interface AccessibilityData {
  ariaLabels?: string[];
  keyboardNavigation?: boolean;
  screenReader?: boolean;
  colorContrast?: string;
  focusManagement?: boolean;
}
