import Image from "next/image";

import IconGt from "@/images/IconGt.svg";

interface Props {
  className?: string;
  text: string;
  number?: string;
}

export const ListItem = (props: Props) => {
  return (
    <div className="m-0 py-[12px] flex items-center justify-between">
      <span className="opacity-[0.6] text-[16px]">{props.text}</span>
      <span className="flex gap-x-[20.17px]">
        <span>{props.number}</span>
        <Image
          src={IconGt}
          alt="IconGt"
          width={7.85}
          height={13.33}
          className="opacity-[0.6]"
        />
      </span>
    </div>
  );
};
