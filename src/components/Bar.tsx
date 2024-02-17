import { NavLink } from "react-router-dom";

export default function Bar() {
  return (
    <div className="lg:container mx-auto flex justify-end py-2">
      <NavLink to="#" className={"text-white font-medium"}>
        Arabic
      </NavLink>
    </div>
  );
}
