import Header from '@/components/modules/Header'
import React from 'react'
import styles from './DefaultLayout.module.css'

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout
