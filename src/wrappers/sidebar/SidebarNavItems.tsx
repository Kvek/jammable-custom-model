import type { LucideProps } from "lucide-react";
import type { Route } from "next";
import type { ComponentType, FC } from "react";

import { Link } from "@components/ui/link";

interface SidebarNavItemsPropsType {
  href: Route | URL;
  Icon: ComponentType<LucideProps>;
  title: string;
}

export const SidebarNavItems: FC<SidebarNavItemsPropsType> = ({
  Icon,
  href,
  title,
}) => (
  <Link href={href}>
    <Icon absoluteStrokeWidth height={20} strokeWidth={1} width={20} />
    <span className="text-sm font-normal">{title}</span>
  </Link>
);
