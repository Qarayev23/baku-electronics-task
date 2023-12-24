"use client"

import Image from "next/image"
import styles from './darkMode.module.scss'
import { useState } from "react"

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false)

  const handleOnchange = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={isDark ? styles.dark : styles.light}>
      <input className={styles.checkbox} type="checkbox" id="toggle" onChange={handleOnchange} />
      <label className={styles.toggle} htmlFor="toggle">
        <Image src="/svg/light.svg" width={15} height={15} alt="light" className={`${styles.icon} ${styles.icon__light}`} />
        <Image src="/svg/dark.svg" width={15} height={15} alt="dark" className={`${styles.icon} ${styles.icon__dark}`} />
        <span className={styles.ball}></span>
      </label>
    </div>
  )
}

export default DarkMode