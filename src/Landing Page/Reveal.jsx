import React from "react";
import { RandomReveal } from "react-random-reveal";
import { motion } from "framer-motion";
import noise from "/public/noise.svg";

const Reveal = () => {
  const textZoom = 1.3;

  return (
    <motion.div
      className=" h-[100vh] w-[100vw] bg-[#141414] fixed flex items-center justify-center overflow-x-hidden z-[500] select-none "
      initial={{ backgroundColor: "#141414", opacity: 1, scale: 1 }}
      animate={{
        backgroundColor: "#111010",
        opacity: 0,
        display: "none",
        scale: 0,
      }}
      transition={{
        duration: 0.2,
        delay: textZoom + 0.15,
        ease: [0.22, 0.7, 0, 1],
        opacity: { delay: 1.5, duration: 0.5 },
        scale: { delay: 2 },
      }}
    >
      <motion.div
        className="  relative w-[30rem] h-16 overflow-hidden"
        initial={{ overflow: "hidden" }}
        animate={{ overflow: "visible" }}
        transition={{ delay: 1 }}
      ></motion.div>
    </motion.div>
  );
};

export default Reveal;
