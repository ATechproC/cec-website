"use client";

import { assets } from "@/constants"
import { cn } from "@/lib/utils"
import { useLoader } from "@/providers/LoaderProvider"
import Image from "next/image"

export function Spinner() {

    const {isLoading} = useLoader();
    
    return <div className={cn("fixed top-0 left-0 hidden z-50 w-[100%] h-[100%] bg-black",
        isLoading && "block"
    )}>
        <Image 
        src={assets.spinner}
        alt=""
        width={150}
        height={150}
        className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        />
    </div>
}