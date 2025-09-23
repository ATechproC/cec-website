"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useSelectYear } from "@/providers/SelectYearProvider";
import { useLoader } from "@/providers/LoaderProvider";
import { useMobileMenu } from "@/providers/MobileMenuProvider";


const SelectYear = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { setYear, year } = useSelectYear();

    const { setIsLoading } = useLoader();

    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

    return (
        <>
            {/* <div
                onClick={() => setIsOpen(false)}
                className={cn("absolute top-0 hidden  max-sm:hidden left-0 w-[100%] h-screen",
                    isOpen && "block"
                )} /> */}
            <div className="w-[150px] relative max-sm:hidden py-[6px] pl-5 font-semibold bg-[#ffd60a] hover:bg-[#ffd60a]/90 transition-colors  rounded-md cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
                >
                <p>Switch Year</p>
                <FaAngleDown
                    className="absolute -translate-y-1/2 right-1 top-1/2"
                />
                <div
                    className={cn(
                        "absolute top-[100%] left-0 hidden flex-col gap-1 w-full mt-1 bg-black rounded-md p-1",
                        isOpen && "flex"
                    )}
                >
                    <span
                        className={cn("bg-[#ffd60a] p-1 rounded-md text-center  hover:bg-[#ffd60a]/90 transition-colors",
                            (year === 2025) && "text-white"
                        )}
                        onClick={() => {
                            setYear(2025);
                            setIsLoading(true)
                            setTimeout(() => {
                                setIsLoading(false);
                                setIsOpen(!isOpen);
                            }, 3000);
                        }}
                    >
                        2025
                    </span>
                    <span
                        className={cn("bg-[#ffd60a] p-1 rounded-md text-center  hover:bg-[#ffd60a]/90 transition-colors",
                            (year === 2026) && "text-white"
                        )} onClick={() => {
                            setYear(2026);
                            setIsLoading(true)
                            setTimeout(() => {
                                setIsLoading(false);
                                setIsOpen(!isOpen);
                            }, 3000);
                        }}
                    >
                        2026
                    </span>
                </div>
            </div>
            {
                isMobileMenuOpen && <div className="flex flex-col gap-3 text-gray-400 md:hidden">
                    <p className="text-main">switch year</p>
                    <p className={`${year === 2025 ? "text-white" : "text-gray-400"} cursor-pointer`}
                        onClick={() => {
                            setYear(2025)
                            setIsLoading(true)
                            setTimeout(() => {
                                setIsLoading(false);
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }, 3000);
                        }
                        }>2025</p>
                    <p className={`${year === 2026 ? "text-white" : "text-gray-400"} cursor-pointer`}
                        onClick={() => {
                            setYear(2026)
                            setIsLoading(true)
                            setTimeout(() => {
                                setIsLoading(false);
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }, 3000);
                        }}
                    >2026</p>
                </div>
            }
        </>
    );
};

export default SelectYear;
