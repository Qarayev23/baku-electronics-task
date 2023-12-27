"use client"

import Link from 'next/link'
import styles from './headerIcons.module.scss'
import { useContext } from 'react'
import { Context } from '@/context/ContextProvider'

const HeaderIcons = () => {
    const { setSidebarOpen, isDark } = useContext(Context)

    const { sidebarOpen } = useContext(Context)

    return (
        <div className={isDark ? `${styles.icons} ${styles.dark}` : styles.icons}>
            <button type='button' className={styles.icon}>
                <span className={styles.lang}>En</span>
            </button>
            <Link href="/" className={styles.icon}>
                <svg><use xlinkHref="svg/scales 1.svg#scales"></use></svg>
            </Link>
            <Link href="/" className={`${styles.icon} ${styles.desk}`}>
                <svg><use xlinkHref="/svg/Buy.svg#basket"></use></svg>
            </Link>
            <Link href="/" className={`${styles.icon} ${styles.desk}`}>
                <svg><use xlinkHref="/svg/Heart.svg#heart"></use></svg>
                <span className={styles.count}>9+</span>
            </Link>
            <button type='button' className={styles.icon}>
                <svg><use xlinkHref="/svg/Login.svg#login"></use></svg>
            </button>
            <button type='button' onClick={() => setSidebarOpen((prevValue) => !prevValue)} className={`${styles.icon} ${styles.mob}`}>
                <svg className={sidebarOpen ? styles.hide : styles.show}><use xlinkHref="/svg/hamburger.svg#hamburger"></use></svg>
                <svg className={sidebarOpen ? styles.show : styles.hide}><use xlinkHref="/svg/Close.svg#close"></use></svg>
            </button>
        </div>
    )
}

export default HeaderIcons