import { FC } from 'react'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { WhiteBlock } from '../WhiteBlock'
import { BackButton } from '../BackButton'
import clsx from 'clsx'
import Link from 'next/link'

import styles from './Profile.module.scss'

interface ProfileProps {
    fullname: string
    username: string
    avatarUrl: string
    about: string
}

export const Profile: FC<ProfileProps> = ({ fullname, username, avatarUrl, about }) => {
    return (
        <>
            <Link href='/rooms' passHref>
                <BackButton title='Back' href='/'/>
            </Link>
            <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Avatar
                            width='100px'
                            height='100px'
                            src='https://animator36.ru/wp-content/uploads/2021/01/captain-jack-vorobey.jpg'
                        />
                        <div className='d-flex flex-column ml-30 mr-30'>
                            <h2 className='mt-0 mb-0'>{ fullname }</h2>
                            <h3 className={clsx(styles.username, 'mt-0 mb-0')}>@{ username }</h3>
                        </div>
                    </div>
                    <Button color='blue' className={styles.followButton}>
                        Follow
                    </Button>
                </div>
                <WhiteBlock className={styles.whiteBlock}>
                  <div className='d-flex justify-space-around'>
                      <div className='text-center'>
                          <h2 className={clsx(styles.followers, 'mt-0 mb-0')}>2</h2>
                          <h3 className={clsx(styles.username, 'mt-0 mb-0')}>followers</h3>
                      </div>
                      <div className='text-center'>
                          <h2 className={clsx(styles.followers, 'mt-0 mb-0')}>0</h2>
                          <h3 className={clsx(styles.username, 'mt-0 mb-0')}>following</h3>
                      </div>
                  </div>
                </WhiteBlock>
            </div>
            <p className={styles.about}>{ about }</p>
        </>
    )
}