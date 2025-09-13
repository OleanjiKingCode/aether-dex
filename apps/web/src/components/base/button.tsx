interface BaseButtonProps {
  className: string;
  name: string;
}

export const BaseButton = ({ className, name }: BaseButtonProps) => {
  return (
    <button className={`px-[24px] py-[10px] ${className}`} type="button">
      {name}
    </button>
  );
};
