import cn from "classnames";

interface Props {
  selected?: boolean;
  text: string;
  onClick?: string;
  coming?: boolean;
}

export const NavItem = (props: Props) => {
  return (
    <button className={cn("my-1.5")}>
      <span
        className={cn("text-base", {
          "opacity-[0.6]": props.selected == false,
          "font-semibold": props.selected == true,
        })}
      >
        {props.text}
      </span>
      {props.selected && (
        <div className="flex items-center justify-center">
          <div className="absolute w-[5px] h-[5px] bg-[red] rounded-[50%]"></div>
        </div>
      )}
      {props.coming && (
        <div className="absolute text-[#FF4800] text-xs">Coming soon</div>
      )}
    </button>
  );
};
