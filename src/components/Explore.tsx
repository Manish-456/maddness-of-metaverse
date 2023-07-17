"use client";
import React, { useState } from "react";
import styles from "@/app/styles";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { TitleText, TypingText } from ".";
import { exploreWorlds } from "@/constants";
import ExploreCard from "./ExploreCard";
export default function Explore() {
  const [active, setActive] = useState("world-2");
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText textStyles="text-center" title="| The World" />
        <TitleText
          title={
            <>
              Choose the world you want
              <br className="md:block hidden" /> to explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={index}
              index={index}
              active={active}
              handleClick={setActive}
              world={world}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
