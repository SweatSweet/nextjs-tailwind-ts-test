interface Props {
  title?: string;
  children: React.ReactNode;
}

export const List = (props: Props) => {
  return (
    <div className="m-0 py-[12px] pl-[24px] pr-[19.98px] shadow-md bg-white border border-opacity-[0.1] rounded-[8px]">
      <h3 className="font-semibold text-[20px]">{props.title}</h3>
      {props.children}
    </div>
  );
};
