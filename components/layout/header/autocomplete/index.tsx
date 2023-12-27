"use client"

import Link from 'next/link'
import styles from './autocomplete.module.scss'
import Image from 'next/image'
import { useContext } from 'react'
import { Context } from '@/context/ContextProvider'

const Autocomplete = ({ show }: { show: boolean }) => {
    const { isDark } = useContext(Context)

    return (
        <div className={`${styles.autocomplete} ${isDark ? styles.dark : ''} ${show ? styles.show : ''}`}>
            <div className={styles.chips}>
                <Link href="/" className={styles.chips__item}>Apple iPhone</Link>
                <Link href="/" className={styles.chips__item}>iPhone 15</Link>
                <Link href="/" className={styles.chips__item}>Apple Iphone 15 Pro Max</Link>
                <Link href="/" className={styles.chips__item}>Apple Iphone 15 Pro Max</Link>
                <Link href="/" className={styles.chips__item}>Macbook</Link>
            </div>
            <div className={styles.autocomplete__body}>
                <div className={styles.autocomplete__left}>
                    <div>
                        <h4 className={styles.autocomplete__title}>Ən çox axtarılan</h4>
                        <ul className={styles.suggestions}>
                            <li className={styles.suggestions__item}>
                                <Link href="/" className={styles.suggestions__link}>
                                    <svg><use xlinkHref="/svg/search.svg#search"></use></svg>
                                    Apple Iphone 11 pro, 128GB, Gold
                                </Link>
                            </li>
                            <li className={styles.suggestions__item}>
                                <Link href="/" className={styles.suggestions__link}>
                                    <svg><use xlinkHref="/svg/search.svg#search"></use></svg>
                                    Apple Iphone 15 pro, 128GB, Gold
                                </Link>
                            </li>
                            <li className={styles.suggestions__item}>
                                <Link href="/" className={styles.suggestions__link}>
                                    <svg><use xlinkHref="/svg/search.svg#search"></use></svg>
                                    Apple Macbook Air 15
                                </Link>
                            </li>
                            <li className={styles.suggestions__item}>
                                <Link href="/" className={styles.suggestions__link}>
                                    <svg><use xlinkHref="/svg/search.svg#search"></use></svg>
                                    Apple Macbook Pro 16 inch, 256 GB
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.autocomplete__title}>Kategoriyalar</h4>
                        <ul className={styles.suggestions}>
                            <li className={styles.suggestions__item}>
                                <Link href="/" className={styles.suggestions__link}>
                                    <svg><use xlinkHref="/svg/search.svg#search"></use></svg>
                                    Smartfonlar
                                </Link>
                            </li>
                            <li className={styles.suggestions__item}>
                                <Link href="/" className={styles.suggestions__link}>
                                    <svg><use xlinkHref="/svg/search.svg#search"></use></svg>
                                    Qulaqlıqlar
                                </Link>
                            </li>
                            <li className={styles.suggestions__item}>
                                <Link href="/" className={styles.suggestions__link}>
                                    <svg><use xlinkHref="/svg/search.svg#search"></use></svg>
                                    Kompyuterlər
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.autocomplete__right}>
                    <div className={styles.products}>
                        <h4 className={styles.autocomplete__title}>Məhsullar</h4>
                        <ul className={styles.products__list}>
                            <li className={styles.products__item}>
                                <Link href="/" className={styles.products__link}>
                                    <div className={styles.products__info}>
                                        <div className={styles.products__image}>
                                            <Image src="/svg/Rectangle 967.svg" alt="product" width={65} height={65} />
                                        </div>
                                        <div className={styles.products__description}>
                                            <span className={styles.products__name}>Iphone 13 Pro Max 128GB Blue</span>
                                            <span className={styles.products__category}>Smartfonlar</span>
                                        </div>
                                    </div>
                                    <div className={styles.products__price}>
                                        <span className={styles.products__oldPrice}><b>3699</b> ₼</span>
                                        <span className={styles.products__newPrice}>3499 ₼</span>
                                    </div>
                                </Link>
                            </li>
                            <li className={styles.products__item}>
                                <Link href="/" className={styles.products__link}>
                                    <div className={styles.products__info}>
                                        <div className={styles.products__image}>
                                            <Image src="/svg/Rectangle 967.svg" alt="product" width={65} height={65} />
                                        </div>
                                        <div className={styles.products__description}>
                                            <span className={styles.products__name}>Iphone 13 Pro Max 128GB Blue</span>
                                            <span className={styles.products__category}>Smartfonlar</span>
                                        </div>
                                    </div>
                                    <div className={styles.products__price}>
                                        <span className={styles.products__oldPrice}><b>3699</b> ₼</span>
                                        <span className={styles.products__newPrice}>3499 ₼</span>
                                    </div>
                                </Link>
                            </li>
                            <li className={styles.products__item}>
                                <Link href="/" className={styles.products__link}>
                                    <div className={styles.products__info}>
                                        <div className={styles.products__image}>
                                            <Image src="/svg/Rectangle 967.svg" alt="product" width={65} height={65} />
                                        </div>
                                        <div className={styles.products__description}>
                                            <span className={styles.products__name}>Iphone 13 Pro Max 128GB Blue</span>
                                            <span className={styles.products__category}>Smartfonlar</span>
                                        </div>
                                    </div>
                                    <div className={styles.products__price}>
                                        <span className={styles.products__oldPrice}><b>3699</b> ₼</span>
                                        <span className={styles.products__newPrice}>3499 ₼</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="/" className={styles.banner}>
                        <div className={styles.banner__img}>
                            <Image src="/svg/970x250 1.svg" alt="banner" fill sizes="(max-width: 576px) 212px, 388px" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Autocomplete