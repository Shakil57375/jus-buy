import Categories from "@/components/Ui/Categories";
import CategorySlider from "@/components/Ui/CategorySlider";
import ExploreProducts from "@/components/Ui/ExploreProducts";
import NewArrival from "@/components/Ui/NewArrival";
import HeroWithSidebar from "@/components/Ui/SidebarAndBanner";

export default function Home() {
  return (
    <div>
      <HeroWithSidebar />
      <Categories />
      <CategorySlider />
      <NewArrival/>
      <ExploreProducts/>
    </div>
  );
}
