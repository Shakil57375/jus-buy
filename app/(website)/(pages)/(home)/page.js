import Categories from "@/components/Ui/Categories";
import CategorySlider from "@/components/Ui/CategorySlider";
import HeroWithSidebar from "@/components/Ui/SidebarAndBanner";

export default function Home() {
  return (
    <div>
      <HeroWithSidebar />
      <Categories />
      <CategorySlider />
    </div>
  );
}
