import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlfor } from "../sanity";
type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex flex-col relative text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly
    mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-600 text-2xl">
        About Me
      </h3>
      <motion.img
        initial={{
          x: -200,
        }}
        whileInView={{
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        src={urlfor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrik-0 w-56 h-56 rounded-full object-cover invisible
        md:visible md:rounded-lg md:w-64 md:h-95 xl:visible xl:w-[450px] xl:h-[550px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-thin">
          Here is a{" "}
          <span className="underline decoration-slice decoration-[#F7AB0A]">
            little
          </span>{" "}
          background !
        </h4>
        <p className="text-md">{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
