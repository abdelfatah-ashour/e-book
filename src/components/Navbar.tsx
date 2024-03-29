import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="">
      <div className="w-full lg:container mx-auto flex justify-between items-center py-4 h-32">
        <div>
          <img
            src="http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg"
            alt="big ramy"
            loading="lazy"
            className="max-h-20"
          />
        </div>
        <button>Signin or singup</button>
      </div>
      <div className="w-full bg-neutral-900">
        <div className="lg:container mx-auto bg-inherit flex flex-nowrap justify-between">
          <nav className="flex flex-nowrap gap-x-6 py-2 bg-inherit">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn("font-light capitalize bg-inherit active:text-green-600", {
                  "text-green-600 font-semibold": isActive,
                })
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                cn("font-light capitalize bg-inherit active:text-green-600", {
                  "text-green-600 font-semibold": isActive,
                })
              }
            >
              news
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                cn("font-light capitalize bg-inherit active:text-green-600", {
                  "text-green-600 font-semibold": isActive,
                })
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/e-book"
              className={({ isActive }) =>
                cn("font-light capitalize bg-inherit active:text-green-600", {
                  "text-green-600 font-semibold": isActive,
                })
              }
            >
              E Book
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn("font-light capitalize bg-inherit active:text-green-600", {
                  "text-green-600 font-semibold": isActive,
                })
              }
            >
              Contact Us
            </NavLink>
          </nav>
          <button>Card</button>
        </div>
      </div>
    </div>
  );
}
