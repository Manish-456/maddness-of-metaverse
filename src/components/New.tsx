"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { TitleText, TypingText } from '.';
import { fadeIn, planetVariants, staggerContainer } from '@/utils/motion';
import styles from '@/app/styles';
import { newFeatures } from '@/constants';
import NewFeature from './NewFeature';

export default function New() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
     
  
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title={"| What's New?"} textStyles="" />
          <TitleText
            title={<>What's new about Metaversus?</>}
            textStyles=""
          />
  <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
         {
          newFeatures.map((feature, index) => (
            <NewFeature key={index} {...feature} />
          ))
         }
          </div>
          </motion.div>
<motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/whats-new.png"
            alt="whatnew "
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      
      </motion.div>
    </section>
  )
}
