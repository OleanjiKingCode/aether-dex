import Image from "next/image";

interface CardProps {
  cardClass: string;
  iconUrl: string;
  serviceName: string;
  serviceClassName: string;
  header: string;
  content: string;
}

export const Card = ({
  cardClass,
  iconUrl,
  serviceClassName,
  serviceName,
  header,
  content,
}: CardProps) => {
  return (
    <div
      className={`flex w-[360px] flex-col items-center justify-center gap-5 py-10 ${cardClass}`}
    >
      <div>
        <Image alt="card" src={iconUrl} />
      </div>
      <div
        className={`font-semibold text-4xl text-primary ${serviceClassName}`}
      >
        {serviceName}
      </div>
      <div className="font-semibold text-muted-foreground text-xl">
        {header}
      </div>
      <div className="max-w-[277px] text-center font-normal text-[16px] text-muted-foreground">
        {content}
      </div>
    </div>
  );
};
