import Image from "next/image";

import { NavItem } from "./NavItem";

import LogoDutch from "@/images/LogoDutch.svg";

interface Props {
  className?: string;
}

export const NavBar = (props: Props) => {
  return (
    <div className={`p-0 m-0 flex items-center ${props.className}`}>
      <Image
        src={LogoDutch}
        alt="Logo Dutch"
        width={145.31}
        className="p-0 m-0 h-[36px]"
      ></Image>
      <div className="px-[32px] grid grid-rows-1 grid-flow-col gap-x-[32px]">
        <NavItem text="Dashboard" selected={true} />
        <NavItem text="Create" selected={false} />
        <NavItem text="Marketplace" selected={false} coming={true} />
        <NavItem text="Learn" selected={false} />
      </div>
    </div>
  );
};
