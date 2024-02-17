import { cn } from "@/lib/utils";

export default function Pagination() {
  return (
    <div className="flex flex-nowrap">
      <button className="underline text-white border-0 capitalize">
        previous
      </button>
      <div className="flex flex-nowrap gap-2 mx-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <span
            key={index}
            className={cn("text-sm p-3", {
              "border border-green-600 rounded": index === 0, // TODO:: active paginate button while active current page..
            })}
          >
            {index + 1}
          </span>
        ))}
      </div>
      <button className="underline text-white border-0 capitalize">next</button>
    </div>
  );
}
