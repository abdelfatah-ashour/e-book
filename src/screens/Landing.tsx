import ExploreAllEBook from "@/components/ExploreAllEBook";
import ExploreCourses from "@/components/ExploreCourses";
import LatestNews from "@/components/LatestNews";
import MainHeader from "@/components/MainHeader";

export default function Landing() {
  return (
    <div className="flex flex-col gap-6">
      <MainHeader />
      <LatestNews />
      <ExploreCourses />
      <ExploreAllEBook />
    </div>
  );
}
