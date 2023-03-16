import Image from "next/image";

import IconGt from "@/images/IconGT.svg";

interface Props {
  className?: string;
  text: string;
  number?: string;
}

export const ListItem = (props: Props) => {
  return (
    <div className="m-0 pl-6 pr-[19.98px] py-3 flex items-center justify-between cursor-pointer hover:bg-[black]/10">
      <span className="opacity-60 text-base">{props.text}</span>
      <span className="flex gap-x-[20.17px]">
        <span>{props.number}</span>
        <Image
          src={IconGt}
          alt="IconGt"
          width={7.85}
          height={13.33}
          className="opacity-60"
        />
      </span>
    </div>
  );
};
