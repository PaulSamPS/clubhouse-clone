import React, { FC } from 'react'
import { Avatar } from '../Avatar'
import Link from 'next/link'
import clsx from 'clsx'

import styles from './Header.module.scss'

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className='container d-flex align-items-center justify-content-between'>
        <Link href='/rooms' passHref>
          <div className={clsx(styles.headerLogo, 'd-flex align-items-center cup')}>
            <img src='/static/hand-wave.png' alt='Logo' className='mr-5' />
            <h4>Clubhouse</h4>
          </div>
        </Link>
        <Link href='/profile/1' passHref>
          <div className='d-flex align-items-center cup'>
            <b className='mr-15'>Jack Sparrow</b>
            <Avatar
                src='https://animator36.ru/wp-content/uploads/2021/01/captain-jack-vorobey.jpg'
                width='40px'
                height='40px'
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
