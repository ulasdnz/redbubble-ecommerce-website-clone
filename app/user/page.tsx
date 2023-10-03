import FeaturedProducts from "@/components/pages/home/featured products";
import ExploreDesigns from "@/components/pages/home/explore designs";
import FeatureArtists from "@/components/pages/home/featured artists/index";
import ShopFanArt from "@/components/pages/home/shop fan art/index";
import FeatureBottom from "@/components/pages/home/features bottom/index";

export default async function Home() {
  return (
    <main className="relative -z-30">
      <div>
        
        <FeatureArtists />
        <ExploreDesigns />
        <FeaturedProducts />
        <ShopFanArt />
        <FeatureBottom />
      </div>
    </main>
  );
}
