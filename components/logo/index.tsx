import Image from "next/image"
import Link from "next/link"
import styles from "./logo.module.scss"

const Logo = ({ mobile }: { mobile?: boolean }) => {
    return (
        <Link href="/">
            <Image src="/svg/logo.svg" className={mobile ? `${styles.logo} ${styles.mob}` : styles.logo} alt="Baku Electronics" width={61} height={60} />
        </Link>
    )
}

export default Logo