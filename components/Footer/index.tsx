import React, { FC } from 'react'

import styles from './Footer.module.scss'

export const Footer: FC = () => {
    const year = (new Date).getFullYear()
  return (
    <div className={styles.footer}>
      <div className='container'>
        <p>Clubhouse - Clone &#169; { year }</p>
      </div>
    </div>
  )
}
