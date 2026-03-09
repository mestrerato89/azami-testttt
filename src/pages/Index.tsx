import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CollectionGrid from "@/components/CollectionGrid";
import BestSellers from "@/components/BestSellers";
import BrandStory from "@/components/BrandStory";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CollectionGrid />
        <BestSellers />
        <BrandStory />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
