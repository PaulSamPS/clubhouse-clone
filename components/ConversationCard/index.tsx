import React, { FC } from 'react'
import { Avatar } from '../Avatar'
import clsx from 'clsx'


import styles from './ConversationCard.module.scss'
import whiteBlockStyles from '../WhiteBlock/WhiteBlock.module.scss'

interface ConversationCard {
  title: string
  guests: string[]
  avatars: string[]
  guestsCount: number
  speakersCount: number
}

export const ConversationCard: FC<ConversationCard> = ({
  title,
  guests = [],
  avatars = [],
  guestsCount,
  speakersCount
}) => {

  return (
    <div className={clsx(whiteBlockStyles.block, styles.card)}>
      <h4 className={styles.title}>{title}</h4>
      <div className='d-flex mt-10'>
        <div className={styles.avatars}>
          {
            avatars.map((url, i) => (
            <Avatar
              key={url}
              width='45px'
              height='45px'
              src={url}
              className={ avatars.length > 1 && i === avatars.length - 1 ? 'lastAvatar' : ''}
            />))
          }
        </div>
        <div className={clsx(styles.info, 'ml-10')}>
          <ul className={styles.users}>
            {
              guests.map((name, i) => (
              <li key={ name + i }>
                { name }
                <img
                  src='/static/cloud.png'
                  alt='Cloud'
                  width={14}
                  height={14}
                />
              </li>))
            }
          </ul>
          <ul className={styles.details}>
            <li>
              { guestsCount }
              <img
                  className='ml-5'
                  src='/static/user.svg'
                  alt='Users count'
                  width={12}
                  height={12}
              />
            </li>
            <li>
              { speakersCount }
              <img
                className='ml-5'
                src='/static/message.svg'
                alt='Users count'
                width={12}
                height={12}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
