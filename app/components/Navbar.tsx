"use client"

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";

interface NavbarProps {
    name: string;
    href: string;
}

const links: NavbarProps[] = [
    { name: "Home", href: "/home" },
    { name: "Series", href: "/home/shows" },
    { name: "Peliculas", href: "/home/movies" },
    { name: "Nuevo y popular", href: "/home/new-popular" },
    { name: "Mi lista", href: "/home/user/list" },
]

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className="w-full max-w-7xl mx-auto items-center justify-between flex p-5 sm:px-6 py-5 lg:px-8 flex">
            <div className="flex items-center">
                <Link href="/home" className="w-32">
                    <Image src={Logo} alt="netflix logo" priority/>
                </Link>
                <ul className="lg:flex gap-x-4 ml-14 hidden">
                    {links.map((link, index) => (
                        <div key={index}>
                            {pathname === link.href ? (
                                <li>
                                    <Link href={link.href} className="text-white font-bold underline">{link.name}</Link>
                                </li>
                            ) : (
                                <li>
                                    <Link href={link.href} className="text-gray-300 font-normal text-sm">{link.name}</Link>
                                </li>
                            )}
                        </div>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-x-8">
                <Search className="w-6 h-6 text-gray-300 cursor-pointer"/>
                <Bell className="w-6 h-6 text-gray-300 cursor-pointer"/>
                <UserNav />
            </div>
        </div>
    );
}