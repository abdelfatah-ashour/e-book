import CardFooter from "@/components/CardFooter";
import { useBookDetails } from "@/services/bookDetails";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EBookDetails() {
  const { data: book, error, fetchData } = useBookDetails();
  const params = useParams();

  useEffect(() => {
    if (params.id) fetchData(params.id);
  }, [fetchData, params.id]);

  useEffect(() => {
    document.title = `#${params.id}E-Book`; // TODO:: Temp mutate title
  }, [params.id]);

  return (
    <div className="lg:container mx-auto px-4 lg:px-0">
      {book ? (
        <div className="grid grid-cols-2">
          <div className="col-span-2 lg:col-span-1 flex flex-col ">
            <h3 className="text-4xl font-extrabold my-[5rem]">
              {book.attributes.book.title}
            </h3>
            <div className="my-4">
              <span className="uppercase font-light text-2xl">
                {book?.attributes.currency}
              </span>
              <span className="font-extrabold text-4xl ml-3">
                {book.attributes.price}
              </span>
              <div className="w-full lg:w-1/2 my-[2rem]">
                <CardFooter />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {error ? <p>E-Book Not found</p> : null}
    </div>
  );
}
