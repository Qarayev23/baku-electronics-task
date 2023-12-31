"use client"

import DarkMode from './darkMode'
import SearchBox from './searchBox'
import styles from './header.module.scss'
import Autocomplete from './autocomplete'
import { useContext, useState } from 'react'
import HeaderLinks from './headerLinks'
import HeaderIcons from './headerIcons'
import Logo from '@/components/logo'
import { Context } from '@/context/ContextProvider'

const Header = () => {
  const [showAutocomplete, setShowAutocomplete] = useState(false)
  const { setSidebarOpen } = useContext(Context)
  
  const focusHandler = () => {
    setShowAutocomplete(true)
    setSidebarOpen(false)
  }

  const blurHandler = () => {
    setShowAutocomplete(false)
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <div className={styles.header__left}>
            <Logo mobile={true} />
            <DarkMode />
            <SearchBox onFocus={focusHandler} onBlur={blurHandler} />
            <Autocomplete show={showAutocomplete} />
          </div>
          <HeaderLinks />
          <HeaderIcons />
        </div>
      </div>
    </header>
  )
}

export default Header