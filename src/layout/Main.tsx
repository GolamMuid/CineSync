import { ReactNode } from "react";
import Nav from "../components/ui/Nav";

function Main({ children }: { children: ReactNode }) {
  return (
    <div className="w-full bg-black">
      <Nav />
      <div className="max-w-[1080px] m-auto">{children}</div>
    </div>
  );
}

export default Main;
