import Link from 'next/link'
import styles from './headerIcons.module.scss'
import Image from 'next/image'

const HeaderIcons = () => {
    return (
        <div className={styles.icons}>
            <Link href="/" className={styles.icon}>
                <span className={styles.lang}>En</span>
            </Link>
            <Link href="/" className={styles.icon}>
                <Image src="/svg/scales 1.svg" alt="scales" width={20} height={20} />
            </Link>
            <Link href="/" className={`${styles.icon} ${styles.desk}`}>
                <Image src="/svg/Buy.svg" alt="basket" width={20} height={20} />
            </Link>
            <Link href="/" className={`${styles.icon} ${styles.desk}`}>
                <Image src="/svg/Heart.svg" alt="heart" width={20} height={20} />
                <span className={styles.count}>9+</span>
            </Link>
            <button type='button' className={styles.icon}>
                <Image src="/svg/Login.svg" alt="login" width={20} height={20} />
            </button>
            <button type='button' className={`${styles.icon} ${styles.mob}`}>
                <Image src="/svg/hamburger.svg" alt="login" width={20} height={20} />
            </button>
        </div>
    )
}

export default HeaderIcons