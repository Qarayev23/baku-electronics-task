"use client";

import { Dispatch, SetStateAction, useEffect, useLayoutEffect, useState } from "react";
import { createContext } from 'react'

interface ContextProps {
    sidebarOpen: boolean
    setSidebarOpen: Dispatch<SetStateAction<boolean>>
    isDark: boolean
    setIsDark: Dispatch<SetStateAction<boolean>>
}

export const Context = createContext({} as ContextProps);

function ContextProvider({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isDark, setIsDark] = useState(false)

    return (
        <Context.Provider value={{ sidebarOpen, setSidebarOpen, isDark, setIsDark }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider