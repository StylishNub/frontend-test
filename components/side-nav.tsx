"use client";

import React, { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SIDENAV_ITEMS } from "@/constants";
import { SideNavItem } from "@/constants/types";
import { Icon } from "@iconify/react";

const SideNav = () => {
  return (
    <div className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
        >
          <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
          <span className="font-bold text-xl hidden md:flex">Logo</span>
        </Link>

        <div className="flex flex-col space-y-2  md:px-6 ">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div>
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover:bg-blue-700 w-full justify-between ${
              pathname.includes(item.path)
                ? "bg-blue-700 text-white"
                : "text-black"
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-semibold flex">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname
                        ? "text-white bg-blue-700"
                        : "text-gray-600"
                    } block p-2 rounded-md`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg ${
            item.path === pathname
              ? "bg-blue-700 text-white"
              : "hover:bg-zinc-100 text-gray-700"
          }`}
        >
          {item.icon}
          <span className="font-semibold flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};
