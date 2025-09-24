"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useSelectYear } from "@/providers/SelectYearProvider";
import { useLoader } from "@/providers/LoaderProvider";
import { useMobileMenu } from "@/providers/MobileMenuProvider";


const SelectYear = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { setYear, year, currentYear, setCurrentYear } = useSelectYear();

    const { setIsLoading } = useLoader();

    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

    return (
        <>
            <div className="w-[150px] relative max-sm:hidden py-[6px] pl-9 font-semibold bg-[#ffd60a] hover:bg-[#ffd60a]/90 transition-colors  rounded-md cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <p> {currentYear} </p>
                <FaAngleDown
                    className="absolute -translate-y-1/2 right-1 top-1/2"
                />
                <div
                    className={cn(
                        "absolute top-[100%] left-0 hidden flex-col gap-1 w-full mt-1 bg-black rounded-md p-1",
                        isOpen && "flex"
                    )}
                >
                    <button
                        className={cn("bg-[#ffd60a] p-1 rounded-md text-center ",
                            year !== 2025 && "hover:bg-[#ffd60a]/90 transition-colors"
                        )}
                        onClick={() => {
                            setYear(2025);
                            setIsLoading(true);
                            setCurrentYear("2024/2025");
                            setTimeout(() => {
                                setIsLoading(false);
                                setIsOpen(!isOpen);
                            }, 3000);
                        }}
                        disabled={year === 2025}
                    >
                        {
                            currentYear === "2024/2025" ?
                                <span className="text-gray-400"> Switched year</span>
                                : <span className="text-white">2024/2025</span>
                        }
                    </button>
                    <button
                        className={cn("bg-[#ffd60a] p-1 rounded-md text-center",
                            year !== 2026 && "hover:bg-[#ffd60a]/90 transition-colors"
                        )} onClick={() => {
                            setYear(2026);
                            setIsLoading(true);
                            setCurrentYear("2025/2026");
                            setTimeout(() => {
                                setIsLoading(false);
                                setIsOpen(!isOpen);
                            }, 3000);
                        }}
                        disabled={year === 2026}
                    >
                        {
                            currentYear === "2025/2026" ?
                                <span className="text-gray-400"> Switched year</span>
                                : <span className="text-white">2025/2026</span>
                        }
                    </button>
                </div>
            </div>
            {
                isMobileMenuOpen && <div className="flex flex-col gap-3 text-gray-400 md:hidden">
                    <p className="text-main">switch year</p>
                    <button className={`${year === 2025 ? "text-white" : "text-gray-400"} cursor-pointer text-start`}
                        onClick={() => {
                            setYear(2025)
                            setIsLoading(true)
                            setTimeout(() => {
                                setIsLoading(false);
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }, 3000);
                        }
                        }
                        disabled={year === 2025}
                        >
                            2024/2025
                            </button>
                    <button className={`${year === 2026 ? "text-white" : "text-gray-400"} cursor-pointer text-start`}
                        onClick={() => {
                            setYear(2026)
                            setIsLoading(true)
                            setTimeout(() => {
                                setIsLoading(false);
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }, 3000);
                        }}
                        disabled={year === 2026}
                    >2025/2026</button>
                </div>
            }
        </>
    );
};

export default SelectYear;
