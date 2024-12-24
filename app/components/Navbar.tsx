"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Search, Menu } from "lucide-react";
import UserNav from "./UserNav";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface NavbarProps {
  name: string;
  href: string;
}

const links: NavbarProps[] = [
  { name: "Home", href: "/home" },
  { name: "Series", href: "/home/shows" },
  { name: "Películas", href: "/home/movies" },
  { name: "Nuevo y Popular", href: "/home/new-popular" },
  { name: "Mi Lista", href: "/home/user/list" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between flex p-5 sm:px-6 py-5 lg:px-8">
      {/* Logo y Dropdown Menu */}
      <div className="flex items-center gap-4">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Netflix logo" priority />
        </Link>

        {/* Dropdown Menu para pantallas pequeñas */}
        <div className="lg:hidden">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button aria-label="Menu">
                <Menu className="w-6 h-6 text-gray-300" />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content
              align="start"
              sideOffset={8}
              className="z-[1000] bg-black border border-gray-700 rounded-md shadow-lg py-2 bg-black/80"
            >
              {links.map((link, index) => (
                <DropdownMenu.Item key={index} asChild>
                  <Link
                    href={link.href}
                    className={`block px-4 py-2 text-sm ${
                      pathname === link.href
                        ? "text-white font-bold"
                        : "text-gray-300"
                    } hover:bg-gray-700 rounded`}
                  >
                    {link.name}
                  </Link>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>

      {/* Links para pantallas grandes */}
      <ul className="lg:flex gap-x-4 ml-14 hidden">
        {links.map((link, index) => (
          <div key={index}>
            {pathname === link.href ? (
              <li>
                <Link
                  href={link.href}
                  className="text-white font-bold underline"
                >
                  {link.name}
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  href={link.href}
                  className="text-gray-300 font-normal text-sm"
                >
                  {link.name}
                </Link>
              </li>
            )}
          </div>
        ))}
      </ul>

      {/* Iconos y UserNav */}
      <div className="flex items-center gap-x-8">
        <Search className="w-6 h-6 text-gray-300 cursor-pointer" />
        <Bell className="w-6 h-6 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  );
}
