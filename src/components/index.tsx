"use client";
import { textContainer, textVariant2 } from '@/utils/motion';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export interface Props {
    title :  string | React.ReactElement;
    textStyles : string
}
export const TypingText = ({ title, textStyles } : Props) => {
  return <motion.p variants={textContainer}
  
  className={`${textStyles} font-normal text-[14px] text-white`}>
    {Array.from(title as string).map((letter, index) => (
    <motion.span key={index}
    variants={textVariant2}
    >
        {letter === ' ' ? '\u00A0' : letter}
    </motion.span>
  ))}
  </motion.p>;
};

export const TitleText = ({ title, textStyles } : Props) => (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.h2>
  );