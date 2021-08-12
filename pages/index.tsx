import { WelcomeStep } from '../components/steps/WelcomeStep'
import { EnterNameStep } from '../components/steps/EnterNameStep'
import { TwitterStep } from '../components/steps/TwitterStep'
import { ChooseAvatarStep } from '../components/steps/ChooseAvatarStep'
import { EnterPhoneStep } from '../components/steps/EnterPhoneStep'
import { EnterCodeStep } from '../components/steps/EnterCodeStep'
import { useState } from 'react'

const stepsComponents = {
    0: WelcomeStep,
    1: EnterNameStep,
    2: TwitterStep,
    3: ChooseAvatarStep,
    4: EnterPhoneStep,
    5: EnterCodeStep
}

export default function Home() {
    const [step, setStep] = useState<number>(3)
    const Step = stepsComponents[step]

    return (
        <div>
            <Step />
        </div>
      )
}