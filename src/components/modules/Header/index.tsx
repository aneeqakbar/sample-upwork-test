import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Image src={"/assets/icons/collapse.svg"} alt="collapse" width={24} height={20}></Image>
      </div>

      <div className={styles.user_profile_cont}>
        <div className={styles.user_profile}>
          <div className={styles.avatar}></div>
          <p className={styles.name}>James Smith</p>
        </div>
      </div>
    </header>
  )
}

export default Header
