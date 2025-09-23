"use client";

import { SelectYearProps } from "@/types";
import { createContext, useContext, useState } from "react";

const SelectYearContext = createContext({} as SelectYearProps)

const SelectYearProvider = ({children} : {children : React.ReactNode}) => {

    const [year, setYear] = useState<number>(2025);

    return <SelectYearContext.Provider value={{year, setYear}} >
        {children}
    </SelectYearContext.Provider>
}

export default SelectYearProvider

export const useSelectYear = () => useContext(SelectYearContext);