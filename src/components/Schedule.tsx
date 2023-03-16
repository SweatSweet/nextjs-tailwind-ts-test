import Image from "next/image";
import IconSchedule from "@/images/IconSchedule.svg";

interface Props {
  className?: string;
  text: string;
}

export const Schedule = (props: Props) => {
  return (
    <div className="px-2 bg-black bg-opacity-[0.1] rounded-lg h-[27px] flex items-center justify-center gap-x-2">
      <Image src={IconSchedule} alt="IconSchedule" width={16} />
      <span className="font-semibold">{props.text}</span>
    </div>
  );
};
