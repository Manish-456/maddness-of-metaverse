"use client";

import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import styles from "@/app/styles";
import Image from "next/image";

type Props = {
  id: string;
  imgUrl: string;
  title: string;
};

type WorldProps = {
  world: Props;
  index: number;
  active: string;
  handleClick: Dispatch<SetStateAction<string>>;
};
export default function ExploreCard({
  world,
  index,
  active,
  handleClick,
}: WorldProps) {
  return (
    <motion.div
      className={`relative ${
        active === world.id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-[ponter]`}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      onClick={() => handleClick(world.id)}
    >
        <Image fill src={world.imgUrl} alt={world.title} className="absolute w-full h-full object-cover rounded-[24px]" />
     {
        active !== world.id ? (
            <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">{world.title}</h3>
        ) : (
            <div className="absolute bottom-0 p-4 
            z-4
           flex
            justify-start w-full flex-col bg-black/[0.5] rounded-b-[24px]">
                <div className={`${styles.flexCenter} h-[60px] flex items-center justify-center w-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
                <Image width={50} height={50} src="/headset.svg" alt="headset" 
                className="w-1/2 h-1/2 object-cover"/>
                </div>
                <p className="font-normal text-[16px] text-white uppercase leading-[20px]">Enter the Metaverse</p>
                <h2 className="mt-[24px] font-semibold sm:text-[24px] text-white">
                    {world.title}
                </h2>
            </div>
        )
     } 

    </motion.div>
  );
}
