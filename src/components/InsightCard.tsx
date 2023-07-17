import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface Props {
  imgUrl: string;
  title: string;
  subtitle: string;
}

interface InsightProps {
  inSight: Props;
  index: number;
}

export default function InsightCard({ inSight, index }: InsightProps) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <img
        src={inSight.imgUrl}
        alt={"planet-01"}
        className="md:w-[270px] h-[250px] w-full rounded-[32px] object-cover"
      />

      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex-col flex max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            {inSight.title}
          </h4>
          <p className="mt-4 font-normal lg:text-[20px] text-[14px] text-white/[0.9]">
            {inSight.subtitle}
          </p>
        </div>
        <div className="lg:flex hidden justify-center items-center w-[100px] h-[100px] rounded-full  bg-transparent border-[1px] border-white">
          <img
            src="arrow.svg"
            alt="arrow"
            className="w-[40%] h-[40%] object-contain  "
          />
        </div>
      </div>
    </motion.div>
  );
}
