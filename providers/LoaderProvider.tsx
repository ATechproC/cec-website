"use client";

import { LoadingProps } from "@/types";
import { createContext, useContext, useState } from "react";


const LoaderContext = createContext({} as LoadingProps);

const LoaderProvider = ({ children }: { children: React.ReactNode }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    return <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
}

export default LoaderProvider;

export const useLoader = () => useContext(LoaderContext);

