import { cn } from "@/lib/utils";
import TemplateSections from "./TemplateSections";

export default function LatestNews() {
  return (
    <TemplateSections title="latest news">
      <div className="w-full grid grid-cols-12 gap-3">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            className={cn(
              "col-span-12 md:col-span-6 lg:col-span-3 min-h-[25rem] rounded relative flex flex-col justify-end  bg-gray-400 p-4",
              {
                "col-span-12 lg:col-span-4": index < 3,
              }
            )}
            key={index}
          >
            <span className="rounded-xl px-1 bg-green-400 text-slate-50 self-start mb-3">
              Topic {index + 1}
            </span>
            <span className="bg-inherit px-1">Blog {index + 1}</span>
          </div>
        ))}
      </div>
    </TemplateSections>
  );
}
