import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-[8rem]">
      <div className="lg:container mx-auto px-4 lg:px-0 bg-inherit">
        <div className="grid grid-cols-3  items-center my-3">
          <div className="col-span-1 lg:col-span-1">Logo</div>
          <div className="col-span-3 lg:col-span-2 flex justify-between">
            <h2>
              Join our <br /> news letter
            </h2>
            <div className="border border-neutral-600 rounded overflow-hidden">
              <input
                type="email"
                className="border-0 outline-none focus:border-0 focus:outline-none flex-1 min-w-[12rem] lg:min-w-[20rem] bg-inherit px-2"
              />
              <button className="h-full bg-green-600 px-4 text-black font-bold text-xs">
                subscribe
              </button>
            </div>
          </div>
        </div>
        <Separator className="my-10 bg-neutral-600" />
        <div className="grid grid-cols-12">
          <div className="col-span-6 lg:col-span-3 flex flex-col gap-4">
            <p className="text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              quas.
            </p>
            <span className="capitalize font-medium">follow us on</span>
            <div className="flex flex-nowrap gap-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  className="w-10 h-10 rounded-full bg-green-600"
                  key={index}
                ></div>
              ))}
            </div>
          </div>
          <ul className="list-none flex flex-col gap-6 col-span-6 lg:col-span-3">
            <li>
              <NavLink to="#" className="capitalize font-light">
                News
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="capitalize font-light">
                Tournamets
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="capitalize font-light">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/e-book" className="capitalize font-light">
                E-Book
              </NavLink>
            </li>
          </ul>
          <ul className="list-none flex flex-col gap-6 col-span-6 lg:col-span-3">
            <li>
              <NavLink to="#" className="capitalize font-light">
                privacy policies
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="capitalize font-light">
                terms & conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="capitalize font-light">
                contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
