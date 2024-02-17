import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Bar from "@/components/Bar";
import { Separator } from "./ui/separator";

export default function Layout() {
  return (
    <>
      <Bar />
      <Separator className="bg-neutral-600" />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
