"use client"

import Link from 'next/link'
import styles from './headerLinks.module.scss'
import Image from 'next/image'
import { useContext } from 'react'
import { Context } from '@/context/ContextProvider'

const HeaderLinks = () => {
    const { isDark } = useContext(Context)

    return (
        <div className={isDark ? `${styles.list} ${styles.dark}` : styles.list}>
            <Link href="/" className={`${styles.list__link} ${styles.active}`}>
                <span>Kampaniyalar</span>
            </Link>
            <Link href="/" className={styles.list__link}>
                <span>Xidmətlər</span>
            </Link>
            <Link href="/" className={styles.list__link}>
                <span>Digər</span>
                <svg><use xlinkHref="/svg/Vector.svg#vector"></use></svg>
            </Link>
        </div>
    )
}

export default HeaderLinks