import Image from "next/image";

interface InfoCardProps {
  iconUrl: string;
  header: string;
  content: string;
}

export const InfoCard = ({ iconUrl, header, content }: InfoCardProps) => {
  return (
    <div className="flex w-[221px] flex-col items-center justify-center gap-[6px] border-[1px] border-white/20 bg-card px-[25px] py-[10px]">
      <div className="flex items-center justify-center gap-1">
        <div>
          <Image alt="info card" height={20} src={iconUrl} width={20} />
        </div>
        <div className="font-geist-mono font-medium text-sm">{header}</div>
      </div>
      <div className="font-geist-mono font-semibold text-lg">{content}</div>
    </div>
  );
};
