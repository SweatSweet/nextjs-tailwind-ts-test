import { NavBar } from "./NavBar";
import { Extra } from "./Extra";
import { ControlBoard } from "./ControlBoard";

export const Header = () => {
  return (
    <div className="p-[24px] m-0 shadow-md bg-white border-b border-opacity-[0.1]">
      <div className="flex items-center justify-between w-100 pb-[30px] md:w-100">
        <NavBar className="flex-[561.31]" />
        <Extra className="flex-[902.69]" />
      </div>
      <ControlBoard className={"md:w-100"} />
    </div>
  );
};
