"use client";

import { MobileMenuProps } from "@/types";
import { createContext, useContext, useState } from "react"

const MobileMenuContext = createContext({} as MobileMenuProps);

const MobileMenuProvider = ({children} : {children : React.ReactNode}) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    return <MobileMenuContext.Provider value={{isMobileMenuOpen, setIsMobileMenuOpen}}>
        {children}
    </MobileMenuContext.Provider>
}

export default MobileMenuProvider;

export const useMobileMenu = () => useContext(MobileMenuContext);