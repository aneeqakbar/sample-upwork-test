import React from 'react'
import styles from './Button.module.css'

type Props = {
  children: React.ReactNode | React.ReactNode[];
  variant: 'dark' | '';
}

const Button: React.FC<Props> = ({ children, variant }) => {
  return (
    <button className={`${styles.btn} ${styles[variant]}`}>
      {children}
    </button>
  )
}

export default Button
