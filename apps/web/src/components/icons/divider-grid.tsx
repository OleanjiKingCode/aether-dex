import type { ImageProps } from "next/image";
import Image from "next/image";

import DividerGridImage from "public/assets/divider-grid.svg";

import { cn } from "@/lib/utils";

type IconProps = Omit<ImageProps, "src" | "alt">;

export const DividerGrid = ({ className, ...props }: IconProps) => {
  return (
    <Image
      alt="Divider Grid"
      className={cn("h-20 w-screen object-cover md:h-full", className)}
      height={300}
      src={DividerGridImage}
      width={600}
      {...props}
    />
  );
};
