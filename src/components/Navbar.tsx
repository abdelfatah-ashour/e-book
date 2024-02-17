import { Link, NavLink } from "react-router-dom";

// import { ReactComponent as Logout } from "@/assets/images/svg/logout.svg";

export default function Navbar() {
  return (
    <div className="">
      <div className="w-full lg:container mx-auto flex justify-between items-center py-4 h-32">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <button>Signin or singup</button>
      </div>
      <div className="w-full bg-neutral-900">
        <div className="lg:container mx-auto bg-inherit flex flex-nowrap justify-between">
          <nav className="flex flex-nowrap gap-x-6 py-2 bg-inherit">
            <NavLink
              to="/"
              className="font-light capitalize bg-inherit active:text-green-600"
            >
              Home
            </NavLink>
            <NavLink
              to="/"
              className="font-light capitalize bg-inherit active:text-green-600"
            >
              news
            </NavLink>
            <NavLink
              to="/"
              className="font-light capitalize bg-inherit active:text-green-600"
            >
              Courses
            </NavLink>
            <NavLink
              to="/e-book"
              className="font-light capitalize bg-inherit active:text-green-600"
            >
              E Book
            </NavLink>
            <NavLink
              to="/"
              className="font-light capitalize bg-inherit active:text-green-600"
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
