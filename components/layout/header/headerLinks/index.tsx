import Link from 'next/link'
import styles from './headerLinks.module.scss'
import Image from 'next/image'

const HeaderLinks = () => {
    return (
        <div className={styles.list}>
            <Link href="/" className={`${styles.list__link} ${styles.active}`}>
                <span>Kampaniyalar</span>
            </Link>
            <Link href="/" className={styles.list__link}>
                <span>Xidmətlər</span>
            </Link>
            <Link href="/" className={styles.list__link}>
                <span>Digər</span>
                <Image src="/svg/Vector.svg" alt="arrow" width={7} height={4} />
            </Link>
        </div>
    )
}

export default HeaderLinks