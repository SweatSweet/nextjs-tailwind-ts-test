import Image from "next/image";

import { Search } from "./Search";

import IconDot from "@/images/IconDot.svg";
import IconNotification from "@/images/IconNotification.svg";
import IconLibrary from "@/images/IconLibrary.svg";
import IconContact from "@/images/IconContact.svg";

interface Props {
  className?: string;
}

export const Extra = (props: Props) => {
  return (
    <div
      className={`p-0 m-0 flex items-center justify-end gap-x-[32px] ${props.className}`}
    >
      <Search className="flex-auto" />
      <button className="flex items-center justify-around rounded-[4px] uppercase px-[8px] gap-x-[4px] text-[12px] w-[71px] h-[26px] text-[#3CAA2A] bg-[#3CAA2A] bg-opacity-[20%]">
        <Image src={IconDot} width={7} alt="IconDot" />
        <span>Status</span>
      </button>
      <Image
        src={IconNotification}
        width={24}
        alt="IconNotification"
        className=" cursor-pointer"
      />
      <Image
        src={IconLibrary}
        width={24}
        alt="IconLibrary"
        className=" cursor-pointer"
      />
      <Image
        src={IconContact}
        width={24}
        alt="IconContact"
        className=" cursor-pointer"
      />
    </div>
  );
};
