"use client"

import { useContext, useState } from 'react'
import styles from './sidebar.module.scss'
import { Context } from '@/context/ContextProvider'
import { menuContent } from '@/constants'
import Image from 'next/image'
import Logo from '@/components/logo'
import Link from 'next/link'

const SideBar = () => {
  const { sidebarOpen, handleSidebarOpen } = useContext(Context)
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
    document.body.style.overflow = 'hidden'
  }

  const handleMouseLeave = () => {
    setIsHover(false)
    document.body.style.overflow = 'initial'
  }

  return (
    <>
      <div className={sidebarOpen ? styles.sidebar : `${styles.sidebar} ${styles.close}`}>
        <div className={isHover ? `${styles.sidebar__header} ${styles.hover}` : styles.sidebar__header}>
          <Logo />
          <button onClick={handleSidebarOpen} className={styles.sidebar__closeBtn} style={{ display: isHover ? 'none' : 'flex' }}>
            <Image src="/svg/close.svg" alt="close" width={14} height={13} />
          </button>
        </div>
        <nav>
          <ul className={styles.categories}>
            {menuContent.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className={styles.categories__item}
                style={{ borderRight: isHover ? '1px solid #C4C4C4' : '' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Link href="/" className={itemIndex === 0 ? `${styles.categories__link} ${styles.active}` : styles.categories__link}>
                  <Image src={item.icon} alt={item.name} width={20} height={20} />
                  <p className={styles.categories__text}>{item.name}</p>
                </Link>
                <div className={styles.subMenu}>
                  <button onClick={handleSidebarOpen} className={styles.sidebar__closeBtn}>
                    <Image src="/svg/close.svg" alt="close" width={14} height={13} />
                  </button>
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
      {
        !sidebarOpen && <button className={styles.sidebar__openBtn} onClick={handleSidebarOpen}>O</button>
      }
    </>

  )
}

export default SideBar