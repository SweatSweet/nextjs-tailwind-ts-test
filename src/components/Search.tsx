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
        "m-0 p-1.5  border border-opacity-20 rounded-lg flex items-center gap-x-2.5 group",
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
      <button className="border rounded-sm border-opacity-20 bg-black bg-opacity-20 flex-none flex items-center justify-center w-6 h-6 text-base">
        /
      </button>
    </div>
  );
};
