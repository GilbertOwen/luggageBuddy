"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#F0FAFF] relative z-[100] shadow-sm">
      <div className="mx-auto px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-[#178FA0]">
          LuggageBuddy
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex font-medium">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:text-[#F0FAFF] hover:bg-[#178FA0] text-lg" asChild>
                <Link href="#how" className=" bg-[#F0FAFF] text-[#178FA0]">
                  How It Works
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="hover:text-[#F0FAFF] hover:bg-[#178FA0] text-lg" asChild>
                <Link href="#how" className=" bg-[#F0FAFF] text-[#178FA0]">
                  Benefits
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:text-[#F0FAFF] hover:bg-[#178FA0] text-lg" asChild>
                <Link href="#how" className=" bg-[#F0FAFF] text-[#178FA0]">
                  How
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:text-[#F0FAFF] hover:bg-[#178FA0] text-lg" asChild>
                <Link href="#how" className=" bg-[#F0FAFF] text-[#178FA0]">
                  Offer
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:text-[#F0FAFF] hover:bg-[#178FA0] text-lg" asChild>
                <Link href="#how" className=" bg-[#F0FAFF] text-[#178FA0]">
                  Testimoial
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:text-[#F0FAFF] hover:bg-[#178FA0] text-lg" asChild>
                <Link href="#how" className=" bg-[#F0FAFF] text-[#178FA0]">
                  Partner
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="#how" className="block text-[#178FA0] hover:underline">
            How It Works
          </Link>
          <Link href="#storage" className="block text-[#178FA0] hover:underline">
            Storage
          </Link>
          <Link href="#tracking" className="block text-[#178FA0] hover:underline">
            Tracking
          </Link>
          <Link href="#contact" className="block text-[#178FA0] hover:underline">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
