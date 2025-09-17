import FavSection from "@/components/FavSection";
import HeroSection from "@/components/HeroSection";
import HeroSectionPromotion from "@/components/HeroSectionPromotion";
import TrendSection from "@/components/TrendSection";

export default function Home() {
  return (
    <div>
      <div>
        <HeroSection />
        <HeroSectionPromotion/>
        <TrendSection/>
        <FavSection/>
      </div>
    </div>
  );
}
