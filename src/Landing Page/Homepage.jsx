import React, { forwardRef, useEffect, useLayoutEffect, useState } from "react";
import EllipseLiSvg from "../../SVG/EllipseLiSvg";
import EllipseGrSvg from "../../SVG/EllipseGrSvg";
import { motion, useInView } from "framer-motion";
import noise from "/noise.svg";
import RotatingSpace from "./RotatingSpace";
import { Box } from "lucide-react";
import useMousePos from "../util/useMousePos";

const Homepage = forwardRef(({ xval, xval2, xval3, scaleV }, ref) => {
  const delay1 = 2.1;
  const delay2 = 2.4;
  const [mHover, setmHover] = useState(false);
  // console.log(mHover);
  const { x, y } = useMousePos();
  // console.log(x, y);
  return (
    <div ref={ref}>
      <motion.div
        style={{
          background:
            " radial-gradient(166.25% 302.22% at 25.39% 90.51%, #000000 0%, #334A4F 100%) ",
        }}
        className="sticky top-0 select-none overflow-hidden "
      >
        <motion.div
          className=" absolute h-11  border-[#ffffff] z-[501] aspect-square rounded-full border-2"
          style={{
            top: y - 4.5,
            left: x - 4.5,
            opacity: mHover ? 1 : 0,
            mixBlendMode: "difference",
            transition: " opacity 0.3s ease-in-out",
          }}
          transition={{
            type: "tween",
            ease: "backInOut",
            opacity: {
              duration: 0.5,
              type: "spring",
              stiffness: 1000,
              damping: 100,
            },
          }}
        >
          {" "}
        </motion.div>
        <img
          className=" w-[100vw] brightness-[40%] z-40 h-full absolute object-cover opacity-20 "
          src={noise}
        />
        <motion.div
          className=" h-[100vh]  z-[0]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: delay1 }}
        >
          <RotatingSpace mHover={mHover} />
        </motion.div>

        <motion.div className="  absolute top-0 blur-3xl opacity-75  overflow-hidden w-[calc(100vw-3px)] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={1920}
            height={1080}
            fill="none"
          >
            <g
              filter="url(#a)"
              opacity={0.43}
              style={{
                mixBlendMode: "screen",
              }}
            >
              <path
                fill="url(#b)"
                d="M176 382.818c-226.4-105.6-378.667-34.666-426.5 14l-44.5 385c14.833 0 104.3 6.5 343.5 32.5s582 378.832 723.5 552.002l1264 139c5.33-311.5 12.8-892.302 0-723.502-16 211-765.5 292.002-874.5 287.502s-266.5-39.5-438-211.002C552 686.818 459 514.818 176 382.818Z"
              />
            </g>
            <defs>
              <radialGradient
                id="b"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(1175.4983 732.999 -1455.6854 2334.45846 531 714.318)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#57A899" />
                <stop offset={0.22} stopColor="#485B8B" />
                <stop offset={1} />
              </radialGradient>
              <filter
                id="a"
                width={3027.07}
                height={1866.32}
                x={-639.5}
                y={-16.5}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_185_70"
                  stdDeviation={172.25}
                />
              </filter>
            </defs>
          </svg>
        </motion.div>
        <div className=" absolute bottom-[10vh] w-[25%] left-[3%]">
          <motion.div
            className=" flex items-start mt-[4vh] opacity-60 font-SpaceGrostesk justify-start px-[.3vw]"
            style={{
              perspective: "420px",
              perspectiveOrigin: "center",
            }}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.75,
              delay: delay2 + 0.3,
            }}
          >
            <motion.span
              className=" text-[1.5vw] leading-none font-FixelText text-[#ffffffbd] "
              initial={{
                opacity: 0,
                rotateX: 90,
                translateY: 80,
                translateX: -40,
              }}
              animate={{
                opacity: 1,
                rotateX: 0,
                translateY: 0,
                translateX: 0,
              }}
              transition={{
                duration: 0.65,
                delay: delay2 + 0.295,
                opacity: { duration: 0.5 },
                easings: [0.42, 0, 0.58, 1],
              }}
              style={{
                y: xval2,
              }}
            >
              Expertise in both front-end and back-end technologies.{" "}
            </motion.span>
          </motion.div>
        </div>
        <motion.div className=" absolute bottom-[2vh]  right-[2%] ">
          <motion.div
            className=" flex items-start opacity-60  justify-start "
            style={{
              perspective: "420px",
              perspectiveOrigin: "center",
            }}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.75,
              delay: delay2 + 0.5,
            }}
          >
            <motion.span
              className=" text-[1vw] leading-none font-Geist text-[#ffffffbd] flex items-center justify-center gap-1 "
              initial={{
                opacity: 0,
                rotateX: 90,
                translateY: 80,
                translateX: -40,
              }}
              animate={{
                opacity: 1,
                rotateX: 0,
                translateY: 0,
                translateX: 0,
              }}
              transition={{
                duration: 0.65,
                delay: delay2 + 0.295,
                opacity: { duration: 0.5 },
                easings: [0.42, 0, 0.58, 1],
              }}
              style={{
                y: xval2,
              }}
            >
              <Box /> Scroll To Explore{" "}
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div
          className="   top-1/2 left-1/2 absolute cursor-none [transform:translate(-50%,-70%)] flex flex-col justify-center z-[500] "
          onMouseEnter={() => setmHover(true)}
          onMouseLeave={() => setmHover(false)}
        >
          <motion.div
            className=" h-fit  font-SpaceGrotesk  text-[15vw] whitespace-nowrap  leading-none  flex flex-col items-center px-[.5vw] "
            style={{
              y: xval,
              transition: {
                easings: [0.42, 0, 0.58, 1],
              },
              scale: scaleV,
              opacity: scaleV,
            }}
          >
            <motion.div
              style={{ perspective: "420px", perspectiveOrigin: "right" }}
              className="flex items-center   "
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.75,
                delay: delay1,
              }}
            >
              <motion.span
                initial={{
                  opacity: 0,
                  rotateX: 90,
                  translateY: 80,
                  translateX: -40,
                }}
                animate={{
                  opacity: 1,
                  rotateX: 0,
                  translateY: 0,
                  translateX: 0,
                }}
                transition={{
                  duration: 0.65,
                  delay: delay1,
                  opacity: { duration: 0.5 },
                  easings: [0.42, 0, 0.58, 1],
                }}
                className=" text-[10vw] font-ClashDisplay"
              >
                Sahil Raja.
              </motion.span>
            </motion.div>
            <motion.div
              style={{ perspective: "420px", perspectiveOrigin: "left" }}
              className="flex items-center   "
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 0.75, filter: "blur(0px)" }}
              transition={{
                duration: 0.75,
                delay: delay2,
              }}
            >
              <motion.span
                initial={{
                  opacity: 0,
                  rotateX: 90,
                  translateY: 80,
                  translateX: -40,
                }}
                animate={{
                  opacity: 1,
                  rotateX: 0,
                  translateY: 0,
                  translateX: 0,
                }}
                transition={{
                  duration: 0.65,
                  delay: delay2,
                  opacity: { duration: 0.5 },
                  easings: [0.42, 0, 0.58, 1],
                }}
                className=" font-Geist whitespace-nowrap text-[3vw] opacity-75 leading-none"
              >
                Full Stack Developer
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
});

export default Homepage;
