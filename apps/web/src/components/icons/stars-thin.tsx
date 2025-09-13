import type { ImageProps } from "next/image";
import Image from "next/image";

import StarsThin from "public/assets/start-thin.svg";

import { cn } from "@/lib/utils";

type IconProps = Omit<ImageProps, "src" | "alt">;

export const StarsThinIcon = ({ className, ...props }: IconProps) => {
  return (
    <Image
      alt="Stars Thin"
      className={cn("size-8 sm:size-16", className)}
      height={48}
      src={StarsThin}
      width={48}
      {...props}
    />
  );
};
