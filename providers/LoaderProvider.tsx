"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface LoadingProps {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>
}

const LoaderContext = createContext({} as LoadingProps);

const LoaderProvider = ({ children }: { children: React.ReactNode }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    return <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
}

export default LoaderProvider;

export const useLoader = () => useContext(LoaderContext);

