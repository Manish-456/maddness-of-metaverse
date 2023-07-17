"use client";
import React from 'react'
import { staggerContainer } from '@/utils/motion';
import styles from '@/app/styles';
import InsightCard from './InsightCard';
import { insights } from '../constants/index';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from '.';

export default function Insights() {
  return (
<section className={`${styles.paddings} relative z-10`}>
      <motion.div
      variants={staggerContainer()}
      initial={"hidden"}
      whileInView="show"
      viewport={{once : false, amount : 0.25}}
      className={`${styles.innerWidth} mx-auto flex  flex-col gap-8`}
      >
        <TypingText 
        title={"Insight"} 
        textStyles='text-center'
        />
        <TitleText title={<>
        Insight about metaverse
        </>} textStyles='text-center' />

        <div className='mt-[50px] flex flex-col gap-[30px]'>
          {insights.map((insight, index) => (
            <InsightCard key={`insight-${index}`} inSight={insight} index={index - 1}/>
          ))}
        </div>
        </motion.div>
        </section>
  )
}
