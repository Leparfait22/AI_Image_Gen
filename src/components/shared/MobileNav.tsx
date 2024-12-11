"use client";

import React from "react";

import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "../../app/constants";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo text"
          height={28}
          width={180}
        />
      </Link>
      <nav className=" flex gap-5">
        <SignedIn>
          <UserButton />

          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt=" menu icon"
                height={32}
                width={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent
              className="seet-cony
            tent sm:w-64"
            >
              <Image
                src="/assets/images/logo-text.svg"
                alt="logo text"
                height={23}
                width={152}
              />

              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li
                      key={link.route}
                      className={`${
                        isActive && "gradient-text"
                      } p-18 flex whitespace-nowrap text-dark-700`}
                    >
                      <Link href={link.route} className="sidebar-link">
                        <Image
                          src={link.icon}
                          alt="link icon"
                          width={24}
                          height={24}
                          className={`${isActive && "brightness-200"}`}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>mopn
    </header>
  );
};

export default MobileNav;
