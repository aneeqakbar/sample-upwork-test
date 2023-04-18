import React from 'react'
import styles from './SelectInput.module.css'
import Image from 'next/image';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  variant?: 'light' | '';
  rounded?: boolean;
}

const SelectInput: React.FC<Props> = ({ children, variant, rounded }) => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.arrow_icon} src="/assets/icons/angle-down.svg" alt="angle down" width={8} height={8}></Image>
      <select className={`${styles.select} ${variant && styles[variant]} ${rounded && styles.rounded}`}>
        {children}
      </select>
    </div>
  )
}

export default SelectInput
