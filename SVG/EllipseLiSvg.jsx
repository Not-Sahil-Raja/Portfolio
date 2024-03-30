import * as React from "react";
import { motion } from "framer-motion";
const EllipseLiSvg = (props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    // width={1934}
    // height={649}
    width="100vw"
    height="100vh"
    fill="none"
    {...props}
    animate={{
      y: [0, -20, 0],
      x: [0, 5, 0],
      scale: [1, 1.01, 1],
      filter: [
        "blur(0px) brightness(1)",
        "blur(1px) brightness(1.1)",
        "blur(0px) brightness(1)",
      ],
    }}
    transition={{
      duration: 4.2,
      repeat: Infinity,
      ease: "linear",
      repeatDelay: 1,
    }}
  >
    <circle cx="50%" cy="-65%" r={props.r} fill="url(#a)" fillOpacity={0.05} />
    <circle cx="50%" cy="-65%" r={props.r} stroke="#fff" strokeOpacity={0.12} />
    <defs>
      <linearGradient
        id="a"
        x1={967}
        x2={967}
        y1={621.5}
        y2={-18}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D9D9D9" stopOpacity={0} />
        <stop offset={1} stopColor="#737373" />
      </linearGradient>
    </defs>
  </motion.svg>
);
export default EllipseLiSvg;
