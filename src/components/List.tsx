interface Props {
  title?: string;
  children: React.ReactNode;
}

export const List = (props: Props) => {
  return (
    <div className="m-0 shadow-md bg-white border border-opacity-[0.1] rounded-lg">
      {props.title && (
        <h3 className="pl-6 pr-[19.98px] font-semibold text-xl py-3 ">
          {props.title}
        </h3>
      )}
      {props.children}
    </div>
  );
};
