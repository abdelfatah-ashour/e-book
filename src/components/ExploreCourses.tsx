import TemplateSections from "./TemplateSections";

export default function ExploreCourses() {
  return (
    <TemplateSections title="explore our courses">
      <div className="w-full grid grid-cols-12 gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            className={
              "col-span-12 md:col-span-6 lg:col-span-3 min-h-[20rem] rounded relative flex flex-col items-start gap-4 bg-gray-400 p-4"
            }
            key={index} // TODO:: recommended to extract key by unique ID not index
          >
            <h4 className="bg-inherit text-3xl capitalize font-extrabold">
              flexibility training
            </h4>
            <p className="text-xs bg-inherit">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              ea.
            </p>
            <button className="p-2 font-semibold text-center capitalize bg-green-600 text-xs">
              see all
            </button>
          </div>
        ))}
      </div>
    </TemplateSections>
  );
}
