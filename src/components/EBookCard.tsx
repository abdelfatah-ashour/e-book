import { IEBook } from "@/@types/model";
import { useNavigate } from "react-router-dom";
import CardFooter from "./CardFooter";

type EBookCardProps = {
  book: IEBook;
};

export default function EBookCard({ book }: EBookCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className="w-full min-h-[32rem] rounded cursor-pointer"
      onClick={() => {
        navigate(`/e-book/${book.id}`);
      }}
    >
      <div className="h-[16rem] bg-white">
        <img className="w-full h-full" src={book.attributes.book.image_url} />
      </div>
      <div className="flex flex-col gap-y-2 p-3 bg-neutral-900">
        <h2 className="font-extrabold">{book.attributes.book.title}</h2>
        <div>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span>5</span>
        </div>
        <div className="my-4">
          <span className="uppercase font-light">
            {book.attributes.currency}
          </span>
          <span className="font-extrabold text-2xl ml-3">
            {book.attributes.price}
          </span>
        </div>
        <CardFooter />
      </div>
    </div>
  );
}
