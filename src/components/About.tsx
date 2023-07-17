"use client";

import styles from "@/app/styles";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TypingText } from ".";

export default function About() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer()}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText
          title="| About Metaversus"
          textStyles={"text-center text-white"}
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
        >
          <span className="font-extrabold text-white">Metaverse </span>
          is a new thing in the future, where you can enjoy the virtual world by
          feeling like its really real, you can feel what you feel in this
          metaverse world, because this is really the{" "}
          <span className="font-extrabold text-white">
            Madness of the metaverse {" "}
          </span>
           of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let's
          <span className="font-extrabold text-white"> explore</span> the madness
          of the metaverse by scrolling down.
        </motion.p>
        <motion.img src="/arrow-down.svg" alt="arrow-down"
        className="w-[18px] h-[24px] object-contain mt-[18px]"
        variants={fadeIn("up", 'tween', 0.3, 1)} />
      </motion.div>
    </section>
  );
}
