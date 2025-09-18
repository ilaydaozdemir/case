import ExploreSection from "@/components/ExploreSection";
import FavSection from "@/components/FavSection";
import HeroSection from "@/components/HeroSection";
import HeroSectionPromotion from "@/components/HeroSectionPromotion";
import TrendSection from "@/components/TrendSection";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden", maxWidth: "100vw" }}>
      <div style={{ overflowX: "hidden", maxWidth: "100vw" }}>
        <HeroSection />
        <HeroSectionPromotion />
        <TrendSection />
        <FavSection />
        <ExploreSection />
      </div>
    </div>
  );
}
