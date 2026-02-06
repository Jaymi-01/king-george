import HeroSection from "@/components/HeroSection";
import CategoryExplore from "@/components/CategoryExplore";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <CategoryExplore />
      <ReviewsSection />
      <FAQSection />
    </div>
  );
}
