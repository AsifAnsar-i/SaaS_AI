"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center z-50 fixed h-16 w-full border-b-4 border-purple-100 bg-white p-5 lg:hidden">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="Logo"
          width={180}
          height={28}
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="focus:ring-0 focus-visible:ring-transparent focus:ring-offset-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:border-none !important sm:w-64">
              <>
                <Image
                  src="/assets/images/logo-text.svg"
                  alt="logo"
                  width={152}
                  height={23}
                />
                <ul className="mt-8 flex w-full flex-col items-start gap-5">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;
                    return (
                      <li
                        key={link.route}
                        className={`${
                          isActive &&
                          "bg-purple-gradient bg-cover bg-clip-text text-transparent"
                        } p-18 flex whitespace-nowrap text-[#384262]`}
                      >
                        <Link
                          href={link.route}
                          className="font-semibold text-[16px] leading-[140%] flex size-full gap-4 p-4 cursor-pointer"
                        >
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
            <Button
              asChild
              className="bg-purple-gradient py-4 px-6 flex-center gap-3 rounded-full font-semibold text-[16px] leading-[140%] focus-visible:ring-offset-0 focus-visible:ring-transparent bg-cover !important"
            >
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
