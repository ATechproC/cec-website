"use client";

import { createContext, SetStateAction, useContext, useState } from "react"

interface MobileMenuProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: React.Dispatch<SetStateAction<boolean>>
}

const MobileMenuContext = createContext({} as MobileMenuProps);

const MobileMenuProvider = ({children} : {children : React.ReactNode}) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    return <MobileMenuContext.Provider value={{isMobileMenuOpen, setIsMobileMenuOpen}}>
        {children}
    </MobileMenuContext.Provider>
}

export default MobileMenuProvider;

export const useMobileMenu = () => useContext(MobileMenuContext);