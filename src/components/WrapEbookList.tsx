import { IEBook } from "@/@types/model";
import EBookCard from "@/components/EBookCard";

type EbookListProps = {
  list: IEBook[];
  loading: boolean;
};

export default function WrapEbookList({ list, loading }: EbookListProps) {
  return (
    <div className="grid grid-cols-6 gap-2 w-full py-4">
      {!loading ? (
        list.map((book) => (
          <div className="col-span-2 md:col-span-4 lg:col-span-1" key={book.id}>
            <EBookCard book={book} />
          </div>
        ))
      ) : (
        <div className="col-span-2 md:col-span-4 lg:col-span-2 h-[32rem] bg-neutral-500 rounded"></div>
      )}
    </div>
  );
}
