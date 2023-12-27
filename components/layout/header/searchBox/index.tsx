"use client"

import Image from 'next/image'
import styles from './searchBox.module.scss'
import { useContext } from 'react'
import { Context } from '@/context/ContextProvider'

const SearchBox = ({ onFocus, onBlur }: { onFocus: () => void, onBlur: () => void }) => {
  const { isDark } = useContext(Context)

  return (
    <div className={isDark ? `${styles.searchbox} ${styles.dark}` : `${styles.searchbox}`}>
      <form>
        <input type="input" placeholder='Axtar...' onFocus={onFocus} onBlur={onBlur} />
        <button type="submit">
          <svg><use xlinkHref="svg/Search.svg#search"></use></svg>
        </button>
      </form>
    </div>
  )
}

export default SearchBox