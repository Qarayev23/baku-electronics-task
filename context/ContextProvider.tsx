"use client";

import { useState } from "react";
import { createContext } from 'react'

interface ContextProps {
    sidebarOpen: boolean
    handleSidebarOpen: () => void
}

export const Context = createContext({} as ContextProps);

function ContextProvider({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleSidebarOpen = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Context.Provider value={{ sidebarOpen, handleSidebarOpen }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider