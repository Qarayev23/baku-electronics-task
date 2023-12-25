"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { createContext } from 'react'

interface ContextProps {
    sidebarOpen: boolean
    setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export const Context = createContext({} as ContextProps);

function ContextProvider({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <Context.Provider value={{ sidebarOpen, setSidebarOpen }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider