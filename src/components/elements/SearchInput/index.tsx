import React from 'react'
import styles from './SearchInput.module.css'
import Image from 'next/image'

const SearchInput = () => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.search_icon} src="/assets/icons/search.svg" alt="search" width={18} height={18}></Image>
      <input className={styles.input} type="text" placeholder="Search" />
      <Image className={styles.filter_icon} src="/assets/icons/filter.svg" alt="filter" width={24} height={24}></Image>
    </div>
  )
}

export default SearchInput