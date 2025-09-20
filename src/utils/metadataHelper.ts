import { ComponentMetadata, AccessibilityData } from "@/types/metadata";

/**
 * Component Metadata Helper Functions
 * Bu utility fonksiyonları component metadata'larını yönetmek için kullanılır
 */

// SEO Meta Tags oluşturma
export const generateSEOTags = (metadata: ComponentMetadata) => {
  const { seo } = metadata;

  return {
    title: seo.title || metadata.name,
    description: seo.description || `${metadata.name} component`,
    keywords: seo.keywords?.join(", ") || "",
    ogTitle: seo.ogTitle || seo.title || metadata.name,
    ogDescription:
      seo.ogDescription || seo.description || `${metadata.name} component`,
    ogImage: seo.ogImage || "",
    canonical: seo.canonical || "",
  };
};

// Performance raporu oluşturma
export const generatePerformanceReport = (metadata: ComponentMetadata) => {
  const { performance, name } = metadata;

  return {
    component: name,
    metrics: {
      bundleSize: performance.bundleSize || "Unknown",
      renderTime: performance.renderTime || "Unknown",
      optimizationCount: performance.optimization.length,
      lazyLoading: performance.lazyLoading ? "Enabled" : "Disabled",
      preloading: performance.preloading ? "Enabled" : "Disabled",
    },
    recommendations: generateOptimizationRecommendations(metadata),
  };
};

// Optimizasyon önerileri
export const generateOptimizationRecommendations = (
  metadata: ComponentMetadata
) => {
  const recommendations: string[] = [];

  if (!metadata.performance.lazyLoading && metadata.name !== "Header") {
    recommendations.push(
      "Consider enabling lazy loading for better performance"
    );
  }

  if (
    !metadata.performance.preloading &&
    ["Header", "HeroSection"].includes(metadata.name)
  ) {
    recommendations.push(
      "Consider enabling preloading for critical components"
    );
  }

  if (metadata.dependencies.length > 5) {
    recommendations.push("Consider splitting component into smaller parts");
  }

  return recommendations;
};

// Accessibility raporu
export const generateAccessibilityReport = (metadata: ComponentMetadata) => {
  const { accessibility, name } = metadata;

  return {
    component: name,
    score: calculateAccessibilityScore(accessibility),
    features: {
      ariaLabels: accessibility.ariaLabels?.length || 0,
      keyboardNavigation: accessibility.keyboardNavigation
        ? "Supported"
        : "Not Supported",
      screenReader: accessibility.screenReader
        ? "Compatible"
        : "Not Compatible",
      colorContrast: accessibility.colorContrast || "Unknown",
      focusManagement: accessibility.focusManagement
        ? "Implemented"
        : "Not Implemented",
    },
    recommendations: generateAccessibilityRecommendations(metadata),
  };
};

// Accessibility skoru hesaplama
const calculateAccessibilityScore = (accessibility: AccessibilityData) => {
  let score = 0;
  const maxScore = 5;

  if ((accessibility.ariaLabels?.length || 0) > 0) score++;
  if (accessibility.keyboardNavigation) score++;
  if (accessibility.screenReader) score++;
  if (accessibility.colorContrast?.includes("AAA")) score++;
  if (accessibility.focusManagement) score++;

  return `${score}/${maxScore}`;
};

// Accessibility önerileri
const generateAccessibilityRecommendations = (metadata: ComponentMetadata) => {
  const recommendations: string[] = [];
  const { accessibility } = metadata;

  if (!accessibility.keyboardNavigation) {
    recommendations.push("Implement keyboard navigation support");
  }

  if (!accessibility.screenReader) {
    recommendations.push("Add screen reader compatibility");
  }

  if (!accessibility.focusManagement) {
    recommendations.push("Implement proper focus management");
  }

  if (!accessibility.colorContrast?.includes("AAA")) {
    recommendations.push("Improve color contrast to AAA level");
  }

  return recommendations;
};

// Component dokümantasyonu oluşturma
export const generateComponentDocumentation = (metadata: ComponentMetadata) => {
  return `
# ${metadata.name} Component

## Overview
${metadata.description}

## Version
${metadata.version}

## Features
${metadata.features.map((feature) => `- ${feature}`).join("\n")}

## Dependencies
${metadata.dependencies.map((dep) => `- ${dep}`).join("\n")}

## Performance
- Bundle Size: ${metadata.performance.bundleSize || "Unknown"}
- Render Time: ${metadata.performance.renderTime || "Unknown"}
- Optimizations: ${metadata.performance.optimization.length} applied

## Accessibility
- Score: ${generateAccessibilityReport(metadata).score}
- Keyboard Navigation: ${
    metadata.accessibility.keyboardNavigation ? "Yes" : "No"
  }
- Screen Reader: ${metadata.accessibility.screenReader ? "Yes" : "No"}

## SEO
- Title: ${metadata.seo.title || "Not set"}
- Description: ${metadata.seo.description || "Not set"}
- Keywords: ${metadata.seo.keywords?.join(", ") || "Not set"}

## Last Modified
${metadata.lastModified}
`;
};

// Proje geneli istatistikler
export const generateProjectStats = (allMetadata: ComponentMetadata[]) => {
  const totalComponents = allMetadata.length;
  const responsiveComponents = allMetadata.filter((m) => m.responsive).length;
  const totalFeatures = allMetadata.reduce(
    (acc, m) => acc + m.features.length,
    0
  );
  const totalDependencies = allMetadata.reduce(
    (acc, m) => acc + m.dependencies.length,
    0
  );

  return {
    totalComponents,
    responsiveComponents,
    responsivePercentage: Math.round(
      (responsiveComponents / totalComponents) * 100
    ),
    averageFeaturesPerComponent: Math.round(totalFeatures / totalComponents),
    averageDependenciesPerComponent: Math.round(
      totalDependencies / totalComponents
    ),
    componentsWithSEO: allMetadata.filter((m) => m.seo.title).length,
    componentsWithAccessibility: allMetadata.filter(
      (m) => m.accessibility.keyboardNavigation
    ).length,
  };
};
