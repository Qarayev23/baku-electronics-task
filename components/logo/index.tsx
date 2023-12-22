import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (
        <Link href="/">
            <Image src="/svg/logo.svg" alt="Baku Electronics" width={61} height={60} />
        </Link>
    )
}

export default Logo