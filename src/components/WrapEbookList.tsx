import { IEBook } from "@/@types/model";
import EBookCard from "@/components/EBookCard";

type EbookListProps = {
  list: IEBook[];
  loading: boolean;
};

export default function WrapEbookList({ list, loading }: EbookListProps) {
  return (
    <div>
      <div className="grid grid-cols-6 gap-2 w-full py-4">
        {!loading
          ? list.map((book) => (
              <div
                className="col-span-2 md:col-span-4 lg:col-span-1"
                key={book.id}
              >
                <EBookCard book={book} />
              </div>
            ))
          : null}
      </div>
      {loading ? (
        <div className="grid grid-cols-6 gap-2 w-full py-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              className="col-span-2 md:col-span-4 lg:col-span-1 h-[32rem] bg-gradient-to-r from-neutral-900 rounded"
              key={index}
            ></div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
