import { ReactNode } from "react";

export type SideNavItem = {
  title: string;
  path: string;
  icon?: ReactNode; // Change JSX.Element to ReactNode
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};
