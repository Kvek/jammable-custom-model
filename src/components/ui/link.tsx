"use client";

import type { Route } from "next";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import type { WrapperComponentType } from "@types";

import { cn } from "@lib/utils";

interface LinkPropsType {
  href: Route | URL;
}
export const Link: WrapperComponentType<LinkPropsType> = ({
  children,
  href,
}) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "rounded-secondary h-14 w-full border border-primary hover:bg-primary",
        pathname === href ? "bg-primary" : "bg-none",
      )}>
      <NextLink
        className="flex h-full w-full items-center space-x-4 p-4"
        href={href}>
        {children}
      </NextLink>
    </div>
  );
};
