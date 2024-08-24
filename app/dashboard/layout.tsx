import "../globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";
import SideNav from "@/components/side-nav";
import MarginWidthWrapper from "@/components/margin-width-wrapper";
import PageWrapper from "@/components/page-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white ${inter.className}`}>
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
