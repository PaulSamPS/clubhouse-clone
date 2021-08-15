import React, { FC, useContext, useRef, useState } from 'react'
import { WhiteBlock } from '../../WhiteBlock'
import { Button } from '../../Button'
import { StepInfo } from '../../StepInfo'
import { Avatar } from '../../Avatar'
import {MainContext} from '../../../pages'
import clsx from 'clsx'

import styles from './ChooseAvatarStep.module.scss'

export const ChooseAvatarStep: FC = () => {
    const { onNextStep } = useContext(MainContext)
    const [avatarUrl, setAvatarUrl] = useState<string>('static/avatar.svg')
    const inputFileRef = useRef<HTMLInputElement>(null)

    const handleChangeImage = (event: Event): void => {
        const file = (event.target as HTMLInputElement).files[0]
        if (file) {
            const imageUrl = URL.createObjectURL(file)
            setAvatarUrl(imageUrl)
        }
    }

  React.useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener('change', handleChangeImage)
    }
  }, [])

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/celebration.png"
        title="Okay, Samoylenko Pavel!"
        description="How’s this photo?"
      />
      <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
        <div className={styles.avatar}>
            <Avatar
                width='120px'
                height='120px'
                src={ avatarUrl }
            />
        </div>
        <div className="mb-30">
          <label htmlFor="image" className="link cup">
            Choose a different photo
          </label>
        </div>
        <input id="image" ref={ inputFileRef } type="file" hidden />
        <Button onClick={ onNextStep }>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg"  alt='arrow'/>
        </Button>
      </WhiteBlock>
    </div>
  )
}