"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const HomeMenu = ({
  className,
  title,
  link,
  logo,
}: {
  className?: string;
  title: string;
  link: string;
  logo: ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <Link href={link}>
      <div
        className={cn(
          `rounded-full grid place-items-center ${
            pathname === link && "bg-light-green"
          }`,
          className
        )}
      >
        <div
          className={`${
            pathname === link ? "text-font-black" : "text-font-gray"
          }`}
        >
            <div className="flex items-center gap-2 px-4 py-2 text-lg">
                <span className="hidden md:block">{logo}</span>
                <div className="font-medium text-base">{title}</div>
            </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeMenu;
