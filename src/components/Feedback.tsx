"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import styles from "@/app/styles";

export default function Feedback() {
  return (
    <section className={`${styles.xPaddings} sm:pl-16 relative pl-6`}>
      <motion.div
        variants={staggerContainer()}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false }}
        className={`${styles.innerWidth} mx-auto  flex lg:flex-row gap-6 flex-col`}
      >
        <motion.div
          className="flex-[0.5] lg:max-w-[270px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
          variants={fadeIn("right", "tween", 0.2, 1)}
        >
          <div className="feedback-gradient" />
          <div className="">
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[48px] leading-[36px] text-white">Samantha</h4>
            <p className="mt-[18px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">Founder | Metaversus</p>
          </div>
          
            <q className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
              With the development of today&apos;s technology, metaverse is very useful for today&apos; work, or can be called web 3.0. by using metaverse you can use it as anything
            </q>
          
        </motion.div>
        <motion.div variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
        >
          <img src="/planet-09.png" alt="planet-09" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />         
        <motion.div variants={zoomIn(0.4, 1)} className="lg:block hidden absolute -left-[10%] top-[3%]">
          <img src="/stamp.png" alt="stamp" className="w-[155px] h-[155px] object-contain" />
        </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
