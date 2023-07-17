"use client";
import React from "react";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import styles from "@/app/styles";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial={"hidden"}
      whileInView={"show"}
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
          <Image height={100} width={100} src="./search.svg" alt="search" className="h-6 w-6 object-contain" />
         <h2 className="font-bold text-white text-[24px]">
            METAVERSUS
         </h2>

         <Image height={100} width={100} src="/menu.svg" alt="menu" className="h-6 w-6 object-contain cursor-pointer"/>
      </div>
    </motion.nav>
  );
}
