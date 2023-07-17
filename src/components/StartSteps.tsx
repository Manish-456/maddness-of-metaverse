import styles from '@/app/styles'
import React from 'react'

type Props = {
    number : number,
    text : string,
}

export default function StartSteps({number, text}: Props) {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
        <div className={`${styles.flexCenter} w-[70px] h-[70px] bg-[#323f5d] rounded-[24px]`}>
            <p className='text-white font-bold text-[20px]'>0{number}</p>
        </div>
        <p className='flex-1 ml-[30px] font-normal text-[18px] text-[#808080] leading-[32px]'>
            {text}
        </p>
    </div>
  )
}