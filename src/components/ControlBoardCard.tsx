import cn from "classnames";

interface Props {
  className?: string;
  bgColor: string;
  children: React.ReactNode;
  caption: string;
  bgOpacity?: string;
}

export const ControlBoardCard = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-y-2 flex-auto cursor-pointer">
      <div
        className={cn(
          "flex items-center justify-center h-[151px] w-[280px] px-auto rounded-lg",
          props.bgColor,
          props.bgOpacity
        )}
      >
        {props.children}
      </div>
      <h2 className="w-100 text-center text-base font-bold">{props.caption}</h2>
    </div>
  );
};
