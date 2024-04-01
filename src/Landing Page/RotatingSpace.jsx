import React from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

const RotatingSpace = ({ mHover }) => {
  const circles = Array.from({ length: 3 }, (_, i) => (
    <AnimatedCircle key={i} size={100 - i * 30} indx={i} />
  ));
  return (
    <>
      <div className=" h-[100vh] lg:w-[calc(100vw-3px)] absolute ">
        <motion.main
          className=" h-screen relative lg:left-[57%] left-[10%]  grid place-items-center  opacity-65"
          style={{
            maskImage:
              "linear-gradient(to top right, transparent 2%, black 100%)",
          }}
          animate={{
            x: ["0%", "-6%", "6%"],
            y: ["0%", "-5%", "5%"],
            transform: mHover
              ? "translate(-30%,-20%)  "
              : "translate(-00%,-00%)  ",
            transition: {
              duration: 40,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              x: {
                duration: 30,
                repeat: Infinity,
                repeatType: "reverse",
                ease: [0.42, 0, 0.58, 1],
              },
              y: {
                duration: 35,
                repeat: Infinity,
                repeatType: "reverse",
                ease: [0.42, 0, 0.58, 1],
              },
              transform: {
                duration: 5,
                ease: [0.42, 0, 0.58, 1],
              },
            },
          }}
          transition={{}}
        >
          <motion.section
            className="h-[100vh] w-[100vh] relative  "
            transition={{
              staggerChildren: 0.3,
              delayChildren: 0.5,
            }}
          >
            <motion.div
              className="grid place-items-center relative h-[100vh] w-[100vh] p-2 overflow-hidden"
              animate={{}}
            >
              {circles}
            </motion.div>
          </motion.section>
        </motion.main>
      </div>
      <div className=" h-[100vh] lg:w-[calc(100vw-3px)] absolute ">
        <motion.main
          className=" h-screen relative lg:right-[57%] right-[70%]  grid place-items-center  opacity-65"
          style={{
            maskImage:
              "linear-gradient(to top right, transparent 2%, black 100%)",
          }}
          animate={{
            x: ["0%", "-6%", "6%"],
            y: ["0%", "-5%", "5%"],
            transform: mHover ? "translate(30%,-20%) " : "translate(0%,0%)  ",
            transition: {
              duration: 40,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              x: {
                duration: 30,
                repeat: Infinity,
                repeatType: "reverse",
                ease: [0.42, 0, 0.58, 1],
              },
              y: {
                duration: 35,
                repeat: Infinity,
                repeatType: "reverse",
                ease: [0.42, 0, 0.58, 1],
              },
              transform: {
                duration: 5,
                ease: [0.42, 0, 0.58, 1],
              },
            },
          }}
          transition={{}}
        >
          <motion.section
            className="h-[100vh] w-[100vh] relative  "
            transition={{
              staggerChildren: 0.3,
              delayChildren: 0.5,
            }}
          >
            <motion.div
              className="grid place-items-center relative h-[100vh] w-[100vh] p-2 overflow-hidden"
              animate={{}}
            >
              {circles}
            </motion.div>
          </motion.section>
        </motion.main>
      </div>
    </>
  );
};

export default RotatingSpace;

const AnimatedCircle = ({ size, indx }) => {
  const { scrollY } = useScroll();

  const xval = useTransform(scrollY, [0, 2000], [1, 6]);
  const circleStyle = {
    width: `${size}%`,
    height: `${size}%`,
    borderRadius: "50%",
    position: "absolute",
    border: "1.5px solid ",
    // scale: xval,
  };
  // console.log(10 * indx + Math.random() * 10);
  const speed = 10 * indx + Math.random() * 10;
  return (
    <motion.div
      className={` absolute border `}
      style={circleStyle}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        rotate: {
          duration: speed > 5 ? speed : 5,
          repeat: Infinity,
          ease: "linear",
        },
      }}
    >
      <motion.div className=" h-7 w-7 flex items-center justify-center bg-[#706f6f79] rounded-full absolute top-0 left-1/2 [transform:translate(-50%,-50%)]">
        <motion.span
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 * indx + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          0
        </motion.span>
      </motion.div>
    </motion.div>
  );
};
