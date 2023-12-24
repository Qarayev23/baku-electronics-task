"use client"

import Image from 'next/image'
import styles from './searchBox.module.scss'

const SearchBox = ({ onFocus, onBlur }: { onFocus: () => void, onBlur: () => void }) => {
  return (
    <div className={styles.searchbox}>
      <form>
        <input type="input" placeholder='Axtar...' onFocus={onFocus} onBlur={onBlur} />
        <button type="submit">
          <Image width={16} height={16} src="/svg/Search.svg" alt="Search" />
        </button>
      </form>
    </div>
  )
}

export default SearchBox