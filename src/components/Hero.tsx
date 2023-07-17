"use client";

import styles from '@/app/styles';
import React from 'react'
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '@/utils/motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={`${styles.xPaddings} sm:pl-16 pl-6`}>
      <motion.div
      variants={staggerContainer()}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{once : false}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
      <div className="items-center flex-col flex justify-center relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading}`}>
            Metaverse
            </motion.h1>
            <motion.div variants={textVariant(1.2)}
            className='flex-row flex items-center justify-center'
            >
              <h1 className={styles.heroHeading}>Ma</h1>
                <div className={styles.heroDText}></div>
                <h1 className={styles.heroHeading}>Ness</h1>
            </motion.div>
      </div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='relative w-full md:-mt-[20px] -mt-[12px]'>
        <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px]  z-[0] -top-[30px]' />
    <Image height={500} width={500} src="/cover.png" alt="cover" className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative' />
    <a href={"#explore"} >
      <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
      <Image width={100} height={100} src="/stamp.png" alt="stamp" className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain' />

      </div>
    </a>
        {/* </div> */}
      </motion.div>
      </motion.div>
    </section>
  )
}
