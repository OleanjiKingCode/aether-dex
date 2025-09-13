import Image from "next/image";

interface SubTitleProps {
  icon: string;
  orderNumber: string;
  title: string;
  color: string;
}

export const SubTitle = ({
  icon,
  orderNumber,
  title,
  color,
}: SubTitleProps) => {
  return (
    <div className="flex gap-2">
      <div
        className={`border-${color} flex h-[56px] w-[56px] items-center justify-center border-[1px] text-center`}
      >
        <Image alt="" height={32} src={icon} width={32} />
      </div>
      <div className="flex flex-col justify-between">
        <div className={`text-${color}`}>{orderNumber}</div>
        <div className="font-primary font-sans text-[24px] text-foreground">
          {title}
        </div>
      </div>
    </div>
  );
};
