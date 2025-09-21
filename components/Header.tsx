import React, { SetStateAction } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import { links } from '@/constants';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import NavLinks from './NavLinks';

interface HeaderProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: React.Dispatch<SetStateAction<boolean>>
}

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) => {

    return <header className="bg-[#121212] px-6 py-4 fixed top-0 w-[100%] z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-2xl font-bold">
                <span className="text-[#ffd60a]">CEC</span>
                <span className="text-white">CLUB</span>
            </div>

            <NavLinks className='md:flex items-center space-x-8' />

            <div className="flex items-center gap-4 ">
                <Button className="hidden md:block bg-[#ffd60a] text-black hover:bg-[#ffd60a]/90 font-semibold px-6">
                    Join Us
                </Button>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white hover:text-[#ffd60a] transition-colors"
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>

        {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#121212] border-t border-[#333333] z-50">
                <nav className="px-6 py-4 space-y-4">
                    {links.map(({ link, name }) => <Link
                        onClick={() => setIsMobileMenuOpen(false)}
                        key={nanoid()} href={link}
                        className='text-white hover:text-[#ffd60a] transition-colors block'>
                        {name} </Link>)
                    }
                    <div className="pt-4 border-t border-[#333333]">
                        <Button
                            className="w-full bg-[#ffd60a] text-black hover:bg-[#ffd60a]/90 font-semibold cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Join Us
                        </Button>
                    </div>
                </nav>
            </div>
        )}
    </header>
}

export default Header