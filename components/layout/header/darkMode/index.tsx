"use client"

import Image from "next/image"
import styles from './darkMode.module.scss'
import { useContext } from "react"
import { Context } from "@/context/ContextProvider"

const DarkMode = () => {
  const { isDark, setIsDark } = useContext(Context)

  const handleOnChange = () => {
    setIsDark(!isDark)
    document.body.classList.toggle('dark')
  }

  return (
    <div className={isDark ? styles.dark : styles.light}>
      <input className={styles.checkbox} type="checkbox" id="toggle" onChange={handleOnChange} />
      <label className={styles.toggle} htmlFor="toggle">
        <svg className={`${styles.icon} ${styles.icon__light}`}><use xlinkHref="svg/light.svg#light"></use></svg>
        <svg className={`${styles.icon} ${styles.icon__dark}`}><use xlinkHref="svg/dark.svg#dark"></use></svg>
        <span className={styles.ball}></span>
      </label>
    </div>
  )
}

export default DarkMode