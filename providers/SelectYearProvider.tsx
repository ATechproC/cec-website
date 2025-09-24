"use client";

import { SelectYearProps } from "@/types";
import { createContext, useContext, useState } from "react";

const SelectYearContext = createContext({} as SelectYearProps)

const SelectYearProvider = ({children} : {children : React.ReactNode}) => {

    const [year, setYear] = useState<number>(2026);

    const [currentYear, setCurrentYear] = useState<string>("2025/2026");

    return <SelectYearContext.Provider value={{year, setYear, currentYear, setCurrentYear}} >
        {children}
    </SelectYearContext.Provider>
}

export default SelectYearProvider

export const useSelectYear = () => useContext(SelectYearContext);