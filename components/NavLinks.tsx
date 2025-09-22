"use client";

import { links } from "@/constants";
import { nanoid } from "nanoid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const NavLinks = ({ children, className }: { children?: ReactNode, className: string }) => {

    const pathName = usePathname();

    return (
        <nav className={className}>
            {links.map(({ link, name }) => (
                <Link
                    style={{color : pathName === link ? "#ffd60a" : ""}}
                    key={nanoid()}
                    href={link}
                    className="text-white hover:text-[#ffd60a] transition-colors"
                >
                    {name}
                </Link>
            ))}
            {children}
        </nav>
    );
};

export default NavLinks;
