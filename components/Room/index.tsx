import React, { FC } from 'react'
import { Button } from '../Button'
import clsx from 'clsx'
import Link from 'next/link'

import styles from './Room.module.scss'

interface RoomProps {
    title: string

}

export const Room: FC<RoomProps> = ({ title}) => {
  return (
    <div className={styles.wrapper}>
      <div className="d-flex align-items-center justify-content-between">
        <h2>{ title }</h2>
        <div className={clsx('d-flex align-items-center', styles.actionButtons)}>
          <Link href='/rooms' passHref>
              <Button color="gray" className={styles.leaveButton}>
                <img width={18} height={18} src="/static/peace.png" alt="Hand black" />
                Leave quietly
              </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
