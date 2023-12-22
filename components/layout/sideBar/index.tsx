"use client"

import { useContext } from 'react'
import styles from './sidebar.module.scss'
import { Context } from '@/context/ContextProvider'
import { menuLinks } from '@/constants'
import Image from 'next/image'
import Logo from '@/components/logo'
import Link from 'next/link'

const SideBar = () => {
  const { sidebarOpen, handleSidebarOpen } = useContext(Context)

  return (
    <div className={sidebarOpen ? styles.sidebar : `${styles.sidebar} ${styles.close}`}>
      <div className={styles.sidebar__header}>
        <Logo />
        <button onClick={handleSidebarOpen} className={styles.sidebar__closeBtn}>
          <Image src="/svg/close.svg" alt="close" width={14} height={13} />
        </button>
      </div>
      <ul className={styles.categories}>
        {menuLinks.map((item, itemIndex) => (
          <li key={itemIndex}>
            <button className={styles.categories__btn}>
              <Image src={item.icon} alt={item.name} width={20} height={20} />
              <p className={styles.categories__text}>{item.name}</p>
            </button>
            <div className={styles.subMenu}>
              <div className={styles.subMenu__header}>
                <Logo />
                <button onClick={handleSidebarOpen} className={styles.sidebar__closeBtn}>
                  <Image src="/svg/close.svg" alt="close" width={14} height={13} />
                </button>
              </div>
              <div className={styles.subMenu__wrapper}>
                <ul className={styles.categories}>
                  {menuLinks.map((menuLink, menuLinkIndex) => (
                    <li key={menuLinkIndex}>
                      <button className={styles.categories__btn}>
                        <Image src={menuLink.icon} alt={menuLink.name} width={20} height={20} />
                        <p>{menuLink.name}</p>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className={styles.subMenu__content}>
                  <div className={styles.subMenu__list}>
                    {item.subMenu.map((subItem, subItemIndex) => (
                      <div className={styles.subMenu__item} key={subItemIndex}>
                        <h4 className={styles.subMenu__title}>{subItem.name}</h4>
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
                      <Image src={image} alt="image" key={imageIndex} width={250} height={300} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {
        !sidebarOpen && <button className={styles.sidebar__openBtn} onClick={handleSidebarOpen}>O</button>
      }
    </div>
  )
}

export default SideBar