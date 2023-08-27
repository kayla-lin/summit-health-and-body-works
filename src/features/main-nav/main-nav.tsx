"use client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { MainNavLink } from "./components/main-nav-link";
import { getViewHeight } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MENU_ITEMS } from "@/lib/consts";

export const MainNavigation = () => {
  const [isTransparent, setIsTransparent] = useState<boolean>(true);

  const changeBackground = () => {
    if (window.scrollY >= getViewHeight(100)) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div
      className={`z-50 fixed w-full p-5 font-medium ${
        !isTransparent
          ? "-top-2  bg-white translate-y-2 text-black transition ease-in-out delay-150 border-b border-gray-300"
          : "text-white"
      }`}
    >
      {/* Desktop Navigation */}
      <nav className="w-full hidden md:block">
        <div className="flex justify-center gap-32">
          {MENU_ITEMS.map((menuItem) => (
            <MainNavLink key={menuItem.title} href={`#${menuItem.section}`}>
              {menuItem.title}
            </MainNavLink>
          ))}
        </div>
      </nav>
      {/* Mobile Navigation */}
      <NavigationMenu className="text-primary block md:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <HamburgerMenuIcon className="mr-1" /> Menu
            </NavigationMenuTrigger>
            <NavigationMenuContent className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {MENU_ITEMS.map((menuItem) => (
                <MainNavLink key={menuItem.title} href={`#${menuItem.section}`}>
                  {menuItem.title}
                </MainNavLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
