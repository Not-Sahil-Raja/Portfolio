import React from "react";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export const Try = () => {
  // const staggerVariants = {
  //   animate: {
  //     y: [0],
  //     borderColor: "#f87171",
  //     transition: {
  //       ease: [0.6, 0.05, -0.01, 0.9],
  //       repeat: Infinity,
  //       repeatType: "reverse",
  //       flip: Infinity,
  //       delayChildren: 0.05, // Delay each child animation by 0.05 seconds
  //       staggerChildren: 0.015, // Stagger child animations by 0.1 seconds
  //     },
  //   },
  // };
  // const divVariants = {
  //   animate: {
  //     y: [-40, 0], // Animate y position between -40 and 0
  //     borderColor: "#f87171", // Change border color to red
  //     // Set animation duration to 0.5 seconds
  //     transition: {
  //       duration: 0.5,
  //       repeat: Infinity,
  //       ease: [0.6, 0.05, -0.01, 0.9],
  //     },
  //   },
  // };
  const { scrollY } = useScroll();
  const xval = useTransform(scrollY, [0, 100], [1, 1.3]);
  const circleRef = useRef();
  const circles = Array.from({ length: 3 }, (_, i) => (
    <AnimatedCircle key={i} size={100 - i * 30} indx={i} />
  ));
  return (
    <motion.section className="relative text-black  text-5xl  ">
      <motion.section className="relative text-black h-[300vh] text-5xl">
        <section
          className=" h-screen w-[calc(100vw-3px)] flex flex-col bg-[#31312f] text-white sticky top-[0px] z-50"
          style={{
            position: "sticky",
          }}
          ref={circleRef}
        >
          <main className="bg-black h-screen grid place-items-center text-white">
            <motion.section
              className="w-96 bg-[#202020] h-96 relative  "
              // variants={staggerVariants}
              // animate="animate"
              // style={{
              //   rotateX: "-45deg",
              // }}
              transition={{
                staggerChildren: 0.3,
                delayChildren: 0.5,
              }}
            >
              <motion.div
                className="grid place-items-center relative h-96 w-96 p-2 overflow-hidden"
                animate={{}}
              >
                {circles}
                {/* <motion.div
                  className=" relative h-[40%] w-[40%] border rounded-full"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className=" h-5 w-5 bg-blue-600 rounded-full absolute top-0 left-1/2 [transform:translate(-50%,-50%)]"></div>
                </motion.div> */}
              </motion.div>
            </motion.section>
          </main>
        </section>
      </motion.section>
    </motion.section>
  );
};

const AnimatedCircle = ({ size, indx }) => {
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, (latest) => {
    console.log(latest);
  });
  const xval = useTransform(scrollY, [0, 2000], [1, 6]);
  const circleStyle = {
    width: `${size}%`,
    height: `${size}%`,
    borderRadius: "50%",
    position: "absolute",
    border: "1px solid white",
    scale: xval,
  };

  return (
    <motion.div
      className={` absolute border `}
      style={circleStyle}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        rotate: {
          duration: 10 * indx + Math.random() * 5,
          repeat: Infinity,
          ease: "linear",
        },
      }}
    >
      <div className=" h-5 w-5 bg-blue-600 rounded-full absolute top-0 left-1/2 [transform:translate(-50%,-50%)]"></div>
    </motion.div>
  );
};
