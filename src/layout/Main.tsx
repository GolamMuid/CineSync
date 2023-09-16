// import { ReactNode } from "react";
import Nav from "../components/ui/Nav";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="w-full bg-black text-white min-h-screen">
      <Nav />
      <div className="max-w-[1080px] m-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
