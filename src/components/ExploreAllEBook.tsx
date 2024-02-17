import Pagination from "@/components/Pagination";
import TemplateSections from "@/components/TemplateSections";

export default function ExploreAllEBook() {
  return (
    <TemplateSections title="Explore All EBook">
      <div className="grid grid-cols-12">
        <div className="col-span-2">{/* <EBookCard /> */}</div>
      </div>
      <div className="w-full flex justify-center my-4">
        <Pagination />
      </div>
    </TemplateSections>
  );
}
