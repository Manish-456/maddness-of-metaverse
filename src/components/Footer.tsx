"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { footerVariants } from '@/utils/motion';
import styles from '@/app/styles';
import { socials } from '@/constants';

export default function Footer() {
  const date = new Date();
  const copyRightYear = date.getFullYear();
  return (
    <motion.footer variants={footerVariants}
    initial={"hidden"}
    whileInView={"show"}
    className={`${styles.paddings} py-8 relative`}

    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center gap-5 flex-wrap justify-between">
          <h4 className='font-bold md:text-[64px] text-[44px] text-white'>Enter the Metaverse</h4>
          <button type="button" className='flex items-center h-fit py-4 px-6 bg-blue-700 rounded-[32px] gap-[12px]'>
            <img src="/headset.svg" alt="headset" className='h-6 w-6 object-contain' />
            <span className='font-normal text-[16px] text-white'>ENTER METAVERSE</span>

          </button>
        </div>
        <div className="flex flex-col">
          <div className='mb-[50px] h-[2px] opacity-10 bg-white' />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className='font-extrabold text-[24px] text-white'>Metaversus</h4>
            <p className="font-normal text-white opacity-50 text-[14px]">
        Copyright &copy; {copyRightYear - 1} - {copyRightYear} Metaversus. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socials.map(social => (
                <img src={social.url} key={social.name} alt={social.name} className='w-[24px] h-[24px] object-contain rounded-full' />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
