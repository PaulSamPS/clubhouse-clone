import React, { ChangeEvent, useState } from 'react'
import { WhiteBlock } from '../../WhiteBlock'
import { Button } from '../../Button'
import { StepInfo } from '../../StepInfo'
import {useRouter} from "next/router"
import Axios from '../../../core/axios'
import clsx from 'clsx'

import styles from './EnterPhoneStep.module.scss'

export const EnterCodeStep = (event: ChangeEvent<HTMLInputElement>) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [codes, setCodes] = useState(['', '', '', ''])
  const nextDisabled = codes.some((v) => !v)

  const handleChangeInput = (event) => {
    const index = Number(event.target.getAttribute('id'))
    const value = event.target.value;
    setCodes((prev) => {
      const newArr = [...prev]
      newArr[index] = value
      return newArr
    })
    if (event.target.nextSibling) {
      (event.target.nextSibling as HTMLInputElement).focus()
    }
  }

  const onSubmit = async () => {
    try {
      setIsLoading(true)
      await Axios.get('/todos')
      await router.push('/profile/1')
    } catch (error) {
        alert('Ошибка при активации')
    }
    setIsLoading(false)
  }

  return (
    <div className={styles.block}>
      {!isLoading
          ? <>
              <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
              <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
                <div className={clsx('mb-30', styles.codeInput)}>
                  {
                    codes.map((code, index) =>
                      <input
                          key={ index }
                          type="tel"
                          placeholder="X"
                          maxLength={1}
                          id={ String(index) }
                          onChange={ handleChangeInput }
                          value={ code }
                      />
                    )
                  }
                </div>
                <Button onClick={ onSubmit } disabled={ nextDisabled }>
                  Next
                  <img className="d-ib ml-10" src="/static/arrow.svg" />
                </Button>
              </WhiteBlock>
          </>
          : <div className="text-center">
              <div className="loader"></div>
            <h3 className="mt-5">Activation in progress ...</h3>
            </div>
          }
    </div>
  )
}
