import type { ImageProps } from "next/image";
import Image from "next/image";

import Flare from "public/assets/flare.svg";

import { cn } from "@/lib/utils";

type IconProps = Omit<ImageProps, "src" | "alt">;

export const FlareEffect = ({ className, ...props }: IconProps) => {
  return (
    <Image
      alt="Flare"
      className={cn("size-[32rem]", className)}
      height={200}
      src={Flare}
      width={200}
      {...props}
    />
  );
};
