"use client"

import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { links } from "@/constants"
import Link from "next/link"
import { nanoid } from "nanoid"
import NavLinks from "./NavLinks"

import SelectYear from "./SelectYear"
import { useMobileMenu } from "@/providers/MobileMenuProvider"
import { redirect, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const Header = () => {
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu()

    const pathName = usePathname()

    return (
        <header className="bg-[#121212] px-4 sm:px-6 py-3 sm:py-4 fixed top-0 w-full z-20">
            <div className="flex items-center justify-between mx-auto max-w-7xl">
                <div className="flex-shrink-0 text-lg font-bold sm:text-xl md:text-2xl">
                    <span className="text-[#ffd60a] mr-1">CEC</span>
                    <span className="text-white">CLUB</span>
                </div>

                <NavLinks className="items-center space-x-4 lg:space-x-8 md:flex max-sm:hidden" />

                <div className="hidden sm:block">
                    <SelectYear />
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                    <div
                        onClick={() => {
                            redirect("/join-us")
                        }}
                        className="cursor-pointer"
                    >
                        <Button
                            className={cn(
                                "hidden md:block bg-[#ffd60a] text-black hover:bg-[#ffd60a]/90 font-semibold px-4 lg:px-6 text-sm lg:text-base",
                                pathName === "join-us" && "text-white",
                            )}
                        >
                            Join Us
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsMobileMenuOpen(!isMobileMenuOpen)
                        }}
                        className="md:hidden text-white hover:text-[#ffd60a] transition-colors p-1"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && <>
                <div
                    className="absolute left-0 top-0 w-[100%] h-screen bg-dark-1"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#121212] border-t border-[#333333] z-50 shadow-lg">
                    <nav className="px-4 py-4 space-y-3 sm:px-6 sm:space-y-4">
                        {links.map(({ link, name }) => (
                            <Link
                                onClick={() => setIsMobileMenuOpen(false)}
                                key={nanoid()}
                                href={link}
                                className="text-white hover:text-[#ffd60a] transition-colors block py-1 text-sm sm:text-base"
                            >
                                {name}{" "}
                            </Link>
                        ))}
                        <span className="inline-block w-[80%] relative left-1/2 -translate-x-1/2 bg-[#ffd60a] h-[2px] sm:h-[3px]" />

                        <div className="sm:hidden">
                            <SelectYear />
                        </div>

                        <div className="pt-3 sm:pt-4 border-t border-[#333333]">
                            <Button
                                className={cn(
                                    "w-full bg-[#ffd60a] text-black hover:bg-[#ffd60a]/90 font-semibold cursor-pointer text-sm sm:text-base",
                                    pathName === "join-us" && "text-white",
                                )}
                                onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    redirect("/join-us")
                                }}
                            >
                                Join Us
                            </Button>
                        </div>
                    </nav>
                </div>
            </>}
        </header>
    )
}

export default Header
