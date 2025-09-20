export { HeaderMetadata } from "./components/Header";
export { HeroSectionMetadata } from "./components/HeroSection";
export { TrendSectionMetadata } from "./components/TrendSection";
export { FavSectionMetadata } from "./components/FavSection";
export { ExploreSectionMetadata } from "./components/ExploreSection";

import { ComponentMetadata } from "@/types/metadata";
import { HeaderMetadata } from "./components/Header";
import { HeroSectionMetadata } from "./components/HeroSection";
import { TrendSectionMetadata } from "./components/TrendSection";
import { FavSectionMetadata } from "./components/FavSection";
import { ExploreSectionMetadata } from "./components/ExploreSection";

export const ComponentMetadataRegistry: Record<string, ComponentMetadata> = {
  Header: HeaderMetadata,
  HeroSection: HeroSectionMetadata,
  TrendSection: TrendSectionMetadata,
  FavSection: FavSectionMetadata,
  ExploreSection: ExploreSectionMetadata,
};

export const getComponentMetadata = (
  componentName: string
): ComponentMetadata | null => {
  return ComponentMetadataRegistry[componentName] || null;
};

export const getAllComponents = (): string[] => {
  return Object.keys(ComponentMetadataRegistry);
};

export const getComponentsByFeature = (
  feature: string
): ComponentMetadata[] => {
  return Object.values(ComponentMetadataRegistry).filter((metadata) =>
    metadata.features.includes(feature)
  );
};

export const getPerformanceMetrics = () => {
  return Object.values(ComponentMetadataRegistry).map((metadata) => ({
    name: metadata.name,
    bundleSize: metadata.performance.bundleSize,
    renderTime: metadata.performance.renderTime,
    optimization: metadata.performance.optimization.length,
  }));
};
