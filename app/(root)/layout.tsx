import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white lg:flex-row">
      <Sidebar />
      <MobileNav />
      <div className="mt-16 flex-1 overflow-auto py-8 lg:mt-0 lg:max-h-screen lg:py-10">
        <div className="max-w-5xl mx-auto px-5 md:px-10 w-full font-normal text-[16px] leading-[140%] text-[#7986AC]">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
