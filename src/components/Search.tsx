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
        "m-0 p-[6px]  border-[1px] border-opacity-[0.2] rounded-[8px] flex items-center gap-x-[10px]",
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
        className="w-[100%] shrink pl-[5px]"
      />
      <button className="border-[1px] rounded-[2px] border-opacity-[0.2] bg-black bg-opacity-[0.2] flex-none flex items-center justify-center w-[24px] h-[24px] text-[16px]">
        /
      </button>
    </div>
  );
};
