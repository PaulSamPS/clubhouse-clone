import React, { useState } from 'react'
import clsx from 'clsx'
import { WhiteBlock } from '../../WhiteBlock'
import { Button } from '../../Button'
import { StepInfo } from '../../StepInfo'

import styles from './EnterPhoneStep.module.scss'

export const EnterCodeStep = () => {
  const [codes, setCodes] = useState([])
  const nextDisabled = codes.some((v) => !v) || codes.length < 4

  const handleChangeInput = (e) => {
    const id = Number(e.target.getAttribute('id')) -1
    const value = e.target.value;
    setCodes((prev) => {
      const newArr = [...prev]
      newArr[id] = value
      return newArr
    })
    if (e.target.nextSibling) {
      (e.target.nextSibling.focus())
    }
  }

  return (
    <div className={styles.block}>
      <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
      <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
        <div className={clsx('mb-30', styles.codeInput)}>
          {codes.map((code, index) => (
            <input
              key={index}
              type="tel"
              placeholder="X"
              maxLength={1}
              id={String(index)}
              onChange={handleChangeInput}
              value={code}
            />
          ))}
        </div>
        <Button>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
