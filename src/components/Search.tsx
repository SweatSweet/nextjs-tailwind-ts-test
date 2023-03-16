import Image from "next/image";

import cn from "classnames";

import IconSearch from "@/images/IconSearch.svg";

interface Props {
  className?: string;
}

export const Search = (props: Props) => {
  return (
    <div
      className={cn(
        "m-0 p-1.5  border border-opacity-[0.2] rounded-[8px] flex items-center gap-x-[10px] group",
        props.className
      )}
    >
      <Image
        src={IconSearch}
        width={20}
        alt="IconSearch"
        className="flex-none"
      />
      <input
        type="text"
        placeholder="Find Holders"
        className="w-[100%] shrink pl-[5px] focus:outline-none"
      />
      <button className="border rounded-[2px] border-opacity-[0.2] bg-black bg-opacity-[0.2] flex-none flex items-center justify-center w-[24px] h-[24px] text-[16px]">
        /
      </button>
    </div>
  );
};
