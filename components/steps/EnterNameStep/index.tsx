import React, {ChangeEvent, FC, useContext, useState} from 'react'
import { MainContext } from '../../../pages'
import { WhiteBlock } from '../../WhiteBlock'
import { Button } from '../../Button'
import { StepInfo } from '../../StepInfo'
import clsx from 'clsx'

import styles from './EnterNameStep.module.scss'

export const EnterNameStep: FC = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const { onNextStep } = useContext(MainContext)

    const nextDisabled = !inputValue

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onClickNextStep = () => {
        onNextStep()
    }

    return (
        <div className={styles.block}>
          <StepInfo
            icon="/static/man.png"
            title="What’s your full name?"
            description="People use real names on Clubhouse :) Thnx!"
          />
          <WhiteBlock className={clsx('m-auto', styles.whiteBlock)}>
            <div className="mb-30">
              <input
                className="field"
                placeholder="Enter fullname"
                value={ inputValue }
                onChange={ handleChangeInput }
              />
            </div>
            <Button disabled={ nextDisabled } onClick={ onClickNextStep }>
              Next
              <img className="d-ib ml-10" src="/static/arrow.svg" />
            </Button>
          </WhiteBlock>
        </div>
    )
}