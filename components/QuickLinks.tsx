"use client";
import { links } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const QuickLinks = () => {

  const pathName = usePathname();

  return <div>
    <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
    <ul className="space-y-2">
      {links.map(({ name, link }) => {
        if (name !== "Contact") {
          return (
            <li key={name}>
              <Link
                href={link}
                style={{color : pathName === link ? "#ffd60a" : ""}}
                className="text-[#444444] hover:text-[#ffd60a] transition-colors"
              >
                {name}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  </div>
}

export default QuickLinks