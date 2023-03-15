import Image from "next/image";

import IconTiming from "@/images/IconTiming.svg";

interface Props {
  status: string;
  time: string;
}

export const Timing = (props: Props) => {
  return (
    <div className="m-0 px-[8px] flex items-center justify-start gap-x-[8px]">
      <Image src={IconTiming} alt="IconTiming" width={13} />
      <span className="text-black opacity-[0.7] text-[14px] font-bold">
        {props.status}
      </span>
      <span className="text-black opacity-[0.7] text-[14px]">{props.time}</span>
    </div>
  );
};
