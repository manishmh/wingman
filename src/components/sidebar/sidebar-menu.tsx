"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const SidebarMenu = ({
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
          `w-10 rounded-lg aspect-square grid place-items-center text-2xl ${
            pathname === link && "bg-white"
          }`,
          className
        )}
      >
        <div className={`${pathname === link ? "text-dark-green" : "text-light-green"}`}>{logo}</div>
      </div>
    </Link>
  );
};

export default SidebarMenu;
