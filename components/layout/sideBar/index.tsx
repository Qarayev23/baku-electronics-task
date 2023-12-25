"use client"

import React, { useContext, useState } from 'react'
import styles from './sidebar.module.scss'
import { Context } from '@/context/ContextProvider'
import { menuContent } from '@/constants'
import Image from 'next/image'
import Logo from '@/components/logo'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SideBar = () => {
  const { sidebarOpen } = useContext(Context)
  const [isHover, setIsHover] = useState(false)
  const [selected, setSelected] = useState({ name: '', icon: '', path: '' })
  const router = useRouter()

  const handleMouseEnter = () => {
    if (window.innerWidth > 1200) {
      setIsHover(true)
      document.body.style.overflow = 'hidden'
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth > 1200) {
      setIsHover(false)
      document.body.style.overflow = 'initial'
    }
  }

  const handleRedirect = (name: string, icon: string, path: string, e: React.MouseEvent) => {
    if (window.innerWidth > 1200) {
      router.push(path)
    } else {
      setSelected({ name, icon, path })
      if (e.currentTarget.nextSibling) {
        const nextSibling = e.currentTarget.nextSibling as Element;
        nextSibling.classList.add(styles.show);
      }
    }
  }

  const navigateBack = (e: React.MouseEvent) => {
    if (e.currentTarget.parentElement) {
      const parentElement = e.currentTarget.parentElement.parentElement as Element;
      parentElement.classList.remove(styles.show);
    }
  }

  return (
    <div className={sidebarOpen ? `${styles.sidebar} ${styles.show}` : styles.sidebar}>
      <div className={isHover ? `${styles.sidebar__header} ${styles.hover}` : styles.sidebar__header}>
        <Logo />
        <button className={styles.sidebar__closeBtn} style={{ display: isHover ? 'none' : 'flex' }}>
          <Image src="/svg/close.svg" alt="close" width={14} height={13} />
        </button>
      </div>
      <div className={styles.icons}>
        <Link href="/" className={styles.icon}>
          <Image src="/svg/Buy.svg" alt="basket" width={22} height={22} />
        </Link>
        <Link href="/" className={styles.icon}>
          <Image src="/svg/Heart.svg" alt="heart" width={22} height={22} />
          <span className={styles.count}>9+</span>
        </Link>
      </div>
      <div className={styles.list}>
        <Link href="/" className={styles.list__link}>
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
      <nav>
        <ul className={styles.categories}>
          {menuContent.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className={isHover ? `${styles.categories__item} ${styles.hover}` : styles.categories__item}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <button
                onClick={(e) => handleRedirect(item.name, item.icon, item.path, e)}
                className={itemIndex === 0 ? `${styles.categories__btn} ${styles.active}` : styles.categories__btn}>
                <Image src={item.icon} alt={item.name} width={20} height={20} />
                <p className={styles.categories__text}>{item.name}</p>
              </button>
              <div className={styles.subMenu}>
                <button className={styles.sidebar__closeBtn}>
                  <Image src="/svg/close.svg" alt="close" width={14} height={13} />
                </button>
                <div className={styles.back}>
                  <button className={styles.back__btn} onClick={(e) => navigateBack(e)}>
                    <Image src="/svg/back.svg" alt="back" className={styles.back__icon} width={19} height={17} />
                  </button>
                  {
                    selected?.name &&
                    <Link href={selected?.path} className={styles.back__link}>
                      <Image src={selected?.icon} alt={selected?.name} width={21} height={21} />
                      <p className={styles.categories__text}>{selected?.name}</p>
                    </Link>
                  }
                </div>
                <div className={styles.subMenu__content}>
                  <div className={styles.subMenu__list}>
                    {item.subMenu.map((subItem, subItemIndex) => (
                      <div className={styles.subMenu__item} key={subItemIndex}>
                        <h4 className={styles.subMenu__title}>
                          <Link href="/">{subItem.name}</Link>
                        </h4>
                        {subItem.links.map((link, i) => (
                          <Link href="/" key={i} className={styles.subMenu__link}>
                            {link}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className={styles.subMenu__images}>
                    {item.images.map((image, imageIndex) => (
                      <Link href="/" className={styles.subMenu__img} key={imageIndex}>
                        <Image src={image} fill alt="image" sizes="(max-width: 1200px) 220px, 250px" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default SideBar