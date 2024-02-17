import ExploreAllEBook from "@/components/ExploreAllEBook";
import ExploreCourses from "@/components/ExploreCourses";
import LatestNews from "@/components/LatestNews";
import MainHeader from "@/components/MainHeader";
import { useEffect } from "react";

export default function Landing() {
  useEffect(() => {
    document.title = "E-Book"; // TODO:: Temp mutate title
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <MainHeader />
      <LatestNews />
      <ExploreCourses />
      <ExploreAllEBook />
    </div>
  );
}
