import { Icon } from "@iconify/react";

import { SideNavItem } from "./types";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "Features", label: "Features" },
  { href: "/", key: "pricing", label: "Pricing" },
  { href: "/", key: "Demo", label: "Demo" },
  { href: "/", key: "Blog", label: "Blog" },
  { href: "/login", key: "login", label: "Login" },
];

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Dashboard",
    path: "/",
  },
  {
    title: "Device",
    path: "/messages",
  },
  {
    title: "Contacts",
    path: "/settings",
    submenu: true,
    subMenuItems: [
      { title: "Contacts", path: "/settings/account" },
      { title: "Groups", path: "/settings/privacy" },
    ],
  },
  {
    title: "Message List",
    path: "/projects",
    submenu: true,
    subMenuItems: [
      { title: "Messenger", path: "/projects" },
      { title: "Incoming Chat", path: "/projects/web-design" },
      { title: "Outgoing Chat", path: "/projects/graphic-design" },
    ],
  },
  {
    title: "Help",
    path: "/help",
  },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: "/map.svg",
    variant: "green",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: "/tech.svg",
    variant: "green",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: "/location.svg",
    variant: "orange",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["1", "2", "3"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "sular.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};
