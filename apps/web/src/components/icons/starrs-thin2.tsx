import type { ImageProps } from "next/image";
import Image from "next/image";

import StarsThin from "public/assets/start-thin.svg";

import { cn } from "@/lib/utils";

type IconProps = Omit<ImageProps, "src" | "alt">;

export const StarsThinIcon2 = ({ className, ...props }: IconProps) => {
  return (
    <Image
      alt="Stars Thin"
      className={cn("size-4 sm:size-8", className)}
      height={28}
      src={StarsThin}
      width={28}
      {...props}
    />
  );
};
