"use client"

import { Context } from "@/context/ContextProvider"
import { useContext } from "react"

const Main = ({ children } : { children: React.ReactNode }) => {
  const { sidebarOpen } = useContext(Context)

  return (
    <div className={sidebarOpen ? "main" : "main full"}>
      {children}
    </div>
  )
}

export default Main