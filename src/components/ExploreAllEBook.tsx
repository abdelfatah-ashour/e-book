import Pagination from "@/components/Pagination";
import TemplateSections from "@/components/TemplateSections";
import { useListEBook } from "@/services/listEBook";
import EBookCard from "./EBookCard";

export default function ExploreAllEBook() {
  const { data, loaded } = useListEBook();
  return (
    <TemplateSections title="Explore All EBook">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          {loaded
            ? data
                .slice(0, 4)
                .map((book) => <EBookCard book={book} key={book.id} />)
            : null}
        </div>
      </div>
      <div className="w-full flex justify-center my-4">
        <Pagination />
      </div>
    </TemplateSections>
  );
}
