import Image from "next/image";

import IconTiming from "@/images/IconTiming.svg";

interface Props {
  status: string;
  time: string;
}

export const Timing = (props: Props) => {
  return (
    <div className="m-0 px-2 flex items-center justify-start gap-x-2">
      <Image src={IconTiming} alt="IconTiming" width={13} />
      <span className="text-black opacity-70 text-sm font-bold">
        {props.status}
      </span>
      <span className="text-black opacity-70 text-sm">{props.time}</span>
    </div>
  );
};
