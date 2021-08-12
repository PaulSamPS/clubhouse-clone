import React, { useRef } from 'react'
import clsx from 'clsx'
import { WhiteBlock } from '../../WhiteBlock'
import { Button } from '../../Button'
import { StepInfo } from '../../StepInfo'

import styles from './ChooseAvatarStep.module.scss'
import { Avatar } from '../../Avatar';

export const ChooseAvatarStep = () => {
    const inputFileRef = useRef()

    const handleChangeImage = (e) => {
        console.log (e.target.files)
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
        title="Okay, Archakov Dennis!"
        description="How’s this photo?"
      />
      <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
        <div className={styles.avatar}>
            <Avatar
                width='120px'
                height='120px'
                src='https://avatars.mds.yandex.net/get-zen_doc/128694/pub_5bea960535713d00aa21d53c_5bea982d42be8000aacd9722/scale_1200'
            />
        </div>
        <div className="mb-30">
          <label htmlFor="image" className="link cup">
            Choose a different photo
          </label>
        </div>
        <input id="image" ref={ inputFileRef } type="file" hidden />
        <Button>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
